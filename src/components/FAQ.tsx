'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How quickly do you respond to issues?',
    answer: 'For critical issues (site down, security breach), we respond within 15 minutes. For standard requests, within 2 hours during business hours. All plans include 24/7 monitoring with automated alerts.',
  },
  {
    question: 'What happens if an update breaks my site?',
    answer: 'We perform all updates in a staging environment first and run visual regression tests. If anything breaks, we automatically roll back to the previous working version. Your live site is never at risk.',
  },
  {
    question: 'Do you offer custom development work?',
    answer: 'Yes! All plans include monthly development time (60-180 minutes depending on plan). For larger projects, we offer custom quotes. Our AI-powered development approach means faster delivery at lower costs.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Absolutely. There are no contracts or cancellation fees. You can cancel with one click from your dashboard, and you\'ll keep access until the end of your billing period.',
  },
  {
    question: 'What makes your AI services different?',
    answer: 'We use cutting-edge AI tools (including Droid) to automate workflows, write code, and solve problems faster than traditional agencies. This means lower costs and faster turnaround for you.',
  },
  {
    question: 'Do you work with WooCommerce?',
    answer: 'Yes, we specialize in WooCommerce. Our Professional and Agency plans include WooCommerce-specific monitoring, checkout optimization, and hourly backups for high-transaction stores.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently asked questions
          </h2>
          <p className="text-lg text-zinc-400">
            Everything you need to know about our services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-400 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-zinc-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
