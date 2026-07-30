'use client'

import { motion } from 'framer-motion'
import { NotePencil, ChatCircle, Calendar } from '@phosphor-icons/react'

export default function ITQuoteForm() {
  return (
    <section id="quote" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-zinc-950 to-zinc-950" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <NotePencil weight="fill" className="w-4 h-4" />
              Project Quote
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tell us about your project
            </h2>
            <p className="text-zinc-400 mb-8">
              Every project is unique. Fill out the form and we'll get back to you within 2 hours with a detailed quote and timeline.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <ChatCircle weight="fill" className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Free Consultation</h3>
                  <p className="text-sm text-zinc-500">15-min discovery call to understand your needs</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <NotePencil weight="fill" className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Detailed Proposal</h3>
                  <p className="text-sm text-zinc-500">Scope, timeline, and pricing within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Calendar weight="fill" className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Fast Turnaround</h3>
                  <p className="text-sm text-zinc-500">Most projects start within 48 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* GHL Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-6">Get your free quote</h3>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/YOUR_QUOTE_FORM_ID"
              style={{ width: '100%', height: '550px', border: 'none', borderRadius: '12px' }}
              id="inline-YOUR_QUOTE_FORM_ID"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="IT Project Quote"
              data-height="550"
              data-layout-iframe-id="inline-YOUR_QUOTE_FORM_ID"
              data-form-id="YOUR_QUOTE_FORM_ID"
              title="IT Project Quote"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
