"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Map, ExternalLink } from "lucide-react"
import Link from "next/link"

export function MapSection() {
  const [isMapExpanded, setIsMapExpanded] = useState(true)

  return (
    <section 
      id="map" 
      className="pb-16 px-4 md:px-8"
      style={{ background: "linear-gradient(180deg,#060f1a 0%,#0c2035 50%,#07141f 100%)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Interactive Tributary Map</h3>
            <p className="text-white/60 text-sm max-w-[650px] leading-relaxed">
              Click any creek, lake zone, or tab to explore spawner survey data, population trends, and habitat conditions.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/map"
              className="flex items-center gap-2 px-4 py-2 bg-[#1a6fa8]/50 hover:bg-[#1a6fa8] border border-[#1a6fa8] rounded-lg text-white/80 hover:text-white text-sm font-medium transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Full Screen
            </Link>
            <button
              onClick={() => setIsMapExpanded(!isMapExpanded)}
              className="flex items-center gap-2 px-4 py-2 bg-[#1e4a6b]/50 hover:bg-[#1e4a6b] border border-[#1e4a6b] rounded-lg text-white/80 hover:text-white text-sm font-medium transition-all"
            >
              <Map className="w-4 h-4" />
              {isMapExpanded ? (
                <>Collapse <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Expand <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          </div>
        </div>

        <div className={`rounded-xl overflow-hidden shadow-[0_8px_40px_rgba(13,74,114,0.28)] border border-[#1e4a6b] transition-all duration-300 ${isMapExpanded ? 'h-[650px]' : 'h-0 border-0 opacity-0'}`}>
          <iframe 
            src="/map-standalone.html" 
            className="w-full h-full border-0"
            title="Clear Lake Hitch Interactive Map"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
