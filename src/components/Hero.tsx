'use client'

import { ArrowRight, Shield, Zap, Bot } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-zinc-400 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Trusted by 500+ WordPress sites
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="text-gradient">WordPress care,</span>
          <br />
          <span className="text-gradient-green">supercharged by AI</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
          Maintenance, security, and updates for your WordPress sites.
          Plus AI-powered development, automation, and support that
          traditional agencies can't match.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#pricing"
            className="group px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2"
          >
            View Plans
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#ai-services"
            className="px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <Bot className="w-4 h-4" />
            Explore AI Services
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-6 text-left">
            <Shield className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="font-semibold mb-2">99.9% Uptime</h3>
            <p className="text-sm text-zinc-500">Continuous monitoring with instant alerts and automatic recovery.</p>
          </div>
          <div className="glass rounded-2xl p-6 text-left">
            <Zap className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="font-semibold mb-2">Lightning Fast</h3>
            <p className="text-sm text-zinc-500">Performance optimization that keeps your site under 2s load time.</p>
          </div>
          <div className="glass rounded-2xl p-6 text-left">
            <Bot className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="font-semibold mb-2">AI-Powered</h3>
            <p className="text-sm text-zinc-500">Automated fixes, smart updates, and predictive maintenance.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
