'use client'

import { useEffect, useRef, useState } from 'react'
import { popData } from './kelsey-data'

const popMax = Math.max(...popData.map((d) => d.count))

export function SpawnerTimeline() {
  const [idx, setIdx] = useState(0)
  const [playing, setPlaying] = useState(false)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => () => { if (timer.current) clearInterval(timer.current) }, [])

  const stop = () => { if (timer.current) { clearInterval(timer.current); timer.current = null } setPlaying(false) }

  const animate = () => {
    if (playing) { stop(); return }
    setIdx(0)
    setPlaying(true)
    timer.current = setInterval(() => {
      setIdx((i) => {
        if (i + 1 >= popData.length) { stop(); return popData.length - 1 }
        return i + 1
      })
    }, 1200)
  }

  const d = popData[idx]
  const countText = (d.est ? '<' : '') + d.count.toLocaleString()
  const countColor = d.count < 400 ? '#c0392b' : d.count > 2000 ? '#2d7a3a' : 'var(--text)'
  let change: { text: string; bg: string; color: string } | null = null
  if (idx > 0) {
    const pct = Math.round(((d.count - popData[idx - 1].count) / popData[idx - 1].count) * 100)
    change = pct >= 0
      ? { text: `▲ +${pct}%`, bg: '#e8f5eb', color: '#2d7a3a' }
      : { text: `▼ ${pct}%`, bg: '#fdecea', color: '#c0392b' }
  }

  return (
    <div className="timeline-section" id="timeline">
      <div className="section-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '.6rem', flexWrap: 'wrap' }}>
          <span className="section-label">Spawner History</span>
        </div>
        <div className="pop-header">
          <div className="pop-title">Lake-wide Spawner Counts: Kelsey&apos;s Role Each Year</div>
          <button className="pop-play" onClick={animate}>{playing ? '⏸ Pause' : idx === popData.length - 1 && !playing ? '▶ Replay' : '▶ Watch the history'}</button>
        </div>
        <div className="pop-display">
          <div className="pop-year-big" style={{ color: d.color }}>{d.yr}</div>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
              <div className="pop-count-num" style={{ color: countColor }}>{countText}</div>
              <div className="pop-count-label">spawners lake-wide</div>
              {change && <span className="pop-change" style={{ display: 'inline-block', background: change.bg, color: change.color }}>{change.text}</span>}
            </div>
            <div className="pop-context">{d.ctx}</div>
          </div>
        </div>
        <div className="pop-bar-wrap">
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 48, width: '100%' }}>
            {popData.map((p, i) => (
              <div key={p.yr} className={`pop-bar-col${i === idx ? ' active' : ''}`} onClick={() => setIdx(i)} style={{ flex: 1 }}>
                <div className="pop-bar" style={{ height: `${Math.max(3, (p.count / popMax) * 100)}%`, background: i === idx ? p.color : '#d0dbe6' }} />
                <div className="pop-bar-yr">{String(p.yr).slice(2)}</div>
              </div>
            ))}
          </div>
        </div>
        <input type="range" className="pop-slider" min={0} max={popData.length - 1} value={idx} onChange={(e) => setIdx(+e.target.value)} />
      </div>
    </div>
  )
}
