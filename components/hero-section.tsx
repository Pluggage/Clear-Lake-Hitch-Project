import Link from "next/link"
import { Fish } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[88vh] flex items-center py-16 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-[var(--lake-dark)] via-[var(--lake)] to-[#2980b9]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] rounded-full bg-white/[0.03]" />
        <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[25%] rounded-full bg-white/[0.03]" />
      </div>
      
      <div className="max-w-[1100px] mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-[rgba(45,122,58,0.3)] text-[#9efaae] border border-[rgba(80,200,100,0.3)]">
              Endemic to Clear Lake
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-[rgba(200,120,0,0.25)] text-[#ffe599] border border-[rgba(255,220,100,0.3)]">
              CA Threatened Species
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/[0.12] text-white/90 border border-white/20">
              Federal ESA Proposed
            </span>
          </div>
          
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 text-balance">
            Protecting the<br />
            <span className="text-[#7fd8ff]">Clear Lake Hitch</span><br />
            for Future Generations
          </h1>
          
          {/* Subheading */}
          <p className="text-white/85 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
            The Clear Lake Hitch is a culturally significant minnow found nowhere else on Earth. We monitor, protect, and advocate for this remarkable fish — and the lake ecosystem it calls home.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="#lake-status"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-white text-[var(--lake-dark)] hover:bg-[var(--lake-light)] transition-colors"
            >
              <span
                className="w-2 h-2 rounded-full bg-[#00c853] flex-shrink-0"
                style={{
                  animation: "live-blink 1.4s ease-in-out infinite",
                }}
              />
              Live Conditions
            </Link>
            <div className="flex gap-3">
              <Link
                href="#fish"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-transparent text-white border-[1.5px] border-white/50 hover:bg-white/10 transition-colors"
              >
                Explore Fish Guide
              </Link>
              <Link
                href="#involved"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-transparent text-white border-[1.5px] border-white/50 hover:bg-white/10 transition-colors"
              >
                Community Science
              </Link>
            </div>
          </div>
        </div>
        
        {/* Fish Card */}
        <div className="hidden md:flex justify-center items-center">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center backdrop-blur-sm max-w-[300px]">
            <div className="relative w-full h-[130px] mb-4">
              <img
                src="/images/clear-lake-hitch.png"
                alt="Clear Lake Hitch fish"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
            <h3 className="text-white text-lg font-semibold mb-1">Clear Lake Hitch</h3>
            <p className="text-white/70 text-sm italic mb-2">Lavinia exilicauda chi</p>
            <p className="text-white/50 text-xs">Endemic · Up to 350mm · Lives ~6 years</p>
          </div>
        </div>
      </div>
    </section>
  )
}
