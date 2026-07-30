'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Lightning, Rocket, Buildings } from '@phosphor-icons/react'

const plans = [
  {
    name: 'Essential',
    description: 'Perfect for small business sites',
    monthlyPrice: 49,
    yearlyPrice: 470,
    icon: Lightning,
    features: [
      'Weekly WordPress updates',
      'Daily cloud backups',
      'Uptime monitoring',
      'Security hardening',
      'Monthly performance report',
      'Email support',
      '1 website',
    ],
    cta: 'Start Essential',
    popular: false,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ESSENTIAL || 'price_essential',
  },
  {
    name: 'Professional',
    description: 'For growing businesses & WooCommerce',
    monthlyPrice: 99,
    yearlyPrice: 950,
    icon: Rocket,
    features: [
      'Everything in Essential',
      'Daily updates & backups',
      'Malware scanning & removal',
      'Performance optimization',
      '60 min dev time/month',
      'Priority support',
      'Up to 3 websites',
      'WooCommerce monitoring',
    ],
    cta: 'Start Professional',
    popular: true,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PROFESSIONAL || 'price_professional',
  },
  {
    name: 'Agency',
    description: 'For agencies & high-traffic sites',
    monthlyPrice: 249,
    yearlyPrice: 2390,
    icon: Buildings,
    features: [
      'Everything in Professional',
      'Hourly backups',
      '180 min dev time/month',
      '24/7 phone & chat support',
      'Up to 10 websites',
      'White-label reports',
      'Custom integrations',
    ],
    cta: 'Start Agency',
    popular: false,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_AGENCY || 'price_agency',
  },
]

export default function WPPricing() {
  const [loading, setLoading] = useState<string | null>(null)
  const [yearly, setYearly] = useState(false)

  const handleCheckout = async (priceId: string, planName: string) => {
    setLoading(planName)
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, planName }),
      })
      const { url } = await response.json()
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
    } finally {
      setLoading(null)
    }
  }

  return (
    <section id="pricing" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            No hidden fees. Cancel anytime. All plans include core WordPress care.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 glass rounded-full p-1.5">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !yearly ? 'bg-emerald-500 text-zinc-950' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                yearly ? 'bg-emerald-500 text-zinc-950' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-400 text-xs">Save 20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-b from-emerald-500/10 to-transparent border border-emerald-500/30 glow-wp'
                  : 'glass'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-zinc-950 text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <plan.icon weight="fill" className={`w-6 h-6 ${plan.popular ? 'text-emerald-400' : 'text-zinc-400'}`} />
                <h3 className="text-xl font-semibold">{plan.name}</h3>
              </div>

              <p className="text-sm text-zinc-400 mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-bold">
                  ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-zinc-400">
                  /{yearly ? 'year' : 'month'}
                </span>
                {yearly && (
                  <div className="text-sm text-emerald-400 mt-1">
                    ${Math.round(plan.yearlyPrice / 12)}/month billed annually
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check weight="bold" className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCheckout(plan.priceId, plan.name)}
                disabled={loading === plan.name}
                className={`w-full py-3 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400'
                    : 'bg-white/10 text-white hover:bg-white/20'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {loading === plan.name ? 'Loading...' : plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-zinc-500 text-sm mt-8"
        >
          Need a custom plan?{' '}
          <a href="#contact" className="text-emerald-400 hover:underline">
            Contact us
          </a>{' '}
          for enterprise pricing.
        </motion.p>
      </div>
    </section>
  )
}
