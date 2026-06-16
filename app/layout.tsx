import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <a href="#main" className="skip-link">Skip to main content</a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
