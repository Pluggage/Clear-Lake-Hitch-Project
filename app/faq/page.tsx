import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { faqItems, idGuide, glossary } from './faq-data'
import { Lifecycle } from '@/components/lifecycle'

export const metadata: Metadata = {
  title: 'FAQ & Field Guide',
  description:
    'Answers about the Clear Lake hitch: how to identify it, whether it is legal to handle, when the spawning run happens, how to report a sighting, plus a glossary of terms.',
  alternates: { canonical: '/faq' },
}

export default function FaqPage() {
  return (
    <>
      <Navigation />
      <main id="main" role="main" className="bg-background">
        <section className="bg-[var(--lake-dark)] text-white px-4 md:px-8 py-14">
          <div className="max-w-[820px] mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">FAQ &amp; field guide</h1>
            <p className="text-white/80 leading-relaxed max-w-[640px]">
              Common questions about the Clear Lake hitch, how to tell it apart from look-alike fish, and a
              plain-language glossary of the terms used across this site.
            </p>
            <nav aria-label="On this page" className="flex flex-wrap gap-2 mt-6 text-sm">
              <a href="#faq" className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">Questions</a>
              <a href="#lifecycle" className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">Life cycle</a>
              <a href="#identify" className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">Identify the hitch</a>
              <a href="#glossary" className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">Glossary</a>
            </nav>
          </div>
        </section>

        <div className="max-w-[820px] mx-auto px-4 md:px-8 py-12">
          <section id="faq" className="scroll-mt-20">
            <h2 className="text-2xl font-bold mb-5" style={{ color: 'var(--lake-dark)' }}>
              Frequently asked questions
            </h2>
            <div className="border-t border-border">
              {faqItems.map((item) => (
                <details key={item.q} className="group border-b border-border py-3">
                  <summary className="cursor-pointer list-none flex justify-between items-start gap-3 font-semibold text-foreground">
                    <span>{item.q}</span>
                    <span className="text-[var(--lake)] shrink-0 text-xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="lifecycle" className="scroll-mt-20 mt-14">
            <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--lake-dark)' }}>
              The hitch&apos;s life cycle
            </h2>
            <Lifecycle />
          </section>

          <section id="identify" className="scroll-mt-20 mt-14">
            <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--lake-dark)' }}>
              How to identify the Clear Lake hitch
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{idGuide.intro}</p>

            <h3 className="font-semibold text-foreground mb-2">Key features</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground leading-relaxed mb-6">
              {idGuide.keyFeatures.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <h3 className="font-semibold text-foreground mb-2">Commonly confused with</h3>
            <div className="space-y-3 mb-6">
              {idGuide.lookalikes.map((l) => (
                <div key={l.species} className="border border-border rounded-xl p-4">
                  <div className="font-semibold mb-1" style={{ color: 'var(--lake-dark)' }}>{l.species}</div>
                  <div className="text-muted-foreground text-sm leading-relaxed">{l.howToDistinguish}</div>
                </div>
              ))}
            </div>

            <div
              className="border-l-4 rounded-r-lg p-4 text-sm leading-relaxed"
              style={{ background: 'var(--lake-light)', borderColor: 'var(--lake)', color: 'var(--lake-dark)' }}
            >
              <strong>Before you report:</strong> {idGuide.safetyNote}
            </div>
          </section>

          <section id="glossary" className="scroll-mt-20 mt-14">
            <h2 className="text-2xl font-bold mb-5" style={{ color: 'var(--lake-dark)' }}>
              Glossary
            </h2>
            <dl className="space-y-4">
              {glossary.map((g) => (
                <div key={g.term}>
                  <dt className="font-semibold text-foreground">{g.term}</dt>
                  <dd className="text-muted-foreground leading-relaxed">{g.definition}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </main>
    </>
  )
}
