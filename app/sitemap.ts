import type { MetadataRoute } from 'next'

const BASE = 'https://www.clearlakehitchproject.org'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // App Router pages
  const routes = ['/', '/timeline', '/archive', '/map', '/creeks']
  // Standalone content pages served from /public
  const staticPages = [
    '/kelsey.html',
    '/adobe.html',
    '/forbes.html',
    '/burns.html',
  ]

  return [...routes, ...staticPages].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
