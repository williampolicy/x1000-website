// X1000.ai Health Check Endpoint
// V5.3 Ecosystem Standard Compliant
// Required for: S4+ projects, Docker healthcheck, Prometheus monitoring

import { NextResponse } from 'next/server'

interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy'
  version: string
  timestamp: string
  ecosystem: string
  project: string
  uptime: number
  checks: {
    memory: { status: 'ok' | 'warning' | 'critical'; used_mb: number; limit_mb: number; percentage: number }
    environment: { status: 'ok' | 'missing'; node_env: string; required_vars: string[] }
  }
}

const startTime = Date.now()

export async function GET(): Promise<NextResponse<HealthStatus>> {
  const now = new Date()

  // Memory check
  const memoryUsage = process.memoryUsage()
  const usedMemoryMB = Math.round(memoryUsage.heapUsed / 1024 / 1024)
  const limitMemoryMB = 2048
  const memoryPercentage = Math.round((usedMemoryMB / limitMemoryMB) * 100)

  let memoryStatus: 'ok' | 'warning' | 'critical' = 'ok'
  if (memoryPercentage > 90) memoryStatus = 'critical'
  else if (memoryPercentage > 80) memoryStatus = 'warning'

  // Environment check
  const requiredVars = ['NODE_ENV']
  const missingVars = requiredVars.filter(v => !process.env[v])
  const envStatus = missingVars.length === 0 ? 'ok' : 'missing'

  // Overall status
  let overallStatus: 'healthy' | 'degraded' | 'unhealthy' = 'healthy'
  if (memoryStatus === 'critical') overallStatus = 'unhealthy'
  else if (memoryStatus === 'warning' || envStatus === 'missing') overallStatus = 'degraded'

  const healthResponse: HealthStatus = {
    status: overallStatus,
    version: '1.0.0',
    timestamp: now.toISOString(),
    ecosystem: 'LIGHT HOPE V5.3',
    project: 'x1000-web',
    uptime: Math.round((Date.now() - startTime) / 1000),
    checks: {
      memory: { status: memoryStatus, used_mb: usedMemoryMB, limit_mb: limitMemoryMB, percentage: memoryPercentage },
      environment: { status: envStatus, node_env: process.env.NODE_ENV || 'unknown', required_vars: missingVars.length > 0 ? missingVars : ['all present'] }
    }
  }

  const httpStatus = overallStatus === 'unhealthy' ? 503 : 200

  return NextResponse.json(healthResponse, {
    status: httpStatus,
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'X-Health-Status': overallStatus,
      'X-Ecosystem-Version': '5.3'
    }
  })
}
