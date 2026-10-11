import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import {
  facebookPosts,
  OFFICIAL_FACEBOOK_PAGE_URL,
  type FacebookPost,
} from '@/data/facebookPosts'

const customPostsFile = path.join(process.cwd(), 'data', 'custom-posts.json')

function readCustomPosts(): FacebookPost[] {
  try {
    if (fs.existsSync(customPostsFile)) {
      return JSON.parse(fs.readFileSync(customPostsFile, 'utf8') || '[]')
    }
  } catch {
    // ignore
  }
  return []
}

export async function GET() {
  const custom = readCustomPosts()
  return NextResponse.json({
    ok: true,
    posts: [...custom, ...facebookPosts],
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      title = '',
      category = 'Admissions Alert',
      posterHeadline = '',
      posterSubheadline = '',
      caption = '',
      highlights = '',
      keywords = '',
      image = '/images/fb-posts/fb-post-1.jpg',
      facebookUrl = OFFICIAL_FACEBOOK_PAGE_URL,
    } = body

    if (!title.trim() || !caption.trim()) {
      return NextResponse.json(
        { ok: false, error: 'Post title and Facebook caption are required.' },
        { status: 400 }
      )
    }

    const now = new Date()
    const slug =
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
        .slice(0, 75) +
      '-' +
      now.getTime().toString().slice(-4)

    const paragraphs = caption
      .split(/\n\s*\n|\r\n\s*\r\n/)
      .map((p: string) => p.trim())
      .filter(Boolean)

    const captionLead = paragraphs[0] || caption.trim()
    const captionBody =
      paragraphs.length > 1
        ? paragraphs.slice(1)
        : [
            'Contact Sage Roots International London Admissions Desk for a free profile assessment, university shortlisting, and complete UK Student Route visa guidance.',
          ]

    const keyHighlights = highlights
      ? highlights
          .split('\n')
          .map((h: string) => h.trim())
          .filter(Boolean)
      : [
          '100% Free UK University Application & Offer Letter Processing.',
          'Dedicated Pre-CAS Credibility Interview & 28-Day Financial Compliance Check.',
        ]

    const seoKeywords = keywords
      ? keywords
          .split(',')
          .map((k: string) => k.trim())
          .filter(Boolean)
      : [
          'Sage Roots International',
          'Study in UK 2026',
          'UK University Admission',
          'UK Student Visa Guidance',
        ]

    const newPost: FacebookPost = {
      id: `sri-fb-${Date.now()}`,
      slug,
      title: title.trim(),
      publishedAt: now.toISOString().split('T')[0],
      displayDate: now.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      category,
      posterBadge: 'OFFICIAL FACEBOOK PAGE UPDATE',
      posterHeadline: posterHeadline.trim() || title.trim(),
      posterSubheadline:
        posterSubheadline.trim() ||
        'Direct UK University Admissions & Visa Compliance Support | £0 Agency Processing Fee',
      posterStats: [
        { label: 'Service Fee', value: '£0 Free Processing' },
        { label: 'Offer Turnaround', value: '5–10 Working Days' },
        { label: 'Support Desk', value: 'London & International' },
      ],
      image: image.trim() || '/images/fb-posts/fb-post-1.jpg',
      captionLead,
      captionBody,
      keyHighlights,
      seoKeywords,
      facebookUrl: facebookUrl.trim() || OFFICIAL_FACEBOOK_PAGE_URL,
    }

    try {
      const existing = readCustomPosts()
      existing.unshift(newPost)
      fs.writeFileSync(customPostsFile, JSON.stringify(existing, null, 2), 'utf8')
    } catch {
      // Ignore write error on read-only environments
    }

    return NextResponse.json({
      ok: true,
      post: newPost,
    })
  } catch (err) {
    console.error('Failed to publish post:', err)
    return NextResponse.json(
      { ok: false, error: 'Failed to publish Facebook post.' },
      { status: 500 }
    )
  }
}
