import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Fish } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { LakeConditions } from '@/components/creek/LakeConditions'
import { creeks } from '../../creeks/creek-data'
import { mckd } from '../../map/map-data'
import '@/components/creek/creek-detail.css'

type Info = { t: string; tags?: string[]; b: string; s?: { l: string; v: string; c?: string }[] }
const MCKD = mckd as Record<string, Info>

/** Lightweight creek pages (everything not given its own bespoke route). */
const lightweight = creeks.filter((c) => c.href.startsWith('/creek/'))
const bySlug = (slug: string) => lightweight.find((c) => c.href === `/creek/${slug}`)

/** Map a creek slug to the interactive map's richer data, where it exists. */
const MAP_KEY: Record<string, string> = {
  'rodman-slough': 'rodman', 'scotts-creek': 'scotts_sys', lyons: 'lyons', morrison: 'morrison',
  lucerne: 'lucerne', manning: 'manning', rumsey: 'rumsey', mcgaugh: 'mcgaugh', cole: 'cole',
  schindler: 'schindler', thompson: 'thompson', hill: 'hill', 'highland-creek': 'highland',
  'seigler-system': 'seigler_sys',
}

const STATUS_BADGE: Record<string, { label: string; cls: string }> = {
  active: { label: 'Active Spawning', cls: 'b-green' },
  concern: { label: 'Concern', cls: 'b-amber' },
  none: { label: 'Survey Site', cls: 'b-blue' },
}

export function generateStaticParams() {
  return lightweight.map((c) => ({ slug: c.href.replace('/creek/', '') }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const creek = bySlug(slug)
  if (!creek) return {}
  return {
    title: creek.name,
    description: `${creek.name} — ${creek.location}. ${creek.description}`,
    alternates: { canonical: `/creek/${slug}` },
  }
}

export default async function CreekPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const creek = bySlug(slug)
  if (!creek) notFound()

  const info = MAP_KEY[slug] ? MCKD[MAP_KEY[slug]] : undefined
  const status = STATUS_BADGE[creek.status]
  const nearby = creeks.filter((c) => c.name !== creek.name && c.status === 'active').slice(0, 4)

  return (
    <>
      <Navigation />
      <div className="creek-detail">
        <div className="bc">
          <a href="/">Home</a>
          <span className="bc-sep">›</span>
          <a href="/creeks">Tributaries</a>
          <span className="bc-sep">›</span>
          {creek.name}
        </div>

        {/* HERO */}
        <section className="hero">
          <div className="hero-inner" style={{ gridTemplateColumns: '1fr' }}>
            <div>
              <div className="hero-badges">
                <span className={`hero-badge ${status.cls}`}>{status.label}</span>
                {creek.tags.map((t) => (
                  <span key={t.label} className="hero-badge b-blue">{t.label}</span>
                ))}
              </div>
              <h1>{creek.name}</h1>
              <p className="hero-sub">{creek.location}. {creek.description}</p>
              <div className="hero-btns">
                <a href="/creeks" className="btn btn-outline">← All Creeks</a>
                <a href="/map" className="btn btn-outline">View on map</a>
              </div>
            </div>
          </div>
        </section>

        {/* CONDITIONS */}
        <LakeConditions creekName={creek.name} />

        {/* MAIN + SIDEBAR */}
        <div className="main-grid">
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <span className="section-label">About This Creek</span>
              <h2 className="section-h2l" style={{ marginTop: '.6rem' }}>{creek.name}</h2>
              <div className="prose">
                <p>{creek.description}</p>
                {info && info.b !== creek.description && <p>{info.b}</p>}
              </div>
            </div>

            {info?.s && info.s.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <span className="section-label">Key Data</span>
                <div className="side-card" style={{ marginTop: '.6rem' }}>
                  {info.s.map((r) => (
                    <div className="side-row" key={r.l}>
                      <span className="side-lbl">{r.l}</span>
                      <span className={`side-val ${r.c === 'mdg' ? 'g' : r.c === 'mdw' ? 'a' : ''}`}>{r.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <p style={{ color: 'var(--muted)', fontSize: '.85rem', fontStyle: 'italic' }}>
              This is one of Clear Lake&apos;s {creeks.length} documented tributaries. Detailed survey
              history and field photos are available for the priority spawning streams.
            </p>
          </div>

          {/* SIDEBAR */}
          <aside className="sidebar">
            <div className="side-card dark">
              <h3>At a Glance</h3>
              <div className="side-row"><span className="side-lbl">Location</span><span className="side-val">{creek.location}</span></div>
              <div className="side-row"><span className="side-lbl">Status</span><span className={`side-val ${creek.status === 'active' ? 'g' : creek.status === 'concern' ? 'a' : ''}`}>{status.label}</span></div>
            </div>
            <div className="side-card">
              <h3>Quick Actions</h3>
              <div className="side-actions">
                <a href="/map" className="side-btn primary">Open Interactive Map</a>
                <a href={`/archive?q=${encodeURIComponent(creek.name.replace(/ Creek| Slough| System/g, '').trim())}`} className="side-btn outline">Archive Reports</a>
                <a href="tel:7072632344" className="side-btn emergency">⚠ Report Stranded Hitch</a>
              </div>
            </div>
            <div className="side-card">
              <h3>Active Spawning Tributaries</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: '.2rem' }}>
                {nearby.map((n) => (
                  <a key={n.href} href={n.href} className="creek-link"><strong>{n.name}</strong><span>{n.location}</span></a>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* FOOTER */}
        <footer>
          <div className="fl"><Fish size={20} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 8 }} />The Clear Lake Hitch Project</div>
          <p style={{ marginTop: 6 }}>A project by <strong style={{ color: '#fff' }}>Taylor Woodruff</strong> &amp; <strong style={{ color: '#fff' }}>Jordan Stevens</strong></p>
          <p style={{ marginTop: 6 }}><a href="/creeks">← Back to all tributaries</a> · <a href="/">Main site</a></p>
        </footer>
      </div>
    </>
  )
}
