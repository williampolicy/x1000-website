'use client'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string | number
  height?: string | number
  animation?: 'pulse' | 'wave' | 'none'
}

export default function Skeleton({
  className = '',
  variant = 'rectangular',
  width,
  height,
  animation = 'pulse',
}: SkeletonProps) {
  const baseClasses = 'bg-white/10'

  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  }

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-shimmer',
    none: '',
  }

  const style: React.CSSProperties = {}
  if (width) style.width = typeof width === 'number' ? `${width}px` : width
  if (height) style.height = typeof height === 'number' ? `${height}px` : height

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${animationClasses[animation]} ${className}`}
      style={style}
    />
  )
}

export function SkeletonCard() {
  return (
    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
      <Skeleton height={12} width="30%" className="mb-4" />
      <Skeleton height={24} width="70%" className="mb-2" />
      <Skeleton height={16} className="mb-2" />
      <Skeleton height={16} width="80%" className="mb-4" />
      <div className="flex gap-2">
        <Skeleton height={28} width={80} variant="text" />
        <Skeleton height={28} width={80} variant="text" />
        <Skeleton height={28} width={80} variant="text" />
      </div>
    </div>
  )
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          height={16}
          width={i === lines - 1 ? '60%' : '100%'}
          variant="text"
        />
      ))}
    </div>
  )
}
