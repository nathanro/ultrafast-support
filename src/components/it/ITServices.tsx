'use client'

import { motion } from 'framer-motion'
import {
  ArrowsClockwise,
  Code,
  CloudArrowUp,
  ChatCircle,
  ChartLineUp,
  Gear,
  ArrowRight
} from '@phosphor-icons/react'

const services = [
  {
    icon: ArrowsClockwise,
    title: 'AI Workflow Automation',
    description: 'Custom automation pipelines that connect your tools, sync data, and eliminate manual work.',
    examples: ['Auto CRM sync', 'Smart lead routing', 'Document processing'],
    color: 'purple',
  },
  {
    icon: Code,
    title: 'Vibe Coding & Development',
    description: 'Rapid feature development using AI-assisted coding. Describe what you want, we build it.',
    examples: ['Custom plugins', 'API integrations', 'Theme customization'],
    color: 'pink',
  },
  {
    icon: CloudArrowUp,
    title: 'VPS & Server Management',
    description: 'Full server setup, configuration, and management on any cloud or VPS provider.',
    examples: ['Docker deployments', 'Security hardening', 'Load balancing'],
    color: 'orange',
  },
  {
    icon: ChatCircle,
    title: 'Smart Support Systems',
    description: 'AI-powered customer support that learns from your documentation and history.',
    examples: ['Helpdesk automation', 'Knowledge base AI', 'Ticket routing'],
    color: 'purple',
  },
  {
    icon: ChartLineUp,
    title: 'Intelligent Monitoring',
    description: 'Predictive alerts, anomaly detection, and automated remediation.',
    examples: ['Predictive alerts', 'Auto-remediation', 'Anomaly detection'],
    color: 'pink',
  },
  {
    icon: Gear,
    title: 'Custom Integrations',
    description: 'Connect any tools, APIs, or services into unified workflows.',
    examples: ['Zapier alternatives', 'Custom APIs', 'Legacy system bridges'],
    color: 'orange',
  },
]

export default function ITServices() {
  return (
    <section id="services" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI-powered services
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Beyond traditional IT support. We leverage cutting-edge AI to deliver faster, smarter solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                service.color === 'purple' ? 'bg-purple-500/20' :
                service.color === 'pink' ? 'bg-pink-500/20' : 'bg-orange-500/20'
              }`}>
                <service.icon
                  weight="fill"
                  className={`w-6 h-6 ${
                    service.color === 'purple' ? 'text-purple-400' :
                    service.color === 'pink' ? 'text-pink-400' : 'text-orange-400'
                  }`}
                />
              </div>
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-zinc-500 mb-4 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.examples.map((example) => (
                  <span
                    key={example}
                    className="px-2 py-1 rounded-full bg-white/5 text-xs text-zinc-400"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#quote"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
          >
            <Gear weight="fill" className="w-4 h-4" />
            Start Your Project
            <ArrowRight weight="bold" className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
