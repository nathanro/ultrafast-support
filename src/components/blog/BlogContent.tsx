'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, Calendar, ArrowRight, MagnifyingGlass, Tag, Sparkle, Robot } from '@phosphor-icons/react'
import type { BlogPost } from '@/lib/blog-store'

interface BlogContentProps {
  initialPosts: BlogPost[]
}

const categoryThemes = {
  wordpress: {
    label: 'WordPress Care',
    accent: 'text-emerald-400',
    bg: 'bg-emerald-500/5',
    border: 'border-emerald-500/30',
    hover: 'hover:border-emerald-500/30',
    chip: 'bg-emerald-500 text-zinc-950',
    shadow: 'shadow-emerald-500/20',
    ring: 'text-emerald-400'
  },
  'it-automation': {
    label: 'IT & AI Automation',
    accent: 'text-purple-400',
    bg: 'bg-purple-500/5',
    border: 'border-purple-500/30',
    hover: 'hover:border-purple-500/30',
    chip: 'bg-purple-500 text-white',
    shadow: 'shadow-purple-500/20',
    ring: 'text-purple-400'
  },
  conversion: {
    label: 'Conversion & Growth',
    accent: 'text-amber-400',
    bg: 'bg-amber-500/5',
    border: 'border-amber-500/30',
    hover: 'hover:border-amber-500/30',
    chip: 'bg-amber-500 text-zinc-950',
    shadow: 'shadow-amber-500/20',
    ring: 'text-amber-400'
  }
}

export default function BlogContent({ initialPosts }: BlogContentProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredPosts = initialPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          (post.aiAnalysis?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false)

    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'wordpress', label: 'WordPress Care' },
    { id: 'it-automation', label: 'IT & AI Automation' },
    { id: 'conversion', label: 'Conversion & Growth' }
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/20">
      {/* Dynamic Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-zinc-400 tracking-wider uppercase mb-6">
              <BookOpen weight="fill" className="w-3.5 h-3.5 text-emerald-400" />
              Resource Journal
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            <span className="text-gradient-white">Authoritative</span>
            <br />
            <span className="text-gradient-wp">Insights &amp; Guides</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-zinc-400"
          >
            In-depth analysis of WordPress architecture, high-performance optimization, custom AI operations, and enterprise security.
          </motion.p>
        </div>

        {/* Search and Filters panel */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 rounded-2xl glass border border-white/5 bg-zinc-900/40">
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const catTheme = cat.id === 'wordpress' ? 'emerald' : cat.id === 'it-automation' ? 'purple' : cat.id === 'conversion' ? 'amber' : 'white'
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? catTheme === 'emerald'
                        ? 'bg-emerald-500 text-zinc-950 font-bold shadow-lg shadow-emerald-500/20'
                        : catTheme === 'purple'
                        ? 'bg-purple-500 text-white font-bold shadow-lg shadow-purple-500/20'
                        : catTheme === 'amber'
                        ? 'bg-amber-500 text-zinc-950 font-bold shadow-lg shadow-amber-500/20'
                        : 'bg-white text-zinc-950 font-bold'
                      : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>

          {/* Search box */}
          <div className="relative max-w-md w-full">
            <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search guides, tags, technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950/80 border border-white/10 rounded-full pl-11 pr-5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
            />
          </div>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => {
              const theme = categoryThemes[post.category]
              const aiScore = post.aiScore ?? 0
              const hasAi = aiScore > 0 && post.aiAnalysis

              return (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col justify-between p-6 md:p-8 rounded-2xl glass border border-white/5 bg-zinc-950/40 cursor-pointer transition-all duration-300 ${theme.hover} group`}
                >
                  <div>
                    {/* Header meta */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-[10px] font-bold tracking-widest uppercase border px-2.5 py-1 rounded-full ${theme.bg} ${theme.accent} ${theme.border}`}>
                        {post.category.replace('-', ' ')}
                      </span>
                      <div className="flex items-center gap-3 text-xs text-zinc-500 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar weight="bold" className="w-3.5 h-3.5" />
                          {post.publishedAt}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-zinc-700" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl md:text-2xl font-bold text-zinc-100 group-hover:text-white group-hover:underline underline-offset-4 decoration-emerald-500/40 transition-colors mb-4 leading-tight">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* AI Recommendation tag */}
                    {hasAi && (
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${theme.border} ${theme.bg} ${theme.accent} ${theme.shadow} shadow-sm`}>
                          <Robot weight="fill" className="w-3.5 h-3.5" />
                          AI Recommended: {aiScore}%
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] text-zinc-500 uppercase tracking-wider">
                          <Sparkle weight="fill" className={`w-3 h-3 ${theme.accent}`} />
                          High relevance for {theme.label}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-white/5 pt-6 mt-6 flex items-center justify-between">
                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full border border-white/10 object-cover"
                      />
                      <div>
                        <div className="text-xs font-semibold text-zinc-300">{post.author.name}</div>
                        <div className="text-[10px] text-zinc-500">{post.author.role}</div>
                      </div>
                    </div>

                    <Link href={`/blog/${post.slug}`} className={`flex items-center gap-1 text-sm font-semibold ${theme.accent}`}>
                      <span>Read article</span>
                      <ArrowRight weight="bold" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.article>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-20 p-8 rounded-2xl glass border border-white/5 bg-zinc-950/50">
            <MagnifyingGlass weight="light" className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <p className="text-lg text-zinc-400 font-semibold mb-1">No guides found</p>
            <p className="text-sm text-zinc-500">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}
