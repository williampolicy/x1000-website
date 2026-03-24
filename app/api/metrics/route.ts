// X1000.ai Prometheus Metrics Endpoint
// V5.3 Ecosystem Standard - P0/P1 projects must expose /metrics

import { NextResponse } from 'next/server'

let requestCount = 0
let errorCount = 0
const startTime = Date.now()

export async function GET(): Promise<NextResponse> {
  requestCount++

  const memoryUsage = process.memoryUsage()
  const uptime = Math.round((Date.now() - startTime) / 1000)

  const metrics = `# HELP x1000_app_info Application information
# TYPE x1000_app_info gauge
x1000_app_info{version="1.0.0",ecosystem="lighthope",project="x1000-web"} 1

# HELP x1000_uptime_seconds Application uptime in seconds
# TYPE x1000_uptime_seconds counter
x1000_uptime_seconds ${uptime}

# HELP x1000_requests_total Total number of requests to metrics endpoint
# TYPE x1000_requests_total counter
x1000_requests_total ${requestCount}

# HELP x1000_errors_total Total number of errors
# TYPE x1000_errors_total counter
x1000_errors_total ${errorCount}

# HELP x1000_memory_heap_used_bytes Heap memory used
# TYPE x1000_memory_heap_used_bytes gauge
x1000_memory_heap_used_bytes ${memoryUsage.heapUsed}

# HELP x1000_memory_heap_total_bytes Total heap memory
# TYPE x1000_memory_heap_total_bytes gauge
x1000_memory_heap_total_bytes ${memoryUsage.heapTotal}

# HELP x1000_memory_external_bytes External memory
# TYPE x1000_memory_external_bytes gauge
x1000_memory_external_bytes ${memoryUsage.external}

# HELP x1000_memory_rss_bytes Resident set size
# TYPE x1000_memory_rss_bytes gauge
x1000_memory_rss_bytes ${memoryUsage.rss}

# HELP nodejs_version_info Node.js version
# TYPE nodejs_version_info gauge
nodejs_version_info{version="${process.version}"} 1
`

  return new NextResponse(metrics, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; version=0.0.4; charset=utf-8',
      'Cache-Control': 'no-store'
    }
  })
}
