import { NextRequest, NextResponse } from 'next/server'
import { addBlogPost, BlogPost } from '@/lib/blog-store'

export async function POST(request: NextRequest) {
  try {
    const secret = request.headers.get('X-Publisher-Secret')
    const expectedSecret = process.env.ULTRAFAST_PUBLISHER_SECRET || 'ultrafast-secret-pass'

    if (secret !== expectedSecret) {
      return NextResponse.json({ error: 'Unauthorized publisher access' }, { status: 401 })
    }

    const body = await request.json()
    const { title, slug, excerpt, content, category, author, tags, publishedAt, readTime, faqs, citations } = body

    if (!title || !slug || !excerpt || !content || !category || !author) {
      return NextResponse.json({ error: 'Missing required blog post fields' }, { status: 400 })
    }

    const newPost: BlogPost = {
      title,
      slug,
      excerpt,
      content,
      category,
      author,
      publishedAt: publishedAt || new Date().toISOString().split('T')[0],
      readTime: readTime || '4 min read',
      tags: tags || [],
      faqs,
      citations
    }

    const success = addBlogPost(newPost)
    if (!success) {
      return NextResponse.json({ error: 'A post with this slug already exists' }, { status: 409 })
    }

    return NextResponse.json({ success: true, message: 'Article published successfully', slug })
  } catch (error) {
    console.error('Error in blog publish API:', error)
    return NextResponse.json({ error: 'Failed to process publication request' }, { status: 500 })
  }
}
