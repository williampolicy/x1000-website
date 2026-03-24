'use client'

import { useState } from 'react'

const agents = [
  {
    id: 'sat-intelligence',
    name: 'SAT Intelligence',
    category: 'Education',
    status: 'live',
    price: { starter: 49, pro: 149, family: 499 },
    description: 'AI-powered SAT preparation that diagnoses weaknesses, creates personalized learning paths, and tracks progress with detailed analytics.',
    capabilities: ['AI Diagnostic Assessment', 'Adaptive Question Generation', 'Personalized Learning Paths', 'Real-time Progress Tracking', 'Parent/Teacher Dashboard', 'Score Prediction Model'],
    metrics: { users: '1,200+', improvement: '+150 pts avg', retention: '92%' },
    integrations: ['sat.lighthope.ai', 'math.lighthope.ai'],
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'smb-growth',
    name: 'SMB Growth Engine',
    category: 'Local Business',
    status: 'live',
    price: { starter: 199, pro: 499, enterprise: 999 },
    description: 'Complete growth automation for local businesses: lead capture, AI follow-ups, booking management, and conversion optimization.',
    capabilities: ['Landing Page Builder', 'Lead Capture Forms', 'AI SMS/Email Follow-up', 'Booking Automation', 'CRM Integration', 'Conversion Analytics'],
    metrics: { businesses: '85+', leads: '50K+ captured', conversion: '3.2x improvement' },
    integrations: ['Multiple verticals'],
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'care-operations',
    name: 'Care Operations AI',
    category: 'Healthcare',
    status: 'live',
    price: { single: 599, multi: 1499, enterprise: 'Custom' },
    description: 'Intelligent operations management for care facilities: scheduling, compliance, transportation, and family communication.',
    capabilities: ['Smart Staff Scheduling', 'Driver Dispatch AI', 'Attendance Tracking', 'Compliance Reporting', 'Family Portal', 'Multi-role Workstation'],
    metrics: { centers: '12', efficiency: '+40%', compliance: '100%' },
    integrations: ['rainbow.lighthope.ai', 'sunshine.lighthope.ai'],
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    id: 'founder-os',
    name: 'Founder OS',
    category: 'Entrepreneurs',
    status: 'beta',
    price: { starter: 299, pro: 799, executive: 2999 },
    description: 'Personal leverage system for founders: content automation, project management, second brain, and team coordination.',
    capabilities: ['Content Engine (Social/Newsletter)', 'Project Management Hub', 'Knowledge Graph / Second Brain', 'Meeting AI Assistant', 'Team Task Coordination', 'Personal Analytics'],
    metrics: { founders: 'Beta', productivity: '+400% reported', hours: '20+ saved/week' },
    integrations: ['Coming Q2 2026'],
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 'math-tutor',
    name: 'Math Tutor AI',
    category: 'Education',
    status: 'live',
    price: { basic: 29, premium: 99, school: 499 },
    description: 'K-12 math tutoring with step-by-step explanations, gap analysis, and competition prep (AMC/AIME/USAMO).',
    capabilities: ['Step-by-step Solutions', 'Knowledge Gap Analysis', 'Competition Prep Tracks', 'Handwriting Recognition', 'Visual Math Animations', 'Progress Reports'],
    metrics: { students: '500+', problems: '100K+ solved', accuracy: '98%' },
    integrations: ['math.lighthope.ai', 'rollmath.lighthope.ai'],
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    id: 'content-engine',
    name: 'Content Engine',
    category: 'Marketing',
    status: 'beta',
    price: { creator: 99, business: 299, agency: 999 },
    description: 'AI content creation and distribution: generate, schedule, and analyze content across all platforms.',
    capabilities: ['Multi-platform Content Gen', 'Xiaohongshu / Douyin / IG', 'Scheduling & Auto-posting', 'Engagement Analytics', 'Trend Detection', 'Competitor Analysis'],
    metrics: { posts: '10K+ generated', engagement: '+280% avg', time: '90% reduction' },
    integrations: ['Coming Q2 2026'],
    gradient: 'from-cyan-500 to-blue-600',
  },
]

export default function AgentsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const categories = ['all', 'Education', 'Local Business', 'Healthcare', 'Entrepreneurs', 'Marketing']
  const filteredAgents = selectedCategory === 'all' ? agents : agents.filter(a => a.category === selectedCategory)

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

            <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
              <a href="/#core" className="hover:text-white transition-colors">Core</a>
              <a href="/agents" className="text-white">Agents</a>
              <a href="/solutions" className="hover:text-white transition-colors">Solutions</a>
              <a href="/capital" className="hover:text-white transition-colors">Capital</a>
            </div>

            <a href="/contact" className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-amber-400 transition-all">
              Deploy Agent
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-sm text-amber-400">AI Agent Marketplace</span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-light tracking-tight mb-6">
              Agents That
              <br />
              <span className="text-amber-400">Work 24/7</span>
            </h1>

            <p className="text-xl text-white/50 max-w-xl leading-relaxed">
              Deploy intelligent AI agents that handle growth, operations, and customer success.
              They never sleep. They never forget. They compound your output.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-y border-white/5 sticky top-20 z-30 bg-[#0a0a0b]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-sm rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All Agents' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-8">
            {filteredAgents.map((agent) => (
              <div
                key={agent.id}
                className="group relative rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${agent.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

                <div className="p-8 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-xs text-white/40">{agent.category}</span>
                        {agent.status === 'live' ? (
                          <span className="px-2 py-1 text-xs bg-emerald-400/10 text-emerald-400 rounded-full">Live</span>
                        ) : (
                          <span className="px-2 py-1 text-xs bg-amber-400/10 text-amber-400 rounded-full">Beta</span>
                        )}
                      </div>

                      <h2 className="text-3xl font-light mb-4">{agent.name}</h2>
                      <p className="text-white/50 leading-relaxed mb-6 max-w-xl">{agent.description}</p>

                      <div className="flex flex-wrap gap-6 mb-6">
                        {Object.entries(agent.metrics).map(([key, value]) => (
                          <div key={key}>
                            <div className="text-xl font-light text-white">{value}</div>
                            <div className="text-xs text-white/40 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {agent.capabilities.slice(0, 4).map((cap, i) => (
                          <span key={i} className="px-3 py-1.5 text-xs bg-white/5 text-white/60 rounded-full">{cap}</span>
                        ))}
                        {agent.capabilities.length > 4 && (
                          <span className="px-3 py-1.5 text-xs bg-white/5 text-white/40 rounded-full">+{agent.capabilities.length - 4} more</span>
                        )}
                      </div>
                    </div>

                    <div className="lg:w-80 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                      <div className="text-sm text-white/40 mb-4">Pricing</div>
                      <div className="space-y-3 mb-6">
                        {Object.entries(agent.price).map(([tier, price]) => (
                          <div key={tier} className="flex items-center justify-between">
                            <span className="text-sm text-white/60 capitalize">{tier}</span>
                            <span className="text-white font-medium">
                              {typeof price === 'number' ? `$${price}/mo` : price}
                            </span>
                          </div>
                        ))}
                      </div>

                      <a href="/contact" className={`block w-full py-3 text-center text-sm font-medium rounded-full bg-gradient-to-r ${agent.gradient} text-white hover:opacity-90 transition-opacity`}>
                        Deploy This Agent
                      </a>

                      <div className="mt-4 text-center">
                        <span className="text-xs text-white/40">View Documentation →</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Agent CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-light mb-6">Need a Custom Agent?</h2>
          <p className="text-lg text-white/50 mb-8 max-w-xl mx-auto">
            We build custom AI agents tailored to your specific workflow, industry, and business logic. From design to deployment.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-amber-400 transition-colors">
            Discuss Custom Agent<span>→</span>
          </a>
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
              <span className="text-sm text-white/60">X1000.ai — AI Agent Marketplace</span>
            </div>
            <div className="text-sm text-white/30">© 2026 LIGHT HOPE LLC</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
