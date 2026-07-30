'use client'

import { useState } from 'react'
import { Check, Zap, Building2, Rocket } from 'lucide-react'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const plans = [
  {
    name: 'Essential',
    description: 'Perfect for small business sites',
    price: 49,
    period: 'month',
    icon: Zap,
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
    price: 99,
    period: 'month',
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
    price: 249,
    period: 'month',
    icon: Building2,
    features: [
      'Everything in Professional',
      'Hourly backups',
      'AI workflow automation',
      'VPS management included',
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

export default function Pricing() {
  const [loading, setLoading] = useState<string | null>(null)

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
    <section id="pricing" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-cyan-400 mb-6">
            <Zap className="w-4 h-4" />
            Simple Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose your plan
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400">
            Transparent pricing with no hidden fees. Cancel anytime.
            All plans include our core WordPress care features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-b from-green-500/10 to-transparent border border-green-500/30 glow-green'
                  : 'glass'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-500 text-black text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-green-400' : 'text-zinc-400'}`} />
                <h3 className="text-xl font-semibold">{plan.name}</h3>
              </div>

              <p className="text-sm text-zinc-400 mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className="text-zinc-400">/{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCheckout(plan.priceId, plan.name)}
                disabled={loading === plan.name}
                className={`w-full py-3 rounded-full font-semibold transition-all ${
                  plan.popular
                    ? 'bg-green-500 text-black hover:bg-green-400'
                    : 'bg-white/10 text-white hover:bg-white/20'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {loading === plan.name ? 'Loading...' : plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-zinc-500 text-sm">
            Need a custom plan? <a href="#contact" className="text-green-400 hover:underline">Contact us</a> for enterprise pricing.
          </p>
        </div>
      </div>
    </section>
  )
}
