'use client'

import { motion } from 'framer-motion'

const technologies = [
  'OpenAI', 'Anthropic', 'AWS', 'Docker', 'Kubernetes',
  'React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL',
  'Redis', 'Stripe', 'Twilio', 'SendGrid', 'Zapier',
]

export default function ITTechStack() {
  return (
    <section id="tech" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powered by the best tools
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            We use cutting-edge technology to deliver exceptional results.
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10" />
          
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: [0, -1035] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="flex gap-8 pr-8"
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech}-${index}`}
                  className="flex-shrink-0 glass rounded-full px-6 py-3 text-zinc-300 font-medium whitespace-nowrap"
                >
                  {tech}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
