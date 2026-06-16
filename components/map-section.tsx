import Link from "next/link"
import { Map, ArrowRight } from "lucide-react"

export function MapSection() {
  return (
    <section
      id="map"
      className="pb-16 px-4 md:px-8"
      style={{ background: "linear-gradient(180deg,#060f1a 0%,#0c2035 50%,#07141f 100%)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-1">Interactive Tributary Map</h3>
          <p className="text-white/60 text-sm max-w-[650px] leading-relaxed">
            Explore every spawning creek, lake zone, and survey site, with population trends and habitat
            conditions for each.
          </p>
        </div>

        <Link
          href="/map"
          className="group block rounded-xl border border-[#1e4a6b] overflow-hidden shadow-[0_8px_40px_rgba(13,74,114,0.28)] transition-all hover:border-[#3a7aaa]"
        >
          <div
            className="flex flex-col items-center justify-center text-center px-6 py-16 md:py-20"
            style={{
              background:
                "radial-gradient(ellipse at 50% 40%, rgba(127,216,255,0.10) 0%, transparent 60%), linear-gradient(135deg,#0d3a5a 0%,#0a2540 55%,#061729 100%)",
            }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#1a6fa8]/30 border border-[#7fd8ff]/30 flex items-center justify-center mb-4">
              <Map className="w-8 h-8 text-[#7fd8ff]" aria-hidden="true" />
            </div>
            <div className="text-white text-lg font-semibold mb-1">Open the interactive map</div>
            <div className="text-white/55 text-sm mb-5">
              27 tributaries · live USGS gauges · spawner survey data
            </div>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1a6fa8] text-white text-sm font-semibold group-hover:bg-[#2280c0] transition-colors">
              Explore the map <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  )
}
