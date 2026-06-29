import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[86vh] flex items-center py-16 px-4 md:px-8 overflow-hidden">
      {/* Background: Kelsey Creek, the lake's most important spawning tributary */}
      <picture>
        <source srcSet="/creek-photos/kelsey/09-lg.webp" type="image/webp" />
        <img
          src="/creek-photos/kelsey/09-lg.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>
      {/* Overlays for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--lake-dark)]/95 via-[var(--lake-dark)]/75 to-[var(--lake-dark)]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--lake-dark)]/55 via-transparent to-[var(--lake-dark)]/15" />

      <div className="max-w-[1100px] mx-auto w-full relative z-10">
        <div className="max-w-[640px]">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-[rgba(45,122,58,0.45)] text-[#9efaae] border border-[rgba(80,200,100,0.4)]">
              Endemic to Clear Lake
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-[rgba(200,120,0,0.4)] text-[#ffe599] border border-[rgba(255,220,100,0.4)]">
              CA Threatened Species
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/[0.18] text-white border border-white/30">
              Federal ESA Proposed
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.05] mb-5 text-balance">
            Protecting the <span className="text-[#7fd8ff]">Clear Lake Hitch</span> for Future Generations
          </h1>

          {/* Subheading */}
          <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
            The Clear Lake Hitch lives in this one California lake and nowhere else on Earth. Its numbers have fallen
            about 96% since 2017, and in 2023 Lake County declared a local state of emergency over the risk of losing
            it. This site gathers the surveys, the live lake data, and the record of what is happening.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link
              href="#lake-status"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-white text-[var(--lake-dark)] hover:bg-[var(--lake-light)] transition-colors"
            >
              <span
                className="w-2 h-2 rounded-full bg-[#00c853] flex-shrink-0"
                style={{ animation: "live-blink 1.4s ease-in-out infinite" }}
              />
              Live Conditions
            </Link>
            <Link
              href="#fish"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-white/10 text-white border-[1.5px] border-white/50 hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Explore Fish Guide
            </Link>
            <Link
              href="#involved"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-white/10 text-white border-[1.5px] border-white/50 hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Community Science
            </Link>
          </div>
        </div>
      </div>

      <span className="absolute bottom-3 right-4 z-10 text-[11px] text-white/55">Kelsey Creek · Photo: Taylor Woodruff</span>
    </section>
  )
}
