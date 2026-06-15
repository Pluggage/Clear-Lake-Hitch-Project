'use client'

import { useEffect, useState } from 'react'
import { fetchGauge, fmtAge, lakeContext, spawnPhase } from '@/components/creek/usgs'

export function AdobeConditions() {
  const [lake, setLake] = useState<{ val?: number; ctx: string; col: string; pct: number; fresh: string; error?: boolean }>({ ctx: '', col: '', pct: 0, fresh: '' })
  const phase = spawnPhase()

  useEffect(() => {
    let alive = true
    fetchGauge('11450000', '00065')
      .then((g) => { if (!alive) return; const c = lakeContext(g.latest.v); setLake({ val: g.latest.v, ...c, fresh: fmtAge(g.latest.t) }) })
      .catch(() => { if (alive) setLake((l) => ({ ...l, error: true })) })
    return () => { alive = false }
  }, [])

  return (
    <section className="live-section" id="conditions">
      <div className="section-inner">
        <span className="section-tag tag-blue">Creek Conditions</span>
        <div className="section-h2">Current Season Status</div>
        <div className="section-sub">Adobe Creek does not have a dedicated USGS streamflow gauge. Conditions are assessed through CDFW and Lake County WPD visual surveys and the lake-wide spawn phase indicator below.</div>
        <div className="gauge-grid">
          {/* Spawning phase */}
          <div className="gauge-card">
            <div className="gauge-lbl">Spawning Phase<div className="gauge-src">Auto-calculated</div></div>
            <div className="gauge-num" style={{ fontSize: '1.4rem', color: phase.col }}>{phase.label}</div>
            <div className="gauge-unit">{phase.unit}</div>
            <div className="gauge-ctx" style={{ color: 'rgba(255,255,255,.65)' }}>{phase.ctx}</div>
            <div className="gauge-fresh" style={{ marginTop: '.8rem' }}>Updates on page load</div>
          </div>
          {/* Clear Lake level */}
          <div className="gauge-card">
            <div className="gauge-lbl">Clear Lake Level<div className="gauge-src">USGS 11450000</div></div>
            {lake.error ? (
              <div className="gauge-num er">Unavailable</div>
            ) : lake.val === undefined ? (
              <div className="gauge-num ld">Loading…</div>
            ) : (
              <>
                <div className="gauge-num" style={{ color: lake.col }}>{lake.val.toFixed(2)}</div>
                <div className="gauge-unit">ft (Rumsey)</div>
                <div className="gauge-ctx" style={{ color: lake.col }}>{lake.ctx}</div>
                <div className="gauge-mini"><div className="gauge-mini-fill" style={{ width: `${lake.pct}%`, background: 'linear-gradient(90deg,#1a6fa8,#7fd8ff)' }} /></div>
                <div className="gauge-fresh">{lake.fresh}</div>
              </>
            )}
            <a href="https://waterdata.usgs.gov/monitoring-location/11450000/" target="_blank" rel="noopener noreferrer" className="gauge-link">USGS lake level record</a>
          </div>
          {/* Rescue */}
          <div className="gauge-card">
            <div className="gauge-lbl">Report Stranded Hitch<div className="gauge-src">Rescue Team</div></div>
            <div className="gauge-num" style={{ fontSize: '1.1rem', lineHeight: 1.3, color: '#6ee7b7' }}>(707)<br />263-2344</div>
            <div className="gauge-ctx" style={{ marginTop: '.5rem' }}>If you spot hitch stranded in a dry or disconnected section, call immediately. Permits are required; do not attempt relocation yourself.</div>
            <a href="tel:7072632344" style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: '.76rem', fontWeight: 600, color: '#6ee7b7', textDecoration: 'none', background: 'rgba(110,231,183,.08)', border: '1px solid rgba(110,231,183,.2)', padding: '5px 11px', borderRadius: 16, marginTop: '.7rem' }}>Call Rescue Team</a>
          </div>
        </div>
      </div>
    </section>
  )
}
