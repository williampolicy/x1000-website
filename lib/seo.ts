import type { Metadata } from 'next'

const baseUrl = 'https://x1000.ai'
const siteName = 'X1000'
const defaultDescription = 'Build 1000x leverage for humans and organizations. AI-powered systems, agents, and automation.'

interface PageSEOProps {
  title: string
  description?: string
  path?: string
  image?: string
  noIndex?: boolean
}

export function generatePageMetadata({
  title,
  description = defaultDescription,
  path = '',
  image = '/og-image.png',
  noIndex = false,
}: PageSEOProps): Metadata {
  const fullTitle = `${title} | ${siteName}`
  const url = `${baseUrl}${path}`
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}

export const pageMetadata = {
  home: generatePageMetadata({
    title: 'The Leverage Operating System',
    description: 'Build 1000x leverage for humans and organizations. From skill to system. From system to asset. From asset to capital.',
    path: '/',
  }),

  agents: generatePageMetadata({
    title: 'AI Agents',
    description: 'Deploy intelligent AI agents that work 24/7. Content creation, customer service, analytics, and more - all powered by advanced AI.',
    path: '/agents',
  }),

  solutions: generatePageMetadata({
    title: 'Industry Solutions',
    description: 'Tailored X1000 solutions for Education, Healthcare, Local Services, Finance, Creators, and Communities. Transform your industry with AI.',
    path: '/solutions',
  }),

  capital: generatePageMetadata({
    title: 'Capital & Investors',
    description: 'Join the X1000 investor community. Explore our unit economics, governance model, and roadmap to building the leverage economy.',
    path: '/capital',
  }),

  about: generatePageMetadata({
    title: 'About X1000',
    description: 'The story behind X1000 - building the leverage operating system to empower humans and organizations with 1000x capability amplification.',
    path: '/about',
  }),

  contact: generatePageMetadata({
    title: 'Contact Us',
    description: 'Get in touch with the X1000 team. Partnership inquiries, technical support, and investment discussions welcome.',
    path: '/contact',
  }),
}
