import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        {/* 404 Number */}
        <div className="text-[150px] sm:text-[200px] font-light leading-none text-white/10 select-none">
          404
        </div>

        {/* Message */}
        <h1 className="text-3xl sm:text-4xl font-light -mt-8 mb-4">
          Page Not Found
        </h1>
        <p className="text-white/50 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track to building 1000x leverage.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-medium rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all hover:scale-105"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border border-white/20 text-white/80 font-medium rounded-full hover:bg-white/5 transition-all"
          >
            Contact Support
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-sm text-white/40 mb-4">Or explore:</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link href="/agents" className="text-white/60 hover:text-amber-400 transition-colors">
              AI Agents
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/solutions" className="text-white/60 hover:text-amber-400 transition-colors">
              Solutions
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/capital" className="text-white/60 hover:text-amber-400 transition-colors">
              Investors
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/about" className="text-white/60 hover:text-amber-400 transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
