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
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-2 lg:order-1"
          >
            {/* Background glowing rings */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl filter blur-3xl opacity-30 animate-pulse" />

            <div className="relative rounded-2xl border border-white/10 bg-zinc-950/80 backdrop-blur-md overflow-hidden p-6 shadow-2xl">
              {/* Header of the mock browser/window */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-zinc-500 font-mono ml-2">https://ai-orchestrator.ultrafast.support</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-purple-400 bg-purple-400/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                    Agent Active
                  </span>
                </div>
              </div>

              {/* Pipeline Flow representation */}
              <div className="space-y-4">
                {/* Node 1 */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 text-xs font-bold">1</div>
                    <div>
                      <h4 className="text-xs font-semibold text-zinc-200">Webhook Trigger</h4>
                      <p className="text-[10px] text-zinc-500">Contact Form Submitted via GHL</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">POST /leads</span>
                </div>

                {/* Connector line with custom arrow */}
                <div className="flex justify-center -my-2">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-pink-500 to-purple-500" />
                </div>

                {/* Node 2 - AI Node */}
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                        <Robot weight="fill" className="w-4 h-4 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-zinc-100">AI Deep Analysis Agent</h4>
                        <p className="text-[10px] text-zinc-400">Classify intent &amp; construct auto-response</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-purple-400 font-medium bg-purple-400/10 px-2 py-0.5 rounded">LLM Engine</span>
                  </div>
                  {/* Miniature progress simulation */}
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    />
                  </div>
                </div>

                {/* Connector line with custom arrow */}
                <div className="flex justify-center -my-2">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-purple-500 to-emerald-500" />
                </div>

                {/* Node 3 */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">3</div>
                    <div>
                      <h4 className="text-xs font-semibold text-zinc-200">Instant Dispatch</h4>
                      <p className="text-[10px] text-zinc-500">SMS Notification &amp; Calendar Booking link sent</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                    Delivered
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-4 -right-4 glass rounded-full px-4 py-2 flex items-center gap-2 border border-purple-500/30"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-ping" />
              <span className="text-xs text-zinc-300 font-medium">99.8% Automation Accuracy</span>
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
