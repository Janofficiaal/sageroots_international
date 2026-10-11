import type { Metadata } from 'next'
import Link from 'next/link'
import {
  facebookPosts,
  OFFICIAL_FACEBOOK_PAGE_URL,
} from '@/data/facebookPosts'
import FacebookPostsFeed from '@/components/posts/FacebookPostsFeed'

export const metadata: Metadata = {
  title:
    'Daily Facebook Posts, UK University Updates & Visa Briefings | Sage Roots International',
  description:
    'Read the latest official Facebook page posts, UK university intake announcements, MOI & No-IELTS admission updates, scholarship alerts, and UKVI visa compliance briefings from Sage Roots International.',
  keywords: [
    'Sage Roots International Facebook Posts',
    'UK University Admission Updates 2026',
    'Study in UK Without IELTS MOI',
    'UK Student Visa News Bangladesh',
    'UK Scholarship Announcements',
  ],
  openGraph: {
    title:
      'Official Facebook Posts & UK Admissions Updates | Sage Roots International',
    description:
      'Daily UK higher education updates, MOI university lists, scholarship alerts, and UKVI visa compliance guides.',
    type: 'website',
  },
}

export default function PostsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Sage Roots International — Official Facebook Posts & UK Admissions Updates',
    description:
      'Official daily Facebook page posts, UK university admission alerts, MOI pathways, and visa compliance briefings.',
    publisher: {
      '@type': 'EducationalOrganization',
      name: 'Sage Roots International',
      url: 'https://www.sagerootsinternational.co.uk',
      sameAs: [OFFICIAL_FACEBOOK_PAGE_URL],
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: facebookPosts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'SocialMediaPosting',
          headline: post.title,
          datePublished: post.publishedAt,
          articleBody: [post.captionLead, ...post.captionBody].join(' '),
          keywords: post.seoKeywords.join(', '),
          url: `https://www.sagerootsinternational.co.uk/posts/${post.slug}`,
          sharedContent: {
            '@type': 'WebPage',
            url: post.facebookUrl,
          },
        },
      })),
    },
  }

  return (
    <div className="bg-[#F4F9F6] min-h-screen">
      {/* Structured JSON-LD for Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="hero-gradient text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-300 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full mb-5">
              Official Social Media &amp; Admissions Feed
            </span>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-5">
              Daily Facebook Posts &amp; UK Admissions Updates
            </h1>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-8">
              Every official announcement published on the Sage Roots International Facebook page—complete with full captions, eligibility criteria, scholarship figures, and UKVI visa compliance guidance—archived and indexed in one place for students and parents.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={OFFICIAL_FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-magenta hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-colors"
              >
                Follow Official Facebook Page
              </a>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-colors"
              >
                Book Free UK Profile Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Feed Section */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FacebookPostsFeed initialPosts={facebookPosts} />
        </div>
      </section>
    </div>
  )
}
