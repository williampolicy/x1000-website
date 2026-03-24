'use client'

import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
  background?: 'none' | 'gradient' | 'subtle'
  containerWidth?: 'default' | 'narrow' | 'wide'
}

export default function Section({
  children,
  id,
  className = '',
  background = 'none',
  containerWidth = 'default',
}: SectionProps) {
  const backgrounds = {
    none: '',
    gradient: 'bg-gradient-to-b from-transparent via-white/[0.02] to-transparent',
    subtle: 'bg-gradient-to-b from-transparent via-amber-500/[0.02] to-transparent',
  }

  const widths = {
    default: 'max-w-7xl',
    narrow: 'max-w-4xl',
    wide: 'max-w-[1400px]',
  }

  return (
    <section id={id} className={`py-24 md:py-32 ${backgrounds[background]} ${className}`}>
      <div className={`${widths[containerWidth]} mx-auto px-6 lg:px-8`}>
        {children}
      </div>
    </section>
  )
}
