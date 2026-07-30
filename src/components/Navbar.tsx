'use client'

import { useState, useEffect } from 'react'
import { Zap, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-cyan-400 flex items-center justify-center">
              <Zap className="w-5 h-5 text-black" />
            </div>
            <span className="text-lg font-semibold tracking-tight">
              UltraFast<span className="text-green-400">.support</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#wordpress" className="text-sm text-zinc-400 hover:text-white transition-colors">
              WordPress Care
            </a>
            <a href="#ai-services" className="text-sm text-zinc-400 hover:text-white transition-colors">
              AI Services
            </a>
            <a href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Contact
            </a>
            <a
              href="#pricing"
              className="px-4 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-zinc-200 transition-colors"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-white/5">
            <div className="flex flex-col gap-4">
              <a href="#wordpress" className="text-sm text-zinc-400 hover:text-white">WordPress Care</a>
              <a href="#ai-services" className="text-sm text-zinc-400 hover:text-white">AI Services</a>
              <a href="#pricing" className="text-sm text-zinc-400 hover:text-white">Pricing</a>
              <a href="#contact" className="text-sm text-zinc-400 hover:text-white">Contact</a>
              <a href="#pricing" className="px-4 py-2 text-sm font-medium bg-white text-black rounded-full w-fit">
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
