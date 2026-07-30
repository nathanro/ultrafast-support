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
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Background glowing rings */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl filter blur-3xl opacity-30 animate-pulse" />
            
            <div className="relative rounded-2xl border border-white/10 bg-zinc-950/80 backdrop-blur-md overflow-hidden p-6 shadow-2xl">
              {/* Header of the mock browser/window */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-zinc-500 font-mono ml-2">https://dash.ultrafast.support</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Secure & Optimized
                  </span>
                </div>
              </div>

              {/* Grid content inside browser */}
              <div className="grid grid-cols-2 gap-4">
                {/* Speed Score card */}
                <div className="col-span-2 sm:col-span-1 rounded-xl bg-white/5 border border-white/5 p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-zinc-400">PageSpeed Performance</span>
                    <Lightning weight="fill" className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-4xl font-extrabold text-gradient-wp">99</span>
                    <span className="text-xs text-zinc-500">/100 (Mobile & Desktop)</span>
                  </div>
                  {/* Miniature graph */}
                  <div className="h-8 w-full mt-4 flex items-end gap-1">
                    {[30, 45, 35, 60, 50, 75, 90, 85, 95, 99].map((val, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${val}%` }}
                        transition={{ duration: 0.8, delay: i * 0.05 }}
                        className="flex-1 bg-gradient-to-t from-emerald-500 to-cyan-400 rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>

                {/* Uptime card */}
                <div className="col-span-2 sm:col-span-1 rounded-xl bg-white/5 border border-white/5 p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-zinc-400">Service Uptime</span>
                    <Clock weight="fill" className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-3xl font-extrabold text-zinc-100">99.998%</span>
                  </div>
                  <div className="grid grid-cols-12 gap-0.5 mt-4">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="h-6 bg-emerald-500/20 border-t-2 border-emerald-400 rounded-sm" />
                    ))}
                  </div>
                  <span className="text-[10px] text-zinc-500 mt-2 text-right">Last 30 days</span>
                </div>

                {/* Security feed */}
                <div className="col-span-2 rounded-xl bg-white/5 border border-white/5 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-zinc-400">Live Protection Log</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Active</span>
                  </div>
                  <div className="font-mono text-[11px] space-y-2 text-zinc-400">
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400">[08:42:15]</span>
                      <span>Daily full backup successfully encrypted & uploaded to AWS S3.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-400">[09:12:04]</span>
                      <span>Malware scan complete. 0 threats detected across 14,285 files.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-amber-400">[10:15:30]</span>
                      <span>Plugin security updates applied: WooCommerce (v9.1.2) patched.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 glass rounded-full px-4 py-2 flex items-center gap-2 border border-emerald-500/30"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs text-zinc-300 font-medium">Monitoring active</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
