'use client'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'amber' | 'white'
  className?: string
}

export default function LoadingSpinner({
  size = 'md',
  color = 'amber',
  className = '',
}: LoadingSpinnerProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  }

  const colors = {
    amber: 'border-amber-400',
    white: 'border-white',
  }

  return (
    <div
      className={`${sizes[size]} border-2 ${colors[color]} border-t-transparent rounded-full animate-spin ${className}`}
    />
  )
}
