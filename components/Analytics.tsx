'use client'

import Script from 'next/script'

interface AnalyticsProps {
  gaId?: string
}

export default function Analytics({ gaId }: AnalyticsProps) {
  // Don't render if no GA ID provided
  if (!gaId) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}

// Track page views (for use in client components)
export function trackPageView(url: string, gaId?: string) {
  if (typeof window !== 'undefined' && gaId && (window as any).gtag) {
    (window as any).gtag('config', gaId, {
      page_path: url,
    })
  }
}

// Track events
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}
