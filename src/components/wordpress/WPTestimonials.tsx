'use client'

import { motion } from 'framer-motion'
import { Star } from '@phosphor-icons/react'

const testimonials = [
  {
    name: 'Maria Garcia',
    role: 'Founder, Boutique Store',
    content: 'My site was hacked twice before I found UltraFast. Now it runs perfectly and I never worry about updates.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'Marketing Director',
    content: 'The performance improvements were immediate. Our load time went from 8 seconds to under 2 seconds.',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Agency Owner',
    content: 'We manage 30+ client sites with UltraFast. Their white-label reports make us look like heroes.',
    rating: 5,
  },
]

export default function WPTestimonials() {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by site owners
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Join hundreds of businesses that trust us with their WordPress sites.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} weight="fill" className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-zinc-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
