'use client'

import { Fragment, useEffect, useRef, useState } from 'react'

export interface PopPoint {
  yr: number
  count: number
  est?: boolean
  ctx: string
}

export function SpawnerTimeline({
  data,
  title,
  note,
  badges,
}: {
  data: PopPoint[]
  title: string
  note?: string
  badges?: string[]
}) {
  const [idx, setIdx] = useState(data.length - 1)
  const [playing, setPlaying] = useState(false)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)
  const popMax = Math.max(...data.map((d) => d.count))

  useEffect(() => () => { if (timer.current) clearInterval(timer.current) }, [])

  const stop = () => { if (timer.current) { clearInterval(timer.current); timer.current = null } setPlaying(false) }

  const animate = () => {
    if (playing) { stop(); return }
    setIdx(0)
    setPlaying(true)
    timer.current = setInterval(() => {
      setIdx((i) => {
        if (i + 1 >= data.length) { stop(); return data.length - 1 }
        return i + 1
      })
    }, 1200)
  }

  const d = data[idx]
  const countText = (d.est ? '<' : '') + d.count.toLocaleString()
  const countColor = d.count < 400 ? '#c0392b' : d.count > 2000 ? '#2d7a3a' : 'var(--text)'
  let change: { text: string; bg: string; color: string } | null = null
  // An estimated year is only an upper bound, so no exact change can be stated from it.
  if (idx > 0 && !data[idx - 1].est) {
    const prev = data[idx - 1]
    const pct = Math.round(((d.count - prev.count) / prev.count) * 100)
    change = pct >= 0
      ? { text: `▲ +${pct}% vs ${prev.yr}`, bg: '#e8f5eb', color: '#2d7a3a' }
      : { text: `▼ ${Math.abs(pct)}% vs ${prev.yr}`, bg: '#fdecea', color: '#c0392b' }
  }

  return (
    <div className="timeline-section" id="timeline">
      <div className="section-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '.6rem', flexWrap: 'wrap' }}>
          <span className="section-label">Spawner History</span>
          {note && <span style={{ fontSize: '.78rem', color: 'var(--muted)' }}>{note}</span>}
        </div>
        <div className="pop-header">
          <div className="pop-title">{title}</div>
          <button className="pop-play" onClick={animate}>{playing ? '⏸ Pause' : '▶ Play year by year'}</button>
        </div>
        <div className="pop-display">
          <div className="pop-year-big">{d.yr}</div>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
              <div className="pop-count-num" style={{ color: countColor }}>{countText}</div>
              <div className="pop-count-label">spawners lake-wide</div>
              {change && <span className="pop-change" style={{ display: 'inline-block', background: change.bg, color: change.color }}>{change.text}</span>}
            </div>
            <div className="pop-context">{d.ctx}</div>
          </div>
        </div>
        <div className="pop-bar-wrap" aria-hidden="true">
          {data.map((p, i) => {
            const skipped = i > 0 && p.yr - data[i - 1].yr > 1
            return (
              <Fragment key={p.yr}>
                {skipped && (
                  <div className="pop-bar-col pop-bar-gap" title={`No ${p.yr - 1} figure`}>
                    <div className="pop-bar-area">–</div>
                    <div className="pop-bar-yr">{String(p.yr - 1).slice(2)}</div>
                  </div>
                )}
                <div className={`pop-bar-col${i === idx ? ' active' : ''}`} onClick={() => { stop(); setIdx(i) }}>
                  <div className="pop-bar-area">
                    <div className="pop-bar" style={{ height: `${Math.max(1, (p.count / popMax) * 100)}%` }}>
                      <span className="pop-bar-val">{p.est ? '<' : ''}{p.count.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="pop-bar-yr">{String(p.yr).slice(2)}</div>
                </div>
              </Fragment>
            )
          })}
        </div>
        <input
          type="range"
          className="pop-slider"
          min={0}
          max={data.length - 1}
          value={idx}
          onChange={(e) => { stop(); setIdx(+e.target.value) }}
          aria-label="Survey year"
          aria-valuetext={`${d.yr}: ${d.est ? 'fewer than ' : ''}${d.count.toLocaleString()} spawners`}
        />
        {badges && badges.length > 0 && (
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: '.8rem' }}>
            {badges.map((b) => (
              <span key={b} style={{ fontSize: '.72rem', background: 'var(--lake-light)', color: 'var(--lake-dark)', padding: '3px 9px', borderRadius: 12, fontWeight: 600 }}>{b}</span>
            ))}
          </div>
        )}
        <p style={{ fontSize: '.7rem', color: 'var(--muted)', marginTop: '.8rem', lineHeight: 1.5 }}>
          Source: CDFW and Lake County WPD visual spawner surveys, lake-wide counts through the 2025 season.{' '}
          <a href="/archive" style={{ color: 'var(--lake)', textDecoration: 'underline' }}>Source archive</a>
          {' · '}
          <a href="https://pubs.usgs.gov/publication/ofr20251018" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--lake)', textDecoration: 'underline' }}>USGS OFR 2025-1018</a>
        </p>

        <div className='sr-only'>
          <table>
            <caption>{title}</caption>
            <thead>
              <tr><th scope="col">Year</th><th scope="col">Spawners (lake-wide)</th></tr>
            </thead>
            <tbody>
              {data.map((p) => (
                <tr key={p.yr}>
                  <td>{p.yr}</td>
                  <td>{p.est ? 'Fewer than ' : ''}{p.count.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}
