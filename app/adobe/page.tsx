import type { Metadata } from 'next'
import { Fish } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { SpawnerTimeline } from '@/components/creek/SpawnerTimeline'
import { PhotoLightbox } from '@/components/creek/PhotoLightbox'
import { LakeConditions } from '@/components/creek/LakeConditions'
import { popData, photos, infoCards, barriers, survey, nearby } from './adobe-data'
import '@/components/creek/creek-detail.css'

export const metadata: Metadata = {
  title: 'Adobe Creek',
  description:
    "Adobe Creek is Clear Lake's historic #2 hitch spawning tributary, the most-frequented stream in 2016, 2018, 2022, 2023, and 2025. Survey history, barriers, and field photos.",
  alternates: { canonical: '/adobe' },
}

export default function AdobePage() {
  return (
    <>
      <Navigation />
      <div className="creek-detail">
        {/* BREADCRUMB */}
        <div className="bc">
          <a href="/">Home</a>
          <span className="bc-sep">›</span>
          <a href="/creeks">Tributaries</a>
          <span className="bc-sep">›</span>
          Adobe Creek
        </div>

        {/* HERO */}
        <section className="hero">
          <div className="hero-inner">
            <div>
              <div className="hero-badges">
                <span className="hero-badge b-green">Active Spawning</span>
                <span className="hero-badge b-blue">Priority Tributary</span>
                <span className="hero-badge b-amber">Multiple Barriers</span>
              </div>
              <h1>Adobe Creek<br /><em>Historic #2 Spawning Stream</em></h1>
              <p className="hero-sub">Historically the second most important hitch spawning tributary. Runs through Big Valley and the Kelseyville farming corridor before entering Clear Lake on the south shore. Most frequented stream in 2016, 2018, 2022, 2023, and 2025.</p>
              <div className="hero-btns">
                <a href="#conditions" className="btn btn-white">Creek Conditions</a>
                <a href="#timeline" className="btn btn-outline">Survey History</a>
                <a href="/creeks" className="btn btn-outline">← All Creeks</a>
              </div>
            </div>
            <div className="hero-map">
              <div className="hero-map-label">Adobe Creek on Clear Lake</div>
              <svg viewBox="0 50 700 560" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                <path className="mm-lake" d="M 138.8,39.1 L 134.8,39.1 L 128.6,47.3 L 123.1,47.4 L 122.5,52.2 L 117.2,55.7 L 109.0,48.4 L 103.2,50.0 L 101.6,52.8 L 100.3,49.9 L 98.1,50.4 L 98.3,56.4 L 84.6,68.1 L 83.5,73.7 L 78.1,78.6 L 80.9,81.5 L 68.2,81.5 L 77.0,83.1 L 69.9,84.9 L 75.7,85.2 L 71.0,85.9 L 72.9,87.0 L 68.6,87.0 L 71.8,87.9 L 68.5,90.9 L 70.4,97.1 L 65.8,107.0 L 67.5,108.5 L 63.1,109.0 L 63.8,113.2 L 60.8,116.2 L 63.0,122.0 L 67.5,122.8 L 69.6,126.0 L 66.4,124.3 L 62.6,125.2 L 59.4,131.2 L 60.4,135.4 L 55.8,137.4 L 55.2,140.9 L 49.7,141.6 L 36.3,157.8 L 40.4,163.1 L 36.9,175.9 L 39.3,180.8 L 39.1,190.0 L 37.3,194.9 L 32.3,196.4 L 33.0,198.9 L 37.3,201.6 L 36.5,204.8 L 39.2,209.3 L 36.1,211.4 L 36.4,214.4 L 38.0,225.9 L 42.1,230.0 L 40.7,231.3 L 36.6,232.6 L 37.1,236.6 L 36.7,238.8 L 40.4,241.0 L 39.3,243.4 L 39.7,244.0 L 38.0,245.9 L 39.0,254.8 L 34.2,260.9 L 38.9,261.5 L 42.7,259.5 L 47.1,259.6 L 50.1,260.6 L 52.7,257.5 L 57.6,258.3 L 60.3,255.8 L 62.9,259.5 L 58.4,263.4 L 60.4,266.7 L 68.1,265.2 L 69.7,268.9 L 74.5,269.6 L 76.5,266.5 L 80.6,266.5 L 82.6,263.3 L 92.3,271.2 L 95.9,273.1 L 98.8,260.4 L 101.7,262.1 L 101.8,267.1 L 107.3,262.2 L 110.2,266.9 L 113.8,272.0 L 117.8,261.7 L 122.3,264.0 L 132.5,255.5 L 140.3,258.2 L 146.4,261.0 L 149.3,264.5 L 152.9,269.5 L 155.0,257.7 L 157.5,252.1 L 161.0,248.1 L 158.1,243.6 L 164.0,247.5 L 165.9,255.0 L 165.0,272.0 L 174.3,265.1 L 176.3,260.8 L 178.1,258.5 L 185.0,260.2 L 186.3,261.0 L 189.3,256.9 L 206.8,259.4 L 207.6,259.5 L 210.2,258.6 L 215.7,252.0 L 214.9,261.9 L 229.4,268.6 L 238.6,269.9 L 239.7,270.2 L 246.2,269.1 L 251.8,267.2 L 255.0,273.5 L 259.7,269.8 L 263.5,271.1 L 266.1,271.6 L 260.3,283.0 L 267.1,274.4 L 276.4,280.2 L 285.2,278.9 L 285.8,288.5 L 277.6,296.3 L 279.8,299.7 L 289.8,303.2 L 297.6,316.6 L 321.7,314.5 L 324.3,310.9 L 320.1,305.4 L 327.3,305.8 L 338.4,298.4 L 342.0,296.4 L 347.5,296.9 L 360.1,300.5 L 370.0,310.4 L 379.3,310.8 L 387.0,302.0 L 386.5,275.3 L 380.4,266.2 L 410.1,263.1 L 413.9,275.2 L 418.9,278.8 L 423.5,273.9 L 431.9,275.9 L 438.9,277.9 L 441.6,271.6 L 448.9,270.3 L 453.9,266.7 L 459.5,268.9 L 465.5,274.2 L 471.1,268.3 L 481.2,263.1 L 487.5,257.2 L 495.8,258.7 L 503.1,258.2 L 512.8,253.9 L 521.0,256.9 L 525.6,261.9 L 530.0,260.9 L 536.3,253.0 L 546.6,256.8 L 556.3,254.9 L 563.3,251.6 L 576.3,260.6 L 588.8,269.7 L 601.5,264.9 L 611.2,265.9 L 629.6,260.2 L 630.9,261.9 L 633.1,263.0 L 642.6,263.2 L 649.9,266.8 L 655.4,268.6 L 658.1,268.3 L 665.9,261.9 L 669.9,265.9 L 673.2,261.6 L 679.2,265.3 L 681.8,264.5 L 683.8,255.9 L 686.6,254.6 L 689.8,254.3 L 694.5,257.3 L 700.0,253.3 L 700.0,39.1 L 138.8,39.1 Z" />
                <path className="mm-creek" d="M 28,248 L 95,260 L 143,277" />
                <path className="mm-creek" d="M 395,112 L 348,156 L 307,185" />
                <path className="mm-creek" d="M 155,418 L 168,368 L 197,294" />
                <path className="mm-creek" d="M 660,390 L 618,396 L 537,408" />
                <path className="mm-highlight" d="M 121.4,255.9 L 129.1,262.7 L 130.9,278.0 L 129.9,284.1 L 136.1,291.4 L 131.0,300.3 L 126.2,318.6 L 115.4,343.2 L 113.3,379.0 L 103.9,398.5 L 91.1,407.6 L 88.4,421.5 L 84.5,430.9 L 79.5,435.6" />
                <circle className="mm-mouth" cx="121.4" cy="255.9" r="5" />
                <text x="140" y="360" fill="rgba(255,213,79,.9)" fontSize="11" fontWeight="700" fontFamily="'Segoe UI',system-ui,sans-serif">Adobe Creek</text>
                <text x="140" y="373" fill="rgba(255,213,79,.55)" fontSize="8" fontFamily="'Segoe UI',system-ui,sans-serif">South shore · Big Valley</text>
              </svg>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <div className="stats-bar">
          <div className="stats-inner">
            <div className="stat"><div className="stat-num">5</div><div className="stat-label">Most-frequented years: 2016 18 22 23 25</div></div>
            <div className="stat"><div className="stat-num">2025</div><div className="stat-label">Most recent confirmed adults</div></div>
            <div className="stat"><div className="stat-num a">Multiple</div><div className="stat-label">Documented fish passage barriers</div></div>
            <div className="stat"><div className="stat-num g">#2</div><div className="stat-label">Historic spawning tributary rank</div></div>
          </div>
        </div>

        {/* CONDITIONS (client) */}
        <LakeConditions creekName="Adobe Creek" />

        {/* SPAWNER TIMELINE (client) */}
        <SpawnerTimeline
          data={popData}
          title="Lake-wide Spawner Counts: Adobe Creek's Dominant Years"
          note="Adobe Creek led the lake-wide count in 5 of the last 12 survey years"
          badges={['★ Adobe led: 2016 · 2018 · 2022 · 2023 · 2025']}
        />

        {/* MAIN CONTENT + SIDEBAR */}
        <div className="main-grid">
          <div>
            {/* ABOUT */}
            <div style={{ marginBottom: '3rem' }}>
              <span className="section-label">About This Creek</span>
              <h2 className="section-h2l" style={{ marginTop: '.6rem' }}>Clear Lake&apos;s Historic Second Stream</h2>
              <div className="about-grid">
                <div className="prose">
                  <p>Adobe Creek has been the most frequented hitch spawning tributary in more survey years than any other creek in the dataset: 2016, 2018, 2022, 2023, and 2025. In some of those years it even eclipsed Kelsey. That makes it the clearest illustration of how hitch distribute their spawning effort: in good water years, multiple tributaries carry significant runs. Only in the worst drought years does everything collapse to a single stream.</p>
                  <p>The creek runs through Big Valley agricultural land before reaching the lake, picking up flow from Highland Creek upstream. Its lower reach passes through working farmland and road crossings that introduce multiple documented fish passage barriers: culverts, crossings, and channel modifications that impede or delay hitch migration in low-flow years.</p>
                  <div className="pull-quote">Adobe Creek and Kelsey Creek together form the backbone of south-shore hitch spawning. When both are running strong, the population has room to recover. When both run dry in the same year, the consequences are catastrophic.<cite>Lake County Water Resources Department</cite></div>
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
              <h2 className="section-h2l" style={{ marginTop: '.6rem' }}>Adobe Creek in Every Season</h2>
              <p style={{ color: 'var(--muted)', fontSize: '.95rem', marginBottom: '1rem' }}>Field photography from Lake County WPD staff: creek mouth, barriers, gauge sites, and seasonal conditions.</p>
              <PhotoLightbox photos={photos} credit="Taylor Woodruff" />
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="sidebar">
            <div className="side-card dark">
              <h3>Current Status</h3>
              <div className="side-row"><span className="side-lbl">Spawning</span><span className="side-val g">Active, confirmed</span></div>
              <div className="side-row"><span className="side-lbl">Last adults</span><span className="side-val">2025</span></div>
              <div className="side-row"><span className="side-lbl">Barriers</span><span className="side-val a">Multiple</span></div>
              <div className="side-row"><span className="side-lbl">Gauge</span><span className="side-val">No dedicated gauge</span></div>
            </div>
            <div className="side-card">
              <h3>Quick Actions</h3>
              <div className="side-actions">
                <a href="https://waterdata.usgs.gov/monitoring-location/11449500/" target="_blank" rel="noopener noreferrer" className="side-btn primary">Live USGS Gauge</a>
                <a href="/#lake-status" className="side-btn outline">Lake Conditions</a>
                <a href="/archive.html?q=adobe" className="side-btn outline">Archive Reports</a>
                <a href="tel:7072632344" className="side-btn emergency">Report Stranded Hitch</a>
              </div>
            </div>
            <div className="side-card">
              <h3>Creek Profile</h3>
              <div className="side-row"><span className="side-lbl">Shore</span><span className="side-val">South · Big Valley</span></div>
              <div className="side-row"><span className="side-lbl">Mouth</span><span className="side-val">S shore near Kelseyville</span></div>
              <div className="side-row"><span className="side-lbl">CDFW 2024-25</span><span className="side-val g">Adults confirmed</span></div>
              <div className="side-row"><span className="side-lbl">Barriers</span><span className="side-val a">Multiple documented</span></div>
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
            <div className="section-sub">Key barriers, threats, and active conservation efforts for Adobe Creek.</div>
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
            <h2 className="section-h2l" style={{ marginTop: '.6rem', marginBottom: '1.2rem' }}>Annual Observations: Adobe Creek</h2>
            <table className="survey-table">
              <thead><tr><th>Year</th><th>Adults at Adobe</th><th>Lake-wide Count</th><th>Notes</th></tr></thead>
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
          <div className="fl"><Fish size={20} style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 8 }} />The Clear Lake Hitch Project</div>
          <p style={{ marginTop: 6 }}>A project by <strong style={{ color: '#fff' }}>Taylor Woodruff</strong> &amp; <strong style={{ color: '#fff' }}>Jordan Stevens</strong></p>
          <p style={{ marginTop: 6 }}><a href="/creeks">← Back to all tributaries</a> · <a href="/">Main site</a></p>
          <p className="disc">Content based on USGS, CDFW, USFWS Species Status Assessment, and Lake County Water Resources Department sources. Watershed data are approximations and may vary from official figures.</p>
        </footer>
      </div>
    </>
  )
}
