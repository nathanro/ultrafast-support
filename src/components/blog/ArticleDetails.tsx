'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, BookOpen, ShieldCheck, Link as LinkIcon, Sparkle } from '@phosphor-icons/react'
import type { BlogPost } from '@/lib/blog-store'

interface ArticleDetailsProps {
  post: BlogPost
}

export default function ArticleDetails({ post }: ArticleDetailsProps) {
  const isWP = post.category === 'wordpress'

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
      "name": post.category === 'wordpress' ? 'WordPress Support & Speed Optimization' : 'IT Automation & AI Workflows'
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
          isWP ? 'bg-emerald-500' : 'bg-purple-500'
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
            <span className={`text-xs font-bold tracking-widest uppercase border px-3 py-1 rounded-full ${
              isWP ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5' : 'border-purple-500/30 text-purple-400 bg-purple-500/5'
            }`}>
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
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider mb-3">
            <Sparkle weight="fill" className="w-4 h-4" />
            <span>Key Resource Takeaway</span>
          </div>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Main content body */}
        <article className="prose prose-invert max-w-none text-zinc-300 leading-relaxed text-base md:text-lg space-y-6">
          <div dangerouslySetInnerHTML={{ 
            __html: post.content
              // Format headings
              .replace(/## (.*)/g, '<h2 class="text-2xl md:text-3xl font-bold text-zinc-100 mt-12 mb-4">$1</h2>')
              .replace(/### (.*)/g, '<h3 class="text-xl md:text-2xl font-bold text-zinc-200 mt-8 mb-3">$1</h3>')
              // Format lists
              .replace(/\* \*\*(.*?)\*\*(.*)/g, '<li class="ml-4 list-disc text-zinc-300 mb-2"><strong class="text-white">$1</strong>$2</li>')
              .replace(/- \*\*(.*?)\*\*(.*)/g, '<li class="ml-4 list-disc text-zinc-300 mb-2"><strong class="text-white">$1</strong>$2</li>')
              // Format horizontal rules
              .replace(/---/g, '<hr class="border-white/5 my-12" />')
              // Format tables nicely
              .replace(/\| (.*) \|/g, (match) => {
                if (match.includes('---')) return '';
                const cells = match.split('|').map(c => c.trim()).filter(Boolean);
                const isHeader = match.includes('Metric');
                const cellTag = isHeader ? 'th' : 'td';
                const cellClass = isHeader ? 'px-4 py-3 text-left font-bold text-xs uppercase tracking-wider bg-white/5 text-zinc-200' : 'px-4 py-3 text-sm text-zinc-300 border-t border-white/5';
                return `<tr class="border-b border-white/5">${cells.map(c => `<${cellTag} class="${cellClass}">${c}</${cellTag}>`).join('')}</tr>`;
              })
          }} />
        </article>

        {/* AI & GEO FAQs Accordion Section */}
        {post.faqs && post.faqs.length > 0 && (
          <section className="border-t border-white/5 mt-16 pt-12">
            <h2 className="text-2xl font-bold text-zinc-100 mb-6 flex items-center gap-2">
              <ShieldCheck weight="fill" className={`w-6 h-6 ${isWP ? 'text-emerald-400' : 'text-purple-400'}`} />
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
