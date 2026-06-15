import type { MetadataRoute } from 'next'
import { creeks } from './creeks/creek-data'

const BASE = 'https://www.clearlakehitchproject.org'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Core App Router pages + every creek detail page (bespoke + lightweight).
  const routes = [
    '/', '/timeline', '/archive', '/map', '/creeks',
    ...creeks.map((c) => c.href),
  ]

  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
