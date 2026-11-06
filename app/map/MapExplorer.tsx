'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { LayerGroup, Map as LeafletMap, Marker, Polygon, Polyline } from 'leaflet'
import {
  ARM_LABELS, CITIES, CITY_POINTS, CROWDED_LABELS, GAUGE_POINT, LABEL_SIDE, MAP_CREEKS, STATUS_COLOR, STATUS_LABEL, ZONES,
  creekInfo, searchPlaces, type Info, type Selection,
} from './map-places'
import { SURVEY_HTML, THREATS_HTML } from './map-panel-content'

type Tab = 'survey' | 'place' | 'threats'
type Hydro = {
  lakes: Record<string, [number, number][][]>
  creeks: Record<string, { lines: [number, number][][]; mouth: [number, number]; approximate?: boolean }>
}

const TOPO_TILES = 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}'
const CREEK_LABEL_ZOOM = 12
const CROWDED_LABEL_ZOOM = 11.5
const COMPACT_WIDTH = 600
const LAKE_COLOR = '#2563a8'
const HOME_PADDING = { padding: [28, 28] as [number, number] }

const TABS: { id: Tab; label: string }[] = [
  { id: 'survey', label: 'Survey data' },
  { id: 'place', label: 'Selected place' },
  { id: 'threats', label: 'Threats' },
]

const TAG_LABEL: Record<string, [string, string]> = {
  mts: ['Spawning tributary', 'mts'],
  mtw: ['Concern', 'mtw'],
  mtd: ['Survey site', 'mtd'],
}

function selectionInfo(s: Selection | null): { info: Info; href?: string; archive?: string } | null {
  if (!s) return null
  if (s.kind === 'zone') return ZONES[s.id] ? { info: ZONES[s.id], archive: s.id.replace(/_/g, ' ') } : null
  if (s.kind === 'city') return CITIES[s.id] ? { info: CITIES[s.id] } : null
  const c = MAP_CREEKS.find((m) => m.id === s.id)
  return c ? { info: creekInfo(c), href: c.href, archive: c.name.replace(/ (Creek|Slough)$/, '') } : null
}

const sameSelection = (a: Selection | null, b: Selection | null) => a?.kind === b?.kind && a?.id === b?.id

// Lets keyboard users open a focused marker with Enter or Space.
function openOnKey(marker: Marker, open: () => void) {
  // The element only exists once the marker is on the map.
  marker.on('add', () => {
    marker.getElement()?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        open()
      }
    })
  })
}

export function MapExplorer() {
  const mapEl = useRef<HTMLDivElement>(null)
  const mapRef = useRef<LeafletMap | null>(null)
  const homeBounds = useRef<import('leaflet').LatLngBounds | null>(null)
  const lineLayers = useRef<Record<string, Polyline>>({})
  const markers = useRef<Record<string, Marker>>({})
  const lakeLayers = useRef<Record<string, Polygon>>({})
  const selectRef = useRef<(s: Selection, fly?: boolean) => void>(() => {})
  const previous = useRef<Selection | null>(null)
  const approximateIds = useRef(new Set<string>())

  const [selection, setSelection] = useState<Selection | null>(null)
  const [tab, setTab] = useState<Tab>('survey')
  const [query, setQuery] = useState('')
  const [legendOpen, setLegendOpen] = useState(false)
  const [mapFailed, setMapFailed] = useState(false)
  const results = searchPlaces(query)

  const highlight = useCallback((s: Selection | null, on: boolean) => {
    if (!s) return
    const key = `${s.kind}-${s.id}`
    markers.current[key]?.getElement()?.classList.toggle('is-selected', on)
    if (s.kind === 'creek') {
      const base = MAP_CREEKS.find((c) => c.id === s.id)
      lineLayers.current[s.id]?.setStyle({ weight: on ? 5 : base?.priority ? 3.5 : 2.5, opacity: on ? 1 : 0.9 })
    }
    if (s.kind === 'zone') lakeLayers.current[s.id]?.setStyle({ weight: on ? 3 : 1.5, fillOpacity: on ? 0.4 : 0.22 })
  }, [])

  const select = useCallback((s: Selection, fly = true) => {
    const map = mapRef.current
    highlight(previous.current, false)
    highlight(s, true)
    previous.current = s
    setSelection(s)
    setTab('place')
    setQuery('')
    const url = new URL(window.location.href)
    url.search = s.kind === 'creek' ? `?creek=${s.id}` : ''
    window.history.replaceState(null, '', url)
    if (!map || !fly) return
    const animate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (s.kind === 'creek') {
      const line = lineLayers.current[s.id]
      if (line) {
        map.fitBounds(line.getBounds(), { padding: [40, 40], maxZoom: 14, animate })
        return
      }
    }
    if (s.kind === 'zone' && s.id === 'lake' && homeBounds.current) {
      map.fitBounds(homeBounds.current, { animate })
      return
    }
    const target = markers.current[`${s.kind}-${s.id}`]?.getLatLng() ?? lakeLayers.current[s.id]?.getBounds().getCenter()
    if (target) map.setView(target, Math.max(map.getZoom(), 13), { animate })
  }, [highlight])
  selectRef.current = select

  useEffect(() => {
    let cancelled = false
    let map: LeafletMap | undefined

    ;(async () => {
      try {
        const [leaflet, response] = await Promise.all([import('leaflet'), fetch('/map-data/hydro.json')])
        if (!response.ok) throw new Error('map data unavailable')
        const hydro: Hydro = await response.json()
        if (cancelled || !mapEl.current) return
        const L = leaflet.default

        map = L.map(mapEl.current, { zoomControl: false, attributionControl: true, zoomSnap: 0.5 })
        mapRef.current = map
        map.attributionControl.setPrefix(false)
        L.control.zoom({ position: 'bottomleft' }).addTo(map)
        L.tileLayer(TOPO_TILES, {
          maxNativeZoom: 16,
          maxZoom: 17,
          attribution: 'Base map and water data: <a href="https://www.usgs.gov/programs/national-geospatial-program/national-map">USGS The National Map</a>',
        }).addTo(map)

        const lakePane = map.createPane('lakes')
        lakePane.style.zIndex = '350'
        const lakes = L.layerGroup().addTo(map)
        const creekLayer: LayerGroup = L.layerGroup().addTo(map)
        for (const [id, rings] of Object.entries(hydro.lakes)) {
          const polygon = L.polygon(rings, { pane: 'lakes', color: LAKE_COLOR, weight: 1.5, fillColor: LAKE_COLOR, fillOpacity: 0.22 })
          polygon.on('click', () => selectRef.current({ kind: 'zone', id }, false))
          polygon.addTo(lakes)
          lakeLayers.current[id] = polygon
        }

        for (const creek of MAP_CREEKS) {
          const data = hydro.creeks[creek.id]
          if (!data) continue
          if (data.approximate) approximateIds.current.add(creek.id)
          const color = STATUS_COLOR[creek.status]
          const open = () => selectRef.current({ kind: 'creek', id: creek.id })
          if (data.lines.length) {
            lineLayers.current[creek.id] = L.polyline(data.lines, { color, weight: creek.priority ? 3.5 : 2.5, opacity: 0.9, interactive: false }).addTo(creekLayer)
            // A wide invisible line makes the thin creek easy to click or tap.
            L.polyline(data.lines, { color, weight: 16, opacity: 0 }).on('click', open).addTo(creekLayer)
          }
          const marker = L.marker(data.mouth, {
            icon: L.divIcon({
              className: 'hm-pin',
              html: `<span class="hm-dot${creek.priority ? ' hm-dot-lg' : ''}" style="background:${color}"></span>`,
              iconSize: [32, 32],
            }),
            title: `${creek.name}: ${STATUS_LABEL[creek.status]}`,
            alt: creek.name,
            riseOnHover: true,
            zIndexOffset: creek.priority ? 500 : 0,
          })
          marker.on('click', open)
          marker.bindTooltip(creek.name.replace(' Creek', ''), {
            permanent: true,
            direction: LABEL_SIDE[creek.id] ?? 'right',
            offset: [0, 0],
            className: `hm-label${creek.priority ? '' : ' hm-minor'}${CROWDED_LABELS.has(creek.id) ? ' hm-crowded' : ''}`,
          })
          openOnKey(marker, open)
          marker.addTo(creekLayer)
          markers.current[`creek-${creek.id}`] = marker
        }

        for (const [id, at] of Object.entries(CITY_POINTS)) {
          const marker = L.marker(at, {
            icon: L.divIcon({ className: 'hm-pin', html: '<span class="hm-town"></span>', iconSize: [28, 28] }),
            title: CITIES[id].t,
            alt: CITIES[id].t,
          })
          const open = () => selectRef.current({ kind: 'city', id })
          marker.on('click', open)
          marker.bindTooltip(CITIES[id].t.split(/[:,]/)[0], { permanent: true, direction: 'right', className: 'hm-label hm-town-label hm-minor' })
          openOnKey(marker, open)
          marker.addTo(map)
          markers.current[`city-${id}`] = marker
        }

        const gauge = L.marker(GAUGE_POINT, {
          icon: L.divIcon({ className: 'hm-pin', html: '<span class="hm-gauge"></span>', iconSize: [28, 28] }),
          title: ZONES.usgs.t,
          alt: ZONES.usgs.t,
        })
        const openGauge = () => selectRef.current({ kind: 'zone', id: 'usgs' })
        gauge.on('click', openGauge)
        openOnKey(gauge, openGauge)
        gauge.addTo(map)
        markers.current['zone-usgs'] = gauge

        for (const arm of ARM_LABELS) {
          L.marker(arm.at, {
            icon: L.divIcon({ className: 'hm-arm', html: arm.t, iconSize: [90, 20] }),
            interactive: false,
            keyboard: false,
          }).addTo(map)
        }

        // The whole-lake view also takes in the priority creeks' markers.
        const home = lakeLayers.current.lake.getBounds()
        MAP_CREEKS.filter((c) => c.priority).forEach((c) => home.extend(hydro.creeks[c.id].mouth))
        homeBounds.current = home
        map.fitBounds(home, HOME_PADDING)
        map.setMaxBounds(home.pad(0.3))
        map.setMinZoom(Math.max(9, Math.floor(map.getZoom()) - 1))
        const syncLabels = () => {
          const container = map!.getContainer()
          container.classList.toggle('hm-show-minor', map!.getZoom() >= CREEK_LABEL_ZOOM)
          container.classList.toggle('hm-compact', container.clientWidth < COMPACT_WIDTH && map!.getZoom() < CROWDED_LABEL_ZOOM)
        }
        map.on('zoomend', syncLabels)
        syncLabels()

        const reset = new L.Control({ position: 'bottomleft' })
        reset.onAdd = () => {
          const button = L.DomUtil.create('button', 'hm-reset')
          button.type = 'button'
          button.textContent = 'Whole lake'
          L.DomEvent.disableClickPropagation(button)
          button.addEventListener('click', () => map!.fitBounds(home, HOME_PADDING))
          return button
        }
        reset.addTo(map)

        const wanted = new URLSearchParams(window.location.search).get('creek')
        if (wanted && MAP_CREEKS.some((c) => c.id === wanted)) selectRef.current({ kind: 'creek', id: wanted })
        setMapFailed(false)
      } catch {
        if (!cancelled) setMapFailed(true)
      }
    })()

    return () => {
      cancelled = true
      map?.remove()
      mapRef.current = null
      markers.current = {}
      lineLayers.current = {}
      lakeLayers.current = {}
      previous.current = null
    }
  }, [])

  const selected = selectionInfo(selection)
  const approximate = selection?.kind === 'creek' && approximateIds.current.has(selection.id)

  return (
    <div id="main" role="main" className="map-page">
      <div className="map-body">
        <div className="map-wrap">
          <div ref={mapEl} className="hm-map" role="region" aria-label="Map of Clear Lake and its spawning creeks. Use Tab to move between creek markers and Enter to open one, or search by name." />
          {mapFailed && (
            <div className="hm-failed" role="alert">
              The map could not load. Every creek is still listed in the <a href="/creeks">creek guide</a>.
            </div>
          )}
          <div className="hm-legend">
            <button type="button" className="hm-legend-btn" aria-expanded={legendOpen} onClick={() => setLegendOpen((o) => !o)}>
              Legend
            </button>
            {legendOpen && (
              <div className="hm-legend-panel">
                {(Object.keys(STATUS_LABEL) as (keyof typeof STATUS_LABEL)[]).map((s) => (
                  <div className="hm-legend-row" key={s}>
                    <span className="hm-swatch" style={{ background: STATUS_COLOR[s] }} />
                    {STATUS_LABEL[s]}
                  </div>
                ))}
                <div className="hm-legend-row"><span className="hm-town hm-town-static" />Town</div>
                <div className="hm-legend-row"><span className="hm-gauge hm-gauge-static" />USGS lake gauge</div>
                <p>Status comes from the site&apos;s creek guide. Tap a creek or marker for details.</p>
              </div>
            )}
          </div>
        </div>

        <div className="mpanel">
          <div className="mtabs" role="tablist" aria-label="Map information">
            {TABS.map((t) => (
              <button key={t.id} type="button" role="tab" id={`mtab-${t.id}`} aria-selected={tab === t.id} aria-controls={`mpane-${t.id}`} className={`mtab${tab === t.id ? ' on' : ''}`} onClick={() => setTab(t.id)}>
                {t.label}
              </button>
            ))}
          </div>

          <div className="hm-search">
            <label className="sr-only" htmlFor="creekSearch">Search creeks, lakes and towns</label>
            <input
              id="creekSearch"
              type="search"
              placeholder="Search creeks, lakes, towns…"
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && results[0]) { e.preventDefault(); select(results[0].selection) }
                if (e.key === 'Escape') setQuery('')
              }}
            />
            {query.trim() && (
              <div className="hm-results">
                {results.length ? results.map((r) => (
                  <button key={r.key} type="button" className={`hm-result${sameSelection(r.selection, selection) ? ' on' : ''}`} onClick={() => select(r.selection)}>
                    <span>{r.name}</span><small>{r.hint}</small>
                  </button>
                )) : <p className="hm-noresult" role="status">No match for &ldquo;{query.trim()}&rdquo;.</p>}
              </div>
            )}
          </div>

          <div className="mpane" role="tabpanel" id="mpane-survey" aria-labelledby="mtab-survey" hidden={tab !== 'survey'} dangerouslySetInnerHTML={{ __html: SURVEY_HTML }} />

          <div className="mpane" role="tabpanel" id="mpane-place" aria-labelledby="mtab-place" hidden={tab !== 'place'}>
            {selected ? (
              <>
                <div className="mcard">
                  <h3>{selected.info.t}</h3>
                  {(selected.info.tags ?? []).map((t) => TAG_LABEL[t] && <span key={t} className={`mtag ${TAG_LABEL[t][1]}`}>{TAG_LABEL[t][0]}</span>)}
                  <p className="hm-body">{selected.info.b}</p>
                  {approximate && <p className="hm-note">USGS has no named line for this waterway, so its marker position is approximate.</p>}
                  <div className="hm-links">
                    {selected.href && <a href={selected.href} className="march-link march-primary">View full creek profile →</a>}
                    {selected.archive && <a href={`/archive?q=${encodeURIComponent(selected.archive)}`} className="march-link">Related reports in the archive</a>}
                  </div>
                </div>
                {!!selected.info.s?.length && (
                  <div className="mcard">
                    <h3>Key data</h3>
                    {selected.info.s.map((r) => (
                      <div className="mdr" key={r.l}><span className="mdl">{r.l}</span><span className={`mdv ${r.c ?? ''}`}>{r.v}</span></div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <p className="mph">Pick a creek, lake or town on the map to see its details here.</p>
            )}
          </div>

          <div className="mpane" role="tabpanel" id="mpane-threats" aria-labelledby="mtab-threats" hidden={tab !== 'threats'} dangerouslySetInnerHTML={{ __html: THREATS_HTML }} />

          <div className="msrc">
            <a href="https://www.usgs.gov/centers/california-water-science-center" target="_blank" rel="noopener noreferrer">USGS CAWSC</a> · <a href="https://pubs.usgs.gov/publication/ofr20251018" target="_blank" rel="noopener noreferrer">OFR 2025-1018</a> · <a href="https://www.lakecountyca.gov/1450/Clear-Lake-Hitch" target="_blank" rel="noopener noreferrer">Lake Co. WPD</a> · Creek lines: USGS NHD
          </div>
        </div>
      </div>
    </div>
  )
}
