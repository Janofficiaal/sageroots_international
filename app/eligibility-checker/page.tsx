import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import EligibilityChecker from '@/components/home/EligibilityChecker'
import BankCalculator from '@/components/home/BankCalculator'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'UK University MOI & Scholarship Eligibility Checker',
  description:
    "Free interactive UK university eligibility checker. Check if you qualify for UK Master's or Bachelor's with IELTS or MOI (Medium of Instruction), calculate scholarship discount and minimum CAS deposit.",
  keywords: [
    'uk eligibility checker',
    'uk university scholarship calculator',
    'study in uk without ielts moi checker',
    'moi accepted universities in uk',
    'bpp ulster greenwich moi eligibility',
    'uk tuition cost in bdt calculator',
    'sage roots eligibility calculator',
    'uk university admission checker free',
    'moi eligibility for uk masters',
    'uk cas deposit calculator',
  ],
  alternates: {
    canonical: '/eligibility-checker',
  },
  openGraph: {
    title:
      'UK University MOI & Scholarship Eligibility Checker | Sage Roots International',
    description:
      'Free interactive tool — check your MOI/IELTS eligibility, estimate scholarship discounts & calculate minimum CAS deposit for UK universities.',
    url: '/eligibility-checker',
    type: 'website',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'Sage Roots International Eligibility Checker',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK University MOI & Scholarship Eligibility Checker',
    description:
      'Free interactive tool — check MOI/IELTS eligibility, scholarships & CAS deposit for UK universities.',
  },
}

/* JSON-LD WebApplication structured data for rich SERP appearance */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'UK University MOI & Scholarship Eligibility Checker',
  url: 'https://www.sagerootsinternational.co.uk/eligibility-checker',
  description:
    'Free interactive eligibility checker for UK university admissions. Verify MOI/IELTS qualification, estimate scholarship discounts, and calculate minimum CAS deposit.',
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
    address: {
      '@type': 'PostalAddress',
      streetAddress: '44 Broadway',
      addressLocality: 'Stratford, London',
      postalCode: 'E15 1XH',
      addressCountry: 'GB',
    },
  },
  featureList: [
    'MOI vs IELTS eligibility assessment',
    'Scholarship discount calculator',
    'CAS deposit estimator',
    'UK tuition cost in BDT converter',
    'Bank statement calculator for student visa',
  ],
  browserRequirements: 'Requires JavaScript',
  softwareVersion: '1.0',
  inLanguage: ['en', 'bn'],
}

export default function EligibilityCheckerPage() {
  return (
    <div className="pt-24 sm:pt-28">
      {/* JSON-LD Structured Data */}
      <Script
        id="eligibility-checker-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb for SEO */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 pt-2 pb-0"
      >
        <ol
          className="flex items-center gap-1.5 text-xs text-gray-400"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <Link
              href="/"
              itemProp="item"
              className="hover:text-emerald-500 transition-colors"
            >
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li className="select-none">/</li>
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <span itemProp="name" className="text-emerald-500 font-medium">
              Eligibility Checker
            </span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </nav>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] text-white py-14 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 backdrop-blur-md">
            Interactive Student Tool
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-3">
            UK University &amp; Scholarship Calculator
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
            আপনার অ্যাকাডেমিক ব্যাকগ্রাউন্ড (প্রাইভেট, পাবলিক বা জাতীয়
            বিশ্ববিদ্যালয়) অনুযায়ী IELTS ছাড়া MOI দিয়ে ভর্তির যোগ্যতা,
            সম্ভাব্য স্কলারশিপ ও মিনিমাম ডিপোজিট লাইভ হিসাব করুন।
          </p>
        </div>
      </section>

      {/* Interactive Tool */}
      <EligibilityChecker />

      {/* Financial Bank Statement Calculator */}
      <BankCalculator />

      {/* Free Application Form */}
      <ConsultationForm />
    </div>
  )
}
