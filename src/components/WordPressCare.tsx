'use client'

import { Check, Shield, RefreshCw, Database, Eye, Gauge, Globe, Lock, FileText, Users } from 'lucide-react'

const features = [
  {
    icon: RefreshCw,
    title: 'Safe Updates',
    description: 'WordPress core, themes, and plugins updated weekly with visual regression testing and automatic rollback if anything breaks.',
  },
  {
    icon: Database,
    title: 'Daily Backups',
    description: 'Encrypted incremental backups stored off-site for 30 days. One-click restore to any point in time.',
  },
  {
    icon: Shield,
    title: 'Security Hardening',
    description: 'Firewall, malware scanning, login protection, and vulnerability monitoring with Patchstack integration.',
  },
  {
    icon: Eye,
    title: '24/7 Monitoring',
    description: 'Uptime, performance, PHP errors, and SSL certificates monitored around the clock with instant alerts.',
  },
  {
    icon: Gauge,
    title: 'Performance',
    description: 'Google PageSpeed optimization, caching, image compression, and database cleanup for sub-2s load times.',
  },
  {
    icon: Globe,
    title: 'Global CDN',
    description: 'Content delivered from 119 edge locations worldwide for instant loading anywhere on Earth.',
  },
  {
    icon: Lock,
    title: 'SSL & Domain',
    description: 'SSL certificate management, domain expiration monitoring, and DNS health checks.',
  },
  {
    icon: FileText,
    title: 'Client Reports',
    description: 'White-label monthly reports showing all work done, perfect for agencies and freelancers.',
  },
  {
    icon: Users,
    title: 'Unlimited Team',
    description: 'Add your entire team with role-based access. No per-user fees, ever.',
  },
]

export default function WordPressCare() {
  return (
    <section id="wordpress" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-green-400 mb-6">
            <Shield className="w-4 h-4" />
            WordPress Care Plans
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything your WordPress site needs
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400">
            Professional maintenance that keeps your site secure, fast, and always up-to-date.
            No technical knowledge required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300"
            >
              <feature.icon className="w-8 h-8 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 glass rounded-2xl p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">WooCommerce Ready</h3>
              <p className="text-zinc-400 max-w-lg">
                Specialized care for online stores. Hourly backups, checkout monitoring,
                payment gateway health checks, and peak-traffic performance optimization.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Hourly Backups', 'Checkout Monitoring', 'Payment Health', 'Peak Performance'].map((item) => (
                <span key={item} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-sm text-zinc-300">
                  <Check className="w-3 h-3 text-green-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
