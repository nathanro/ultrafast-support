'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Lightning, Globe, Robot, List, X } from '@phosphor-icons/react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isWP = pathname === '/wordpress-support'
  const isIT = pathname === '/it-support'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
              <Lightning weight="fill" className="w-5 h-5 text-zinc-950" />
            </div>
            <span className="text-lg font-semibold tracking-tight">
              UltraFast<span className="text-emerald-400">.support</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/wordpress-support"
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isWP
                  ? 'bg-emerald-500/20 text-emerald-400'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Globe weight="fill" className="w-4 h-4" />
              WordPress Care
            </Link>
            <Link
              href="/it-support"
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isIT
                  ? 'bg-purple-500/20 text-purple-400'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Robot weight="fill" className="w-4 h-4" />
              IT & AI Services
            </Link>
            <div className="w-px h-6 bg-white/10 mx-2" />
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium bg-white text-zinc-950 rounded-full hover:bg-zinc-200 transition-colors"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <List className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-white/5">
            <div className="flex flex-col gap-2">
              <Link
                href="/wordpress-support"
                className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium ${
                  isWP ? 'bg-emerald-500/20 text-emerald-400' : 'text-zinc-400'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                <Globe weight="fill" className="w-4 h-4" />
                WordPress Care
              </Link>
              <Link
                href="/it-support"
                className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium ${
                  isIT ? 'bg-purple-500/20 text-purple-400' : 'text-zinc-400'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                <Robot weight="fill" className="w-4 h-4" />
                IT & AI Services
              </Link>
              <a
                href="#contact"
                className="px-4 py-3 text-sm font-medium bg-white text-zinc-950 rounded-lg text-center mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
