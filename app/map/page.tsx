import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { MapExplorer } from './MapExplorer'
import './map.css'

export const metadata: Metadata = {
  title: 'Interactive Spawner Map',
  description:
    'Interactive map of Clear Lake and its hitch spawning tributaries. Click any creek or lake zone for survey status, key data, and related archive reports.',
  alternates: { canonical: '/map' },
}

export default function MapPage() {
  return (
    <>
      <Navigation />
      <MapExplorer />
    </>
  )
}
