'use client'

import { useState } from 'react'

const contactOptions = [
  { icon: '📞', title: 'Strategy Call', description: 'Book a 30-minute call to discuss how X1000 can transform your business.', action: 'Book Now', highlight: true },
  { icon: '💼', title: 'Enterprise Inquiry', description: 'Custom AI systems, multi-agent deployments, and enterprise solutions.', action: 'Contact Sales', highlight: false },
  { icon: '💰', title: 'Investor Relations', description: 'Partnership opportunities and investment discussions.', action: 'Reach Out', highlight: false },
  { icon: '🎓', title: 'Education Programs', description: 'Teen AI Bootcamp, Heir Accelerator, corporate training.', action: 'Learn More', highlight: false },
]

const offices = [
  { city: 'Boston HQ', address: 'Boston, Massachusetts, USA', phone: '+1 (617) 890-9641', email: 'info@x1000.ai', timezone: 'EST (UTC-5)' },
]

const faqs = [
  { q: 'What is X1000?', a: 'X1000 is a Leverage Operating System that helps individuals and organizations multiply their output by 1000x through AI-powered systems, agents, and automation.' },
  { q: 'How is X1000 different from LightHope?', a: 'LightHope focuses on education and human development. X1000 is the commercial leverage layer—turning capabilities into scalable systems, assets, and capital.' },
  { q: 'What industries do you serve?', a: 'Education, Healthcare, Local Services, Finance & Real Estate, Creator Economy, and Community Organizations. Each vertical has production-ready systems.' },
  { q: 'How much does it cost?', a: 'We have three tiers: Entry ($199-$499), Pro ($2,999-$9,999/year), and Enterprise (custom). Book a strategy call to find the right fit.' },
  { q: 'Can I see a demo?', a: 'Many of our systems are live and publicly accessible. Visit lighthope.ai/projects to explore 243+ production projects.' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', type: 'strategy', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

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

            <a href="/about" className="px-5 py-2.5 bg-white/10 text-white text-sm font-medium rounded-full hover:bg-white/20 transition-all border border-white/20">
              About Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/60 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Typically respond within 4 hours
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Let's Build<span className="bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text"> Together</span>
          </h1>

          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Ready to multiply your leverage by 1000x? Choose how you'd like to connect.
          </p>
        </div>
      </section>

      {/* Contact Options Grid */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {contactOptions.map((option, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 border transition-all hover:scale-[1.02] cursor-pointer ${
                  option.highlight
                    ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/10 border-amber-500/30 hover:border-amber-500/50'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-white/60 mb-6">{option.description}</p>
                <button className={`px-6 py-3 rounded-full font-medium transition-all ${
                  option.highlight
                    ? 'bg-amber-500 text-black hover:bg-amber-400'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}>
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="px-6 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send a Message</h2>

              {submitted ? (
                <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold mb-2">Message Received!</h3>
                  <p className="text-white/60">We'll get back to you within 4 hours during business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white/60 mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 transition-colors"
                      placeholder="Your company (optional)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/60 mb-2">Inquiry Type *</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                    >
                      <option value="strategy">Strategy Call</option>
                      <option value="enterprise">Enterprise Solution</option>
                      <option value="investor">Investment Inquiry</option>
                      <option value="education">Education Programs</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-white/60 mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <button type="submit" className="w-full py-4 bg-white text-black font-semibold rounded-xl hover:bg-amber-400 transition-all hover:scale-[1.02]">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Office Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Direct Contact</h2>

              {offices.map((office, index) => (
                <div key={index} className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-8">
                  <h3 className="text-xl font-semibold mb-4">{office.city}</h3>
                  <div className="space-y-4 text-white/60">
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400">📍</span>
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400">📞</span>
                      <a href={`tel:${office.phone}`} className="hover:text-white transition-colors">{office.phone}</a>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400">✉️</span>
                      <a href={`mailto:${office.email}`} className="hover:text-white transition-colors">{office.email}</a>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400">🌐</span>
                      <span>{office.timezone}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/10 rounded-2xl p-8 border border-amber-500/20">
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <div className="space-y-3">
                  {[
                    { label: 'LightHope Education', href: 'https://lighthope.ai' },
                    { label: 'Project Portfolio (243+)', href: 'https://edu.lighthope.ai/projects' },
                    { label: 'Auth Center (SSO)', href: 'https://login.lighthope.ai' },
                    { label: 'Investor Relations', href: '/capital' },
                  ].map((link, i) => (
                    <a key={i} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                      <span>{link.label}</span>
                      <span className="text-amber-400">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-white/60">Quick answers to common questions</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold">{faq.q}</span>
                  <span className={`text-amber-400 transition-transform ${expandedFaq === index ? 'rotate-45' : ''}`}>+</span>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-5 text-white/60">{faq.a}</div>
                )}
              </div>
            ))}
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
            <div className="text-center md:text-right text-sm text-white/40">
              <p>© 2026 LIGHT HOPE LLC. All rights reserved.</p>
              <p className="mt-1">Boston, MA · info@x1000.ai · +1 (617) 890-9641</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
