'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Storefront, Briefcase, Heart, GraduationCap, ArrowRight } from '@phosphor-icons/react'

const useCases = [
  {
    id: 'ecommerce',
    icon: Storefront,
    title: 'E-commerce',
    description: 'Automate order processing, inventory sync, and customer communications.',
    benefits: ['Order automation', 'Inventory management', 'Customer support AI'],
  },
  {
    id: 'agency',
    icon: Briefcase,
    title: 'Agencies',
    description: 'Scale your operations with white-label solutions and client management tools.',
    benefits: ['Client portals', 'Automated reporting', 'White-label tools'],
  },
  {
    id: 'healthcare',
    icon: Heart,
    title: 'Healthcare',
    description: 'HIPAA-compliant systems with intelligent scheduling and patient communication.',
    benefits: ['Appointment AI', 'Secure messaging', 'Compliance automation'],
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Education',
    description: 'Learning management systems with AI tutoring and progress tracking.',
    benefits: ['LMS integration', 'AI tutoring', 'Progress analytics'],
  },
]

export default function ITUseCases() {
  const [active, setActive] = useState('ecommerce')

  return (
    <section id="cases" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solutions for every industry
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            We've helped businesses across industries automate, scale, and grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tabs */}
          <div className="space-y-3">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setActive(useCase.id)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  active === useCase.id
                    ? 'glass-strong border-purple-500/30'
                    : 'glass hover:bg-white/[0.06]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <useCase.icon
                    weight="fill"
                    className={`w-6 h-6 ${
                      active === useCase.id ? 'text-purple-400' : 'text-zinc-500'
                    }`}
                  />
                  <span className={active === useCase.id ? 'font-semibold' : ''}>
                    {useCase.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {useCases.map((useCase) => {
                if (useCase.id !== active) return null
                return (
                  <motion.div
                    key={useCase.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="glass-strong rounded-2xl p-8"
                  >
                    <useCase.icon weight="fill" className="w-12 h-12 text-purple-400 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                    <p className="text-zinc-400 mb-6">{useCase.description}</p>
                    <div className="space-y-3 mb-8">
                      {useCase.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                          <span className="text-zinc-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href="#quote"
                      className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:gap-3 transition-all"
                    >
                      Get a quote for {useCase.title.toLowerCase()}
                      <ArrowRight weight="bold" className="w-4 h-4" />
                    </a>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
