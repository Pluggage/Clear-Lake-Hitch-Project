import type { Metadata } from 'next'
import { FileText } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { ArchiveExplorer } from './ArchiveExplorer'
import { JsonLd } from '@/components/json-ld'
import './archive.css'

export const metadata: Metadata = {
  title: 'Hitch Archive',
  description:
    'The most complete collection of research, reports, and data on the Clear Lake hitch, gathered from federal agencies, state wildlife departments, tribal monitoring programs, and academic research.',
  alternates: { canonical: '/archive' },
}

const ADD_TEMPLATE = `{
  title: "Your Report Title",
  year: 2025,
  source: "Agency or Author",
  agency: "USGS",  // USGS, CDFW, USFWS, LCWPD, UC Davis, Tribal, Lake County
  summary: "2-3 sentence summary of the report.",
  takeaways: [
    "Key finding #1",
    "Key finding #2",
    "Key finding #3"
  ],
  tags: ["spawning","population","kelsey creek"],
  locations: ["kelsey","adobe"],  // creek IDs for map linking
  url: "https://link-to-report.pdf"
}`

const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Clear Lake hitch spawner counts and conservation record',
  description:
    'A compiled, sourced record of Clear Lake hitch (Lavinia exilicauda chi) spawner surveys, lake conditions, and conservation milestones, drawn from CDFW, USGS, Lake County Water Resources, tribal monitoring programs, and federal status documents.',
  url: 'https://www.clearlakehitchproject.org/archive',
  temporalCoverage: '2013/2025',
  spatialCoverage: 'Clear Lake, Lake County, California',
  keywords: ['Clear Lake hitch', 'Lavinia exilicauda chi', 'spawner survey', 'endangered species', 'Clear Lake', 'Lake County California'],
  creator: { '@type': 'Organization', name: 'The Clear Lake Hitch Project' },
  isAccessibleForFree: true,
}

export default function ArchivePage() {
  return (
    <>
      <Navigation />
      <JsonLd data={datasetSchema} />
      <div id="main" role="main" className="archive-page">
        <div className="archive-hero">
          <div className="archive-hero-inner">
            <h1>
              <FileText size={28} style={{ verticalAlign: '-4px', marginRight: 6 }} />
              Hitch Archive
            </h1>
            <p>The most complete collection of research, reports, and data on the Clear Lake hitch, gathered from federal agencies, state wildlife departments, tribal monitoring programs, and academic research. Use the filters below to find what you need.</p>
          </div>
        </div>

        <ArchiveExplorer />

        <div className="add-guide">
          <div className="add-card">
            <h3>📝 How to add new reports</h3>
            <p>To add a new archive entry, add an object to the <code>ARCHIVE</code> array in <code>app/archive/archive-data.ts</code> and fill in the fields:</p>
            <pre>{ADD_TEMPLATE}</pre>
            <p>The <code>locations</code> field uses the same creek IDs from the interactive map (e.g. &quot;kelsey&quot;, &quot;adobe&quot;, &quot;forbes&quot;, &quot;burns&quot;, &quot;manning&quot;). This means a future integration can show related reports when someone clicks a creek on the map, just filter the archive by matching location IDs.</p>
          </div>
        </div>
      </div>
    </>
  )
}
