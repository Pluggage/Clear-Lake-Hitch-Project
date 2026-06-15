import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Fish } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { LakeConditions } from '@/components/creek/LakeConditions'
import { creeks, type Creek } from '../../creeks/creek-data'
import { mckd } from '../../map/map-data'
import '@/components/creek/creek-detail.css'

type Info = { t: string; tags?: string[]; b: string; s?: { l: string; v: string; c?: string }[] }
const MCKD = mckd as Record<string, Info>

const lightweight = creeks.filter((c) => c.href.startsWith('/creek/'))
const slugOf = (c: Creek) => (c.href.startsWith('/creek/') ? c.href.slice('/creek/'.length) : c.href.slice(1))
const bySlug = (slug: string) => lightweight.find((c) => slugOf(c) === slug)

/** Richer data from the interactive map, where a creek has it. */
const MAP_KEY: Record<string, string> = {
  'rodman-slough': 'rodman', 'scotts-creek': 'scotts_sys', lyons: 'lyons', morrison: 'morrison',
  lucerne: 'lucerne', manning: 'manning', rumsey: 'rumsey', mcgaugh: 'mcgaugh', cole: 'cole',
  schindler: 'schindler', thompson: 'thompson', hill: 'hill', 'highland-creek': 'highland',
  'seigler-system': 'seigler_sys',
}

/** Watershed grouping, derived from each creek's documented location/connections. */
const SYSTEM: Record<string, string> = {
  // Scotts Creek / Rodman Slough watershed (north shore)
  'alley-creek': 'scotts', 'clover-creek': 'scotts', 'cooper-creek': 'scotts', 'dayle-creek': 'scotts',
  hendricks: 'scotts', 'middle-creek': 'scotts', 'pool-creek': 'scotts', 'rodman-slough': 'scotts', 'scotts-creek': 'scotts',
  // Seigler Canyon / Cache Creek drainage (east shore)
  copsey: 'seigler', 'perini-creek': 'seigler', 'seigler-system': 'seigler',
  // Big Valley & south shore
  cole: 'bigvalley', 'highland-creek': 'bigvalley', manning: 'bigvalley', mcgaugh: 'bigvalley',
  rumsey: 'bigvalley', thompson: 'bigvalley', hill: 'bigvalley', adobe: 'bigvalley', kelsey: 'bigvalley',
  // Lower Arm & east shore
  burns: 'lowerarm', schindler: 'lowerarm',
  // North & Upper Arm
  lyons: 'north', lucerne: 'north', morrison: 'north',
  // West shore
  forbes: 'west',
}
const SYSTEM_NAME: Record<string, string> = {
  scotts: 'Scotts Creek / Rodman Slough watershed',
  seigler: 'Seigler Canyon / Cache Creek drainage',
  bigvalley: 'Big Valley & south shore',
  lowerarm: 'Lower Arm & east shore',
  north: 'North & Upper Arm',
  west: 'West shore · Lakeport',
}

const STATUS_BADGE: Record<string, { label: string; cls: string; side: string }> = {
  active: { label: 'Active Spawning', cls: 'b-green', side: 'g' },
  concern: { label: 'Concern', cls: 'b-amber', side: 'a' },
  none: { label: 'Survey Site', cls: 'b-blue', side: '' },
}

export function generateStaticParams() {
  return lightweight.map((c) => ({ slug: slugOf(c) }))
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
  const shore = creek.location.split(',')[0]
  const systemKey = SYSTEM[slug]
  const systemName = systemKey ? SYSTEM_NAME[systemKey] : undefined
  const siblings = creeks.filter((c) => c.name !== creek.name && SYSTEM[slugOf(c)] === systemKey).slice(0, 6)

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
                {systemName && (
                  <p>
                    {creek.name} is part of the <strong>{systemName}</strong>
                    {siblings.length > 0 ? ', one of several tributaries that drain this part of the watershed.' : '.'}
                  </p>
                )}
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
              One of Clear Lake&apos;s {creeks.length} documented tributaries. Detailed survey history
              and field photos are available for the priority spawning streams: {' '}
              <a href="/kelsey" style={{ color: 'var(--lake)' }}>Kelsey</a>,{' '}
              <a href="/adobe" style={{ color: 'var(--lake)' }}>Adobe</a>,{' '}
              <a href="/burns" style={{ color: 'var(--lake)' }}>Burns Valley</a>, and{' '}
              <a href="/forbes" style={{ color: 'var(--lake)' }}>Forbes</a>.
            </p>
          </div>

          {/* SIDEBAR */}
          <aside className="sidebar">
            <div className="side-card dark">
              <h3>Creek Profile</h3>
              <div className="side-row"><span className="side-lbl">Location</span><span className="side-val">{creek.location}</span></div>
              <div className="side-row"><span className="side-lbl">Shore</span><span className="side-val">{shore}</span></div>
              {systemName && <div className="side-row"><span className="side-lbl">Watershed</span><span className="side-val">{systemName}</span></div>}
              <div className="side-row"><span className="side-lbl">Survey status</span><span className={`side-val ${status.side}`}>{status.label}</span></div>
            </div>
            <div className="side-card">
              <h3>Quick Actions</h3>
              <div className="side-actions">
                <a href="/map" className="side-btn primary">Open Interactive Map</a>
                <a href={`/archive?q=${encodeURIComponent(creek.name.replace(/ Creek| Slough| System/g, '').trim())}`} className="side-btn outline">Archive Reports</a>
                <a href="tel:7072632344" className="side-btn emergency">⚠ Report Stranded Hitch</a>
              </div>
            </div>
            {siblings.length > 0 && (
              <div className="side-card">
                <h3>{systemName ? 'More in this watershed' : 'Explore Nearby'}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: '.2rem' }}>
                  {siblings.map((n) => (
                    <a key={n.href} href={n.href} className="creek-link"><strong>{n.name}</strong><span>{n.location}</span></a>
                  ))}
                </div>
              </div>
            )}
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
