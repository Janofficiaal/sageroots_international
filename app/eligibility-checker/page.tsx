import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import EligibilityChecker from '@/components/home/EligibilityChecker'

export const metadata: Metadata = {
  title: 'UK University Eligibility and MOI Checker | Sage Roots International',
  description:
    'Free real time UK university eligibility checker. Check if you qualify for UK Masters or Bachelors with IELTS or MOI, calculate scholarship discounts and minimum CAS deposits.',
  alternates: {
    canonical: '/eligibility-checker',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
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
