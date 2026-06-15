// Shared USGS water-services helpers for creek detail pages.

export interface Point { t: Date; v: number }
export interface Gauge { series: Point[]; latest: Point; unit: string }

/** Fetch a USGS instantaneous-values series, with CORS-proxy fallbacks. */
export async function fetchGauge(site: string, param: string, period?: string): Promise<Gauge> {
  const base = `https://waterservices.usgs.gov/nwis/iv/?sites=${site}&parameterCd=${param}&format=json&siteStatus=all${period ? '&period=' + period : ''}`
  const urls = [base, `https://corsproxy.io/?${encodeURIComponent(base)}`, `https://api.allorigins.win/raw?url=${encodeURIComponent(base)}`]
  for (const url of urls) {
    try {
      const ctrl = new AbortController()
      const t = setTimeout(() => ctrl.abort(), 10000)
      const r = await fetch(url, { signal: ctrl.signal })
      clearTimeout(t)
      if (!r.ok) continue
      const j = await r.json()
      const ts = j?.value?.timeSeries?.[0]
      if (!ts) continue
      const vals = ts.values?.[0]?.value
      if (!vals?.length) continue
      const series: Point[] = vals
        .map((v: { dateTime: string; value: string }) => ({ t: new Date(v.dateTime), v: parseFloat(v.value) }))
        .filter((d: Point) => !isNaN(d.v) && d.v > -999)
      if (!series.length) continue
      return { series, latest: series[series.length - 1], unit: ts.variable?.unit?.unitCode || '' }
    } catch {
      /* try next proxy */
    }
  }
  throw new Error('unavailable')
}

export function fmtAge(dt: Date): string {
  const m = Math.round((Date.now() - dt.getTime()) / 60000)
  if (m < 2) return 'Just now'
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ${m % 60}m ago`
  return `${Math.floor(h / 24)}d ago`
}

/** Date-based spawning-season phase indicator. */
export function spawnPhase(): { label: string; unit: string; ctx: string; col: string } {
  const now = new Date()
  const m = now.getMonth() + 1
  const d = now.getDate()
  const md = m * 100 + d
  if (md >= 315 && md <= 425) return { label: 'PEAK', unit: 'spawning', ctx: 'Adults actively in creek now', col: '#6ee7b7' }
  if (md >= 220 && md <= 314) return { label: 'Early', unit: 'season', ctx: 'First adults entering tributaries', col: '#9efaae' }
  if (md >= 426 && md <= 515) return { label: 'Late', unit: 'season', ctx: 'Watch for YOY in pools', col: '#fcd34d' }
  if (m === 1 || (m === 2 && d < 20)) return { label: 'Pre-', unit: 'season', ctx: 'Hitch staging in the lake', col: '#7fd8ff' }
  return { label: 'Off', unit: 'season', ctx: 'Post-spawn · next year builds now', col: 'rgba(255,255,255,.55)' }
}

/** Streamflow discharge (cfs) context bucket. */
export function flowContext(val: number): { ctx: string; col: string; pct: number } {
  if (val < 0.5) return { ctx: 'Near zero: stream effectively dry', col: '#fca5a5', pct: 2 }
  if (val < 3) return { ctx: 'Very low: insufficient for migration', col: '#fca5a5', pct: 5 }
  if (val < 10) return { ctx: 'Low: marginal for spawning run', col: '#fcd34d', pct: 15 }
  if (val < 30) return { ctx: 'Moderate: suitable for active spawning', col: '#7fd8ff', pct: 45 }
  if (val < 100) return { ctx: 'Good flow: healthy conditions', col: '#6ee7b7', pct: 75 }
  return { ctx: 'High discharge: strong runoff active', col: '#7fd8ff', pct: 100 }
}

/** Clear Lake level (Rumsey ft) context bucket — for non-gauged creeks. */
export function lakeContext(val: number): { ctx: string; col: string; pct: number } {
  if (val < 0) return { ctx: 'Below datum: critically low', col: '#fca5a5', pct: 5 }
  if (val < 2) return { ctx: 'Low: below normal range', col: '#fca5a5', pct: 20 }
  if (val < 5) return { ctx: 'Normal lake level', col: '#7fd8ff', pct: 60 }
  if (val < 7) return { ctx: 'Above normal', col: '#6ee7b7', pct: 82 }
  return { ctx: 'High water level', col: '#6ee7b7', pct: 100 }
}
