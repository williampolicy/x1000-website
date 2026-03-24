import type { Metadata, Viewport } from 'next'
import './globals.css'
import Analytics from '@/components/Analytics'

export const viewport: Viewport = {
  themeColor: '#f59e0b',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'X1000 | The Leverage Operating System',
  description: 'Build 1000x leverage for humans and organizations. From skill to system. From system to asset. From asset to capital.',
  keywords: ['AI', 'leverage', 'automation', 'productivity', '1000x', 'business systems', 'AI agents'],
  authors: [{ name: 'LIGHT HOPE LLC' }],
  creator: 'LIGHT HOPE LLC',
  publisher: 'LIGHT HOPE LLC',
  metadataBase: new URL('https://x1000.ai'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://x1000.ai',
    siteName: 'X1000',
    title: 'X1000 | The Leverage Operating System',
    description: 'Build 1000x leverage for humans and organizations. AI-powered systems, agents, and automation.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'X1000 - The Leverage Operating System - Build 1000x Leverage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'X1000 | The Leverage Operating System',
    description: 'Build 1000x leverage for humans and organizations.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'X1000',
  url: 'https://x1000.ai',
  logo: 'https://x1000.ai/favicon.svg',
  description: 'The Leverage Operating System - Build 1000x leverage for humans and organizations',
  foundingDate: '2024',
  parentOrganization: {
    '@type': 'Organization',
    name: 'LIGHT HOPE LLC',
    url: 'https://lighthope.ai',
  },
  sameAs: [
    'https://twitter.com/x1000ai',
    'https://linkedin.com/company/x1000ai',
    'https://github.com/x1000ai',
  ],
  offers: {
    '@type': 'AggregateOffer',
    description: 'AI-powered leverage systems, agents, and automation solutions',
    priceCurrency: 'USD',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-[#0a0a0b] text-white antialiased min-h-screen flex flex-col">
        <Analytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}
