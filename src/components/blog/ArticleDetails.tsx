'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, BookOpen, ShieldCheck, Link as LinkIcon, Sparkle, Robot, ArrowRight } from '@phosphor-icons/react'
import type { BlogPost } from '@/lib/blog-store'

interface ArticleDetailsProps {
  post: BlogPost
}

const categoryThemes = {
  wordpress: {
    label: 'WordPress Care',
    primary: 'text-emerald-400',
    bg: 'bg-emerald-500/5',
    border: 'border-emerald-500/30',
    glow: 'shadow-emerald-500/20',
    gradient: 'from-emerald-500 to-cyan-500',
    ring: 'text-emerald-400',
    mesh: 'mesh-wp',
    cta: {
      title: 'Keep your WordPress site fast, secure, and stable',
      body: 'Get managed WordPress care with Redis object caching, Cloudflare Enterprise WAF, daily backups, and Core Web Vitals optimization.',
      href: '/#pricing',
      button: 'View WordPress Support Plans'
    }
  },
  'it-automation': {
    label: 'IT & AI Automation',
    primary: 'text-purple-400',
    bg: 'bg-purple-500/5',
    border: 'border-purple-500/30',
    glow: 'shadow-purple-500/20',
    gradient: 'from-purple-500 to-pink-500',
    ring: 'text-purple-400',
    mesh: 'mesh-it',
    cta: {
      title: 'Deploy custom AI agents for your business',
      body: 'We build GoHighLevel and Stripe-connected AI workflows that route leads, book calls, and process payments without manual handoffs.',
      href: '/#quote',
      button: 'Request an AI Integration Quote'
    }
  },
  conversion: {
    label: 'Conversion & Growth',
    primary: 'text-amber-400',
    bg: 'bg-amber-500/5',
    border: 'border-amber-500/30',
    glow: 'shadow-amber-500/20',
    gradient: 'from-amber-500 to-orange-500',
    ring: 'text-amber-400',
    mesh: '',
    cta: {
      title: 'Stop losing leads to slow follow-up',
      body: 'Get a speed-to-lead audit and a custom GoHighLevel automation that converts more inbound leads into booked calls and revenue.',
      href: '/#quote',
      button: 'Request a Funnel Audit'
    }
  }
}

function AIScoreRing({ score, colorClass }: { score: number; colorClass: string }) {
  const radius = 24
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - score / 100)
  return (
    <div className="relative flex items-center justify-center w-16 h-16 shrink-0">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 56 56">
        <circle
          cx="28"
          cy="28"
          r={radius}
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          className="text-white/10"
        />
        <circle
          cx="28"
          cy="28"
          r={radius}
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={`${colorClass} drop-shadow-[0_0_6px_currentColor]`}
        />
      </svg>
      <span className="absolute text-sm font-bold text-white">{score}%</span>
    </div>
  )
}

function formatContent(content: string) {
  // Process markdown tables first so horizontal-rule separators are consumed inside tables
  let result = content.replace(/((?:\|\s*[^\n]*\|\s*\n?)+)/g, (block) => {
    const lines = block.trim().split('\n').filter(Boolean)
    if (lines.length < 2) return block

    // The second line must be a markdown table separator (only |, -, :, and spaces)
    const separator = lines[1].trim().replace(/[\|\-:\s]/g, '')
    if (separator.length > 0) return block

    const headerCells = lines[0].split('|').map(c => c.trim()).filter(Boolean)
    const bodyRows = lines
      .slice(2)
      .map(line => line.split('|').map(c => c.trim()).filter(Boolean))
      .filter(row => row.length > 0)

    const headerHtml = `<thead><tr class="border-b border-white/10">${headerCells
      .map(c => `<th class="px-4 py-3 text-left font-bold text-xs uppercase tracking-wider bg-white/5 text-zinc-200">${c}</th>`)
      .join('')}</tr></thead>`

    const bodyHtml = `<tbody>${bodyRows
      .map(
        cells =>
          `<tr class="border-b border-white/5">${cells
            .map(c => `<td class="px-4 py-3 text-sm text-zinc-300 border-t border-white/5">${c}</td>`)
            .join('')}</tr>`
      )
      .join('')}</tbody>`

    return `<div class="overflow-x-auto my-8"><table class="w-full border-collapse border border-white/10 rounded-lg">${headerHtml}${bodyHtml}</table></div>`
  })

  // Format headings
  result = result.replace(/## (.*)/g, '<h2 class="text-2xl md:text-3xl font-bold text-zinc-100 mt-12 mb-4">$1</h2>')
  result = result.replace(/### (.*)/g, '<h3 class="text-xl md:text-2xl font-bold text-zinc-200 mt-8 mb-3">$1</h3>')

  // Format lists
  result = result.replace(/\* \*\*(.*?)\*\*(.*)/g, '<li class="ml-4 list-disc text-zinc-300 mb-2"><strong class="text-white">$1</strong>$2</li>')
  result = result.replace(/- \*\*(.*?)\*\*(.*)/g, '<li class="ml-4 list-disc text-zinc-300 mb-2"><strong class="text-white">$1</strong>$2</li>')

  // Format horizontal rules
  result = result.replace(/---/g, '<hr class="border-white/5 my-12" />')

  return result
}

export default function ArticleDetails({ post }: ArticleDetailsProps) {
  const theme = categoryThemes[post.category]
  const aiScore = post.aiScore ?? 0
  const hasAi = aiScore > 0 && post.aiAnalysis

  // Construct structured JSON-LD for GEO (Generative Engine Optimization)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": "UltraFast.support",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ultrafast.support/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ultrafast.support/blog/${post.slug}`
    },
    "keywords": post.tags.join(', '),
    "about": {
      "@type": "Thing",
      "name": post.category === 'wordpress' ? 'WordPress Support & Speed Optimization' : post.category === 'it-automation' ? 'IT Automation & AI Workflows' : 'Conversion Optimization & Lead Automation'
    }
  }

  // FAQ Schema JSON-LD
  const faqJsonLd = post.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  } : null

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/20">
      {/* Inject Structured Data directly into the document head for search bots & LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Background glow overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] opacity-10 ${
          post.category === 'wordpress' ? 'bg-emerald-500' : post.category === 'it-automation' ? 'bg-purple-500' : 'bg-amber-500'
        }`} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        {/* Navigation back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft weight="bold" className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Resources</span>
        </Link>

        {/* Hero Section of Article */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className={`text-xs font-bold tracking-widest uppercase border px-3 py-1 rounded-full ${theme.bg} ${theme.primary} ${theme.border}`}>
              {post.category.replace('-', ' ')}
            </span>
            <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
              <Calendar weight="bold" className="w-3.5 h-3.5" />
              <span>{post.publishedAt}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight text-zinc-100">
            {post.title}
          </h1>

          {/* Author bar */}
          <div className="flex items-center justify-between border-y border-white/5 py-6 mb-12">
            <div className="flex items-center gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full border border-white/10 object-cover"
              />
              <div>
                <div className="text-sm font-bold text-zinc-100">{post.author.name}</div>
                <div className="text-xs text-zinc-500">{post.author.role}</div>
              </div>
            </div>

            {/* Tags */}
            <div className="hidden sm:flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium text-zinc-400 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Key Takeaway box - GEO Highlight block */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-zinc-900/60 to-zinc-900/20 p-6 md:p-8 mb-12">
          <div className={`flex items-center gap-2 font-bold text-sm uppercase tracking-wider mb-3 ${theme.primary}`}>
            <Sparkle weight="fill" className="w-4 h-4" />
            <span>Key Resource Takeaway</span>
          </div>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* AI Recommendation Badge */}
        {hasAi && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`relative overflow-hidden rounded-2xl border ${theme.border} ${theme.bg} p-6 md:p-8 mb-12`}
          >
            <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-20 ${
              post.category === 'wordpress' ? 'bg-emerald-500' : post.category === 'it-automation' ? 'bg-purple-500' : 'bg-amber-500'
            }`} />
            <div className="relative flex flex-col md:flex-row items-start gap-6">
              <AIScoreRing score={aiScore} colorClass={theme.ring} />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Robot weight="fill" className={`w-5 h-5 ${theme.primary}`} />
                  <h2 className="text-base md:text-lg font-bold text-white">AI Analysis &amp; Fit Assessment</h2>
                </div>
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-4">
                  {post.aiAnalysis}
                </p>
                <div className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${theme.border} ${theme.primary}`}>
                  <Sparkle weight="fill" className="w-3 h-3" />
                  Relevance Index: {aiScore}% — Recommended for {theme.label}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Main content body */}
        <article className="prose prose-invert max-w-none text-zinc-300 leading-relaxed text-base md:text-lg space-y-6">
          <div dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />
        </article>

        {/* Category-specific CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`relative overflow-hidden rounded-2xl border ${theme.border} ${theme.bg} p-8 md:p-10 mt-16 ${theme.glow}`}
        >
          <div className={`absolute inset-0 opacity-20 ${theme.mesh || ''}`} />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-3 ${theme.primary}`}>
                <BookOpen weight="fill" className="w-4 h-4" />
                <span>Recommended Next Step</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{theme.cta.title}</h3>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed">{theme.cta.body}</p>
            </div>
            <Link
              href={theme.cta.href}
              className={`inline-flex items-center justify-center gap-2 shrink-0 px-6 py-3 rounded-full text-sm font-bold text-zinc-950 bg-gradient-to-r ${theme.gradient} hover:opacity-90 transition-opacity shadow-lg`}
            >
              {theme.cta.button}
              <ArrowRight weight="bold" className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* AI & GEO FAQs Accordion Section */}
        {post.faqs && post.faqs.length > 0 && (
          <section className="border-t border-white/5 mt-16 pt-12">
            <h2 className="text-2xl font-bold text-zinc-100 mb-6 flex items-center gap-2">
              <ShieldCheck weight="fill" className={`w-6 h-6 ${theme.primary}`} />
              <span>Authoritative Answers (FAQs)</span>
            </h2>
            <div className="space-y-4">
              {post.faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-xl border border-white/5 bg-zinc-900/20">
                  <h3 className="text-base font-bold text-zinc-200 mb-2">{faq.question}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* References & Citations */}
        {post.citations && post.citations.length > 0 && (
          <section className="border-t border-white/5 mt-12 pt-12">
            <h3 className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-4 flex items-center gap-1">
              <LinkIcon weight="bold" className="w-3.5 h-3.5" />
              <span>Verified Citations &amp; Context</span>
            </h3>
            <ul className="space-y-2">
              {post.citations.map((cite, i) => (
                <li key={i}>
                  <a
                    href={cite.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-emerald-400 hover:underline transition-colors"
                  >
                    <span>{cite.title}</span>
                    <span className="text-xs text-zinc-600">({new URL(cite.url).hostname})</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  )
}
