'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Robot } from '@phosphor-icons/react'

export default function ITCTA() {
  return (
    <section className="relative py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-12 text-center glow-it"
        >
          <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-8">
            <Robot weight="fill" className="w-8 h-8 text-purple-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to automate your business?
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Let's discuss how AI and custom development can transform your operations.
            Get a free quote today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Get a Quote
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
