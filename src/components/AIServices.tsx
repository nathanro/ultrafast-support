'use client'

import { Bot, Workflow, Code, Terminal, Cpu, MessageSquare, BarChart3, Cog, ArrowRight } from 'lucide-react'

const aiServices = [
  {
    icon: Workflow,
    title: 'AI Workflow Automation',
    description: 'Custom automation pipelines that connect your tools, sync data, and eliminate manual work. From simple zaps to complex multi-step workflows.',
    examples: ['Auto-sync CRM to email', 'Smart lead routing', 'Document processing'],
  },
  {
    icon: Code,
    title: 'Vibe Coding & Development',
    description: 'Rapid feature development using AI-assisted coding. Describe what you want, we build it. Custom plugins, themes, integrations, and more.',
    examples: ['Custom WordPress plugins', 'API integrations', 'Theme customization'],
  },
  {
    icon: Terminal,
    title: 'VPS & Server Management',
    description: 'Full server setup, configuration, and management. Docker, Nginx, databases, SSL, monitoring, and security hardening on any VPS.',
    examples: ['Server provisioning', 'Docker deployments', 'Security hardening'],
  },
  {
    icon: Cpu,
    title: 'AI Model Integration',
    description: 'Integrate ChatGPT, Claude, or custom models into your workflows. Chatbots, content generation, data analysis, and intelligent automation.',
    examples: ['Custom chatbots', 'Content generation', 'Data analysis'],
  },
  {
    icon: MessageSquare,
    title: 'Smart Support Systems',
    description: 'AI-powered customer support that learns from your documentation. Instant answers, ticket routing, and human escalation when needed.',
    examples: ['Helpdesk automation', 'Knowledge base AI', 'Ticket routing'],
  },
  {
    icon: BarChart3,
    title: 'Intelligent Monitoring',
    description: 'Predictive alerts, anomaly detection, and automated remediation. Fix issues before your customers notice them.',
    examples: ['Predictive alerts', 'Auto-remediation', 'Anomaly detection'],
  },
]

export default function AIServices() {
  return (
    <section id="ai-services" className="relative py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-purple-400 mb-6">
            <Bot className="w-4 h-4" />
            AI-Powered Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Beyond traditional support
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400">
            We leverage cutting-edge AI to deliver services that were impossible just a year ago.
            Faster, smarter, and more affordable than traditional agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiServices.map((service) => (
            <div
              key={service.title}
              className="group glass rounded-2xl p-8 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.examples.map((example) => (
                      <span
                        key={example}
                        className="px-3 py-1 rounded-full bg-white/5 text-xs text-zinc-400"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
          >
            <Cog className="w-4 h-4" />
            Discuss Your AI Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
