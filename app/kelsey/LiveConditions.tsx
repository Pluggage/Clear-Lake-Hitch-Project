'use client'

import { useEffect, useState } from 'react'
import { fetchGauge, flowContext, fmtAge, spawnPhase, type Point } from '@/components/creek/usgs'

const SITE = '11449500'

function FlowChart({ series }: { series: Point[] }) {
  if (!series || series.length < 2) return <div className="fc-empty">Insufficient data for chart</div>
  const W = 700, H = 88, pL = 28, pR = 8, pT = 6, pB = 18, cw = W - pL - pR, ch = H - pT - pB
  const minT = series[0].t.getTime()
  const maxT = series[series.length - 1].t.getTime()
  const span = Math.max(1, maxT - minT)
  const maxV = Math.max(...series.map((d) => d.v), 1)
  const yMax = maxV * 1.2
  const xOf = (t: number) => pL + ((t - minT) / span) * cw
  const yOf = (v: number) => pT + ch - (v / yMax) * ch
  let ln = `M ${xOf(minT)} ${yOf(series[0].v)}`
  let ar = `M ${xOf(minT)} ${pT + ch} L ${xOf(minT)} ${yOf(series[0].v)}`
  for (let i = 1; i < series.length; i++) {
    const x = xOf(series[i].t.getTime()), y = yOf(series[i].v)
    ln += ` L ${x} ${y}`
    ar += ` L ${x} ${y}`
  }
  ar += ` L ${xOf(maxT)} ${pT + ch} Z`
  const midT = new Date((minT + maxT) / 2)
  const fd = (d: Date) => d.toLocaleString('en-US', { month: 'short', day: 'numeric' })
  const gridVals = [0, Math.round(yMax / 2), Math.round(yMax)]
  return (
    <svg className="flow-chart-svg" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id="fg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7fd8ff" stopOpacity=".4" />
          <stop offset="100%" stopColor="#7fd8ff" stopOpacity="0" />
        </linearGradient>
      </defs>
      {gridVals.map((v) => (
        <g key={v}>
          <line className="fc-grid" x1={pL} y1={yOf(v)} x2={W - pR} y2={yOf(v)} />
          <text className="fc-xlabel" x={pL - 4} y={yOf(v) + 3} textAnchor="end">{v}</text>
        </g>
      ))}
      <path className="fc-area" d={ar} />
      <path className="fc-line" d={ln} />
      <text className="fc-xlabel" x={pL} y={H - 3}>{fd(series[0].t)}</text>
      <text className="fc-xlabel" x={xOf(midT.getTime())} y={H - 3} textAnchor="middle">{fd(midT)}</text>
      <text className="fc-xlabel" x={W - pR} y={H - 3} textAnchor="end">{fd(series[series.length - 1].t)}</text>
    </svg>
  )
}

export function LiveConditions() {
  const [flow, setFlow] = useState<{ val?: number; ctx: string; col: string; pct: number; fresh: string; series?: Point[]; error?: boolean }>({ ctx: '', col: '', pct: 0, fresh: '' })
  const [stage, setStage] = useState<{ val?: number; fresh: string; error?: boolean }>({ fresh: '' })
  const phase = spawnPhase()

  useEffect(() => {
    let alive = true
    fetchGauge(SITE, '00060', 'P7D')
      .then((g) => { if (!alive) return; const c = flowContext(g.latest.v); setFlow({ val: g.latest.v, ...c, fresh: fmtAge(g.latest.t), series: g.series }) })
      .catch(() => { if (alive) setFlow((f) => ({ ...f, error: true })) })
    fetchGauge(SITE, '00065')
      .then((g) => { if (!alive) return; setStage({ val: g.latest.v, fresh: fmtAge(g.latest.t) }) })
      .catch(() => { if (alive) setStage({ fresh: '', error: true }) })
    return () => { alive = false }
  }, [])

  return (
    <section className="live-section" id="live">
      <div className="section-inner">
        <span className="section-tag tag-blue">Live Conditions <span className="live-pill"><span className="live-dot" />LIVE</span></span>
        <div className="section-h2">Kelsey Creek Real-Time Data</div>
        <div className="section-sub">USGS gauge 11449500 near Kelseyville. Spawning migration typically requires flows above 10 cfs through the Feb to May window.</div>
        <div className="gauge-grid">
          {/* Discharge */}
          <div className="gauge-card">
            <div className="gauge-lbl">Streamflow Discharge<div className="gauge-src">USGS 11449500</div></div>
            {flow.error ? (
              <>
                <div className="gauge-num er">Unavailable</div>
                <div className="gauge-ctx" style={{ color: 'rgba(255,255,255,.42)' }}>Could not load. <a href="https://waterdata.usgs.gov/monitoring-location/11449500/" target="_blank" rel="noopener noreferrer" style={{ color: '#7fd8ff' }}>Visit USGS ↗</a></div>
              </>
            ) : flow.val === undefined ? (
              <div className="gauge-num ld">Loading…</div>
            ) : (
              <>
                <div className="gauge-num" style={{ color: flow.col }}>{flow.val.toFixed(1)}</div>
                <div className="gauge-unit">cfs discharge</div>
                <div className="gauge-ctx" style={{ color: flow.col }}>{flow.ctx}</div>
                <div className="gauge-mini"><div className="gauge-mini-fill" style={{ width: `${flow.pct}%`, background: `linear-gradient(90deg,${flow.col},${flow.col}aa)` }} /></div>
                <div className="gauge-fresh">{flow.fresh}</div>
              </>
            )}
            <a href="https://waterdata.usgs.gov/monitoring-location/11449500/" target="_blank" rel="noopener noreferrer" className="gauge-link">Full record on USGS ↗</a>
          </div>
          {/* Gage height */}
          <div className="gauge-card">
            <div className="gauge-lbl">Gage Height<div className="gauge-src">USGS 11449500</div></div>
            {stage.error ? (
              <div className="gauge-num er">Unavailable</div>
            ) : stage.val === undefined ? (
              <div className="gauge-num ld">Loading…</div>
            ) : (
              <>
                <div className="gauge-num">{stage.val.toFixed(2)}</div>
                <div className="gauge-unit">ft gage height</div>
                <div className="gauge-ctx" style={{ color: 'rgba(255,255,255,.65)' }}>Water surface at gauge</div>
                <div className="gauge-mini"><div className="gauge-mini-fill" style={{ width: `${Math.min(100, Math.max(2, ((stage.val + 1) / 8) * 100))}%`, background: 'linear-gradient(90deg,#2a7a3a,#6ee7b7)' }} /></div>
                <div className="gauge-fresh">{stage.fresh}</div>
              </>
            )}
            <a href="https://waterdata.usgs.gov/monitoring-location/11449500/#dataTypeId=continuous-00065-0&period=P7D" target="_blank" rel="noopener noreferrer" className="gauge-link">View gage height record ↗</a>
          </div>
          {/* Phase */}
          <div className="gauge-card">
            <div className="gauge-lbl">Spawning Season Phase<div className="gauge-src">Auto-calculated</div></div>
            <div className="gauge-num" style={{ fontSize: '1.4rem', color: phase.col }}>{phase.label}</div>
            <div className="gauge-unit">{phase.unit}</div>
            <div className="gauge-ctx" style={{ color: 'rgba(255,255,255,.65)' }}>{phase.ctx}</div>
            <div style={{ marginTop: '.8rem' }}>
              <a href="tel:7072632344" style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: '.76rem', fontWeight: 600, color: '#6ee7b7', textDecoration: 'none', background: 'rgba(110,231,183,.08)', border: '1px solid rgba(110,231,183,.2)', padding: '5px 11px', borderRadius: 16 }}>⚠ Rescue: (707) 263-2344</a>
            </div>
          </div>
        </div>
        <div className="flow-chart-box">
          <div className="flow-chart-title">7-Day Streamflow History: Kelsey Creek (cfs)</div>
          <div id="kc-flow-chart">
            {flow.error ? <div className="fc-empty">Chart unavailable</div>
              : flow.series ? <FlowChart series={flow.series} />
              : <div className="fc-empty">Loading chart…</div>}
          </div>
        </div>
      </div>
    </section>
  )
}
