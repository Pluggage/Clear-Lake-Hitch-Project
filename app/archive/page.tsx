import type { Metadata } from 'next'
import { FileText } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { ArchiveExplorer } from './ArchiveExplorer'
import { JsonLd } from '@/components/json-ld'
import { Footer } from '@/components/footer'
import './archive.css'

export const metadata: Metadata = {
  title: 'Hitch Archive',
  description:
    'The most complete collection of research, reports, and data on the Clear Lake hitch, gathered from federal agencies, state wildlife departments, tribal monitoring programs, and academic research.',
  alternates: { canonical: '/archive' },
}

const datasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Clear Lake hitch spawner counts and conservation record',
  description:
    'A compiled, sourced record of Clear Lake hitch (Lavinia exilicauda chi) spawner surveys, lake conditions, and conservation milestones, drawn from CDFW, USGS, Lake County Water Resources, tribal monitoring programs, and federal status documents.',
  url: 'https://www.clearlakehitchproject.org/archive',
  temporalCoverage: '2006/2025',
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
      </div>
      <Footer />
    </>
  )
}
