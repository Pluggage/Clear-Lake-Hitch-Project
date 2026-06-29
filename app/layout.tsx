import type { Metadata } from 'next'
import { Geist, Geist_Mono, Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.clearlakehitchproject.org'),
  title: {
    default: 'The Clear Lake Hitch Project',
    template: '%s | The Clear Lake Hitch Project',
  },
  description: 'Protecting the Clear Lake Hitch for Future Generations. The Clear Lake Hitch is a culturally significant minnow found nowhere else on Earth.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.clearlakehitchproject.org',
    siteName: 'The Clear Lake Hitch Project',
    title: 'The Clear Lake Hitch Project',
    description: 'Protecting the Clear Lake Hitch for Future Generations. An endemic minnow found nowhere else on Earth.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Clear Lake Hitch Project',
    description: 'Protecting the Clear Lake Hitch for Future Generations. An endemic minnow found nowhere else on Earth.',
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'The Clear Lake Hitch Project',
  url: 'https://www.clearlakehitchproject.org',
  description:
    'An independent, volunteer-run educational project tracking and raising awareness of the Clear Lake hitch (Lavinia exilicauda chi), a threatened minnow endemic to Clear Lake, California.',
  founder: [
    { '@type': 'Person', name: 'Taylor Woodruff' },
    { '@type': 'Person', name: 'Jordan Stevens' },
  ],
  areaServed: { '@type': 'Place', name: 'Clear Lake, Lake County, California' },
  knowsAbout: 'Clear Lake hitch (Lavinia exilicauda chi) conservation',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main" className="skip-link">Skip to main content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
