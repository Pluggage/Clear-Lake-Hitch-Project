"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Fish, Menu, X } from "lucide-react"
import { useState } from "react"

/** In-page section links (only resolve on the homepage). */
const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#lake-status", label: "Lake Status" },
  { href: "/#fish", label: "Fish Guide" },
  { href: "/#health", label: "Lake Health" },
  { href: "/#involved", label: "Get Involved" },
]

/** Standalone pages — these get active-state highlighting. */
const pageLinks = [
  { href: "/creeks", label: "Creeks" },
  { href: "/map", label: "Map" },
  { href: "/archive", label: "Hitch Archive" },
  { href: "/timeline", label: "Timeline" },
]

const base = "transition-colors flex items-center"
const inactive = "text-white/80 hover:text-white hover:bg-white/[0.08]"
const active = "text-white bg-white/[0.08]"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const desktopCls = (isActive: boolean) =>
    `${base} text-[0.82rem] px-4 h-[60px] ${isActive ? active : inactive}`
  const mobileCls = (isActive: boolean) =>
    `${base} text-sm px-6 py-4 border-b border-white/10 ${isActive ? active : inactive}`

  return (
    <nav className="sticky top-0 z-50 bg-[var(--lake-dark)] px-4 md:px-8 h-[60px] flex items-center justify-between shadow-lg">
      <Link href="/" className="flex items-center gap-2 text-white font-semibold text-sm tracking-wide">
        <Fish className="w-6 h-6" aria-hidden="true" />
        <span>The Clear Lake Hitch Project</span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-0">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={desktopCls(false)}>
              {link.label}
            </Link>
          </li>
        ))}
        {pageLinks.map((link) => {
          const isActive = pathname === link.href
          return (
            <li key={link.href}>
              <Link href={link.href} aria-current={isActive ? "page" : undefined} className={desktopCls(isActive)}>
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[60px] left-0 right-0 bg-[var(--lake-dark)] md:hidden shadow-lg">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={mobileCls(false)} onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
            {pageLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={mobileCls(isActive)}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </nav>
  )
}
