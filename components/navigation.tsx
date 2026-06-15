"use client"

import Link from "next/link"
import { Fish, Menu, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#lake-status", label: "Lake Status" },
  { href: "/#fish", label: "Fish Guide" },
  { href: "/#health", label: "Lake Health" },
  { href: "/#involved", label: "Get Involved" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[var(--lake-dark)] px-4 md:px-8 h-[60px] flex items-center justify-between shadow-lg">
      <Link href="/" className="flex items-center gap-2 text-white font-semibold text-sm tracking-wide">
        <Fish className="w-6 h-6" />
        <span>The Clear Lake Hitch Project</span>
      </Link>
      
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-0">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-white/80 text-[0.82rem] px-4 h-[60px] flex items-center hover:text-white hover:bg-white/[0.08] transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="/creeks"
            className="text-white/80 text-[0.82rem] px-4 h-[60px] flex items-center hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            Creeks
          </a>
        </li>
        <li>
          <Link
            href="/map"
            className="text-white/80 text-[0.82rem] px-4 h-[60px] flex items-center hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            Map
          </Link>
        </li>
        <li>
          <Link
            href="/archive"
            className="text-white/80 text-[0.82rem] px-4 h-[60px] flex items-center hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            Hitch Archive
          </Link>
        </li>
        <li>
          <Link
            href="/timeline"
            className="text-white/80 text-[0.82rem] px-4 h-[60px] flex items-center hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            Timeline
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[60px] left-0 right-0 bg-[var(--lake-dark)] md:hidden shadow-lg">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/80 text-sm px-6 py-4 flex items-center hover:text-white hover:bg-white/[0.08] transition-colors border-b border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/creeks"
                className="text-white/80 text-sm px-6 py-4 flex items-center hover:text-white hover:bg-white/[0.08] transition-colors border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Creeks
              </a>
            </li>
            <li>
              <Link
                href="/map"
                className="text-white/80 text-sm px-6 py-4 flex items-center hover:text-white hover:bg-white/[0.08] transition-colors border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Map
              </Link>
            </li>
            <li>
              <Link
                href="/archive"
                className="text-white/80 text-sm px-6 py-4 flex items-center hover:text-white hover:bg-white/[0.08] transition-colors border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hitch Archive
              </Link>
            </li>
            <li>
              <Link
                href="/timeline"
                className="text-white/80 text-sm px-6 py-4 flex items-center hover:text-white hover:bg-white/[0.08] transition-colors border-b border-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                Timeline
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
