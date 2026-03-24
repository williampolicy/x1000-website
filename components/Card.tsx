'use client'

import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  variant?: 'default' | 'highlight' | 'glass'
  hover?: boolean
  className?: string
  onClick?: () => void
}

export default function Card({
  children,
  variant = 'default',
  hover = true,
  className = '',
  onClick,
}: CardProps) {
  const variants = {
    default: 'bg-white/[0.02] border-white/5',
    highlight: 'bg-gradient-to-br from-amber-500/20 to-orange-500/10 border-amber-500/30',
    glass: 'backdrop-blur-xl bg-white/5 border-white/10',
  }

  const hoverStyles = hover
    ? 'hover:border-white/20 hover:bg-white/[0.04] cursor-pointer'
    : ''

  return (
    <div
      onClick={onClick}
      className={`rounded-2xl border p-6 transition-all duration-300 ${variants[variant]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  )
}
