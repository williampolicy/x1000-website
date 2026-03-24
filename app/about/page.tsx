'use client'

const milestones = [
  { year: '2021', title: 'Foundation', description: 'LIGHT HOPE LLC founded in Boston with a mission to democratize AI education.' },
  { year: '2022', title: 'First 50 Projects', description: 'Rapid prototyping phase. Built and deployed 50+ internal tools and educational platforms.' },
  { year: '2023', title: 'Infrastructure Scale', description: 'V3.0 ecosystem standard established. Unified auth, API layer, and monitoring infrastructure.' },
  { year: '2024', title: '200+ Projects Live', description: 'Crossed 200 production projects. Healthcare, education, and local services verticals mature.' },
  { year: '2025', title: 'V5.3 Standard', description: 'Enterprise-grade stability standards. Docker V5.3, auto-recovery, proactive monitoring.' },
  { year: '2026', title: 'X1000 Launch', description: 'Commercial platform launch. AI Agents marketplace. Global expansion begins.' },
]

const principles = [
  { icon: '🎯', title: 'Substance Over Appearance', description: 'Every project must have real content, real users, real value. No empty shells. No demo-only products.' },
  { icon: '🔄', title: 'Verification Closed Loop', description: 'Create → Develop → Test → Deploy → User Validation → Iterate. Every project completes the full cycle.' },
  { icon: '⚖️', title: 'Quality Over Quantity', description: 'Better to have fewer excellent projects than many mediocre ones. We prune aggressively.' },
  { icon: '🛡️', title: 'Stability First', description: 'Resource isolation, automatic recovery, proactive monitoring. Production systems must be bulletproof.' },
]

const governance = [
  { code: 'm8001', role: 'CSA', title: 'Chief Strategy Architect', description: 'Sets direction, defines standards, approves ecosystem changes.', color: 'from-amber-500 to-orange-500' },
  { code: 'm8002', role: 'CPQO', title: 'Chief Product Quality Officer', description: 'Guards quality gates, enforces standards, batch fixes issues.', color: 'from-blue-500 to-cyan-500' },
  { code: 'm8003', role: 'CGCO', title: 'Chief Growth & Community Officer', description: 'Drives adoption, builds community, converts users to advocates.', color: 'from-green-500 to-emerald-500' },
  { code: 'm8004', role: 'EcoAudit', title: 'Ecosystem Audit Officer', description: 'Diagnoses issues, reveals truth, sets priorities, drafts standards.', color: 'from-purple-500 to-violet-500' },
]

const stats = [
  { value: '243+', label: 'Production Projects' },
  { value: '50+', label: 'Live Applications' },
  { value: '100+', label: 'Cloudflare Routes' },
  { value: 'V5.3', label: 'Ecosystem Standard' },
]

export default function AboutPage() {
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
              <a href="/solutions" className="hover:text-white transition-colors">Solutions</a>
              <a href="/capital" className="hover:text-white transition-colors">Capital</a>
            </div>

            <a href="/contact" className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-amber-400 transition-all hover:scale-105">
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              About X1000
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Building the
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">
                Leverage Operating System
              </span>
            </h1>

            <p className="text-xl text-white/60 leading-relaxed mb-12">
              X1000 is not a product. It's an operating system that turns human capability
              into scalable, compounding leverage. We build the infrastructure that lets
              individuals and organizations multiply their output by 1000x.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-white/60 mb-6 leading-relaxed">
                <span className="text-amber-400 font-semibold">EMPOWER GOOD WITH AI.</span>
              </p>
              <p className="text-lg text-white/60 mb-6 leading-relaxed">
                We believe AI should amplify human potential, not replace it. Our mission
                is to build infrastructure that gives everyone access to 1000x leverage—the
                same force multipliers that were previously available only to the largest
                corporations.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                From education to healthcare to local businesses, we deploy AI systems
                that create real value for real people. Not demos. Not experiments.
                Production systems serving thousands daily.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-semibold mb-6">The X1000 Thesis</h3>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'From Skill to System', desc: 'Turn individual expertise into repeatable, scalable systems' },
                  { step: '2', title: 'From System to Asset', desc: 'Systems become valuable intellectual property that compounds' },
                  { step: '3', title: 'From Asset to Capital', desc: 'Assets generate returns that fund the next wave of innovation' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-400 font-bold">{item.step}</span>
                    </div>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-white/60">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-white/60">From first line of code to global platform</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-amber-400 font-bold text-2xl mb-2">{milestone.year}</div>
                <div className="font-semibold text-lg mb-2">{milestone.title}</div>
                <div className="text-white/60 text-sm">{milestone.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Principles</h2>
            <p className="text-lg text-white/60">The standards that govern our ecosystem</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-amber-500/30 transition-colors">
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
                <p className="text-white/60">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Governance Structure</h2>
            <p className="text-lg text-white/60">The four-corner system that maintains ecosystem integrity</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {governance.map((role, index) => (
              <div key={index} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors">
                <div className={`inline-flex px-3 py-1 rounded-full bg-gradient-to-r ${role.color} text-white text-xs font-bold mb-4`}>
                  {role.code}
                </div>
                <div className="text-lg font-semibold mb-1">{role.role}</div>
                <div className="text-sm text-white/40 mb-3">{role.title}</div>
                <p className="text-sm text-white/60">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LightHope Connection */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/10 rounded-3xl p-12 border border-amber-500/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Powered by LightHope</h2>
                <p className="text-lg text-white/60 mb-6">
                  X1000 is built on the LightHope foundation—Massachusetts's premier
                  AI education ecosystem. While LightHope focuses on education and
                  human development, X1000 channels that same energy into commercial
                  leverage and wealth creation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://lighthope.ai" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-amber-400 transition-all text-center">
                    Visit LightHope.ai
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {['Education', 'Healthcare', 'Infrastructure', 'Community'].map((item, i) => (
                  <div key={i} className="bg-white/10 rounded-2xl p-6 text-center">
                    <div className="text-2xl font-bold text-amber-400">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Leverage Revolution</h2>
          <p className="text-lg text-white/60 mb-8">
            Whether you're a founder, educator, healthcare operator, or enterprise leader, X1000 can multiply your impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-amber-400 transition-all hover:scale-105">
              Book Strategy Call
            </a>
            <a href="/capital" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20">
              Investor Relations
            </a>
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
            <div className="text-sm text-white/40">
              <p>© 2026 LIGHT HOPE LLC. All rights reserved.</p>
              <p className="mt-2">info@x1000.ai · +1 (617) 890-9641</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
