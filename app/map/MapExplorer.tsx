'use client'

import { useEffect, useRef } from 'react'
import { mzd, mckd, mcitd } from './map-data'
import { MAP_MARKUP } from './map-markup'

type Info = { t: string; tags?: string[]; b: string; s?: { l: string; v: string; c?: string }[] }
const ZONES = mzd as Record<string, Info>
const CREEKS = mckd as Record<string, Info>
const CITIES = mcitd as Record<string, Info>

export function MapExplorer() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const $ = <T extends Element = HTMLElement>(sel: string) => root.querySelector(sel) as T | null

    const mtagMap: Record<string, string> = {
      mts: '<span class="mtag mts">Spawning trib</span>',
      mtw: '<span class="mtag mtw">Concern</span>',
      mtd: '<span class="mtag mtd">Survey site</span>',
    }

    function mBuild(d: Info | undefined, locId: string | null) {
      if (!d) return ''
      const tags = (d.tags || []).map((t) => mtagMap[t] || '').join('')
      const rows = (d.s || []).map((r) => `<div class="mdr"><span class="mdl">${r.l}</span><span class="mdv ${r.c || ''}">${r.v}</span></div>`).join('')
      const archLink = locId
        ? `<a href="/archive?q=${encodeURIComponent(locId.replace('_', ' '))}" target="_blank" rel="noopener noreferrer" class="march-link">📂 View related reports in Archive ↗</a>`
        : ''
      return `<div class="mcard"><h3>${d.t}</h3>${tags}<p style="margin-top:6px">${d.b}</p>${archLink}</div><div class="mcard"><h3>Key data</h3>${rows}</div>`
    }

    function mSwitchTab(n: string) {
      root!.querySelectorAll('.mtab').forEach((t) => t.classList.remove('on'))
      root!.querySelectorAll('.mpane').forEach((p) => p.classList.remove('on'))
      $(`.mtab[data-tab="${n}"]`)?.classList.add('on')
      $(`#mpane-${n}`)?.classList.add('on')
    }

    function showInfo(d: Info | undefined, locId: string | null) {
      const html = mBuild(d, locId)
      if (!html) return
      const disp = $('#mzone-disp')
      if (disp) disp.innerHTML = html
      mSwitchTab('zone')
    }

    function selectZone(id: string) {
      root!.querySelectorAll('.mzn').forEach((e) => e.classList.remove('sel'))
      $(`#mzone-${id}`)?.classList.add('sel')
      showInfo(ZONES[id], id)
    }
    function selectCreek(id: string) {
      root!.querySelectorAll('.mpk,.msk,.mcd').forEach((e) => e.classList.remove('sel'))
      $(`#mck-${id}`)?.querySelectorAll('.mpk,.msk,.mcd').forEach((e) => e.classList.add('sel'))
      showInfo(CREEKS[id], id)
    }
    function selectCity(id: string) {
      root!.querySelectorAll('.mcity').forEach((e) => e.classList.remove('sel'))
      showInfo(CITIES[id], null)
    }

    // Zoom & pan
    let scale = 1, x = 0, y = 0, dragging = false
    let dragStart = { x: 0, y: 0 }
    const svg = $<SVGElement & ElementCSSInlineStyle>('#map')
    const wrap = $('#mapWrap')
    const applyTransform = () => { if (svg) svg.style.transform = `translate(${x}px,${y}px) scale(${scale})` }
    const zoomMap = (factor: number) => {
      const ns = Math.min(5, Math.max(0.5, scale * factor))
      const rect = wrap!.getBoundingClientRect()
      const cx = rect.width / 2, cy = rect.height / 2
      x = cx - (cx - x) * (ns / scale)
      y = cy - (cy - y) * (ns / scale)
      scale = ns
      applyTransform()
    }
    const resetZoom = () => { scale = 1; x = 0; y = 0; applyTransform() }

    // Search
    const allCreeks = Object.keys(CREEKS).map((id) => ({ id, name: CREEKS[id].t.toLowerCase() }))
    const allZones = Object.keys(ZONES).map((id) => ({ id, name: ZONES[id].t.toLowerCase() }))
    const searchCreek = (q: string) => {
      q = q.toLowerCase().trim()
      if (!q) return
      const ck = allCreeks.find((c) => c.name.includes(q))
      if (ck) return selectCreek(ck.id)
      const zn = allZones.find((z) => z.name.includes(q))
      if (zn) selectZone(zn.id)
    }

    // Delegated click handling
    const onClick = (e: MouseEvent) => {
      const t = e.target as Element
      const creek = t.closest('[data-creek]'); if (creek) return selectCreek((creek as HTMLElement).dataset.creek!)
      const zone = t.closest('[data-zone]'); if (zone) return selectZone((zone as HTMLElement).dataset.zone!)
      const city = t.closest('[data-city]'); if (city) return selectCity((city as HTMLElement).dataset.city!)
      const tab = t.closest('[data-tab]'); if (tab) return mSwitchTab((tab as HTMLElement).dataset.tab!)
      const zoom = t.closest('[data-zoom]'); if (zoom) { const z = (zoom as HTMLElement).dataset.zoom!; z === 'reset' ? resetZoom() : zoomMap(+z); return }
      const legend = t.closest('[data-legend]'); if (legend) { $('#legendPanel')?.classList.toggle('open'); return }
    }
    root.addEventListener('click', onClick)

    const searchInput = $<HTMLInputElement>('#creekSearch')
    const onInput = (e: Event) => searchCreek((e.target as HTMLInputElement).value)
    searchInput?.addEventListener('input', onInput)

    const onWheel = (e: WheelEvent) => { e.preventDefault(); zoomMap(e.deltaY < 0 ? 1.15 : 0.87) }
    const onDown = (e: MouseEvent) => { dragging = true; dragStart = { x: e.clientX - x, y: e.clientY - y } }
    const onMove = (e: MouseEvent) => { if (!dragging) return; x = e.clientX - dragStart.x; y = e.clientY - dragStart.y; applyTransform() }
    const onUp = () => { dragging = false }
    const onTouchStart = (e: TouchEvent) => { if (e.touches.length === 1) { dragging = true; const tt = e.touches[0]; dragStart = { x: tt.clientX - x, y: tt.clientY - y } } }
    const onTouchMove = (e: TouchEvent) => { if (dragging && e.touches.length === 1) { const tt = e.touches[0]; x = tt.clientX - dragStart.x; y = tt.clientY - dragStart.y; applyTransform() } }
    const onTouchEnd = () => { dragging = false }
    wrap?.addEventListener('wheel', onWheel, { passive: false })
    wrap?.addEventListener('mousedown', onDown)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    wrap?.addEventListener('touchstart', onTouchStart, { passive: true })
    wrap?.addEventListener('touchmove', onTouchMove, { passive: true })
    wrap?.addEventListener('touchend', onTouchEnd)

    return () => {
      root.removeEventListener('click', onClick)
      searchInput?.removeEventListener('input', onInput)
      wrap?.removeEventListener('wheel', onWheel)
      wrap?.removeEventListener('mousedown', onDown)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      wrap?.removeEventListener('touchstart', onTouchStart)
      wrap?.removeEventListener('touchmove', onTouchMove)
      wrap?.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  return <div id="main" role="main" className="map-page" ref={ref} dangerouslySetInnerHTML={{ __html: MAP_MARKUP }} />
}
