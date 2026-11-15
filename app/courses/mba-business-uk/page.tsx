import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Briefcase,
  Award,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building2,
  MapPin,
  MessageCircle,
  Sparkles,
  ArrowRight,
  HelpCircle,
  TrendingUp,
} from 'lucide-react'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'MBA in UK: Top Business Schools, Fees & No Work Experience Required | Sage Roots International',
  description:
    'Study MBA in the UK without prior work experience or without IELTS (using MOI). Discover affordable 1-year MBA programmes in London from £12,000, 2-year PSW visa, and £0 application service.',
  keywords: [
    'mba in uk',
    'study mba in uk without work experience',
    'mba without ielts in uk',
    'low cost mba in london',
    '1 year mba in uk for international students',
    'best business schools in uk for mba',
    'executive mba london scholarships',
    'sage roots international mba',
    'best study abroad consultancy in the world',
  ],
  alternates: {
    canonical: '/courses/mba-business-uk',
  },
  openGraph: {
    title: 'MBA in UK: Top Business Schools, Fees & No Work Experience',
    description:
      'Fast-track your executive management career. 1-Year UK MBA programmes with £3,000 deposits, MOI English waivers, and 2-year Graduate Route work visa.',
    url: 'https://www.sagerootsinternational.co.uk/courses/mba-business-uk',
    siteName: 'Sage Roots International',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'MBA in UK - Sage Roots International',
      },
    ],
  },
}

const mbaSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Course',
      '@id': 'https://www.sagerootsinternational.co.uk/courses/mba-business-uk#course',
      name: 'Global MBA & Master of Business Administration (UK)',
      description:
        'A career-defining 1-year Master of Business Administration (MBA) offering strategic leadership, corporate finance, and marketing with 2-year UK PSW work rights.',
      provider: {
        '@type': 'EducationalOrganization',
        name: 'Sage Roots International - UK Partner Universities',
        url: 'https://www.sagerootsinternational.co.uk',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.sagerootsinternational.co.uk/courses/mba-business-uk#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I study an MBA in the UK without work experience?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! While executive MBAs require 3+ years of managerial experience, many top partner UK universities offer early-career Global MBAs and MSc Management programmes accepting fresh graduates without prior employment.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does an affordable MBA cost in the UK?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Tuition fees for affordable UK MBA programmes typically range from £12,000 to £16,500 per year, with initial CAS deposits starting from £3,000 and automatic scholarships up to £4,000.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does an MBA in the UK include a 2-year work permit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! All accredited UK MBA programmes qualify graduates for the 2-year Graduate Route (PSW) post-study work visa upon successful completion.',
          },
        },
      ],
    },
  ],
}

export default function MbaCoursePage() {
  return (
    <div className="bg-[#FAFDFB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mbaSchemaJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] text-white pt-32 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-300 mb-6 backdrop-blur-md">
            <Briefcase className="w-4 h-4 text-emerald-400" />
            Executive Business &amp; Leadership Pathway
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight mb-6">
            Study MBA in the UK{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-200">
              Without Work Experience
            </span>
            <br className="hidden sm:inline" /> or Without IELTS (MOI)
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
            Fast-track your corporate leadership career with a globally recognized 1-Year British MBA. Low CAS deposits from £3,000, scholarships up to £10,000, and 2-year Graduate Route work visa.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/eligibility-checker"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Check MBA Eligibility Free
            </Link>
            <a
              href="https://wa.me/447776181483?text=Hello%2C%20I%20am%20interested%20in%20studying%20an%20MBA%20in%20the%20UK."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-xl backdrop-blur-md transition"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              WhatsApp MBA Counselor
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
            <Clock className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-bold text-lg text-[#06241B] mb-1">1 Year Full-Time</h3>
            <p className="text-xs text-gray-500 font-semibold mb-2">Fast-Track Degree Completion</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Complete your MBA in 12 months, saving an entire year of living expenses compared to 2-year USA/Canada programs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
            <Building2 className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-bold text-lg text-[#06241B] mb-1">From £3,000 Deposit</h3>
            <p className="text-xs text-gray-500 font-semibold mb-2">Low Initial Financial Outlay</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Secure your CAS with affordable initial payments and spread the remaining tuition across flexible termly installments.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
            <TrendingUp className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-bold text-lg text-[#06241B] mb-1">2-Year Post-Study Visa</h3>
            <p className="text-xs text-gray-500 font-semibold mb-2">London Career Opportunities</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Access the City of London financial and corporate management job market with full 2-year work rights.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section className="py-12 bg-white border-t border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 text-center mb-8">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Free Admission
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            Start Your UK MBA Application
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Submit your degree details — our London team will match you with business schools offering MOI acceptance and fee reductions.
          </p>
        </div>
        <ConsultationForm />
      </section>
    </div>
  )
}
