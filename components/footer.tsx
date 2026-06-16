import Link from "next/link"
import { Fish } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[var(--text)] text-white/70 py-12 px-4 md:px-8 text-center">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-center justify-center gap-2 text-white text-xl font-bold mb-2">
          <Fish className="w-6 h-6" />
          <span>The Clear Lake Hitch Project</span>
        </div>
        <p className="text-sm mt-4">
          A project by <strong className="text-white">Taylor Woodruff</strong> & <strong className="text-white">Jordan Stevens</strong>
        </p>
        <p className="text-sm mt-2">
          <Link href="https://www.lakecountyca.gov/1450/Clear-Lake-Hitch" target="_blank" rel="noopener noreferrer" className="text-[#7fd8ff] hover:underline">
            lakecountyca.gov
          </Link>
        </p>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm mt-5">
          <Link href="/" className="text-white/70 hover:text-white">Home</Link>
          <Link href="/about" className="text-white/70 hover:text-white">About</Link>
          <Link href="/creeks" className="text-white/70 hover:text-white">Creeks</Link>
          <Link href="/timeline" className="text-white/70 hover:text-white">Timeline</Link>
          <Link href="/archive" className="text-white/70 hover:text-white">Archive</Link>
          <Link href="/map" className="text-white/70 hover:text-white">Map</Link>
          <Link href="/faq" className="text-white/70 hover:text-white">FAQ</Link>
        </nav>
        <p className="text-xs mt-6 opacity-55 max-w-[600px] mx-auto leading-relaxed">
          <strong className="text-[#f59e0b]">Permits are required to conduct fish rescues.</strong> Always contact the Hitch Rescue Team at (707) 263-2344 rather than attempting relocation yourself.
        </p>
        <p className="text-xs mt-4 opacity-60 max-w-[600px] mx-auto leading-relaxed">
          Disclaimer: Lake coordinates, tributary locations, and associated data presented on this site are still being verified and may contain inaccuracies. This project is for educational and awareness purposes. Always confirm details with official sources before making decisions based on this information.
        </p>
        <p className="text-xs mt-6 opacity-45">
          Created with care for Clear Lake and the communities that depend on it.
        </p>
      </div>
    </footer>
  )
}
