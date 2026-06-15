import type { MetadataRoute } from 'next'

const BASE = 'https://www.clearlakehitchproject.org'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // App Router pages (creek detail pages now have real routes)
  const routes = [
    '/', '/timeline', '/archive', '/map', '/creeks',
    '/kelsey', '/adobe', '/burns', '/forbes',
  ]

  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
