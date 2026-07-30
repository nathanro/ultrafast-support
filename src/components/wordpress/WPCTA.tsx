'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from '@phosphor-icons/react'

export default function WPCTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-12 text-center glow-wp"
        >
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-8">
            <ShieldCheck weight="fill" className="w-8 h-8 text-emerald-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to stop worrying about your site?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Join hundreds of businesses that trust UltraFast with their WordPress sites.
            Start your plan today and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-zinc-950 font-semibold rounded-full hover:bg-emerald-400 transition-all"
            >
              View Plans
              <ArrowRight weight="bold" className="w-4 h-4" />
            </a>
            <a
              href="mailto:hello@ultrafast.support"
              className="inline-flex items-center gap-2 px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 transition-all"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
