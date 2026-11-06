import type { Metadata } from 'next'
import 'leaflet/dist/leaflet.css'
import { Navigation } from '@/components/navigation'
import { MapExplorer } from './MapExplorer'
import './map.css'

export const metadata: Metadata = {
  title: 'Interactive Spawner Map',
  description:
    'Interactive map of Clear Lake and its hitch spawning tributaries. Pick any creek or lake for survey status, key data, and related archive reports.',
  alternates: { canonical: '/map' },
}

export default function MapPage() {
  return (
    <>
      <Navigation />
      <h1 className="sr-only">Interactive map of Clear Lake and its hitch spawning tributaries</h1>
      <MapExplorer />
    </>
  )
}
