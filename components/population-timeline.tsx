"use client"

import { useState, useRef, useCallback } from "react"

const popData = [
  { yr: 2013, count: 500, est: true, ctx: "Drought conditions. Fewer than 500 spawners observed, survey methods still being standardized.", color: "#c03030" },
  { yr: 2014, count: 1119, est: false, ctx: "Improved rain. 1,119 spawners counted. California lists the hitch as Threatened under state ESA.", color: "#7ec8e3" },
  { yr: 2016, count: 693, est: false, ctx: "Moderate year. 693 spawners across tributaries. Kelsey and Adobe Creeks remain primary streams.", color: "#a0b8c8" },
  { yr: 2017, count: 517, est: false, ctx: "USGS begins gillnet surveys, establishing the baseline that will later reveal a 96% decline.", color: "#a0b8c8" },
  { yr: 2018, count: 1153, est: false, ctx: "Strong year. 1,153 spawners. Adobe Creek most frequented tributary this season.", color: "#7ec8e3" },
  { yr: 2019, count: 612, est: false, ctx: "Below average. 612 spawners. USGS gillnet catches already ~55% below 2017 baseline.", color: "#a0b8c8" },
  { yr: 2020, count: 1672, est: false, ctx: "Best year in over a decade. All 1,672 hitch observed exclusively in Kelsey Creek.", color: "#6ee7b7" },
  { yr: 2021, count: 120, est: false, ctx: "Catastrophic drought. Only 120 spawners, a 93% crash from the prior year. Tributaries ran dry.", color: "#c03030" },
  { yr: 2022, count: 306, est: false, ctx: "Still in crisis. 306 spawners. USGS gillnet shows ~4% of 2017 baseline. Lake County declares emergency in early 2023.", color: "#d08040" },
  { yr: 2023, count: 2548, est: false, ctx: "Record year: 2,548 spawners after heavy winter rains refilled tributaries. A fragile sign of hope.", color: "#00c853" },
  { yr: 2024, count: 1042, est: false, ctx: "Back to moderate levels. 1,042 spawners. Federal ESA listing proposed in January 2025.", color: "#7ec8e3" },
  { yr: 2025, count: 1567, est: false, ctx: "1,567 spawners observed so far. Surveys ongoing. Adobe and Kelsey Creeks leading again.", color: "#7ec8e3" },
]

const popMax = Math.max(...popData.map((d) => d.count))

export function PopulationTimeline() {
  const [popIdx, setPopIdx] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const d = popData[popIdx]

  const getChangeInfo = () => {
    if (popIdx === 0) return null
    const prev = popData[popIdx - 1].count
    const pct = Math.round(((d.count - prev) / prev) * 100)
    return { pct, isPositive: pct >= 0 }
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
    if (popIdx === popData.length - 1) return "▶ Replay"
    return "▶ Watch the decline"
  }

  return (
    <div className="bg-background border-b border-border py-8 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
          <h2 className="text-base font-bold text-foreground">
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
            className="text-[3.2rem] font-extrabold leading-none tabular-nums min-w-[110px]"
            style={{ color: d.color }}
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
              <div className="text-[0.82rem] text-muted-foreground">spawners observed</div>
              {changeInfo && (
                <span
                  className="inline-block text-[0.78rem] font-bold py-[2px] px-2 rounded-[10px] ml-1.5"
                  style={{
                    background: changeInfo.isPositive ? "#e8f5eb" : "#fdecea",
                    color: changeInfo.isPositive ? "#2d7a3a" : "#c0392b",
                  }}
                >
                  {changeInfo.isPositive ? "▲ +" : "▼ "}
                  {changeInfo.pct}%
                </span>
              )}
            </div>
            <div className="text-[0.84rem] text-muted-foreground leading-relaxed min-h-[2.6em] transition-opacity duration-200">
              {d.ctx}
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="relative h-12 mb-2 flex items-end gap-[3px]">
          {popData.map((item, i) => {
            const h = Math.max(3, (item.count / popMax) * 100)
            const isActive = i === popIdx
            return (
              <div
                key={item.yr}
                className={`flex-1 flex flex-col items-center gap-[2px] cursor-pointer relative group ${isActive ? "active" : ""}`}
                onClick={() => {
                  stopAnimation()
                  setPopIdx(i)
                }}
              >
                <div
                  className="w-full rounded-t transition-all duration-400 min-h-[2px] group-hover:brightness-120"
                  style={{
                    height: `${h}%`,
                    background: isActive ? item.color : "#d0dbe6",
                    boxShadow: isActive ? "0 0 8px rgba(26,111,168,0.4)" : "none",
                  }}
                />
                <div className="text-[0.58rem] text-muted-foreground mt-[1px] tabular-nums">
                  {String(item.yr).slice(2)}
                </div>
              </div>
            )
          })}
        </div>

        {/* Slider */}
        <input
          type="range"
          className="pop-slider w-full h-1.5 rounded-[3px] bg-[var(--lake-light)] outline-none cursor-pointer appearance-none mt-1"
          min="0"
          max={popData.length - 1}
          value={popIdx}
          onChange={(e) => {
            stopAnimation()
            setPopIdx(Number(e.target.value))
          }}
        />

        <p className="text-[0.7rem] text-muted-foreground mt-3 leading-relaxed">
          Source: CDFW and Lake County Water Resources visual spawner surveys (adult hitch counted in tributaries), 2013 through the 2025 season, distinct from the USGS gillnet relative-abundance index behind the 96% decline figure.{" "}
          <Link href="/archive" className="underline hover:text-[var(--lake)]">Source archive</Link>
          {" · "}
          <a href="https://pubs.usgs.gov/publication/ofr20251018" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--lake)]">USGS OFR 2025-1018</a>
          {" · "}
          <Link href="/timeline" className="underline hover:text-[var(--lake)]">Full timeline</Link>
        </p>
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
