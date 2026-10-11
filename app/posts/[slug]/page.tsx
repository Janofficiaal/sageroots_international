import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  facebookPosts,
  OFFICIAL_FACEBOOK_PAGE_URL,
} from '@/data/facebookPosts'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return facebookPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = facebookPosts.find((p) => p.slug === slug)
  if (!post) {
    return {
      title: 'Post Not Found | Sage Roots International',
    }
  }

  return {
    title: `${post.title} | Sage Roots International`,
    description: post.captionLead,
    keywords: post.seoKeywords,
    openGraph: {
      title: post.title,
      description: post.captionLead,
      type: 'article',
      publishedTime: post.publishedAt,
      images: [{ url: post.image }],
    },
  }
}

export default async function SinglePostPage({ params }: Props) {
  const { slug } = await params
  const post = facebookPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const otherPosts = facebookPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SocialMediaPosting',
    headline: post.title,
    datePublished: post.publishedAt,
    articleSection: post.category,
    keywords: post.seoKeywords.join(', '),
    image: `https://www.sagerootsinternational.co.uk${post.image}`,
    articleBody: [post.captionLead, ...post.captionBody].join('\n\n'),
    author: {
      '@type': 'EducationalOrganization',
      name: 'Sage Roots International',
      url: 'https://www.sagerootsinternational.co.uk',
    },
    publisher: {
      '@type': 'EducationalOrganization',
      name: 'Sage Roots International',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      },
    },
    sharedContent: {
      '@type': 'WebPage',
      url: post.facebookUrl || OFFICIAL_FACEBOOK_PAGE_URL,
    },
  }

  return (
    <div className="bg-[#F4F9F6] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Article Hero */}
      <section className="hero-gradient text-white pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <Link
              href="/posts"
              className="text-xs font-bold text-emerald-300 hover:text-white underline underline-offset-4"
            >
              Back to All Facebook Posts
            </Link>
            <span className="text-white/30">|</span>
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-amber-300 border border-white/15">
              {post.category}
            </span>
            <time
              dateTime={post.publishedAt}
              className="text-xs font-semibold text-white/70"
            >
              Published {post.displayDate}
            </time>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-white/15">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-amber-400/70">
                <Image
                  src="/images/sri-logo.jpg"
                  alt="Sage Roots International"
                  fill
                  className="object-cover scale-[1.04]"
                  sizes="44px"
                />
              </div>
              <div>
                <p className="text-sm font-black text-white">
                  Sage Roots International — Official Facebook Page
                </p>
                <p className="text-xs text-white/60">
                  44 Broadway, Stratford, London E15 1XH
                </p>
              </div>
            </div>

            <a
              href={post.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-colors"
            >
              View Original Post on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-emerald-100 rounded-3xl overflow-hidden shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left 5 Columns: Full Uncropped Official Facebook Poster */}
              <div className="lg:col-span-5 bg-[#042017] p-5 sm:p-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-emerald-100">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400 text-[#042017]">
                      {post.posterBadge}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-300">
                      Original Facebook Poster
                    </span>
                  </div>

                  <div className="rounded-2xl overflow-hidden bg-white shadow-xl border border-white/15">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={1080}
                      height={1200}
                      className="w-full h-auto object-contain"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      priority
                    />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2.5 pt-4 border-t border-white/15">
                  {post.posterStats.map((st) => (
                    <div
                      key={st.label}
                      className="bg-white/5 border border-white/10 rounded-xl p-3"
                    >
                      <span className="block text-[10px] uppercase tracking-wider text-white/60 font-semibold">
                        {st.label}
                      </span>
                      <span className="block text-xs sm:text-sm font-black text-amber-300 mt-0.5">
                        {st.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right 7 Columns: Full Caption & SEO Article Body */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="space-y-5 text-gray-800 text-base sm:text-lg leading-relaxed">
                    <p className="font-bold text-[#073224] text-lg sm:text-xl leading-relaxed">
                      {post.captionLead}
                    </p>

                    {post.captionBody.map((para, i) => (
                      <p key={i} className="leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  {post.keyHighlights && post.keyHighlights.length > 0 && (
                    <div className="mt-8 bg-[#F4F9F6] border border-emerald-100 rounded-2xl p-6">
                      <h2 className="text-sm font-black uppercase tracking-widest text-[#073224] mb-4">
                        Key Poster &amp; Eligibility Highlights
                      </h2>
                      <ul className="space-y-3">
                        {post.keyHighlights.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed pl-4 border-l-2 border-emerald-600"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Keywords */}
                  <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mr-1">
                      SEO Topic Tags:
                    </span>
                    {post.seoKeywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-xs font-semibold text-[#073224] bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Box */}
                <div className="mt-8 bg-[#06241B] text-white rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-black mb-1">
                      Apply for This UK Pathway with £0 Agency Fee
                    </h3>
                    <p className="text-white/75 text-xs sm:text-sm">
                      Speak directly with our Stratford London team for a free profile assessment.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 flex-shrink-0">
                    <a
                      href={`https://wa.me/447776181483?text=${encodeURIComponent(
                        `Hello Sage Roots International! I read your post "${post.title}" and want to check my eligibility.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-brand-magenta hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                    <Link
                      href="/contact"
                      className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold transition-colors"
                    >
                      Book Free Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More Recent Posts */}
          <div className="mt-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-[#06241B]">
                More Official Facebook Page Posts
              </h2>
              <Link
                href="/posts"
                className="text-sm font-bold text-brand-magenta hover:text-emerald-800 underline underline-offset-4"
              >
                View All {facebookPosts.length} Posts
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherPosts.map((other) => (
                <Link
                  key={other.id}
                  href={`/posts/${other.slug}`}
                  className="bg-white border border-emerald-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="bg-[#042017] p-3">
                      <div className="rounded-xl overflow-hidden bg-white">
                        <Image
                          src={other.image}
                          alt={other.title}
                          width={600}
                          height={650}
                          className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    </div>
                    <div className="p-5">
                      <span className="inline-block text-[11px] font-bold text-brand-magenta uppercase tracking-wider mb-1.5">
                        {other.category}
                      </span>
                      <h3 className="text-base font-black text-[#06241B] leading-snug mb-2">
                        {other.title}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                        {other.captionLead}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs font-bold text-[#073224] px-5 pb-5 pt-3 border-t border-gray-100">
                    Published {other.displayDate}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
