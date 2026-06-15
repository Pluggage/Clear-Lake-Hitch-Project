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
  generator: 'v0.app',
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
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
