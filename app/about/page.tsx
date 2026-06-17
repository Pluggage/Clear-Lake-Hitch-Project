import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { SiteForm } from '@/components/site-form'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'About & Contact',
  description:
    'Who runs the Clear Lake Hitch Project, how its data is gathered and sourced, the agencies and Tribes doing the conservation work, and how to get in touch.',
  alternates: { canonical: '/about' },
}

const partners: { name: string; href: string }[] = [
  { name: 'California Dept. of Fish & Wildlife (CDFW)', href: 'https://wildlife.ca.gov' },
  { name: 'USGS California Water Science Center', href: 'https://www.usgs.gov/centers/california-water-science-center' },
  { name: 'Lake County Water Resources Dept.', href: 'https://www.lakecountyca.gov/1450/Clear-Lake-Hitch' },
  { name: 'Robinson Rancheria of Pomo Indians', href: 'https://rrcbc-nsn.gov/' },
  { name: 'Habematolel Pomo of Upper Lake', href: 'https://www.hpultribe-nsn.gov/' },
  { name: 'Big Valley Band of Pomo Indians', href: 'https://bvrancheria.com' },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main id="main" role="main" className="bg-background">
        <section className="bg-[var(--lake-dark)] text-white px-4 md:px-8 py-14">
          <div className="max-w-[820px] mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">About the project</h1>
            <p className="text-white/80 leading-relaxed max-w-[640px]">
              The Clear Lake Hitch Project is an independent, volunteer-run educational effort to track and raise
              awareness of the Clear Lake hitch (chi), California&apos;s rarest minnow and a cultural keystone for the
              Pomo people.
            </p>
          </div>
        </section>

        <div className="max-w-[820px] mx-auto px-4 md:px-8 py-12 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--lake-dark)' }}>
              What this is, and what it isn&apos;t
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              This site compiles publicly available information on the hitch: spawner counts, lake conditions, and the
              historical record, presented in one place with links back to the agencies, Tribes, and researchers who
              collect it.
            </p>
            <div
              className="border-l-4 rounded-r-lg p-4 text-sm leading-relaxed"
              style={{ background: 'var(--lake-light)', borderColor: 'var(--lake)', color: 'var(--lake-dark)' }}
            >
              It is <strong>not</strong> a government agency, the Lake County Water Resources Department, or any Tribe,
              and it does not speak for them. For official determinations, monitoring, and permits, rely on the agencies
              and Tribal programs linked below.
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--lake-dark)' }}>
              Who&apos;s behind it
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The project was created by <strong className="text-foreground">Taylor Woodruff</strong> and{' '}
              <strong className="text-foreground">Jordan Stevens</strong>. Taylor Woodruff is credited in Lake County
              Watershed Protection District hitch spawner-survey documentation referenced in this site&apos;s archive.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--lake-dark)' }}>
              How the data is gathered
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Figures on this site come from CDFW visual spawner surveys, USGS gillnet monitoring (since 2017), Lake
              County Water Resources reports, Tribal monitoring programs, and federal status documents. Two different
              measures appear across the site and should not be confused: visual <em>spawner counts</em> (adult fish
              seen migrating up tributaries) and the USGS gillnet <em>relative-abundance</em> index (the basis for the
              96% decline figure). Every major source is linked in the{' '}
              <a href="/archive" className="underline" style={{ color: 'var(--lake)' }}>Hitch Archive</a>.
            </p>
            <p className="text-sm text-muted-foreground">Data last reviewed June 2026.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--lake-dark)' }}>
              Partners &amp; sources
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The monitoring and recovery work this site documents is carried out by these agencies and sovereign
              Tribal nations:
            </p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {partners.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
                    style={{ color: 'var(--lake)' }}
                  >
                    {p.name} <span aria-hidden="true">&#8599;</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--lake-dark)' }}>
              Contact
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Questions, corrections, or want to help? Send a note below. For a hitch stranded in a drying creek,
              don&apos;t wait. Call the Hitch Rescue Team at <strong className="text-foreground">(707) 263-2344</strong>.
            </p>
            <SiteForm kind="contact" />
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
