'use client'

interface StatCardProps {
  value: string
  label: string
  change?: string
  className?: string
}

export default function StatCard({ value, label, change, className = '' }: StatCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-3xl sm:text-4xl font-light text-white mb-1">{value}</div>
      <div className="text-sm text-white/40">{label}</div>
      {change && <div className="text-xs text-emerald-400 mt-1">{change}</div>}
    </div>
  )
}
