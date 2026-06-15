"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

interface SpawnPhase {
  phase: string
  color: string
  bg: string
  border: string
  label: string
  desc: string
  info: string
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
      desc: "First adult hitch are beginning to move into tributaries.",
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
      desc: "Clear Lake hitch are actively migrating into spawning tributaries.",
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
      desc: "Spawning is winding down. Watch for stranded fish.",
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
      desc: "Hitch are overwintering in Clear Lake.",
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
    desc: "Spawning is complete for this year.",
    info: `Next spawning season in ~${dl} day${dl !== 1 ? "s" : ""}`,
  }
}

export function QuickAccessSection() {
  const [spawnPhase, setSpawnPhase] = useState<SpawnPhase | null>(null)

  useEffect(() => {
    setSpawnPhase(getSpawnPhase(new Date()))
  }, [])

  return (
    <div className="bg-background border-b-2 border-border py-5 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-3">
        {/* Live Conditions Card */}
        <Link
          href="#lake-status"
          className="flex items-center gap-3 p-4 rounded-xl border-[1.5px] border-[rgba(0,200,83,.25)] bg-[#f0fff4] hover:border-[var(--lake)] hover:shadow-[0_3px_14px_rgba(26,111,168,.1)] hover:-translate-y-[1px] transition-all cursor-pointer"
        >
          <span
            className="w-2 h-2 rounded-full bg-[#00c853] flex-shrink-0 animate-pulse"
            style={{
              animation: "live-blink 1.4s ease-in-out infinite",
            }}
          />
          <div>
            <strong className="block text-sm font-semibold text-[#00a844]">
              {spawnPhase ? spawnPhase.label : "Live Conditions"}
            </strong>
            <span className="text-xs text-muted-foreground">
              {spawnPhase ? spawnPhase.info || "Tap to view lake status" : "Loading spawning status..."}
            </span>
          </div>
        </Link>

        {/* Fish Guide Card */}
        <Link
          href="#fish"
          className="flex items-center gap-3 p-4 rounded-xl border-[1.5px] border-border bg-background hover:border-[var(--lake)] hover:shadow-[0_3px_14px_rgba(26,111,168,.1)] hover:-translate-y-[1px] transition-all cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--lake)] flex-shrink-0" />
          <div>
            <strong className="block text-sm font-semibold text-foreground">Explore Fish Guide</strong>
            <span className="text-xs text-muted-foreground">All 36 species + failed introductions</span>
          </div>
        </Link>

        {/* Community Science Card */}
        <Link
          href="#involved"
          className="flex items-center gap-3 p-4 rounded-xl border-[1.5px] border-border bg-background hover:border-[var(--lake)] hover:shadow-[0_3px_14px_rgba(26,111,168,.1)] hover:-translate-y-[1px] transition-all cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--green)] flex-shrink-0" />
          <div>
            <strong className="block text-sm font-semibold text-foreground">Become a Community Scientist</strong>
            <span className="text-xs text-muted-foreground">Report sightings · Save stranded hitch</span>
          </div>
        </Link>

        {/* Archive Card */}
        <Link
          href="/archive"
          className="flex items-center gap-3 p-4 rounded-xl border-[1.5px] border-border bg-background hover:border-[var(--lake)] hover:shadow-[0_3px_14px_rgba(26,111,168,.1)] hover:-translate-y-[1px] transition-all cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--lake)] flex-shrink-0" />
          <div>
            <strong className="block text-sm font-semibold text-foreground">Hitch Archive</strong>
            <span className="text-xs text-muted-foreground">Reports, studies &amp; data from 2013–2025</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
