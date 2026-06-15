"use client"

import { useEffect, useState } from "react"
import { Phone, ExternalLink, Waves, Droplets, FlaskConical } from "lucide-react"

interface SpawnPhase {
  phase: string
  color: string
  bg: string
  border: string
  label: string
  desc: string
  info: string
}

interface GaugeData {
  value: number
  unit: string
  time: Date
}

function getSpawnPhase(now: Date): SpawnPhase {
  const m = now.getMonth() + 1
  const d = now.getDate()
  const yr = now.getFullYear()
  const md = m * 100 + d

  if (md >= 220 && md <= 314) {
    const s = new Date(yr, 2, 15)
    const dl = Math.ceil((s.getTime() - now.getTime()) / 86400000)
    return {
      phase: "EARLY",
      color: "#76c442",
      bg: "rgba(118,196,66,.14)",
      border: "rgba(118,196,66,.32)",
      label: "Early Spawning Season",
      desc: "First adult hitch are beginning to move into tributaries. Watch stream crossings — even a few fish sighting is meaningful data worth reporting.",
      info: dl > 0 ? `Peak season begins in ~${dl} day${dl !== 1 ? "s" : ""}` : "",
    }
  }
  if (md >= 315 && md <= 425) {
    const e = new Date(yr, 3, 25)
    const dl = Math.ceil((e.getTime() - now.getTime()) / 86400000)
    return {
      phase: "PEAK",
      color: "#00c853",
      bg: "rgba(0,200,83,.13)",
      border: "rgba(0,200,83,.32)",
      label: "Peak Spawning Season",
      desc: "Clear Lake hitch are actively migrating into spawning tributaries right now. Visual surveys are underway. Report any sightings — your observations help build the long-term record.",
      info: dl > 0 ? `~${dl} day${dl !== 1 ? "s" : ""} remaining in peak season` : "",
    }
  }
  if (md >= 426 && md <= 515) {
    const e = new Date(yr, 4, 15)
    const dl = Math.ceil((e.getTime() - now.getTime()) / 86400000)
    return {
      phase: "LATE",
      color: "#f59e0b",
      bg: "rgba(245,158,11,.13)",
      border: "rgba(245,158,11,.3)",
      label: "Late Spawning Season",
      desc: "Spawning is winding down. Watch for young-of-year hitch in tributary pools. Tributaries may begin to dry — report any stranded fish to the Hitch Rescue Team immediately.",
      info: dl > 0 ? `Season ends in approx. ${dl} day${dl !== 1 ? "s" : ""}` : "",
    }
  }
  if (m === 1 || (m === 2 && d < 20)) {
    const s = new Date(yr, 1, 20)
    const dl = Math.ceil((s.getTime() - now.getTime()) / 86400000)
    return {
      phase: "PRE",
      color: "#5a8aaa",
      bg: "rgba(90,138,170,.11)",
      border: "rgba(90,138,170,.22)",
      label: "Pre-Season",
      desc: "Hitch are overwintering in Clear Lake, staging before their spring migration. First spawning movements typically begin in late February when flows pick up.",
      info: `Early spawning season begins in ~${dl} day${dl !== 1 ? "s" : ""}`,
    }
  }
  const nextYear = m >= 12 ? yr + 1 : yr + 1
  const s = new Date(nextYear, 1, 20)
  const dl = Math.ceil((s.getTime() - now.getTime()) / 86400000)
  return {
    phase: "POST",
    color: "#3a7a9a",
    bg: "rgba(58,122,154,.09)",
    border: "rgba(58,122,154,.18)",
    label: "Post-Season",
    desc: "Spawning is complete for this year. Young-of-year hitch are rearing in Clear Lake. Check back in late winter for pre-season conditions.",
    info: `Next spawning season in ~${dl} day${dl !== 1 ? "s" : ""}`,
  }
}

function fmtAge(dt: Date): string {
  const mins = Math.round((Date.now() - dt.getTime()) / 60000)
  if (mins < 2) return "Just now"
  if (mins < 60) return `${mins} min ago`
  const h = Math.floor(mins / 60)
  if (h < 24) return `${h}h ${mins % 60}m ago`
  return `${Math.floor(h / 24)}d ago`
}

function fmtTime(dt: Date): string {
  return (
    "As of " +
    dt.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    })
  )
}

async function fetchGauge(site: string, param: string): Promise<GaugeData> {
  const base = `https://waterservices.usgs.gov/nwis/iv/?sites=${site}&parameterCd=${param}&format=json&siteStatus=all`
  const sources = [
    base,
    `https://corsproxy.io/?${encodeURIComponent(base)}`,
    `https://api.allorigins.win/raw?url=${encodeURIComponent(base)}`,
  ]

  for (const url of sources) {
    try {
      const ctrl = new AbortController()
      const t = setTimeout(() => ctrl.abort(), 9000)
      const r = await fetch(url, { signal: ctrl.signal })
      clearTimeout(t)
      if (!r.ok) continue
      const j = await r.json()
      const ts = j?.value?.timeSeries?.[0]
      if (!ts) continue
      const vals = ts.values?.[0]?.value
      if (!vals?.length) continue
      const latest = vals[vals.length - 1]
      const v = parseFloat(latest.value)
      if (isNaN(v) || v <= -999) continue
      return { value: v, unit: ts.variable?.unit?.unitCode || "", time: new Date(latest.dateTime) }
    } catch {
      /* try next */
    }
  }
  throw new Error("unavailable")
}

function SpawnTimeline({ now }: { now: Date }) {
  const yr = now.getFullYear()
  const jan1 = new Date(yr, 0, 1)
  const jul1 = new Date(yr, 6, 1)
  const span = jul1.getTime() - jan1.getTime()
  const pct = (d: Date) => Math.min(100, Math.max(0, ((d.getTime() - jan1.getTime()) / span) * 100))

  const zones = [
    { s: new Date(yr, 0, 1), e: new Date(yr, 1, 20), c: "#132230" },
    { s: new Date(yr, 1, 20), e: new Date(yr, 2, 15), c: "#2a7a3a" },
    { s: new Date(yr, 2, 15), e: new Date(yr, 3, 26), c: "#00a844" },
    { s: new Date(yr, 3, 26), e: new Date(yr, 4, 16), c: "#d97706" },
    { s: new Date(yr, 4, 16), e: jul1, c: "#132230" },
  ]

  const tp = Math.min(97, Math.max(3, pct(now)))
  const mNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]

  return (
    <div>
      <div className="text-[10px] text-white/30 uppercase tracking-wider mb-1.5">Season Timeline — Jan through Jul</div>
      <div className="relative h-5 rounded-[10px] overflow-visible bg-[#050d15] flex mb-1">
        {zones.map((z, i) => {
          const l = pct(z.s)
          const r = pct(z.e)
          const rad = i === 0 ? "10px 0 0 10px" : i === zones.length - 1 ? "0 10px 10px 0" : "0"
          return <div key={i} className="h-full" style={{ width: `${r - l}%`, background: z.c, borderRadius: rad }} />
        })}
        <div
          className="absolute w-0.5 -top-1 -bottom-1 bg-white shadow-[0_0_8px_rgba(255,255,255,.8)] z-10 rounded-sm"
          style={{ left: `${tp}%`, transform: "translateX(-50%)" }}
        >
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[7px] text-white">&#x25BC;</span>
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[7.5px] text-white/55 whitespace-nowrap">
            {mNames[now.getMonth()]} {now.getDate()}
          </span>
        </div>
      </div>
      <div className="flex justify-between px-0.5 mt-1">
        {mNames.map((m) => (
          <span key={m} className="text-[9px] text-white/25">
            {m}
          </span>
        ))}
      </div>
      <div className="flex gap-2.5 flex-wrap mt-2">
        <div className="flex items-center gap-1 text-[10px] text-white/35">
          <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: "#132230" }} />
          Off-season
        </div>
        <div className="flex items-center gap-1 text-[10px] text-white/35">
          <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: "#2a7a3a" }} />
          Early
        </div>
        <div className="flex items-center gap-1 text-[10px] text-white/35">
          <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: "#00a844" }} />
          Peak
        </div>
        <div className="flex items-center gap-1 text-[10px] text-white/35">
          <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: "#d97706" }} />
          Late
        </div>
      </div>
    </div>
  )
}

export function LiveConditionsSection() {
  const [spawnPhase, setSpawnPhase] = useState<SpawnPhase | null>(null)
  const [now, setNow] = useState<Date | null>(null)
  const [lakeData, setLakeData] = useState<{ val: string; ctx: string; ctxColor: string; bar: number; fresh: string } | null>(null)
  const [lakeError, setLakeError] = useState(false)
  const [cacheData, setCacheData] = useState<{ val: string; ctx: string; ctxColor: string; bar: number; fresh: string } | null>(null)
  const [cacheError, setCacheError] = useState(false)
  const [cyanoSeasonal, setCyanoSeasonal] = useState<{ text: string; color: string } | null>(null)

  useEffect(() => {
    const d = new Date()
    setNow(d)
    setSpawnPhase(getSpawnPhase(d))

    // Load lake level
    fetchGauge("11450000", "00065")
      .then((g) => {
        let ctx = ""
        let cc = "rgba(255,255,255,.42)"
        if (g.value < 0) {
          ctx = "Below datum — critically low"
          cc = "#fca5a5"
        } else if (g.value < 2) {
          ctx = "Low — below normal range"
          cc = "#fca5a5"
        } else if (g.value < 5) {
          ctx = "Normal lake level"
          cc = "#6ee7b7"
        } else if (g.value < 7) {
          ctx = "Above normal"
          cc = "#6ee7b7"
        } else {
          ctx = "High water level"
          cc = "#7fd8ff"
        }
        setLakeData({
          val: g.value.toFixed(2),
          ctx,
          ctxColor: cc,
          bar: Math.min(100, Math.max(0, ((g.value + 1) / 9) * 100)),
          fresh: `${fmtTime(g.time)}  ·  ${fmtAge(g.time)}`,
        })
      })
      .catch(() => setLakeError(true))

    // Load cache creek
    fetchGauge("11451000", "00060")
      .then((g) => {
        let ctx = ""
        let cc = "rgba(255,255,255,.42)"
        if (g.value < 1) {
          ctx = "Near zero — very little outflow"
          cc = "#fca5a5"
        } else if (g.value < 10) {
          ctx = "Low outflow — lake retaining water"
          cc = "#fcd34d"
        } else if (g.value < 100) {
          ctx = "Moderate outflow through dam"
          cc = "#6ee7b7"
        } else if (g.value < 500) {
          ctx = "High discharge — elevated outflow"
          cc = "#7fd8ff"
        } else {
          ctx = "Very high discharge — flood management"
          cc = "#fca5a5"
        }
        setCacheData({
          val: g.value.toFixed(1),
          ctx,
          ctxColor: cc,
          bar: Math.min(100, (g.value / 200) * 100),
          fresh: `${fmtTime(g.time)}  ·  ${fmtAge(g.time)}`,
        })
      })
      .catch(() => setCacheError(true))

    // Cyano seasonal
    const m = d.getMonth()
    let seasonal, sc
    if (m >= 7 && m <= 9) {
      seasonal = "Peak HAB season — blooms frequently active Aug–Oct"
      sc = "#fca5a5"
    } else if (m === 6 || m === 10) {
      seasonal = "HAB activity developing or declining"
      sc = "#fcd34d"
    } else if (m >= 4 && m <= 5) {
      seasonal = "Low-moderate risk — blooms may begin"
      sc = "#a0d8b8"
    } else {
      seasonal = "Lower HAB risk — typical for winter/early spring"
      sc = "#6ee7b7"
    }
    setCyanoSeasonal({ text: seasonal, color: sc })
  }, [])

  return (
    <section
      id="lake-status"
      className="py-16 px-4 md:px-8"
      style={{ background: "linear-gradient(180deg,#07141f 0%,#0c2035 40%,#060f1a 100%)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-[rgba(127,216,255,.1)] text-[#7fd8ff] border border-[rgba(127,216,255,.2)]">
            Lake Status
          </span>
          <div className="flex items-center gap-1.5 bg-[rgba(255,80,80,.12)] border border-[rgba(255,80,80,.25)] rounded-full px-2.5 py-0.5 text-[10px] font-bold text-[#ff8a8a] tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5050] animate-pulse" />
            LIVE
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-3 mb-2">Live Conditions &amp; Spawner Map</h2>
        <p className="text-white/60 text-base max-w-[650px] mb-10 leading-relaxed">
          Real-time lake level, dam discharge, cyanobacteria monitoring, and spawning season status — alongside the
          interactive tributary survey map.
        </p>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Spawning Status Card */}
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-[14px] p-6">
            <div className="text-[11px] text-white/40 font-bold uppercase tracking-wider mb-3">
              Spawning Season Status
            </div>
            {spawnPhase && (
              <>
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-3xl text-sm font-bold mb-3"
                  style={{ background: spawnPhase.bg, color: spawnPhase.color, border: `1px solid ${spawnPhase.border}` }}
                >
                  {spawnPhase.phase === "PEAK" && <span className="w-2 h-2 rounded-full bg-[#00c853]" />}
                  {spawnPhase.label}
                </div>
                <p className="text-sm text-white/65 leading-relaxed mb-1">{spawnPhase.desc}</p>
                <p className="text-xs text-white/30 mb-5">{spawnPhase.info}</p>
              </>
            )}
            {now && <SpawnTimeline now={now} />}
            <a
              href="tel:7072632344"
              className="inline-flex items-center gap-1.5 mt-4 bg-[rgba(110,231,183,.07)] border border-[rgba(110,231,183,.18)] rounded-full px-3.5 py-1.5 text-xs text-[#6ee7b7] font-semibold hover:bg-[rgba(110,231,183,.14)] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              Report stranded hitch: (707) 263-2344
            </a>
          </div>

          {/* Gauges Stack */}
          <div className="flex flex-col gap-3">
            {/* Lake Level */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-[13px] p-5">
              <div className="flex justify-between items-start mb-2 gap-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#e8f0f7]">
                  <Waves className="w-4 h-4 text-[#7fd8ff]" />
                  Clear Lake Level
                </div>
                <div className="text-[10px] text-white/30 text-right leading-snug flex-shrink-0">
                  USGS 11450000
                  <br />
                  Lakeport pier
                </div>
              </div>
              <div className="flex items-baseline gap-1.5 mb-1">
                {lakeError ? (
                  <span className="text-sm text-[rgba(255,120,120,.55)]">Unavailable</span>
                ) : lakeData ? (
                  <>
                    <span className="text-3xl font-bold text-[#7fd8ff] leading-none tabular-nums">{lakeData.val}</span>
                    <span className="text-sm text-white/40">ft (Rumsey)</span>
                  </>
                ) : (
                  <span className="text-sm text-white/30">Loading...</span>
                )}
              </div>
              {lakeData && (
                <>
                  <div className="text-xs mb-2 leading-snug" style={{ color: lakeData.ctxColor }}>
                    {lakeData.ctx}
                  </div>
                  <div className="h-[3px] rounded-sm bg-white/[0.07] overflow-hidden mb-2">
                    <div
                      className="h-full rounded-sm transition-[width] duration-700"
                      style={{
                        width: `${lakeData.bar}%`,
                        background: "linear-gradient(90deg,#1a6fa8,#7fd8ff)",
                      }}
                    />
                  </div>
                  <div className="text-[10px] text-white/25">{lakeData.fresh}</div>
                </>
              )}
              {lakeError && <div className="text-[10px] text-white/25">Could not load — use USGS link below</div>}
              <div className="text-[10px] text-white/30 mt-1 leading-snug">
                Full lake = 7.56 ft Rumsey ·{" "}
                <a
                  href="https://www.lakecountyca.gov/DocumentCenter/View/4336/Historical-High-and-Low-Water-Levels-of-Clear-Lake-PDF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3a7aaa] hover:text-[#7fd8ff]"
                >
                  What is the Rumsey scale?
                </a>
              </div>
              <a
                href="https://waterdata.usgs.gov/monitoring-location/11450000/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-[#3a7aaa] hover:text-[#7fd8ff] inline-block mt-1"
              >
                View full record on USGS <ExternalLink className="w-2.5 h-2.5 inline ml-0.5" />
              </a>
            </div>

            {/* Cache Creek Discharge */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-[13px] p-5">
              <div className="flex justify-between items-start mb-2 gap-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#e8f0f7]">
                  <Droplets className="w-4 h-4 text-[#6ee7b7]" />
                  Cache Creek Discharge
                </div>
                <div className="text-[10px] text-white/30 text-right leading-snug flex-shrink-0">
                  USGS 11451000
                  <br />
                  Nr Lower Lake, CA
                </div>
              </div>
              <div className="flex items-baseline gap-1.5 mb-1">
                {cacheError ? (
                  <span className="text-sm text-[rgba(255,120,120,.55)]">Unavailable</span>
                ) : cacheData ? (
                  <>
                    <span className="text-3xl font-bold text-[#7fd8ff] leading-none tabular-nums">{cacheData.val}</span>
                    <span className="text-sm text-white/40">cfs</span>
                  </>
                ) : (
                  <span className="text-sm text-white/30">Loading...</span>
                )}
              </div>
              {cacheData && (
                <>
                  <div className="text-xs mb-2 leading-snug" style={{ color: cacheData.ctxColor }}>
                    {cacheData.ctx}
                  </div>
                  <div className="h-[3px] rounded-sm bg-white/[0.07] overflow-hidden mb-2">
                    <div
                      className="h-full rounded-sm transition-[width] duration-700"
                      style={{
                        width: `${cacheData.bar}%`,
                        background: "linear-gradient(90deg,#2a7a3a,#6ee7b7)",
                      }}
                    />
                  </div>
                  <div className="text-[10px] text-white/25">{cacheData.fresh}</div>
                </>
              )}
              {cacheError && <div className="text-[10px] text-white/25">Could not load — use USGS link below</div>}
              <a
                href="https://waterdata.usgs.gov/monitoring-location/11451000/#dataTypeId=continuous-00060-0&period=P7D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-[#3a7aaa] hover:text-[#7fd8ff] inline-block mt-1"
              >
                View full record on USGS <ExternalLink className="w-2.5 h-2.5 inline ml-0.5" />
              </a>
            </div>

            {/* Cyanobacteria */}
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-[13px] p-5">
              <div className="flex justify-between items-start mb-2 gap-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#e8f0f7]">
                  <FlaskConical className="w-4 h-4 text-[#d4a830]" />
                  Cyanobacteria Monitoring
                </div>
                <div className="text-[10px] text-white/30 text-right leading-snug flex-shrink-0">
                  Big Valley Rancheria
                  <br />
                  EPA Monitoring
                </div>
              </div>
              {cyanoSeasonal && (
                <div className="text-sm mb-1 leading-snug" style={{ color: cyanoSeasonal.color }}>
                  {cyanoSeasonal.text}
                </div>
              )}
              <a
                href="https://www.bvrancheria.com/clearlakecyanotoxins"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[rgba(212,168,48,.1)] border border-[rgba(212,168,48,.2)] rounded-2xl px-3 py-1.5 text-xs text-[#d4a830] font-semibold mt-2 hover:bg-[rgba(212,168,48,.18)] transition-colors"
              >
                View Current Conditions <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
