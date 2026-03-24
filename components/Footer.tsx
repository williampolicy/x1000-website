'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    platform: [
      { label: 'AI Agents', href: '/agents' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Capital', href: '/capital' },
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'LightHope', href: 'https://lighthope.ai', external: true },
    ],
    resources: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Status', href: '#' },
    ],
    legal: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  }

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">X</span>
              </div>
              <span className="text-xl font-semibold">X1000</span>
            </Link>
            <p className="text-white/40 text-sm">
              The Leverage Operating System.
              <br />
              Build 1000x leverage.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <div className="space-y-3 text-sm text-white/40">
              {footerLinks.platform.map((link) => (
                <Link key={link.href} href={link.href} className="block hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-3 text-sm text-white/40">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="block hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="space-y-3 text-sm text-white/40">
              {footerLinks.resources.map((link) => (
                <Link key={link.href} href={link.href} className="block hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="space-y-3 text-sm text-white/40">
              {footerLinks.legal.map((link) => (
                <Link key={link.href} href={link.href} className="block hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} LIGHT HOPE LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <span>Boston, MA</span>
            <span>•</span>
            <a href="mailto:info@x1000.ai" className="hover:text-white transition-colors">
              info@x1000.ai
            </a>
            <span>•</span>
            <a href="tel:+16178909641" className="hover:text-white transition-colors">
              +1 (617) 890-9641
            </a>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs text-white/30">
            EMPOWER GOOD WITH AI · From skill to system. From system to asset. From asset to capital.
          </p>
        </div>
      </div>
    </footer>
  )
}
