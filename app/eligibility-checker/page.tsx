import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import EligibilityChecker from '@/components/home/EligibilityChecker'

export const metadata: Metadata = {
  title: 'UK University Eligibility & MOI Checker | Sage Roots International',
  description:
    'Free real-time UK university eligibility checker. Check if you qualify for UK Master’s or Bachelor’s with IELTS or Medium of Instruction (MOI), calculate scholarship discounts and minimum CAS deposits in GBP.',
  keywords: [
    'UK university eligibility checker',
    'MOI checker UK universities',
    'study in UK without IELTS',
    'UK scholarship calculator',
    'CAS deposit calculator',
    'check UK masters eligibility',
    'best study abroad consultancy in the world',
    'free UK university assessment',
  ],
  alternates: {
    canonical: 'https://www.sagerootsinternational.co.uk/eligibility-checker',
  },
  openGraph: {
    title: 'UK University Eligibility & MOI Checker | Sage Roots International',
    description:
      'Check your UK university eligibility in 30 seconds. Instant evaluation for Medium of Instruction (MOI), scholarships up to £10,000, and minimum CAS tuition deposits.',
    url: 'https://www.sagerootsinternational.co.uk/eligibility-checker',
    siteName: 'Sage Roots International',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'UK University Eligibility & MOI Checker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK University Eligibility & MOI Checker',
    description: 'Instant student eligibility assessment for UK university admissions with MOI and scholarships.',
    images: ['/images/sri-logo.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      name: 'UK University Eligibility and MOI Checker',
      url: 'https://www.sagerootsinternational.co.uk/eligibility-checker',
      description:
        'Interactive student eligibility assessment for UK university admissions with MOI and scholarship evaluation.',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'GBP',
      },
      provider: {
        '@type': 'EducationalOrganization',
        name: 'Sage Roots International',
        url: 'https://www.sagerootsinternational.co.uk',
      },
    },
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
          name: 'Tools',
          item: 'https://www.sagerootsinternational.co.uk/eligibility-checker',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Eligibility & MOI Checker',
          item: 'https://www.sagerootsinternational.co.uk/eligibility-checker',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does the UK University MOI Checker work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The MOI Checker compares your graduation institution, study level, and degree award date against official English language waiver policies of 139+ UK partner universities to see if you can study without IELTS.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is the eligibility evaluation 100% free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Both this automated online checker and profile counseling from Sage Roots International are completely free (£0 agency fee).',
          },
        },
      ],
    },
  ],
}

export default function EligibilityCheckerPage() {
  return (
    <main
      style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
      className="pt-20 bg-[#f2f4f7]"
    >
      <Script
        id="eligibility-checker-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <EligibilityChecker />
    </main>
  )
}
