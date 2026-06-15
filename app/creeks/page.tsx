import type { Metadata } from 'next'
import { Fish } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { CreekExplorer } from './CreekExplorer'
import { priorityTributaries } from './creek-data'
import './creeks.css'

export const metadata: Metadata = {
  title: 'Clear Lake Tributaries',
  description:
    'Interactive guide to all 22 tributaries of Clear Lake. Kelsey, Adobe, Cole, Forbes, Burns Valley, and every stream that sustains the endemic Clear Lake hitch.',
  alternates: { canonical: '/creeks' },
}

export default function CreeksPage() {
  return (
    <>
      <Navigation />
      <div className="creeks-page">
        {/* HERO */}
        <section className="hero">
          <div className="hero-inner">
            <div>
              <div className="hero-badges">
                <span className="hero-badge b-white">22 Documented Tributaries</span>
                <span className="hero-badge b-green">9 Active Spawning Streams</span>
                <span className="hero-badge b-blue">Live USGS Data</span>
              </div>
              <h1>
                Clear Lake
                <br />
                <em>Tributaries</em>
              </h1>
              <p className="hero-sub">
                Every stream that feeds Clear Lake tells part of the hitch story. These creeks are
                the spawning grounds and nurseries that sustain California&apos;s most endangered
                endemic fish. Some run strong. Some have gone dry.
              </p>
              <div className="hero-cta">
                <a href="#all-grid" className="hero-cta-primary">
                  View Priority Creeks
                </a>
                <a href="/kelsey.html" className="hero-cta-outline">
                  Kelsey Creek →
                </a>
              </div>
            </div>

            {/* PRIORITY TRIBUTARIES MINI-CHART */}
            <div className="trib-overview">
              <div className="trib-ov-title">Priority Tributaries: 2025 Status</div>
              <div className="trib-bars">
                {priorityTributaries.map((t) => (
                  <div className="trib-row" key={t.name}>
                    <div className="trib-name">{t.name}</div>
                    <div className="trib-bar-bg">
                      <div className="trib-bar-fill" style={{ width: `${t.pct}%`, background: t.bar }} />
                    </div>
                    <span className="trib-val" style={{ color: t.labelColor }}>
                      {t.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <div className="stats-bar">
          <div className="stats-inner">
            <div className="stat">
              <div className="stat-num">22</div>
              <div className="stat-label">Documented tributaries</div>
            </div>
            <div className="stat">
              <div className="stat-num g">9</div>
              <div className="stat-label">Priority spawning streams</div>
            </div>
            <div className="stat">
              <div className="stat-num a">4+</div>
              <div className="stat-label">Active restoration projects</div>
            </div>
            <div className="stat">
              <div className="stat-num r">2</div>
              <div className="stat-label">Streams with no recent adults</div>
            </div>
          </div>
        </div>

        {/* FILTER + GRID (interactive) */}
        <CreekExplorer />

        {/* FOOTER */}
        <footer>
          <div className="fl">
            <Fish size={20} />
            The Clear Lake Hitch Project
          </div>
          <p style={{ marginTop: 6 }}>
            A project by <strong style={{ color: '#fff' }}>Taylor Woodruff</strong> &amp;{' '}
            <strong style={{ color: '#fff' }}>Jordan Stevens</strong>
          </p>
          <p style={{ marginTop: 6 }}>
            <a href="/">← Main site</a>
          </p>
        </footer>
      </div>
    </>
  )
}
