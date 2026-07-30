'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Globe, Robot, ArrowRight, CheckCircle } from '@phosphor-icons/react'

const wpFeatures = [
  'Daily backups & updates',
  'Security monitoring',
  'Performance optimization',
  '24/7 uptime monitoring',
]

const itFeatures = [
  'AI workflow automation',
  'Vibe coding & development',
  'VPS management',
  'Smart integrations',
]

export default function ServiceSelector() {
  const [hovered, setHovered] = useState<'wp' | 'it' | null>(null)

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute inset-0 mesh-wp opacity-50" />
      <div className="absolute inset-0 mesh-it opacity-50" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-gradient-white">Choose your</span>
            <br />
            <span className="text-gradient-wp">support</span>
            <span className="text-gradient-white"> path</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-zinc-400">
            Two specialized services. One commitment to excellence.
          </p>
        </motion.div>

        {/* Split selector */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0">
          {/* WordPress Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/wordpress-support">
              <div
                className={`relative h-full min-h-[500px] lg:min-h-[600px] rounded-3xl lg:rounded-r-none overflow-hidden cursor-pointer transition-all duration-500 ${
                  hovered === 'wp' ? 'scale-[1.02]' : ''
                }`}
                onMouseEnter={() => setHovered('wp')}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/80 to-cyan-950/60" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 lg:p-12">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-8">
                      <Globe weight="fill" className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                      WordPress Care
                    </h2>
                    <p className="text-zinc-400 text-lg mb-8 max-w-sm">
                      Complete maintenance, security, and performance for your WordPress sites.
                    </p>
                    <ul className="space-y-3">
                      {wpFeatures.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-zinc-300">
                          <CheckCircle weight="fill" className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 text-emerald-400 font-semibold mt-8">
                    <span>Explore plans</span>
                    <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                      hovered === 'wp' ? 'translate-x-2' : ''
                    }`} />
                  </div>
                </div>

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-emerald-500/5 transition-opacity duration-500 ${
                  hovered === 'wp' ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>
            </Link>
          </motion.div>

          {/* IT Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/it-support">
              <div
                className={`relative h-full min-h-[500px] lg:min-h-[600px] rounded-3xl lg:rounded-l-none overflow-hidden cursor-pointer transition-all duration-500 ${
                  hovered === 'it' ? 'scale-[1.02]' : ''
                }`}
                onMouseEnter={() => setHovered('it')}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-bl from-purple-950/80 to-pink-950/60" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 lg:p-12">
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-8">
                      <Robot weight="fill" className="w-8 h-8 text-purple-400" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                      IT & AI Services
                    </h2>
                    <p className="text-zinc-400 text-lg mb-8 max-w-sm">
                      Custom development, automation, and AI-powered solutions for your business.
                    </p>
                    <ul className="space-y-3">
                      {itFeatures.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-zinc-300">
                          <CheckCircle weight="fill" className="w-5 h-5 text-purple-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 text-purple-400 font-semibold mt-8">
                    <span>Get a quote</span>
                    <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                      hovered === 'it' ? 'translate-x-2' : ''
                    }`} />
                  </div>
                </div>

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-purple-500/5 transition-opacity duration-500 ${
                  hovered === 'it' ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 glass rounded-2xl p-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-400">500+</div>
              <div className="text-sm text-zinc-500">Sites maintained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">99.9%</div>
              <div className="text-sm text-zinc-500">Uptime average</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">15min</div>
              <div className="text-sm text-zinc-500">Response time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400">24/7</div>
              <div className="text-sm text-zinc-500">Support available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
