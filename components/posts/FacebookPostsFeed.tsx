'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  OFFICIAL_FACEBOOK_PAGE_URL,
  type FacebookPost,
} from '@/data/facebookPosts'

interface Props {
  initialPosts: FacebookPost[]
}

const CATEGORIES = [
  'All Posts',
  'Admissions Alert',
  'No-IELTS / MOI Pathway',
  'Scholarship Notice',
  'Visa Grant Update',
  'Career & Student Support',
] as const

export default function FacebookPostsFeed({ initialPosts }: Props) {
  const [posts, setPosts] = useState<FacebookPost[]>(initialPosts)
  const [selectedCategory, setSelectedCategory] = useState<string>('All Posts')
  const [searchQuery, setSearchQuery] = useState('')
  const [showPublishModal, setShowPublishModal] = useState(false)

  // Form state for adding a new daily Facebook post
  const [title, setTitle] = useState('')
  const [category, setCategory] =
    useState<FacebookPost['category']>('Admissions Alert')
  const [posterHeadline, setPosterHeadline] = useState('')
  const [posterSubheadline, setPosterSubheadline] = useState('')
  const [caption, setCaption] = useState('')
  const [highlights, setHighlights] = useState('')
  const [keywords, setKeywords] = useState('')
  const [image, setImage] = useState('/images/fb-posts/fb-post-1.jpg')
  const [facebookUrl, setFacebookUrl] = useState(OFFICIAL_FACEBOOK_PAGE_URL)
  const [submitting, setSubmitting] = useState(false)
  const [publishSuccess, setPublishSuccess] = useState(false)

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        if (data?.ok && Array.isArray(data.posts) && data.posts.length > 0) {
          setPosts(data.posts)
        }
      })
      .catch(() => {
        // Fallback to initialPosts
      })
  }, [])

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All Posts' || post.category === selectedCategory
    const q = searchQuery.trim().toLowerCase()
    if (!q) return matchesCategory
    return (
      matchesCategory &&
      (post.title.toLowerCase().includes(q) ||
        post.captionLead.toLowerCase().includes(q) ||
        post.captionBody.some((p) => p.toLowerCase().includes(q)) ||
        post.seoKeywords.some((k) => k.toLowerCase().includes(q)))
    )
  })

  async function handlePublishPost(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim() || !caption.trim()) return
    setSubmitting(true)
    setPublishSuccess(false)

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          category,
          posterHeadline,
          posterSubheadline,
          caption,
          highlights,
          keywords,
          image,
          facebookUrl,
        }),
      })
      const data = await res.json()
      if (data?.ok && data.post) {
        setPosts((prev) => [data.post, ...prev])
        setPublishSuccess(true)
        setTitle('')
        setPosterHeadline('')
        setPosterSubheadline('')
        setCaption('')
        setHighlights('')
        setKeywords('')
        setTimeout(() => {
          setShowPublishModal(false)
          setPublishSuccess(false)
        }, 1200)
      }
    } catch {
      // ignore
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      {/* Filter, Search & Publish Bar */}
      <div className="bg-white border border-emerald-100 rounded-2xl p-5 sm:p-6 shadow-sm mb-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-gray-100">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-magenta mb-1">
              Official Social Media &amp; SEO Archive ({posts.length} Verified Posts)
            </p>
            <h2 className="text-lg sm:text-xl font-black text-[#06241B]">
              Official Facebook Page Posts, Posters &amp; Complete Captions
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={OFFICIAL_FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#073224]/5 hover:bg-[#073224]/10 border border-[#073224]/15 text-[#073224] text-xs font-bold transition-colors"
            >
              Visit Official Facebook Page
            </a>
            <button
              type="button"
              onClick={() => setShowPublishModal(!showPublishModal)}
              className="px-4 py-2.5 rounded-xl bg-brand-magenta hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm"
            >
              {showPublishModal ? 'Close Post Publisher' : 'Add Daily Facebook Post'}
            </button>
          </div>
        </div>

        {/* Add Daily Facebook Post Form Drawer */}
        {showPublishModal && (
          <form
            onSubmit={handlePublishPost}
            className="mt-6 pt-2 pb-6 border-b border-emerald-100 bg-[#F4F9F6] rounded-2xl p-5 sm:p-6 space-y-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-[#06241B]">
                  Publish a New Facebook Page Post for Website &amp; SEO
                </h3>
                <p className="text-xs text-gray-600 mt-0.5">
                  Paste your daily Facebook page caption and poster image URL below. It will be formatted into a large SEO-indexed post card immediately.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-[#06241B] mb-1.5">
                  SEO Post Title / Headline *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. January 2027 UK Admissions Open — Apply with MOI or IELTS"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#06241B] mb-1.5">
                  Post Category
                </label>
                <select
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value as FacebookPost['category'])
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 focus:outline-none focus:border-emerald-600"
                >
                  <option value="Admissions Alert">Admissions Alert</option>
                  <option value="No-IELTS / MOI Pathway">No-IELTS / MOI Pathway</option>
                  <option value="Scholarship Notice">Scholarship Notice</option>
                  <option value="Visa Grant Update">Visa Grant Update</option>
                  <option value="Career & Student Support">Career &amp; Student Support</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#06241B] mb-1.5">
                  Poster Image Path or URL
                </label>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="/images/fb-posts/fb-post-1.jpg"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#06241B] mb-1.5">
                  Facebook Post Link (Optional)
                </label>
                <input
                  type="url"
                  value={facebookUrl}
                  onChange={(e) => setFacebookUrl(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#06241B] mb-1.5">
                Full Facebook Post Caption * (Separate paragraphs with a blank line)
              </label>
              <textarea
                required
                rows={5}
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Paste the complete Facebook post caption here..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#06241B] mb-1.5">
                  Key Bullet Highlights (One per line, optional)
                </label>
                <textarea
                  rows={3}
                  value={highlights}
                  onChange={(e) => setHighlights(e.target.value)}
                  placeholder={'Up to £4,000 Scholarship\nMOI Accepted for Bachelor in English Medium\nFast Offer Letter in 5 Working Days'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#06241B] mb-1.5">
                  SEO Keywords (Comma separated)
                </label>
                <textarea
                  rows={3}
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="Study in UK 2026, MOI Accepted Universities, UK Visa Bangladesh"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              {publishSuccess && (
                <span className="text-xs font-bold text-emerald-700">
                  Facebook post published to website feed!
                </span>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="px-6 py-2.5 rounded-xl bg-[#073224] hover:bg-emerald-900 text-white text-xs font-bold transition-colors disabled:opacity-50"
              >
                {submitting ? 'Publishing Post...' : 'Publish Post to Website'}
              </button>
            </div>
          </form>
        )}

        {/* Category Pills & Search */}
        <div className="mt-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    active
                      ? 'bg-[#073224] text-white shadow-sm'
                      : 'bg-[#F4F9F6] hover:bg-emerald-50 text-gray-700 border border-emerald-100'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          <div className="w-full md:w-72">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posts, BPP, Ulster, MOI, scholarship..."
              aria-label="Search Facebook posts"
              className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-[#F4F9F6] text-xs font-medium text-gray-900 focus:outline-none focus:border-emerald-600 focus:bg-white"
            />
          </div>
        </div>
      </div>

      {/* Large-Format Facebook Posts Stream (Full Uncropped Official Posters + Full Captions) */}
      <div className="space-y-12">
        {filteredPosts.map((post, index) => (
          <article
            key={post.id}
            itemScope
            itemType="https://schema.org/SocialMediaPosting"
            className="bg-white border border-emerald-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Top Official Facebook Page Identity Strip */}
            <div className="bg-[#06241B] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-white/10">
              <div className="flex items-center gap-3.5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-amber-400/70 flex-shrink-0">
                  <Image
                    src="/images/sri-logo.jpg"
                    alt="Sage Roots International"
                    fill
                    className="object-cover scale-[1.04]"
                    sizes="44px"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span
                      itemProp="author"
                      itemScope
                      itemType="https://schema.org/Organization"
                      className="font-black text-sm sm:text-base text-white tracking-tight"
                    >
                      <span itemProp="name">Sage Roots International</span>
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                      Official Facebook Post #{posts.length - index}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/65 mt-0.5">
                    <time itemProp="datePublished" dateTime={post.publishedAt}>
                      Published: {post.displayDate}
                    </time>
                    <span>|</span>
                    <span>44 Broadway, Stratford, London E15 1XH</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/10 text-amber-300 border border-white/10">
                  {post.category}
                </span>
                <a
                  href={post.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                >
                  View on Facebook
                </a>
              </div>
            </div>

            {/* Main Large 2-Column Body: Left Full Uncropped Official Facebook Poster + Right Complete Caption */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left 5 Columns: Full Unobstructed Official Facebook Graphic Poster */}
              <div className="lg:col-span-5 bg-[#042017] p-4 sm:p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-emerald-100">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400 text-[#042017]">
                      {post.posterBadge}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-300">
                      Original Facebook Graphic
                    </span>
                  </div>

                  {/* Full Uncropped Official Poster Image */}
                  <Link
                    href={`/posts/${post.slug}`}
                    className="block rounded-2xl overflow-hidden bg-white shadow-lg border border-white/15 group"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={1080}
                      height={1200}
                      itemProp="image"
                      className="w-full h-auto object-contain group-hover:scale-[1.015] transition-transform duration-300"
                      sizes="(max-width: 1024px) 100vw, 44vw"
                      priority={index < 2}
                    />
                  </Link>
                </div>

                {/* Key Stats Strip Underneath the Poster */}
                <div className="mt-4 grid grid-cols-3 gap-2 pt-3 border-t border-white/15">
                  {post.posterStats.map((st) => (
                    <div
                      key={st.label}
                      className="bg-white/5 border border-white/10 rounded-xl p-2.5"
                    >
                      <span className="block text-[10px] uppercase tracking-wider text-white/60 font-semibold">
                        {st.label}
                      </span>
                      <span className="block text-xs font-black text-amber-300 mt-0.5">
                        {st.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right 7 Columns: Full, Unabridged, Large-Format Caption & SEO Content */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  {/* Post SEO Title */}
                  <h2
                    itemProp="headline"
                    className="text-xl sm:text-2xl lg:text-[26px] font-black text-[#06241B] leading-snug mb-5"
                  >
                    <Link
                      href={`/posts/${post.slug}`}
                      className="hover:text-brand-magenta transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* Full Caption Body — Large & Clear */}
                  <div
                    itemProp="articleBody"
                    className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed"
                  >
                    <p className="font-bold text-[#073224] text-base sm:text-[17px] leading-relaxed">
                      {post.captionLead}
                    </p>

                    {post.captionBody.map((paragraph, idx) => (
                      <p key={idx} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Key Highlights From Poster & Caption */}
                  {post.keyHighlights && post.keyHighlights.length > 0 && (
                    <div className="mt-6 bg-[#F4F9F6] border border-emerald-100 rounded-2xl p-5">
                      <p className="text-xs font-black uppercase tracking-widest text-[#073224] mb-3">
                        Key Poster &amp; Eligibility Highlights
                      </p>
                      <ul className="space-y-2">
                        {post.keyHighlights.map((item, i) => (
                          <li
                            key={i}
                            className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed pl-3 border-l-2 border-emerald-600"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* SEO Keywords / Topic Tags */}
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mr-1">
                      Indexed Topics:
                    </span>
                    {post.seoKeywords.map((kw) => (
                      <span
                        key={kw}
                        itemProp="keywords"
                        className="text-[11px] font-semibold text-[#073224] bg-emerald-50 border border-emerald-200/70 px-2.5 py-1 rounded-lg"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-8 pt-5 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={`https://wa.me/447776181483?text=${encodeURIComponent(
                        `Hello Sage Roots International! I saw your Facebook post "${post.title}" and would like a free UK eligibility assessment.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-brand-magenta hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-colors shadow-sm"
                    >
                      Enquire About This Post on WhatsApp
                    </a>
                    <Link
                      href="/contact"
                      className="px-4 py-2.5 rounded-xl bg-[#073224] hover:bg-emerald-950 text-white text-xs sm:text-sm font-bold transition-colors"
                    >
                      Book Free Consultation
                    </Link>
                  </div>

                  <div className="flex items-center gap-3">
                    {post.relatedUniversitySlug && (
                      <Link
                        href={`/universities/${post.relatedUniversitySlug}`}
                        className="text-xs font-bold text-[#073224] hover:text-brand-magenta underline underline-offset-4"
                      >
                        {post.relatedUniversityName} Profile
                      </Link>
                    )}
                    <Link
                      href={`/posts/${post.slug}`}
                      itemProp="url"
                      className="text-xs font-bold text-brand-magenta hover:text-emerald-800 underline underline-offset-4"
                    >
                      Read Dedicated SEO Page
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
