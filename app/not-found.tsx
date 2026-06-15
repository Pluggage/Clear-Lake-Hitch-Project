import Link from "next/link"
import { Fish } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0d4a72] px-8 flex items-center justify-between h-[60px] shadow-md">
        <Link href="/" className="text-white text-base font-semibold no-underline flex items-center gap-2.5">
          <Fish className="w-6 h-6 text-white" />
          Clear Lake Hitch Project
        </Link>
        <ul className="flex list-none">
          <li>
            <Link href="/" className="text-white/80 no-underline text-sm px-3 h-[60px] flex items-center transition-colors hover:text-white hover:bg-white/10">
              Tributaries
            </Link>
          </li>
          <li>
            <Link href="/#about" className="text-white/80 no-underline text-sm px-3 h-[60px] flex items-center transition-colors hover:text-white hover:bg-white/10">
              The Hitch
            </Link>
          </li>
          <li>
            <Link href="/timeline" className="text-white/80 no-underline text-sm px-3 h-[60px] flex items-center transition-colors hover:text-white hover:bg-white/10">
              Timeline
            </Link>
          </li>
        </ul>
      </nav>

      {/* Page Body */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-12 relative overflow-hidden bg-gradient-to-b from-[#f0f7ff] to-white">
        {/* Background watermark fish SVG */}
        <svg 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.055] pointer-events-none w-[min(620px,90vw)]" 
          viewBox="0 0 600 340" 
          xmlns="http://www.w3.org/2000/svg" 
          aria-hidden="true"
        >
          {/* body */}
          <ellipse cx="270" cy="170" rx="200" ry="100" fill="#1a6fa8"/>
          {/* tail fin */}
          <polygon points="470,170 560,90 560,250" fill="#1a6fa8"/>
          {/* tail notch */}
          <polygon points="490,170 555,100 555,240" fill="white"/>
          {/* top fin (dorsal) */}
          <path d="M180,75 C200,20 280,15 320,70" fill="none" stroke="#1a6fa8" strokeWidth="22" strokeLinecap="round"/>
          {/* pectoral fin */}
          <ellipse cx="220" cy="195" rx="55" ry="22" fill="#1a6fa8" transform="rotate(-30 220 195)"/>
          {/* head */}
          <ellipse cx="100" cy="170" rx="62" ry="75" fill="#1a6fa8"/>
          {/* mouth */}
          <path d="M44,185 Q55,200 66,185" fill="none" stroke="#0d4a72" strokeWidth="5" strokeLinecap="round"/>
          {/* eye socket */}
          <circle cx="85" cy="148" r="18" fill="white"/>
          <circle cx="85" cy="148" r="11" fill="#0d4a72"/>
          <circle cx="89" cy="144" r="4" fill="white"/>
          {/* lateral line */}
          <path d="M130,165 Q260,155 400,165 Q440,168 465,170" fill="none" stroke="#0d4a72" strokeWidth="3" strokeDasharray="8 5" opacity=".4"/>
          {/* scales suggestion */}
          <ellipse cx="200" cy="145" rx="28" ry="14" fill="none" stroke="#0d4a72" strokeWidth="2" opacity=".25" transform="rotate(-10 200 145)"/>
          <ellipse cx="250" cy="152" rx="28" ry="14" fill="none" stroke="#0d4a72" strokeWidth="2" opacity=".25" transform="rotate(-5 250 152)"/>
          <ellipse cx="300" cy="156" rx="28" ry="14" fill="none" stroke="#0d4a72" strokeWidth="2" opacity=".25"/>
          <ellipse cx="350" cy="157" rx="28" ry="14" fill="none" stroke="#0d4a72" strokeWidth="2" opacity=".25" transform="rotate(3 350 157)"/>
          <ellipse cx="215" cy="180" rx="28" ry="14" fill="none" stroke="#0d4a72" strokeWidth="2" opacity=".25" transform="rotate(5 215 180)"/>
          <ellipse cx="265" cy="185" rx="28" ry="14" fill="none" stroke="#0d4a72" strokeWidth="2" opacity=".25" transform="rotate(5 265 185)"/>
          <ellipse cx="315" cy="182" rx="28" ry="14" fill="none" stroke="#0d4a72" strokeWidth="2" opacity=".25" transform="rotate(5 315 182)"/>
          {/* X eyes (ded fish) */}
          <line x1="77" y1="140" x2="93" y2="156" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
          <line x1="93" y1="140" x2="77" y2="156" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
          {/* text 404 watermark inside body */}
          <text x="270" y="188" textAnchor="middle" fontFamily="'Segoe UI',system-ui,sans-serif" fontSize="72" fontWeight="900" fill="#0d4a72" opacity=".18">404</text>
        </svg>

        <div className="relative z-10 text-center max-w-[560px]">
          {/* Error badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d6eaf8] text-[#0d4a72] text-xs font-bold tracking-wide mb-5 border border-[rgba(26,111,168,0.18)]">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M6.5 3.5v3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              <circle cx="6.5" cy="9.2" r=".7" fill="currentColor"/>
            </svg>
            Error 404
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0d4a72] leading-tight tracking-tight mb-2">
            Fish <em className="text-[#1a6fa8] not-italic">Not</em> Found
          </h1>

          <p className="text-base text-[#5a6474] leading-relaxed mb-2">
            The page you&apos;re looking for has <strong className="text-[#1a1a1a]">gone upstream</strong>, or it hasn&apos;t been built yet. Either way, this hitch got away.
          </p>

          <p className="text-sm text-[#5a6474] mb-8 italic">
            &quot;This page is still in its larval stage&quot;
          </p>

          <div className="flex flex-wrap gap-2.5 justify-center mb-10">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold no-underline transition-all bg-[#1a6fa8] text-white border border-[#1a6fa8] hover:bg-[#0d4a72] hover:border-[#0d4a72]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 12V7M7 7L4 10M7 7L10 10M2 5l5-3 5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to tributaries
            </Link>
            <Link 
              href="/#about" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold no-underline transition-all bg-white text-[#1a6fa8] border border-[#dde3ea] hover:bg-[#d6eaf8] hover:border-[#1a6fa8]"
            >
              Learn about the hitch
            </Link>
          </div>

          {/* Quick links */}
          <div className="bg-[#f5f0e8] border border-[#dde3ea] rounded-xl p-4 text-left w-full">
            <div className="text-xs font-bold tracking-wider uppercase text-[#5a6474] mb-3">
              Pages that do exist
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <Link href="/" className="flex items-center gap-2 p-2 rounded-lg no-underline text-[#1a1a1a] text-sm transition-colors hover:bg-[#d6eaf8] hover:text-[#0d4a72]">
                <span className="w-2 h-2 rounded-full flex-shrink-0 bg-[#1a6fa8]"></span>
                Tributary map
              </Link>
              <Link href="/#about" className="flex items-center gap-2 p-2 rounded-lg no-underline text-[#1a1a1a] text-sm transition-colors hover:bg-[#d6eaf8] hover:text-[#0d4a72]">
                <span className="w-2 h-2 rounded-full flex-shrink-0 bg-[#2d7a3a]"></span>
                The Clear Lake hitch
              </Link>
              <Link href="/timeline" className="flex items-center gap-2 p-2 rounded-lg no-underline text-[#1a1a1a] text-sm transition-colors hover:bg-[#d6eaf8] hover:text-[#0d4a72]">
                <span className="w-2 h-2 rounded-full flex-shrink-0 bg-[#c87800]"></span>
                Population timeline
              </Link>
              <Link href="/archive" className="flex items-center gap-2 p-2 rounded-lg no-underline text-[#1a1a1a] text-sm transition-colors hover:bg-[#d6eaf8] hover:text-[#0d4a72]">
                <span className="w-2 h-2 rounded-full flex-shrink-0 bg-[#1a6fa8]"></span>
                Creek archive
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0d4a72] text-white/55 text-center py-3.5 px-8 text-xs">
        <p>
          © 2026 The Clear Lake Hitch Project &nbsp;·&nbsp; 
          <Link href="/" className="text-[rgba(127,216,255,0.7)] no-underline hover:text-white">Home</Link> 
          &nbsp;·&nbsp; No hitch were harmed in the making of this 404.
        </p>
      </footer>
    </div>
  )
}
