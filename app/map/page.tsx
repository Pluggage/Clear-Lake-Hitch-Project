import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { MapExplorer } from './MapExplorer'
import './map.css'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ embed?: string }>
}): Promise<Metadata> {
  const { embed } = await searchParams
  const meta: Metadata = {
    title: 'Interactive Spawner Map',
    description:
      'Interactive map of Clear Lake and its hitch spawning tributaries. Click any creek or lake zone for survey status, key data, and related archive reports.',
    alternates: { canonical: '/map' },
  }
  // The chrome-less embed (iframed on the homepage) shouldn't be indexed as a
  // separate page.
  if (embed === '1') meta.robots = { index: false, follow: false }
  return meta
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
        <>
          <Navigation />
          <h1 className="sr-only">Interactive map of Clear Lake and its hitch spawning tributaries</h1>
        </>
      )}
      <MapExplorer />
    </>
  )
}
