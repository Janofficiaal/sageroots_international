import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Globe2, ShieldCheck, Award } from 'lucide-react'
import { destinations } from '@/data/destinations'
import DestinationCard from '@/components/ui/DestinationCard'

export const metadata: Metadata = {
  title: 'Study Destinations — UK, Cyprus, Malta, Dubai, Australia & Canada | Sage Roots International',
  description:
    'Explore global study destinations with Sage Roots International (£0 agency fee). Direct university admissions to the UK, Cyprus (EU), Malta (Schengen), Dubai (UAE), Australia & Canada with IELTS waivers & scholarships.',
  keywords: [
    'study destinations',
    'study in UK without IELTS',
    'best study abroad consultancy in the world',
    'study in Cyprus from Bangladesh',
    'study in Malta Schengen student visa',
    'study in Dubai UK branch campus',
    'study in Australia from Bangladesh',
    'study in Canada university admission',
    'best overseas education consultants in the world',
    'free study abroad consultancy London',
  ],
  alternates: {
    canonical: 'https://www.sagerootsinternational.co.uk/destinations',
  },
  openGraph: {
    title: 'Study Destinations — UK, Cyprus, Malta, Dubai & Global | Sage Roots International',
    description:
      'Compare top study abroad destinations, tuition fees, post-study work rights, and visa requirements with 100% free guidance from London headquarters.',
    url: 'https://www.sagerootsinternational.co.uk/destinations',
    siteName: 'Sage Roots International',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'Global Study Destinations — Sage Roots International',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Study Destinations | Sage Roots International',
    description:
      'Explore university admissions to the UK, Cyprus, Malta, Dubai, Australia, and Canada with £0 agency fee.',
    images: ['/images/sri-logo.jpg'],
  },
}

const destinationsJsonLd = {
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
          name: 'Destinations',
          item: 'https://www.sagerootsinternational.co.uk/destinations',
        },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Top Study Abroad Destinations',
      description: 'Explore leading higher education destinations with direct representation by Sage Roots International.',
      itemListElement: destinations.map((d, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: d.name,
        url: `https://www.sagerootsinternational.co.uk/destinations/${d.slug}`,
        description: d.overview,
      })),
    },
  ],
}

export default function DestinationsPage() {
  return (
    <div className="bg-[#FAFDFB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationsJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] py-24 sm:py-28 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs font-semibold text-emerald-300 mb-6 backdrop-blur-md">
            <Globe2 className="w-4 h-4 text-emerald-400" />
            Global University Network • £0 Agency Fee
          </div>
          <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl mb-5 tracking-tight">
            Study Destinations Worldwide
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover premier study opportunities across the <strong>United Kingdom</strong>, <strong>Cyprus</strong>, <strong>Malta</strong>, <strong>Dubai (UAE)</strong>, <strong>Australia</strong>, <strong>Canada</strong>, and Europe with 100% free counseling and admission processing.
          </p>
        </div>
      </section>

      {/* Destinations grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-emerald-700 font-bold text-xs uppercase tracking-widest mb-1">
            Explore Countries
          </p>
          <h2 className="text-[#06241B] font-black text-2xl sm:text-3xl">
            Choose Your Ideal Study Destination
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* UK spotlight */}
      <section className="py-16 bg-white border-y border-emerald-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-2">
            Flagship Destination
          </span>
          <h2 className="text-[#06241B] font-black text-3xl mb-4">Our Primary Expertise: United Kingdom</h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Headquartered in Stratford, London (44 Broadway, E15 1XH), Sage Roots International represents 139+ British partner universities. We provide complete admissions support, Medium of Instruction (MOI) IELTS waivers, scholarships up to £10,000, 2-Year Graduate Route PSW guidance, and 100% London student job support.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/universities"
              className="inline-block bg-[#073224] text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-700 transition-colors text-sm shadow-md"
            >
              Explore 139+ UK Universities
            </Link>
            <Link
              href="/eligibility-checker"
              className="inline-block bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-700 transition-colors text-sm shadow-md"
            >
              Check MOI Eligibility
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
