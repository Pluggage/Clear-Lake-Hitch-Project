import type { Metadata } from 'next'

// The timeline page itself is a client component, so it can't export metadata.
// This route-segment layout supplies the metadata (title, description, canonical)
// so /timeline no longer falls back to the generic site title.
export const metadata: Metadata = {
  title: 'Population Timeline',
  description:
    'A year-by-year history of the Clear Lake hitch and the native fishes of Clear Lake, from 19th-century abundance to the modern decline, with linked sources.',
  alternates: { canonical: '/timeline' },
}

export default function TimelineLayout({ children }: { children: React.ReactNode }) {
  return children
}
