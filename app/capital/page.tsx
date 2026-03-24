'use client'

export default function CapitalPage() {
  return (
    <div className="bg-[#0a0a0b] text-white min-h-screen font-['Söhne',_system-ui,_sans-serif]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-[#0a0a0b]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">X</span>
              </div>
              <span className="text-xl font-semibold tracking-tight">X1000</span>
            </a>

            <a href="mailto:capital@x1000.ai" className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-amber-400 transition-all">
              Contact IR
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="text-sm text-white/60">For Investors & Partners</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-light tracking-tight mb-6">
              Platform Economics
              <br />
              <span className="text-amber-400">Not Agency Margins</span>
            </h1>

            <p className="text-xl text-white/50 leading-relaxed mb-10">
              X1000 is an operating system with network effects, asset accumulation, and compounding returns. Every deployment strengthens the platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:capital@x1000.ai" className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-medium rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all">
                Request Investor Deck
              </a>
              <a href="#metrics" className="px-8 py-4 border border-white/20 text-white/80 font-medium rounded-full hover:bg-white/5 transition-all">
                View Metrics
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Investment Thesis</h2>
            <p className="text-lg text-white/50">Why X1000 is a platform, not an agency</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { number: '01', title: 'Infrastructure Layer', description: 'Not selling services. Building infrastructure that every AI application needs: auth, APIs, monitoring, deployment.', highlight: 'AWS for AI Apps' },
              { number: '02', title: 'Asset Accumulation', description: 'Every deployment creates reusable assets: templates, prompts, data models, integrations. Assets compound.', highlight: '1000+ Reusable Assets' },
              { number: '03', title: 'Network Effects', description: 'More users → more data → better AI → more users. Classic platform flywheel with AI multiplier.', highlight: 'Platform Flywheel' },
              { number: '04', title: 'Multi-Vertical', description: 'Same core platform, multiple verticals: education, healthcare, local services, finance, e-commerce.', highlight: '6 Verticals' },
              { number: '05', title: 'High Retention', description: 'Switching costs increase over time. Data lock-in. Workflow dependency. Integration depth.', highlight: '140% Net Retention' },
              { number: '06', title: 'Capital Efficiency', description: 'Self-serve products with optional services. High gross margin. Low CAC with content-led growth.', highlight: '80%+ Gross Margin' },
            ].map((thesis, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all">
                <div className="text-xs text-amber-400 mb-4">{thesis.number}</div>
                <h3 className="text-xl font-medium mb-3">{thesis.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">{thesis.description}</p>
                <div className="text-xs text-amber-400/80">{thesis.highlight}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Dashboard */}
      <section id="metrics" className="py-24 bg-gradient-to-b from-transparent via-amber-500/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Platform Metrics</h2>
            <p className="text-lg text-white/50">Real-time performance indicators</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Production Systems', value: '243+', change: '+12 this month' },
              { label: 'Monthly Active Users', value: '8.5K', change: '+23% MoM' },
              { label: 'API Calls / Day', value: '2.4M', change: '+45% MoM' },
              { label: 'Uptime SLA', value: '99.9%', change: 'Last 90 days' },
            ].map((metric, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-4xl font-light text-white mb-2">{metric.value}</div>
                <div className="text-sm text-white/60 mb-1">{metric.label}</div>
                <div className="text-xs text-emerald-400">{metric.change}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
              <h3 className="text-xl font-medium mb-6">Unit Economics</h3>
              <div className="space-y-6">
                {[
                  { label: 'Gross Margin', value: '82%', bar: 82 },
                  { label: 'Net Revenue Retention', value: '140%', bar: 100 },
                  { label: 'LTV / CAC Ratio', value: '12x', bar: 100 },
                  { label: 'CAC Payback', value: '5 months', bar: 60 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-white/60">{item.label}</span>
                      <span className="text-sm text-white font-medium">{item.value}</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full" style={{ width: `${item.bar}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
              <h3 className="text-xl font-medium mb-6">Revenue Composition</h3>
              <div className="space-y-4">
                {[
                  { label: 'SaaS Subscriptions', value: '45%', color: 'bg-amber-400' },
                  { label: 'Implementation Services', value: '30%', color: 'bg-emerald-400' },
                  { label: 'Agent Deployments', value: '15%', color: 'bg-blue-400' },
                  { label: 'Enterprise Licenses', value: '10%', color: 'bg-purple-400' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <span className="flex-1 text-sm text-white/60">{item.label}</span>
                    <span className="text-sm text-white font-medium">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/40">Target: 80% Recurring by 2027</span>
                  <span className="text-xs text-amber-400">On Track</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Governance Structure</h2>
            <p className="text-lg text-white/50">Four-pillar executive framework</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: 'CSA', title: 'Chief Strategy Architect', name: 'm8001', focus: 'Vision, Direction, Capital', icon: '🎯' },
              { role: 'CPQO', title: 'Chief Product Quality Officer', name: 'm8002', focus: 'Standards, Quality, Compliance', icon: '⚙️' },
              { role: 'CGCO', title: 'Chief Growth & Community Officer', name: 'm8003', focus: 'Growth, Community, Conversion', icon: '📈' },
              { role: 'EcoAudit', title: 'Ecosystem Auditor', name: 'm8004', focus: 'Diagnostics, Priorities, Standards', icon: '🔍' },
            ].map((member, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/[0.02] border border-white/5 text-center">
                <div className="text-3xl mb-4">{member.icon}</div>
                <div className="text-xs text-amber-400 mb-2">{member.role}</div>
                <div className="text-lg font-medium mb-1">{member.title}</div>
                <div className="text-sm text-white/40 mb-3">{member.name}</div>
                <div className="text-xs text-white/50">{member.focus}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-xl font-medium mb-2">V5.3 Ecosystem Standard</h3>
                <p className="text-sm text-white/50 max-w-xl">
                  Enterprise-grade operational framework with S0-S5 lifecycle management, Docker standards, health checks, and automated monitoring.
                </p>
              </div>
              <a href="/about" className="px-6 py-3 text-sm bg-white/5 text-white/60 rounded-full hover:bg-white/10 hover:text-white transition-all whitespace-nowrap">
                View Standard Docs →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Roadmap & Milestones</h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400 via-white/10 to-transparent" />

            <div className="space-y-12">
              {[
                { date: 'Q1 2026', status: 'completed', title: 'Foundation', items: ['V5.3 Standard Released', '200+ Projects Deployed', 'Healthcare Vertical Launch'] },
                { date: 'Q2 2026', status: 'current', title: 'Agent Platform', items: ['4 Core Agents Live', 'Stripe Integration', 'SMB Growth Engine'] },
                { date: 'Q3 2026', status: 'upcoming', title: 'Scale', items: ['$1M ARR Target', '10 Enterprise Clients', 'International Expansion'] },
                { date: 'Q4 2026', status: 'upcoming', title: 'Capital', items: ['Series A Preparation', 'Partner Ecosystem', '500+ Deployments'] },
              ].map((milestone, i) => (
                <div key={i} className="relative pl-20">
                  <div className={`absolute left-6 -translate-x-1/2 w-5 h-5 rounded-full border-2 ${
                    milestone.status === 'completed' ? 'bg-amber-400 border-amber-400' :
                    milestone.status === 'current' ? 'bg-amber-400/20 border-amber-400' :
                    'bg-white/5 border-white/20'
                  }`}>
                    {milestone.status === 'current' && (
                      <div className="absolute inset-0 rounded-full bg-amber-400/50 animate-ping" />
                    )}
                  </div>

                  <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm text-amber-400">{milestone.date}</span>
                      {milestone.status === 'completed' && (
                        <span className="px-2 py-0.5 text-xs bg-emerald-400/10 text-emerald-400 rounded">Done</span>
                      )}
                      {milestone.status === 'current' && (
                        <span className="px-2 py-0.5 text-xs bg-amber-400/10 text-amber-400 rounded">In Progress</span>
                      )}
                    </div>
                    <h3 className="text-xl font-medium mb-3">{milestone.title}</h3>
                    <ul className="space-y-2">
                      {milestone.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-white/50">
                          <span className="w-1 h-1 bg-white/30 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-6">Interested in X1000?</h2>
          <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
            We're selectively partnering with strategic investors who understand platform economics and AI infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="mailto:capital@x1000.ai" className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-medium rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all">
              Request Investor Deck
            </a>
            <a href="tel:+16178909641" className="px-8 py-4 border border-white/20 text-white/80 font-medium rounded-full hover:bg-white/5 transition-all">
              Schedule Call
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-white/30">
            <span>capital@x1000.ai</span>
            <span>•</span>
            <span>Boston, MA</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">X</span>
              </div>
              <span className="text-sm text-white/60">X1000.ai — Investor Relations</span>
            </div>
            <div className="text-sm text-white/30">© 2026 LIGHT HOPE LLC. Confidential.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
