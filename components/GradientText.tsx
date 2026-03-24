'use client'

import { ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  gradient?: 'amber' | 'blue' | 'emerald' | 'purple' | 'custom'
  customGradient?: string
  className?: string
}

export default function GradientText({
  children,
  gradient = 'amber',
  customGradient,
  className = '',
}: GradientTextProps) {
  const gradients = {
    amber: 'from-amber-400 via-amber-300 to-amber-500',
    blue: 'from-blue-400 via-blue-300 to-blue-500',
    emerald: 'from-emerald-400 via-emerald-300 to-emerald-500',
    purple: 'from-purple-400 via-purple-300 to-purple-500',
    custom: customGradient || 'from-amber-400 to-orange-500',
  }

  return (
    <span
      className={`bg-gradient-to-r ${gradients[gradient]} bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  )
}
