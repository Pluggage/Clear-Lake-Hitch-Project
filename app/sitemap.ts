import type { MetadataRoute } from 'next'
import { creeks } from './creeks/creek-data'

const BASE = 'https://www.clearlakehitchproject.org'

export default function sitemap(): MetadataRoute.Sitemap {
  // Stable "last reviewed" date so every URL doesn't advertise a new
  // lastmod on each deploy (which search engines discount as noise).
  const updated = new Date('2026-06-17')

  // Core App Router pages + every creek detail page (bespoke + lightweight).
  const routes = [
    '/', '/about', '/timeline', '/archive', '/map', '/creeks', '/faq',
    ...creeks.map((c) => c.href),
  ]

  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: updated,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
