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

      {/* Posts Feed Section - Starts right from the top */}
      <section className="pt-24 sm:pt-28 pb-14 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FacebookPostsFeed initialPosts={facebookPosts} />
        </div>
      </section>
    </div>
  )
}
