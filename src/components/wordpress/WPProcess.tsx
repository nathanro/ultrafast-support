'use client'

import { motion } from 'framer-motion'
import { ChatCircle, MagnifyingGlass, Gear, Rocket } from '@phosphor-icons/react'

const steps = [
  {
    icon: ChatCircle,
    title: 'Initial Chat',
    description: 'We learn about your site, your goals, and your pain points.',
  },
  {
    icon: MagnifyingGlass,
    title: 'Site Audit',
    description: 'Complete analysis of performance, security, and SEO health.',
  },
  {
    icon: Gear,
    title: 'Optimization',
    description: 'We fix issues, optimize speed, and harden security.',
  },
  {
    icon: Rocket,
    title: 'Ongoing Care',
    description: 'Continuous monitoring, updates, and improvements.',
  },
]

export default function WPProcess() {
  return (
    <section id="process" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How it works
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Getting started is simple. We handle everything from day one.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="glass rounded-2xl p-6 text-center hover:bg-white/[0.06] transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <step.icon weight="fill" className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div className="text-xs text-emerald-400 font-mono mb-2">Step {index + 1}</div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-500">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
