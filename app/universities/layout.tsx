import type { Metadata } from 'next'
import { universities } from '@/data/universities'

export const metadata: Metadata = {
  title: 'All 139+ UK Partner Universities (A–Z Directory) | Sage Roots International',
  description:
    'Explore 139+ UK partner universities in alphabetical order. Compare tuition fees in GBP, IELTS/MOI admission waivers, scholarships up to £10,000, and UK post-study work visa opportunities with £0 agency fee.',
  keywords: [
    'UK universities directory',
    '139 UK partner universities',
    'study in UK without IELTS MOI',
    'UK university tuition fees GBP',
    'UK scholarships for international students',
    'best study abroad consultancy in the world for UK',
    'apply to UK universities free',
    'MOI accepted UK universities',
    'UK student visa consultants',
    'top British universities list',
  ],
  alternates: {
    canonical: 'https://www.sagerootsinternational.co.uk/universities',
  },
  openGraph: {
    title: 'All 139+ UK Partner Universities (A–Z Directory) | Sage Roots International',
    description:
      'Browse all 139+ UK partner universities. Check tuition fees in GBP, entry requirements, MOI waivers, and scholarships.',
    url: 'https://www.sagerootsinternational.co.uk/universities',
    siteName: 'Sage Roots International',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'All 139+ UK Partner Universities Directory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '139+ UK Partner Universities Directory | Sage Roots International',
    description:
      'Compare UK universities, tuition fees, MOI waivers, and scholarships with Sage Roots International.',
    images: ['/images/sri-logo.jpg'],
  },
}

const universitiesDirectorySchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.sagerootsinternational.co.uk',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'UK Partner Universities',
          item: 'https://www.sagerootsinternational.co.uk/universities',
        },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Directory of 139+ UK Partner Universities',
      description: 'Alphabetical directory of British universities represented by Sage Roots International for admissions, MOI waivers, and scholarships.',
      numberOfItems: universities.length,
      itemListElement: universities.map((u, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: u.name,
        url: `https://www.sagerootsinternational.co.uk/universities/${u.slug}`,
        description: `${u.name} located in ${u.city}. Tuition: ${u.tuitionFeeNote}. Scholarships: ${u.scholarshipNote}.`,
      })),
    },
  ],
}

export default function UniversitiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(universitiesDirectorySchemaJsonLd),
        }}
      />
      {children}
    </>
  )
}
