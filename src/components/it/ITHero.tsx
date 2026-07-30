'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Robot, Code, CloudArrowUp } from '@phosphor-icons/react'
import Link from 'next/link'

export default function ITHero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute inset-0 mesh-it" />
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-500/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden glass-strong aspect-[3/2] bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
              <div className="text-center p-8">
                <Robot weight="fill" className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-2">AI Automation</div>
                <div className="text-zinc-400">Workflows that work while you sleep</div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-4 -right-4 glass rounded-full px-4 py-2 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-sm text-zinc-300">AI Active</span>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-8">
                <Robot weight="fill" className="w-4 h-4" />
                IT & AI Services
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              Your business,{' '}
              <span className="text-gradient-it">supercharged by AI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-zinc-400 mb-8 max-w-lg"
            >
              Custom development, workflow automation, and intelligent systems that work 24/7 so you don't have to.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-500 text-white font-semibold rounded-full hover:bg-purple-400 transition-all"
              >
                Get a Quote
                <ArrowRight weight="bold" className="w-4 h-4" />
              </a>
              <Link
                href="/wordpress-support"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 transition-all"
              >
                WordPress Care
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
                <Code weight="fill" className="w-4 h-4 text-purple-400" />
                <span>Custom development</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <CloudArrowUp weight="fill" className="w-4 h-4 text-purple-400" />
                <span>VPS management</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
