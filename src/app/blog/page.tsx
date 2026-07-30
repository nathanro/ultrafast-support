import { getBlogPosts } from '@/lib/blog-store'
import BlogContent from '@/components/blog/BlogContent'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Insights, Guides & Optimization Resources | UltraFast.support',
  description: 'In-depth, expert guides on WordPress Core Web Vitals, speed optimization, active cloud monitoring, AI automations, and GoHighLevel CRM workflows.',
  openGraph: {
    title: 'UltraFast.support Technical Blog',
    description: 'Expert guides on WordPress speed optimization, active cloud monitoring, and AI automation.',
    type: 'website',
  }
}

export default function BlogPage() {
  const posts = getBlogPosts()
  return <BlogContent initialPosts={posts} />
}
