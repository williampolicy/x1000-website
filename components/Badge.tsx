'use client'

import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'amber' | 'success' | 'warning' | 'info'
  pulse?: boolean
  className?: string
}

export default function Badge({
  children,
  variant = 'default',
  pulse = false,
  className = '',
}: BadgeProps) {
  const variants = {
    default: 'bg-white/5 border-white/10 text-white/60',
    amber: 'bg-amber-400/10 border-amber-400/20 text-amber-400',
    success: 'bg-emerald-400/10 border-emerald-400/20 text-emerald-400',
    warning: 'bg-yellow-400/10 border-yellow-400/20 text-yellow-400',
    info: 'bg-blue-400/10 border-blue-400/20 text-blue-400',
  }

  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm ${variants[variant]} ${className}`}>
      {pulse && (
        <span className={`w-2 h-2 rounded-full animate-pulse ${
          variant === 'success' ? 'bg-emerald-400' :
          variant === 'amber' ? 'bg-amber-400' :
          variant === 'warning' ? 'bg-yellow-400' :
          variant === 'info' ? 'bg-blue-400' :
          'bg-white/60'
        }`} />
      )}
      {children}
    </span>
  )
}
