'use client'

import Link from 'next/link'
import { Lightning, Globe, Envelope, ChatCircle } from '@phosphor-icons/react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center">
                <Lightning weight="fill" className="w-5 h-5 text-zinc-950" />
              </div>
              <span className="text-lg font-semibold tracking-tight">
                UltraFast<span className="text-emerald-400">.support</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm max-w-sm mb-6">
              Professional WordPress care and AI-powered IT services.
              Fast, secure, and always reliable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="mailto:hello@ultrafast.support" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <Envelope className="w-4 h-4" />
              </a>
              <a href="#contact" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <ChatCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-emerald-400">WordPress Care</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><Link href="/wordpress-support" className="hover:text-white transition-colors">Plans & Pricing</Link></li>
              <li><Link href="/wordpress-support#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/wordpress-support#process" className="hover:text-white transition-colors">Our Process</Link></li>
              <li><Link href="/wordpress-support#testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-purple-400">IT & AI Services</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><Link href="/it-support" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/it-support#quote" className="hover:text-white transition-colors">Get a Quote</Link></li>
              <li><Link href="/it-support#cases" className="hover:text-white transition-colors">Use Cases</Link></li>
              <li><Link href="/it-support#tech" className="hover:text-white transition-colors">Tech Stack</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} UltraFast Support. All rights reserved.
          </p>
          <p className="text-sm text-zinc-500">
            Built with precision. Powered by expertise.
          </p>
        </div>
      </div>
    </footer>
  )
}
