import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function MapSection() {
  return (
    <section
      id="map"
      className="relative overflow-hidden pb-20 px-4 md:px-8"
      style={{ background: "linear-gradient(180deg,#060f1a 0%,#0c2035 50%,#07141f 100%)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-end justify-between gap-4 mb-4 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">Interactive Tributary Map</h2>
            <p className="text-white/60 text-sm max-w-[650px] leading-relaxed">
              Each dot is a creek the hitch spawn in. Kelsey and Adobe still carry most of the run; click any creek
              for its survey history and conditions.
            </p>
          </div>
          <Link
            href="/map"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a6fa8] text-white text-sm font-semibold hover:bg-[#2280c0] transition-colors shrink-0"
          >
            Open full map <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="rounded-xl overflow-hidden border border-[#1e4a6b] shadow-[0_8px_40px_rgba(13,74,114,0.28)]">
          <iframe
            src="/map?embed=1"
            title="Interactive map of Clear Lake and its spawning tributaries"
            loading="lazy"
            className="w-full border-0 block h-[78svh] md:h-[540px]"
          />
        </div>
      </div>
      {/* Wave divider into the sand watershed section below */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[40px] md:h-[56px] block"
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,56 L0,30 C240,6 480,6 720,22 C960,38 1200,42 1440,18 L1440,56 Z" fill="var(--sand)" />
      </svg>
    </section>
  )
}
