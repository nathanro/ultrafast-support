'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Clock, Lightning } from '@phosphor-icons/react'
import Link from 'next/link'

export default function WPHero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute inset-0 mesh-wp" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-500/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
                <ShieldCheck weight="fill" className="w-4 h-4" />
                WordPress Care Plans
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              Your WordPress site,{' '}
              <span className="text-gradient-wp">always perfect</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-zinc-400 mb-8 max-w-lg"
            >
              We handle updates, backups, security, and performance so you can focus on your business. No technical knowledge required.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-zinc-950 font-semibold rounded-full hover:bg-emerald-400 transition-all"
              >
                View Plans
                <ArrowRight weight="bold" className="w-4 h-4" />
              </a>
              <Link
                href="/it-support"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 transition-all"
              >
                Need IT Services?
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <Clock weight="fill" className="w-4 h-4 text-emerald-400" />
                <span>15min response time</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <Lightning weight="fill" className="w-4 h-4 text-emerald-400" />
                <span>Sub-2s load times</span>
              </div>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass-strong aspect-[3/2] bg-gradient-to-br from-emerald-900/50 to-cyan-900/50 flex items-center justify-center">
              <div className="text-center p-8">
                <ShieldCheck weight="fill" className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">WordPress Dashboard</div>
                <div className="text-zinc-400">Real-time monitoring &amp; analytics</div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 glass rounded-full px-4 py-2 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-zinc-300">Monitoring active</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
