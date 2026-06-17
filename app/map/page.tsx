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

export default async function MapPage({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>
}) {
  const { embed } = await searchParams
  const isEmbed = embed === '1'
  return (
    <>
      {isEmbed ? (
        // Embedded (e.g. the homepage mini-map): hide the nav and let the map
        // fill the iframe height instead of reserving 60px for the nav bar.
        <style dangerouslySetInnerHTML={{ __html: '.map-page{height:100dvh !important}' }} />
      ) : (
        <Navigation />
      )}
      <MapExplorer />
    </>
  )
}
