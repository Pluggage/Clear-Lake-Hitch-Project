import type { Metadata } from 'next'
import { Fish } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { LakeConditions } from '@/components/creek/LakeConditions'
import { PhotoLightbox } from '@/components/creek/PhotoLightbox'
import { photos, infoCards, barriers, survey, nearby } from './burns-data'
import '@/components/creek/creek-detail.css'

export const metadata: Metadata = {
  title: 'Burns Valley Creek',
  description:
    'Burns Valley Creek is Clear Lake\'s standout juvenile hitch nursery — ~4,000 juveniles and thousands of larvae documented in 2024. Survey history, barriers, and field photos.',
  alternates: { canonical: '/burns' },
}

export default function BurnsPage() {
  return (
    <>
      <Navigation />
      <div id="main" role="main" className="creek-detail">
        <div className="bc">
          <a href="/">Home</a>
          <span className="bc-sep">›</span>
          <a href="/creeks">Tributaries</a>
          <span className="bc-sep">›</span>
          Burns Valley Creek
        </div>

        {/* HERO */}
        <section className="hero">
          <div className="hero-inner">
            <div>
              <div className="hero-badges">
                <span className="hero-badge b-green">Active Spawning</span>
                <span className="hero-badge b-blue">Priority Tributary</span>
                <span className="hero-badge b-green">Juvenile Nursery</span>
              </div>
              <h1>Burns Valley Creek<br /><em>Major Juvenile Nursery</em></h1>
              <p className="hero-sub">Enters Clear Lake in the Lower Arm near the city of Clearlake. In 2024 this creek produced the most documented juvenile hitch of any surveyed tributary: ~4,000 juveniles and thousands of larvae recorded by Lake County WPD.</p>
              <div className="hero-btns">
                <a href="#conditions" className="btn btn-white">Creek Conditions</a>
                <a href="#timeline" className="btn btn-outline">Survey History</a>
                <a href="/creeks" className="btn btn-outline">← All Creeks</a>
              </div>
            </div>
            <div className="hero-map">
              <div className="hero-map-label">Burns Valley Creek on Clear Lake</div>
              <svg viewBox="0 50 700 560" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                <path className="mm-lake" d="M 138.8,39.1 L 134.8,39.1 L 128.6,47.3 L 123.1,47.4 L 122.5,52.2 L 117.2,55.7 L 109.0,48.4 L 103.2,50.0 L 101.6,52.8 L 100.3,49.9 L 98.1,50.4 L 98.3,56.4 L 84.6,68.1 L 83.5,73.7 L 78.1,78.6 L 80.9,81.5 L 68.2,81.5 L 77.0,83.1 L 69.9,84.9 L 75.7,85.2 L 71.0,85.9 L 72.9,87.0 L 68.6,87.0 L 71.8,87.9 L 68.5,90.9 L 70.4,97.1 L 65.8,107.0 L 67.5,108.5 L 63.1,109.0 L 63.8,113.2 L 60.8,116.2 L 63.0,122.0 L 67.5,122.8 L 69.6,126.0 L 66.4,124.3 L 62.6,125.2 L 59.4,131.2 L 60.4,135.4 L 55.8,137.4 L 55.2,140.9 L 49.7,141.6 L 36.3,157.8 L 40.4,163.1 L 36.9,175.9 L 39.3,180.8 L 39.1,190.0 L 37.3,194.9 L 32.3,196.4 L 33.0,198.9 L 37.3,201.6 L 36.5,204.8 L 39.2,209.3 L 36.1,211.4 L 36.4,214.4 L 38.0,225.9 L 42.1,230.0 L 40.7,231.3 L 36.6,232.6 L 37.1,236.6 L 36.7,238.8 L 40.4,241.0 L 39.3,243.4 L 39.7,244.0 L 38.0,245.9 L 39.0,254.8 L 34.2,260.9 L 38.9,261.5 L 42.7,259.5 L 47.1,259.6 L 50.1,260.6 L 52.7,257.5 L 57.6,258.3 L 60.3,255.8 L 62.9,259.5 L 58.4,263.4 L 60.4,266.7 L 68.1,265.2 L 69.7,268.9 L 74.5,269.6 L 76.5,266.5 L 80.6,266.5 L 82.6,263.3 L 92.3,271.2 L 95.9,273.1 L 98.8,260.4 L 101.7,262.1 L 101.8,267.1 L 107.3,262.2 L 110.2,266.9 L 113.8,272.0 L 117.8,261.7 L 122.3,264.0 L 132.5,255.5 L 140.3,258.2 L 146.4,261.0 L 149.3,264.5 L 152.9,269.5 L 155.0,257.7 L 157.5,252.1 L 161.0,248.1 L 158.1,243.6 L 164.0,247.5 L 165.9,255.0 L 165.0,272.0 L 174.3,265.1 L 176.3,260.8 L 178.1,258.5 L 185.0,260.2 L 186.3,261.0 L 189.3,256.9 L 206.8,259.4 L 207.6,259.5 L 210.2,258.6 L 215.7,252.0 L 214.9,261.9 L 229.4,268.6 L 238.6,269.9 L 239.7,270.2 L 246.2,269.1 L 251.8,267.2 L 255.0,273.5 L 259.7,269.8 L 263.5,271.1 L 266.1,271.6 L 260.3,283.0 L 267.1,274.4 L 276.4,280.2 L 285.2,278.9 L 285.8,288.5 L 277.6,296.3 L 279.8,299.7 L 289.8,303.2 L 297.6,316.6 L 321.7,314.5 L 324.3,310.9 L 320.1,305.4 L 327.3,305.8 L 338.4,298.4 L 342.0,296.4 L 347.5,296.9 L 360.1,300.5 L 370.0,310.4 L 379.3,310.8 L 387.0,302.0 L 386.5,275.3 L 380.4,266.2 L 410.1,263.1 L 413.9,277.3 L 407.1,293.1 L 402.5,310.3 L 406.2,324.8 L 413.0,337.7 L 425.1,344.7 L 426.4,352.6 L 435.9,356.0 L 446.4,366.2 L 433.9,369.4 L 424.6,383.2 L 426.0,391.1 L 439.2,394.3 L 439.9,404.8 L 451.7,410.3 L 462.7,407.2 L 474.7,414.9 L 484.0,401.0 L 495.8,398.8 L 509.6,406.2 L 514.1,414.4 L 518.2,421.1 L 526.5,428.5 L 531.2,441.3 L 543.3,442.7 L 549.8,445.2 L 563.9,449.2 L 572.4,445.3 L 576.5,450.6 L 585.5,454.1 L 592.2,447.7 L 609.2,443.3 L 619.7,435.0 L 626.6,439.9 L 630.0,449.4 L 623.2,462.6 L 631.1,462.3 L 641.8,469.7 L 637.6,488.6 L 644.9,498.4 L 647.9,506.7 L 655.6,500.3 L 659.0,500.2 L 656.0,484.2 L 654.3,477.9 L 649.5,474.7 L 660.1,471.3 L 663.9,465.1 L 663.5,459.0 L 666.8,457.9 L 663.9,445.8 L 650.6,438.3 L 636.4,427.8 L 632.0,420.9 L 626.3,413.2 L 630.7,404.1 L 617.9,397.5 L 608.8,399.2 L 598.1,391.3 L 577.1,383.8 L 558.0,376.0 L 550.6,380.0 L 523.3,377.8 L 520.3,374.7 L 523.9,367.6 L 526.1,359.6 L 516.0,341.8 L 507.3,334.9 L 503.0,332.4 L 497.6,326.2 L 478.6,314.3 L 461.8,313.5 L 447.8,305.0 L 503.9,315.2 L 531.5,328.5 L 557.9,327.3 L 573.8,324.1 L 586.7,319.1 L 577.6,303.4 L 586.2,300.6 L 609.5,294.2 L 611.4,288.9 L 609.0,280.7 L 609.5,266.1 L 597.6,271.1 L 574.3,277.2 L 557.5,276.0 L 497.1,276.4 L 452.7,264.9 L 447.5,267.4 L 420.3,246.4 L 402.4,225.8 L 374.2,237.3 L 342.5,221.6 L 332.6,198.4 L 327.7,173.8 L 333.6,158.1 L 331.0,146.5 L 306.7,122.5 L 272.7,84.8 L 250.1,71.9 L 238.7,58.9 L 195.5,43.8 L 166.0,45.0 L 138.8,39.1 Z" />
                <path className="mm-creek" d="M 28,248 L 95,260 L 143,277" />
                <path className="mm-creek" d="M 395,112 L 348,156 L 307,185" />
                <path className="mm-creek" d="M 155,418 L 168,368 L 197,294" />
                <path className="mm-creek" d="M 660,390 L 618,396 L 537,408" />
                <path className="mm-highlight" d="M 537,408 L 558,376 L 577,383 L 589,388 L 608,399 L 617,397 L 625,404 L 630,410 L 626,413 L 632,416 L 632,420 L 636,427 L 645,431 L 650,438 L 660,441 L 663,445 L 665,454 L 663,459" />
                <circle className="mm-mouth" cx="537" cy="408" r="5" />
                <text x="490" y="370" fill="rgba(255,213,79,.9)" fontSize="11" fontWeight="700" fontFamily="system-ui,sans-serif">Burns Valley Cr.</text>
                <text x="490" y="383" fill="rgba(255,213,79,.55)" fontSize="8" fontFamily="system-ui,sans-serif">SE shore · Lower Arm</text>
              </svg>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <div className="stats-bar">
          <div className="stats-inner">
            <div className="stat"><div className="stat-num g">~4,000</div><div className="stat-label">Juvenile hitch observed 2024</div></div>
            <div className="stat"><div className="stat-num g">1,000s</div><div className="stat-label">Larvae observed 2024</div></div>
            <div className="stat"><div className="stat-num a">Jun 14</div><div className="stat-label">2024 flow cutoff date</div></div>
            <div className="stat"><div className="stat-num">SE Shore</div><div className="stat-label">Lower Arm, city of Clearlake</div></div>
          </div>
        </div>

        {/* CONDITIONS (client) */}
        <LakeConditions creekName="Burns Valley Creek" />

        {/* JUVENILE OUTPUT */}
        <div className="timeline-section" id="timeline">
          <div className="section-inner">
            <span className="section-label">Juvenile Production</span>
            <div className="pop-header" style={{ marginTop: '.6rem' }}>
              <div className="pop-title">Burns Valley Creek: 2024 Juvenile Output</div>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '.9rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>In 2024, Burns Valley Creek produced the strongest documented juvenile output of any surveyed tributary. Lake County WPD recorded counts across three life stages (larvae, juveniles, and adults) in the same survey window.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem', textAlign: 'center', borderTop: '4px solid var(--green)' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--green)', lineHeight: 1 }}>~4,000</div>
                <div style={{ fontSize: '.75rem', color: 'var(--muted)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 600 }}>Juveniles observed</div>
                <div style={{ fontSize: '.72rem', color: 'var(--muted)', marginTop: 4 }}>Hitch + Sacramento blackfish</div>
              </div>
              <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem', textAlign: 'center', borderTop: '4px solid var(--lake)' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--lake)', lineHeight: 1 }}>1,000s</div>
                <div style={{ fontSize: '.75rem', color: 'var(--muted)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 600 }}>Larvae observed</div>
                <div style={{ fontSize: '.72rem', color: 'var(--muted)', marginTop: 4 }}>Active rearing confirmed</div>
              </div>
              <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem', textAlign: 'center', borderTop: '4px solid var(--amber)' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--amber)', lineHeight: 1 }}>Jun 14</div>
                <div style={{ fontSize: '.75rem', color: 'var(--muted)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '.06em', fontWeight: 600 }}>Flow cutoff 2024</div>
                <div style={{ fontSize: '.72rem', color: 'var(--muted)', marginTop: 4 }}>Juveniles at risk after this date</div>
              </div>
            </div>
            <div style={{ background: 'var(--green-light)', borderLeft: '4px solid var(--green)', borderRadius: '0 10px 10px 0', padding: '1rem 1.2rem' }}>
              <strong style={{ fontSize: '.88rem', color: 'var(--text)' }}>Why this matters:</strong>
              <p style={{ fontSize: '.85rem', color: 'var(--muted)', marginTop: '.3rem', lineHeight: 1.6 }}>Adult spawner counts tell you fish are there. Juvenile and larvae counts tell you reproduction actually succeeded. Burns Valley Creek in 2024 showed both, making it one of the strongest signs of real population productivity in recent monitoring data.</p>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT + SIDEBAR */}
        <div className="main-grid">
          <div>
            {/* ABOUT */}
            <div style={{ marginBottom: '3rem' }}>
              <span className="section-label">About This Creek</span>
              <h2 className="section-h2l" style={{ marginTop: '.6rem' }}>Where the Next Generation Is Born</h2>
              <div className="about-grid">
                <div className="prose">
                  <p>Burns Valley Creek plays a distinct role in the hitch lifecycle compared to streams like Kelsey or Adobe. While those creeks are primarily documented through adult spawner counts, Burns Valley in 2024 became the standout nursery stream, with ~4,000 juvenile hitch and thousands of larvae recorded by Lake County WPD. That&apos;s not just spawning activity. That&apos;s successful reproduction confirmed through to the next generation.</p>
                  <p>The creek enters Clear Lake&apos;s Lower Arm near the city of Clearlake, draining the Burns Valley corridor southeast of the lake. Sacramento blackfish juveniles were also documented alongside the hitch in 2024, indicating a healthy multi-species nursery environment when flows are adequate.</p>
                  <div className="pull-quote">Burns Valley Creek in 2024 showed us what success looks like: not just adults in the water, but thousands of juveniles rearing and preparing to return to the lake. That is the definition of a functioning spawning tributary.<cite>Lake County WPD Survey, 2024</cite></div>
                </div>
                <div className="info-cards">
                  {infoCards.map((c) => (
                    <div key={c.title} className={`info-card${c.variant ? ' ' + c.variant : ''}`}>
                      <h4>{c.title}</h4>
                      <p>{c.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PHOTOS */}
            <div style={{ marginBottom: '3rem' }}>
              <span className="section-label">Field Photos</span>
              <h2 className="section-h2l" style={{ marginTop: '.6rem' }}>Burns Valley Creek in Every Season</h2>
              <p style={{ color: 'var(--muted)', fontSize: '.95rem', marginBottom: '1rem' }}>Field photography by Taylor Woodruff: WPD survey sites, spawning substrate, seasonal flow conditions, and the creek corridor through Burns Valley.</p>
              <PhotoLightbox photos={photos} credit="Taylor Woodruff" />
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="sidebar">
            <div className="side-card dark">
              <h3>Current Status</h3>
              <div className="side-row"><span className="side-lbl">Spawning</span><span className="side-val g">Active, confirmed</span></div>
              <div className="side-row"><span className="side-lbl">2024 juveniles</span><span className="side-val g">~4,000</span></div>
              <div className="side-row"><span className="side-lbl">Flow cutoff</span><span className="side-val a">June 14 (2024)</span></div>
              <div className="side-row"><span className="side-lbl">Near</span><span className="side-val">City of Clearlake</span></div>
            </div>
            <div className="side-card">
              <h3>Quick Actions</h3>
              <div className="side-actions">
                <a href="https://waterdata.usgs.gov/monitoring-location/11449500/" target="_blank" rel="noopener noreferrer" className="side-btn primary">Live USGS Gauge ↗</a>
                <a href="/#lake-status" className="side-btn outline">Lake Conditions</a>
                <a href="/archive?q=burns%20valley" className="side-btn outline">Archive Reports</a>
                <a href="tel:7072632344" className="side-btn emergency">⚠ Report Stranded Hitch</a>
              </div>
            </div>
            <div className="side-card">
              <h3>Creek Profile</h3>
              <div className="side-row"><span className="side-lbl">Shore</span><span className="side-val">SE · Lower Arm</span></div>
              <div className="side-row"><span className="side-lbl">Near</span><span className="side-val">City of Clearlake</span></div>
              <div className="side-row"><span className="side-lbl">2024 juveniles</span><span className="side-val g">~4,000</span></div>
              <div className="side-row"><span className="side-lbl">2024 cutoff</span><span className="side-val a">June 14</span></div>
            </div>
            <div className="side-card">
              <h3>Explore Nearby</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: '.2rem' }}>
                {nearby.map((n) => (
                  <a key={n.href} href={n.href} className="creek-link"><strong>{n.name}</strong><span>{n.sub}</span></a>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* BARRIERS */}
        <section className="barriers-section">
          <div className="section-inner">
            <span className="section-tag tag-amber">Barriers &amp; Restoration</span>
            <div className="section-h2" style={{ marginTop: '.5rem' }}>Challenges &amp; Conservation Status</div>
            <div className="section-sub">Key barriers, threats, and active conservation efforts for Burns Valley Creek.</div>
            <div className="barriers-grid">
              {barriers.map((b) => (
                <div key={b.title} className="barrier-card">
                  <span className={`bc-tag ${b.tagClass}`}>{b.tag}</span>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SURVEY TABLE */}
        <div className="survey-section">
          <div className="survey-inner">
            <span className="section-label">Survey Data</span>
            <h2 className="section-h2l" style={{ marginTop: '.6rem', marginBottom: '1.2rem' }}>Annual Observations: Burns Valley Creek</h2>
            <table className="survey-table">
              <thead><tr><th>Year</th><th>Burns Valley Status</th><th>Lake-wide Count</th><th>Notes</th></tr></thead>
              <tbody>
                {survey.map((r) => (
                  <tr key={r.year}>
                    <td className="val">{r.year}</td>
                    <td className={r.statusClass}>{r.status}{r.badge && <span className="kel-badge">{r.badge}</span>}</td>
                    <td className="val">{r.count}</td>
                    <td>{r.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FOOTER */}
        <footer>
          <div className="fl"><Fish size={24} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 8 }} />The Clear Lake Hitch Project</div>
          <p style={{ marginTop: 6 }}>A project by <strong style={{ color: '#fff' }}>Taylor Woodruff</strong> &amp; <strong style={{ color: '#fff' }}>Jordan Stevens</strong></p>
          <p style={{ marginTop: 6 }}><a href="/creeks">← Back to all tributaries</a> · <a href="/">Main site</a></p>
          <p className="disc">Content based on USGS, CDFW, USFWS Species Status Assessment, and Lake County Water Resources Department sources. Watershed data are approximations and may vary from official figures.</p>
        </footer>
      </div>
    </>
  )
}
