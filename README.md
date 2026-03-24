# X1000.ai - The Leverage Operating System

> **Build 1000x Leverage** | From skill to system. From system to asset. From asset to capital.

[![CI/CD](https://github.com/williampolicy/x1000-website/actions/workflows/ci.yml/badge.svg)](https://github.com/williampolicy/x1000-website/actions/workflows/ci.yml)
[![Ecosystem](https://img.shields.io/badge/Ecosystem-LIGHT%20HOPE%20V5.3-amber)](https://lighthope.ai)
[![Website](https://img.shields.io/badge/Website-x1000.ai-blue)](https://x1000.ai)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.1-black)](https://nextjs.org)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 🌐 Live Site

**https://x1000.ai**

---

## Overview

X1000.ai is the commercial leverage layer of the LIGHT HOPE ecosystem. While LightHope.ai focuses on education and mission, X1000.ai transforms capabilities into systems, systems into assets, and assets into capital.

### The Four Engines of Leverage

1. **LEARN** - Master AI capabilities from math to ML to production systems
2. **BUILD** - Deploy production-grade applications serving real users
3. **AUTOMATE** - Scale with AI agents that work 24/7
4. **COMPOUND** - Turn output into assets that generate returns

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.2.1 | React framework with App Router |
| TypeScript | 5.x | Type-safe development |
| Tailwind CSS | 3.x | Utility-first styling |
| Node.js | 20 LTS | JavaScript runtime |
| Docker | V5.3 | Containerization |
| Cloudflare | - | CDN & Tunnel |

---

## Quick Start

### Development

```bash
# Clone the repository
git clone https://github.com/williampolicy/x1000-website.git
cd x1000-website

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
# Open http://localhost:3000
```

### Production Deployment

```bash
# Build Docker image
./deploy.sh build

# Start containers
./deploy.sh start

# Verify health
./deploy.sh health

# Check V5.3 compliance
./deploy.sh compliance
```

---

## Project Structure

```
x1000-website/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── agents/            # AI Agents marketplace
│   ├── solutions/         # Industry solutions
│   ├── capital/           # Investor portal
│   ├── about/             # About page
│   ├── contact/           # Contact form
│   └── api/               # API routes
│       ├── health/        # Health check endpoint
│       ├── metrics/       # Prometheus metrics
│       └── contact/       # Contact form handler
├── components/            # Reusable React components
├── lib/                   # Utilities and hooks
├── public/                # Static assets
├── .github/workflows/     # CI/CD pipelines
├── Dockerfile             # Multi-stage Docker build
├── docker-compose.yml     # V5.3 compliant configuration
└── deploy.sh              # Deployment script
```

---

## Pages

| Route | Description | Status |
|-------|-------------|--------|
| `/` | Homepage - Hero, proof points, agents preview | ✅ Live |
| `/agents` | AI Agent marketplace with pricing | ✅ Live |
| `/solutions` | Industry vertical solutions (6 verticals) | ✅ Live |
| `/capital` | Investor relations portal | ✅ Live |
| `/about` | Company story, mission, governance | ✅ Live |
| `/contact` | Contact form and FAQ | ✅ Live |

---

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | V5.3 compliant health check |
| `/api/metrics` | GET | Prometheus metrics |
| `/api/contact` | POST | Contact form submission |

---

## V5.3 Ecosystem Compliance

| Requirement | Status | Implementation |
|-------------|--------|----------------|
| Memory Limits | ✅ | 2GB limit in docker-compose.yml |
| Auto-Restart | ✅ | `restart: unless-stopped` |
| Health Check | ✅ | `/api/health` endpoint |
| Prometheus Metrics | ✅ | `/api/metrics` endpoint |
| Logging Limits | ✅ | 50MB max, 5 files rotation |
| Docker Labels | ✅ | Ecosystem metadata labels |

---

## Deployment Commands

```bash
./deploy.sh build      # Build Docker image
./deploy.sh start      # Start containers
./deploy.sh stop       # Stop containers
./deploy.sh restart    # Restart services
./deploy.sh health     # Check health status
./deploy.sh compliance # Check V5.3 compliance
./deploy.sh status     # Resource usage stats
./deploy.sh logs       # View container logs
./deploy.sh clean      # Remove everything
```

---

## Environment Variables

```bash
# Required
NODE_ENV=production
PORT=3000

# X1000 Ecosystem
X1000_AUTH_URL=https://login.lighthope.ai
X1000_API_URL=https://api.lighthope.ai

# Optional - Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional - Email
RESEND_API_KEY=re_...
CONTACT_EMAIL=info@x1000.ai
```

---

## CI/CD Pipeline

The project includes GitHub Actions workflows for:

- **Build & Test** - Type checking and production build
- **Docker Build** - Container image verification
- **Security Scan** - Dependency vulnerability audit

---

## Contact

| | |
|---|---|
| **Organization** | LIGHT HOPE LLC |
| **Location** | Boston, MA, USA |
| **Email** | info@x1000.ai |
| **Phone** | +1 (617) 890-9641 |
| **Mission** | EMPOWER GOOD WITH AI |

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <strong>Built with the LIGHT HOPE V5.3 Ecosystem Standard</strong><br>
  <em>From skill to system. From system to asset. From asset to capital.</em>
</p>
