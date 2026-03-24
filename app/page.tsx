'use client'

import { useState, useEffect, useRef } from 'react'

export default function X1000HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-[#0a0a0b] text-white min-h-screen font-['Söhne',_system-ui,_sans-serif] selection:bg-amber-500/30">
      {/* Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-30">
        <div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)',
            transform: `translate(${scrollY * 0.1}px, ${scrollY * -0.05}px)`,
            top: '10%',
            right: '10%',
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-[#0a0a0b]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">X</span>
              </div>
              <span className="text-xl font-semibold tracking-tight">X1000</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
              <a href="#core" className="hover:text-white transition-colors">Core</a>
              <a href="/agents" className="hover:text-white transition-colors">Agents</a>
              <a href="/solutions" className="hover:text-white transition-colors">Solutions</a>
              <a href="/capital" className="hover:text-white transition-colors">Capital</a>
            </div>

            <div className="flex items-center gap-4">
              <a href="/contact" className="hidden sm:block text-sm text-white/60 hover:text-white transition-colors">
                Login
              </a>
              <a
                href="/contact"
                className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-amber-400 transition-all hover:scale-105"
              >
                Book Strategy Call
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(251,191,36,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(251,191,36,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          />
        </div>

        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-amber-500/50 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm text-white/70">The Leverage Operating System</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Build{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent font-medium">
                1000x
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            </span>
            {' '}Leverage
          </h1>

          <p className="text-xl sm:text-2xl text-white/50 font-light max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Turn AI into real output, real assets, real advantage.
            <br className="hidden sm:block" />
            For founders, families, and organizations who refuse to be left behind.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="/contact" className="group px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-medium rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all hover:scale-105">
              Book Strategy Call
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#systems" className="px-8 py-4 border border-white/20 text-white/80 font-medium rounded-full hover:bg-white/5 hover:border-white/40 transition-all">
              Explore Systems
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '1s' }}>
            {[
              { value: '243+', label: 'Production Systems' },
              { value: '50+', label: 'Live Applications' },
              { value: 'V5.3', label: 'Enterprise Standard' },
              { value: '100%', label: 'Uptime SLA' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-light text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-white/0 via-white/20 to-white/0" />
        </div>
      </section>

      {/* What is X1000 */}
      <section id="what" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-8">
                Not courses.
                <br />
                Not consulting.
                <br />
                <span className="text-white/40">Not just tools.</span>
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                X1000 is the operating system that transforms your capabilities into
                compounding leverage. We don't sell training—we build systems that
                multiply your output by 1000x.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-transparent" />
                <span className="text-sm text-amber-400">From skill to system to asset to capital</span>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent rounded-3xl border border-white/10 p-8 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="absolute inset-0 rounded-full border border-white/10"
                      style={{
                        transform: `scale(${1 - i * 0.2})`,
                        top: `${i * 10}%`,
                        left: `${i * 10}%`,
                        right: `${i * 10}%`,
                        bottom: `${i * 10}%`,
                      }}
                    />
                  ))}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-2xl">X</span>
                  </div>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 text-xs text-white/40">CAPITAL</div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/40">SYSTEMS</div>
                  <div className="absolute left-8 top-1/2 -translate-y-1/2 text-xs text-white/40 -rotate-90">AGENTS</div>
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 text-xs text-white/40 rotate-90">ASSETS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Engines */}
      <section id="core" className="py-32 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
              Four Engines of Leverage
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Each engine compounds on the previous, creating exponential output.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '01', title: 'LEARN', subtitle: 'Master AI Capabilities', description: 'Build the foundation. Understand AI deeply, not superficially. From math to ML to production systems.', color: 'from-blue-500/20 to-blue-500/5', accent: 'text-blue-400' },
              { number: '02', title: 'BUILD', subtitle: 'Deploy Real Systems', description: 'Ship production-grade applications. Not demos, not prototypes. Real systems serving real users.', color: 'from-emerald-500/20 to-emerald-500/5', accent: 'text-emerald-400' },
              { number: '03', title: 'AUTOMATE', subtitle: 'Scale with Agents', description: 'Deploy AI agents that work 24/7. Automate growth, operations, and customer success.', color: 'from-amber-500/20 to-amber-500/5', accent: 'text-amber-400' },
              { number: '04', title: 'COMPOUND', subtitle: 'Turn Output into Assets', description: 'Every system becomes an asset. Assets compound. Capital follows. This is 1000x.', color: 'from-purple-500/20 to-purple-500/5', accent: 'text-purple-400' },
            ].map((engine, i) => (
              <div
                key={i}
                className={`group relative p-8 rounded-2xl bg-gradient-to-b ${engine.color} border border-white/5 hover:border-white/20 transition-all duration-500`}
              >
                <div className={`text-xs ${engine.accent} mb-4`}>{engine.number}</div>
                <h3 className="text-2xl font-medium mb-2">{engine.title}</h3>
                <div className="text-sm text-white/40 mb-4">{engine.subtitle}</div>
                <p className="text-sm text-white/60 leading-relaxed">{engine.description}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 w-6 h-px bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section id="agents" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-500/5 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16">
            <div className="lg:max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
                <span className="text-xs text-amber-400">NEW</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
                AI Agents That
                <br />
                <span className="text-amber-400">Work For You</span>
              </h2>
              <p className="text-lg text-white/50">
                Deploy intelligent agents that handle growth, operations, and customer
                success. They work 24/7. They never forget. They compound your output.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a href="/agents" className="px-6 py-3 bg-amber-400 text-black text-sm font-medium rounded-full hover:bg-amber-300 transition-colors">
                View All Agents
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'SAT Intelligence', category: 'Education', description: 'AI-powered test prep that diagnoses weaknesses, creates personalized paths, and tracks progress automatically.', features: ['Adaptive Diagnostics', 'Learning Path AI', 'Parent Dashboard'], price: 'From $49/mo', live: true },
              { name: 'SMB Growth Engine', category: 'Local Business', description: 'Automated lead capture, follow-up sequences, booking management, and conversion optimization.', features: ['Lead Capture', 'AI Follow-up', 'Booking Automation'], price: 'From $199/mo', live: true },
              { name: 'Care Operations AI', category: 'Healthcare', description: 'Smart scheduling, compliance tracking, and family communication for care facilities.', features: ['Smart Scheduling', 'Compliance Reports', 'Family Portal'], price: 'From $599/mo', live: true },
              { name: 'Founder OS', category: 'Entrepreneurs', description: 'Personal leverage system: content automation, project management, second brain, team coordination.', features: ['Content Engine', 'Project Hub', 'Team AI'], price: 'From $299/mo', live: false },
            ].map((agent, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-400/30 hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-xs text-white/40 mb-2">{agent.category}</div>
                    <h3 className="text-xl font-medium">{agent.name}</h3>
                  </div>
                  {agent.live ? (
                    <span className="px-2 py-1 text-xs bg-emerald-400/10 text-emerald-400 rounded-full">Live</span>
                  ) : (
                    <span className="px-2 py-1 text-xs bg-white/5 text-white/40 rounded-full">Coming</span>
                  )}
                </div>

                <p className="text-sm text-white/50 mb-6 leading-relaxed">{agent.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {agent.features.map((feature, j) => (
                    <span key={j} className="px-3 py-1 text-xs bg-white/5 text-white/60 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-amber-400 font-medium">{agent.price}</span>
                  <a href="/agents" className="text-sm text-white/60 hover:text-white transition-colors">
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical Solutions */}
      <section id="solutions" className="py-32 bg-gradient-to-b from-transparent via-black to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
              Industry Solutions
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Pre-built systems for your vertical. Deploy in weeks, not months.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Education', icon: '📚', projects: 'SAT, Math, Med, Law', clients: '50+' },
              { name: 'Healthcare', icon: '🏥', projects: 'ADHC, CareHub, Navigator', clients: '20+' },
              { name: 'Local Services', icon: '🏪', projects: 'Restaurant, Salon, Repair', clients: '100+' },
              { name: 'Finance', icon: '💰', projects: 'Mortgage, Trading, Capital', clients: '30+' },
              { name: 'E-Commerce', icon: '🛒', projects: 'Commerce, Kitchen, Retail', clients: '40+' },
              { name: 'Community', icon: '🌐', projects: 'Matching, Ministry, Events', clients: '25+' },
            ].map((vertical, i) => (
              <a href="/solutions" key={i} className="group p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all cursor-pointer">
                <div className="text-3xl mb-4">{vertical.icon}</div>
                <h3 className="text-xl font-medium mb-2">{vertical.name}</h3>
                <p className="text-sm text-white/40 mb-4">{vertical.projects}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs text-white/40">{vertical.clients} deployments</span>
                  <span className="text-xs text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Systems */}
      <section id="systems" className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-16">
            <div>
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">
                Featured Systems
              </h2>
              <p className="text-lg text-white/50">
                Production applications from our ecosystem. All live. All real.
              </p>
            </div>
            <a href="/solutions" className="text-sm text-amber-400 hover:underline">
              View all 243+ systems →
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'SAT Master', category: 'Education', score: '95%', url: 'sat.lighthope.ai', description: 'Comprehensive SAT preparation with AI-powered diagnostics and personalized study paths.' },
              { name: 'API X1000', category: 'Infrastructure', score: '92%', url: 'api.x1000.ai', description: 'Unified AI capability layer. DeepSeek + OpenAI integration with 70% cost reduction.' },
              { name: 'Rainbow ADHC', category: 'Healthcare', score: '90%', url: 'rainbow.lighthope.ai', description: 'Adult day health center management with smart scheduling and compliance.' },
              { name: 'HopeHub', category: 'Education', score: '95%', url: 'hopehub.lighthope.ai', description: 'AI-powered portfolio platform for students applying to top CS universities.' },
              { name: 'Auth Center', category: 'Infrastructure', score: '95%', url: 'login.lighthope.ai', description: 'Centralized SSO powering 240+ projects with OAuth 2.0 and JWT management.' },
              { name: 'Math X1000', category: 'Education', score: '85%', url: 'math.lighthope.ai', description: 'Competition-level math training with AI explanations and AMC/AIME prep.' },
            ].map((system, i) => (
              <a
                key={i}
                href={`https://${system.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-amber-400/30 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-white/40">{system.category}</span>
                  <span className="text-xs text-emerald-400">{system.score}</span>
                </div>
                <h3 className="text-xl font-medium mb-2 group-hover:text-amber-400 transition-colors">
                  {system.name}
                </h3>
                <p className="text-sm text-white/50 mb-4 leading-relaxed">{system.description}</p>
                <div className="flex items-center gap-2 text-xs text-white/30">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                  {system.url}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Capital / Investor Section */}
      <section id="capital" className="py-32 bg-gradient-to-b from-transparent via-amber-500/[0.03] to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="text-xs text-white/60">For Investors</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-6">
                Platform Economics,
                <br />
                <span className="text-amber-400">Not Agency Margins</span>
              </h2>
              <p className="text-lg text-white/50 mb-8 leading-relaxed">
                X1000 isn't a services company. It's an operating system with network effects,
                asset accumulation, and compounding returns. Every deployment strengthens the platform.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { label: 'Gross Margin', value: '80%+' },
                  { label: 'Net Retention', value: '140%' },
                  { label: 'CAC Payback', value: '<6 mo' },
                  { label: 'LTV/CAC', value: '>10x' },
                ].map((metric, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-2xl font-light text-amber-400 mb-1">{metric.value}</div>
                    <div className="text-xs text-white/40">{metric.label}</div>
                  </div>
                ))}
              </div>

              <a href="/capital" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-amber-400 transition-colors">
                View Investor Portal
                <span>→</span>
              </a>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-amber-400/10 to-transparent border border-amber-400/20 p-8">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="text-sm text-white/40 mb-2">Why X1000 Compounds</div>
                    <h3 className="text-2xl font-light mb-6">Asset Flywheel</h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      { step: '1', text: 'Deploy systems → Generate data' },
                      { step: '2', text: 'Data → Better AI → Better systems' },
                      { step: '3', text: 'Templates → Faster deploys → More clients' },
                      { step: '4', text: 'Clients → Revenue → Capital → Scale' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <span className="w-8 h-8 rounded-full bg-amber-400/10 flex items-center justify-center text-xs text-amber-400">
                          {item.step}
                        </span>
                        <span className="text-sm text-white/60">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-transparent to-transparent" />

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-4xl sm:text-6xl font-light tracking-tight mb-6">
            Ready to Build
            <br />
            <span className="text-amber-400">1000x Leverage?</span>
          </h2>
          <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto">
            Schedule a strategy call. We'll analyze your situation, identify leverage points,
            and show you exactly how to 1000x your output.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="/contact" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-medium rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all hover:scale-105">
              Book Strategy Call
            </a>
            <a href="/capital" className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white/80 font-medium rounded-full hover:bg-white/5 transition-all">
              Investor Inquiries
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-white/30">
            <span>Boston, MA</span>
            <span>•</span>
            <span>info@x1000.ai</span>
            <span>•</span>
            <span>+1 (617) 890-9641</span>
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
              <span className="text-sm text-white/60">X1000.ai — The Leverage Operating System</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-white/40">
              <a href="/about" className="hover:text-white transition-colors">About</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              <a href="https://www.lighthope.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LightHope.ai</a>
            </div>

            <div className="text-sm text-white/30">
              © 2026 LIGHT HOPE LLC
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
