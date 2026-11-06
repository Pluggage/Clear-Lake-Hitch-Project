"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Link from "next/link"

const popData = [
  { yr: 2013, count: 500, est: true, ctx: "Drought conditions. Fewer than 500 spawners observed, survey methods still being standardized." },
  { yr: 2014, count: 1119, est: false, ctx: "Improved rain. 1,119 spawners counted. California lists the hitch as Threatened under state ESA." },
  { yr: 2016, count: 693, est: false, ctx: "Moderate year. 693 spawners across tributaries. Kelsey and Adobe Creeks remain primary streams." },
  { yr: 2017, count: 517, est: false, ctx: "USGS begins gillnet surveys, establishing the baseline that will later reveal a 96% decline." },
  { yr: 2018, count: 1153, est: false, ctx: "Strong year. 1,153 spawners. Adobe Creek most frequented tributary this season." },
  { yr: 2019, count: 612, est: false, ctx: "Below average. 612 spawners. USGS gillnet catches already ~55% below 2017 baseline." },
  { yr: 2020, count: 1672, est: false, ctx: "Strongest year of the 2010s. All 1,672 hitch observed exclusively in Kelsey Creek." },
  { yr: 2021, count: 120, est: false, ctx: "Catastrophic drought. Only 120 spawners, a 93% crash from the prior year. Tributaries ran dry." },
  { yr: 2022, count: 306, est: false, ctx: "Still in crisis. 306 spawners. USGS gillnet shows ~4% of 2017 baseline. Lake County declares emergency in early 2023." },
  { yr: 2023, count: 2548, est: false, ctx: "Record year: 2,548 spawners after heavy winter rains refilled tributaries. A fragile sign of hope." },
  { yr: 2024, count: 1042, est: false, ctx: "Back to moderate levels. 1,042 spawners. Federal ESA listing proposed in January 2025." },
  { yr: 2025, count: 1567, est: false, ctx: "1,567 spawners recorded lake-wide. Adobe and Kelsey Creeks leading again." },
]

const popMax = Math.max(...popData.map((d) => d.count))

export function PopulationTimeline() {
  const [popIdx, setPopIdx] = useState(popData.length - 1)
  const [isPlaying, setIsPlaying] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => () => {
    if (timerRef.current) clearInterval(timerRef.current)
  }, [])

  const d = popData[popIdx]

  const getChangeInfo = () => {
    // 2013 is only an upper bound ("fewer than 500"), so no exact change can be stated from it.
    if (popIdx === 0 || popData[popIdx - 1].est) return null
    const prev = popData[popIdx - 1]
    const pct = Math.round(((d.count - prev.count) / prev.count) * 100)
    return { pct, isPositive: pct >= 0, prevYr: prev.yr }
  }

  const changeInfo = getChangeInfo()

  const stopAnimation = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
    setIsPlaying(false)
  }, [])

  const popAnimate = useCallback(() => {
    if (isPlaying) {
      stopAnimation()
      return
    }

    setPopIdx(0)
    setIsPlaying(true)

    let currentIdx = 0
    timerRef.current = setInterval(() => {
      currentIdx++
      if (currentIdx >= popData.length) {
        stopAnimation()
        setPopIdx(popData.length - 1)
        return
      }
      setPopIdx(currentIdx)
    }, 1200)
  }, [isPlaying, stopAnimation])

  const getButtonText = () => {
    if (isPlaying) return "⏸ Pause"
    return "▶ Play year by year"
  }

  return (
    <div className="bg-background border-b border-border py-12 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Clear Lake Hitch: Spawner Count by Year
          </h2>
          <button
            onClick={popAnimate}
            className="bg-[var(--lake)] text-white border-none rounded-[20px] py-[5px] px-[14px] text-[0.76rem] font-semibold cursor-pointer flex items-center gap-[5px] transition-colors hover:bg-[var(--lake-dark)]"
          >
            {getButtonText()}
          </button>
        </div>

        {/* Display */}
        <div className="flex items-end gap-8 mb-5 flex-wrap">
          <div
            className="text-[3.2rem] font-extrabold leading-none tabular-nums min-w-[110px] text-foreground"
          >
            {d.yr}
          </div>
          <div className="flex-1 min-w-[200px]">
            <div className="flex items-baseline gap-2 mb-1">
              <div
                className="text-[2rem] font-bold leading-none tabular-nums transition-colors duration-300"
                style={{
                  color: d.count < 400 ? "#c0392b" : d.count > 2000 ? "#2d7a3a" : "var(--foreground)",
                }}
              >
                {d.est ? "<" : ""}
                {d.count.toLocaleString()}
              </div>
              <div className="text-[0.82rem] text-muted-foreground">spawners (lake-wide)</div>
              {changeInfo && (
                <span
                  className="inline-block text-[0.78rem] font-bold py-[2px] px-2 rounded-[10px] ml-1.5"
                  style={{
                    background: changeInfo.isPositive ? "#e8f5eb" : "#fdecea",
                    color: changeInfo.isPositive ? "#2d7a3a" : "#c0392b",
                  }}
                >
                  {changeInfo.isPositive ? "▲ +" : "▼ "}
                  {Math.abs(changeInfo.pct)}% vs {changeInfo.prevYr}
                </span>
              )}
            </div>
            <div className="text-[0.84rem] text-muted-foreground leading-relaxed min-h-[2.6em] transition-opacity duration-200">
              {d.ctx}
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="h-56 pt-5 mb-2 flex gap-[3px] border-b border-[var(--border-color)]" aria-hidden="true">
          {popData.map((item, i) => {
            const h = Math.max(1, (item.count / popMax) * 100)
            const isActive = i === popIdx
            const skipped = i > 0 && item.yr - popData[i - 1].yr > 1
            return (
              <div key={item.yr} className="contents">
                {skipped && (
                  <div className="flex-1 min-w-0 flex flex-col items-center" title={`No ${item.yr - 1} figure`}>
                    <div className="flex-1 min-h-0 flex items-end pb-1 text-[0.72rem] text-muted-foreground">–</div>
                    <div className="text-[0.72rem] text-muted-foreground mt-1 tabular-nums">{String(item.yr - 1).slice(2)}</div>
                  </div>
                )}
                <div
                  className="flex-1 min-w-0 flex flex-col items-center cursor-pointer group"
                  onClick={() => {
                    stopAnimation()
                    setPopIdx(i)
                  }}
                >
                  <div className="flex-1 min-h-0 w-full flex items-end">
                    <div
                      className="relative w-full rounded-t transition-all duration-300 group-hover:brightness-110"
                      style={{
                        height: `${h}%`,
                        background: isActive ? "var(--lake)" : "#a9bccb",
                      }}
                    >
                      <span
                        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-0.5 whitespace-nowrap text-[0.68rem] tabular-nums ${
                          isActive ? "font-bold text-foreground" : "hidden sm:block text-muted-foreground"
                        }`}
                      >
                        {item.est ? "<" : ""}
                        {item.count.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <div className={`text-[0.72rem] mt-1 tabular-nums ${isActive ? "font-bold text-foreground" : "text-muted-foreground"}`}>
                    {String(item.yr).slice(2)}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Slider */}
        <input
          type="range"
          className="pop-slider w-full h-1.5 rounded-[3px] bg-[var(--lake-light)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--lake)] focus-visible:ring-offset-2 cursor-pointer appearance-none mt-1"
          aria-label="Survey year"
          aria-valuetext={`${d.yr}: ${d.est ? "fewer than " : ""}${d.count.toLocaleString()} spawners`}
          min="0"
          max={popData.length - 1}
          value={popIdx}
          onChange={(e) => {
            stopAnimation()
            setPopIdx(Number(e.target.value))
          }}
        />

        <p className="text-[0.7rem] text-muted-foreground mt-3 leading-relaxed">
          Source: CDFW and Lake County Water Resources visual spawner surveys (adult hitch counted in tributaries), 2013 through the 2025 season, distinct from the USGS gillnet relative-abundance index behind the 96% decline figure. Recent-year totals are CDFW lake-wide figures that combine survey programs and can differ from any single program&apos;s raw tributary counts.{" "}
          <Link href="/archive" className="underline hover:text-[var(--lake)]">Source archive</Link>
          {" · "}
          <a href="https://pubs.usgs.gov/publication/ofr20251018" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--lake)]">USGS OFR 2025-1018</a>
          {" · "}
          <Link href="/timeline" className="underline hover:text-[var(--lake)]">Full timeline</Link>
        </p>

        <div className="sr-only">
          <table>
            <caption>Clear Lake hitch spawner counts by year</caption>
            <thead>
              <tr><th scope="col">Year</th><th scope="col">Spawners (lake-wide)</th></tr>
            </thead>
            <tbody>
              {popData.map((row) => (
                <tr key={row.yr}>
                  <td>{row.yr}</td>
                  <td>{row.est ? "Fewer than " : ""}{row.count.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
        </table>
        </div>
      </div>

      <style jsx>{`
        .pop-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--lake);
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: transform 0.15s;
        }
        .pop-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }
        .pop-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--lake);
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}
