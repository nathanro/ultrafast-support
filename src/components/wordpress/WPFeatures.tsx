'use client'

import { motion } from 'framer-motion'
import {
  ArrowClockwise,
  Database,
  ShieldCheck,
  Gauge,
  Globe,
  Lock,
  FileText,
  Users,
  ShoppingCart
} from '@phosphor-icons/react'

const features = [
  {
    icon: ArrowClockwise,
    title: 'Safe Updates',
    description: 'Weekly updates with visual regression testing and automatic rollback.',
    color: 'emerald',
  },
  {
    icon: Database,
    title: 'Daily Backups',
    description: 'Encrypted incremental backups, 30-day retention, one-click restore.',
    color: 'cyan',
  },
  {
    icon: ShieldCheck,
    title: 'Security Hardening',
    description: 'Firewall, malware scanning, and Patchstack vulnerability monitoring.',
    color: 'emerald',
  },
  {
    icon: Gauge,
    title: 'Performance',
    description: 'PageSpeed optimization, caching, and image compression.',
    color: 'cyan',
  },
  {
    icon: Globe,
    title: 'Global CDN',
    description: 'Content delivered from 119 edge locations worldwide.',
    color: 'emerald',
  },
  {
    icon: Lock,
    title: 'SSL & Domain',
    description: 'Certificate management and expiration monitoring.',
    color: 'cyan',
  },
  {
    icon: FileText,
    title: 'Client Reports',
    description: 'White-label monthly reports for agencies and freelancers.',
    color: 'emerald',
  },
  {
    icon: Users,
    title: 'Unlimited Team',
    description: 'Add your entire team with role-based access control.',
    color: 'cyan',
  },
]

export default function WPFeatures() {
  return (
    <section id="features" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything your site needs
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Complete WordPress maintenance handled by experts. No technical knowledge required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300"
            >
              <feature.icon
                weight="fill"
                className={`w-8 h-8 mb-4 ${
                  feature.color === 'emerald' ? 'text-emerald-400' : 'text-cyan-400'
                } group-hover:scale-110 transition-transform`}
              />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* WooCommerce highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 glass rounded-2xl p-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                <ShoppingCart weight="fill" className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">WooCommerce Ready</h3>
                <p className="text-zinc-400">
                  Specialized care for online stores with hourly backups and checkout monitoring.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Hourly Backups', 'Checkout Monitoring', 'Payment Health', 'Peak Performance'].map((item) => (
                <span key={item} className="px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm border border-emerald-500/20">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
