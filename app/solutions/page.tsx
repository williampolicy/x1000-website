'use client'

import { useState } from 'react'

const verticals = [
  {
    id: 'education',
    name: 'Education Intelligence',
    tagline: 'From Assessment to Mastery',
    description: 'AI-powered diagnostic systems, personalized learning paths, and automated tutoring that transform how students learn and educators teach.',
    gradient: 'from-blue-500 to-cyan-500',
    icon: '🎓',
    stats: [
      { label: 'Active Students', value: '2,400+' },
      { label: 'Diagnostic Accuracy', value: '94%' },
      { label: 'Avg Score Improvement', value: '+180 pts' },
    ],
    products: [
      { name: 'SAT Master', url: 'sat.lighthope.ai', description: 'AI diagnostic + adaptive practice + score prediction' },
      { name: 'Math X1000', url: 'math.lighthope.ai', description: 'Foundation to competition-level math intelligence' },
      { name: 'Essay Engine', url: 'essay.lighthope.ai', description: 'Writing analysis, structure coaching, voice development' },
      { name: 'SOLAIMENT Academy', url: 'solaiment.lighthope.ai', description: 'Next-gen educational methodology platform' },
    ],
    capabilities: ['Real-time diagnostic assessment', 'Personalized learning path generation', 'Parent dashboard & progress tracking', 'Automated weakness identification', 'Tutor assignment optimization', 'Predictive score modeling'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare Operations',
    tagline: 'Compassionate Care, Intelligent Systems',
    description: 'Operational intelligence for adult day care, clinics, and healthcare facilities. Scheduling, compliance, patient tracking, and family communication.',
    gradient: 'from-emerald-500 to-teal-500',
    icon: '🏥',
    stats: [
      { label: 'Facilities Served', value: '12+' },
      { label: 'Patients Managed', value: '800+' },
      { label: 'Admin Time Saved', value: '40%' },
    ],
    products: [
      { name: 'CareHub X1000', url: 'carehub.lighthope.ai', description: 'Unified healthcare facility management' },
      { name: 'Rainbow ADHC', url: 'rainbow.lighthope.ai', description: 'Adult day healthcare center operations' },
      { name: 'Sunshine CareHub', url: 'sunshine.lighthope.ai', description: 'Multi-location care coordination' },
      { name: 'ClearCancer Circle', url: 'ccc.lighthope.ai', description: 'Cancer care community & support network' },
    ],
    capabilities: ['Patient intake & documentation', 'Staff scheduling optimization', 'Compliance tracking & reporting', 'Family communication portal', 'Medication management', 'Activity planning & tracking'],
  },
  {
    id: 'local-services',
    name: 'Local Business Growth',
    tagline: 'AI for Main Street',
    description: 'Lead capture, booking automation, CRM, and growth systems for local service businesses. From pest control to salons to restaurants.',
    gradient: 'from-orange-500 to-red-500',
    icon: '🏪',
    stats: [
      { label: 'Businesses Served', value: '50+' },
      { label: 'Leads Generated', value: '15K+' },
      { label: 'Booking Conversion', value: '+65%' },
    ],
    products: [
      { name: 'Grow Engine', url: 'grow.lighthope.ai', description: 'Lead gen + CRM + automated follow-up' },
      { name: 'Build Navigator', url: 'build.lighthope.ai', description: 'Construction & contractor management' },
      { name: 'Salon Suite', url: 'salon.lighthope.ai', description: 'Booking, inventory, client management' },
      { name: 'Restaurant Hub', url: 'food.lighthope.ai', description: 'Orders, reservations, operations' },
    ],
    capabilities: ['Multi-channel lead capture', 'AI-powered follow-up sequences', 'Online booking & scheduling', 'Review management & response', 'Local SEO optimization', 'Customer lifetime value tracking'],
  },
  {
    id: 'finance',
    name: 'Finance & Real Estate',
    tagline: 'Complexity into Clarity',
    description: 'Mortgage workflows, real estate operations, compliance automation, and financial planning tools for advisors and institutions.',
    gradient: 'from-violet-500 to-purple-500',
    icon: '💰',
    stats: [
      { label: 'Transactions Processed', value: '$2.4B+' },
      { label: 'Processing Time', value: '-60%' },
      { label: 'Client Satisfaction', value: '98%' },
    ],
    products: [
      { name: 'Nicole Mortgage', url: 'nicole.lighthope.ai', description: 'End-to-end mortgage workflow automation' },
      { name: 'Property Hub', url: 'realestate.lighthope.ai', description: 'Real estate transaction management' },
      { name: 'Finance Center', url: 'finance.lighthope.ai', description: 'Financial planning & advisory tools' },
      { name: 'Trade Engine', url: 'trade.lighthope.ai', description: 'Investment tracking & analysis' },
    ],
    capabilities: ['Document processing & OCR', 'Compliance checklist automation', 'Client communication workflows', 'Rate comparison & analysis', 'Transaction timeline management', 'Regulatory reporting'],
  },
  {
    id: 'creator',
    name: 'Creator & Media',
    tagline: 'Build Your Empire',
    description: 'Content creation, audience growth, monetization systems, and personal brand infrastructure for creators and thought leaders.',
    gradient: 'from-pink-500 to-rose-500',
    icon: '🎬',
    stats: [
      { label: 'Creators Empowered', value: '200+' },
      { label: 'Content Pieces/Month', value: '5K+' },
      { label: 'Audience Reach', value: '2M+' },
    ],
    products: [
      { name: 'Content Engine', url: 'engine.lighthope.ai', description: 'Multi-platform content creation & scheduling' },
      { name: 'Twitter Autopilot', url: 'twitter.lighthope.ai', description: 'Thread writing, engagement automation' },
      { name: 'Qixi Platform', url: 'qixi.lighthope.ai', description: 'Chinese creator ecosystem' },
      { name: 'Post Master', url: 'post.lighthope.ai', description: 'Social media management hub' },
    ],
    capabilities: ['AI content generation & editing', 'Multi-platform scheduling', 'Audience analytics & insights', 'Monetization strategy', 'Community management', 'Brand voice consistency'],
  },
  {
    id: 'community',
    name: 'Community & Events',
    tagline: 'Connection at Scale',
    description: 'Event management, community platforms, and engagement systems for organizations, nonprofits, and community builders.',
    gradient: 'from-amber-500 to-yellow-500',
    icon: '🤝',
    stats: [
      { label: 'Communities Served', value: '30+' },
      { label: 'Events Managed', value: '500+' },
      { label: 'Members Connected', value: '10K+' },
    ],
    products: [
      { name: 'HopeHub', url: 'hopehub.lighthope.ai', description: 'Community connection & resource hub' },
      { name: 'Event Center', url: 'event.lighthope.ai', description: 'Event planning & registration' },
      { name: 'Feedback Loop', url: 'feedback.lighthope.ai', description: 'Survey & feedback management' },
      { name: 'Boston Hub', url: 'boston.lighthope.ai', description: 'Local community networking' },
    ],
    capabilities: ['Member management & CRM', 'Event registration & ticketing', 'Communication campaigns', 'Volunteer coordination', 'Donation processing', 'Impact measurement'],
  },
]

export default function SolutionsPage() {
  const [activeVertical, setActiveVertical] = useState(verticals[0].id)
  const currentVertical = verticals.find(v => v.id === activeVertical)!

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
              <a href="/agents" className="hover:text-white transition-colors">Agents</a>
              <a href="/solutions" className="text-white">Solutions</a>
              <a href="/capital" className="hover:text-white transition-colors">Capital</a>
            </div>

            <a href="/contact" className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-amber-400 transition-all hover:scale-105">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            Industry-Specific Solutions
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Vertical<span className="bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text"> Systems</span>
          </h1>

          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12">
            Production-grade AI solutions designed for specific industries. Not demos. Not prototypes. Real systems serving real businesses.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {verticals.map((vertical) => (
              <button
                key={vertical.id}
                onClick={() => setActiveVertical(vertical.id)}
                className={`px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeVertical === vertical.id
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <span className="mr-2">{vertical.icon}</span>
                {vertical.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Vertical Detail */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${currentVertical.gradient} mb-6`}>
                <span className="text-2xl">{currentVertical.icon}</span>
                <span className="font-semibold text-white">{currentVertical.name}</span>
              </div>

              <h2 className="text-4xl font-bold mb-4">{currentVertical.tagline}</h2>
              <p className="text-lg text-white/60 mb-8">{currentVertical.description}</p>

              <div className="grid grid-cols-3 gap-6 mb-10">
                {currentVertical.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${currentVertical.gradient} text-transparent bg-clip-text`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/40 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold mb-4">Core Capabilities</h3>
                <div className="grid grid-cols-2 gap-3">
                  {currentVertical.capabilities.map((cap, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-white/60">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${currentVertical.gradient}`} />
                      {cap}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm text-white/40 uppercase tracking-wider mb-6">Live Production Systems</h3>

              {currentVertical.products.map((product, index) => (
                <a
                  key={index}
                  href={`https://${product.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-semibold group-hover:text-amber-400 transition-colors">{product.name}</h4>
                        <div className="text-sm text-white/40 font-mono">{product.url}</div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                        <svg className="w-5 h-5 text-white/40 group-hover:text-amber-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-white/60">{product.description}</p>

                    <div className="flex items-center gap-2 mt-4">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs text-green-400">Live in Production</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-12 border border-white/10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Industry?</h2>
            <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
              Our vertical solutions are production-ready and battle-tested. Schedule a strategy call to see how X1000 can work for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-amber-400 transition-all hover:scale-105">
                Book Strategy Call
              </a>
              <a href="/agents" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20">
                Explore AI Agents
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">X</span>
              </div>
              <span className="text-xl font-semibold">X1000</span>
            </div>
            <p className="text-white/40 text-sm">© 2026 LIGHT HOPE LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
