import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Binary,
  Award,
  Briefcase,
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
  title: 'MSc Data Science & Artificial Intelligence in UK: Universities, Fees & MOI | Sage Roots International',
  description:
    'Complete guide to studying MSc Data Science & AI in the UK. Explore top British universities, tuition fees from £13,000, 1-year master’s with 2-year PSW work visa, MOI without IELTS, and scholarships up to £10,000.',
  keywords: [
    'msc data science uk',
    'study artificial intelligence in uk',
    'data science without ielts uk',
    'uk data science courses with placement',
    'best universities for data science in uk',
    'msc ai and machine learning uk',
    'data scientist salary in uk after masters',
    'sage roots international data science',
    'best study abroad consultancy in the world',
  ],
  alternates: {
    canonical: '/courses/data-science-ai-uk',
  },
  openGraph: {
    title: 'MSc Data Science & AI in UK: Universities, Fees & MOI',
    description:
      'High tech sector demand! Study MSc Data Science & Artificial Intelligence in the UK with 2-year Graduate Route visa, MOI English waivers, and up to £10,000 scholarships.',
    url: 'https://www.sagerootsinternational.co.uk/courses/data-science-ai-uk',
    siteName: 'Sage Roots International',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'MSc Data Science and AI in UK - Sage Roots International',
      },
    ],
  },
}

const dataScienceSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Course',
      '@id': 'https://www.sagerootsinternational.co.uk/courses/data-science-ai-uk#course',
      name: 'MSc Data Science & Artificial Intelligence (UK)',
      description:
        'A comprehensive 1-year postgraduate degree in Big Data, Machine Learning, Python, and Predictive Analytics with 2-year UK Post-Study Work (PSW) visa.',
      provider: {
        '@type': 'EducationalOrganization',
        name: 'Sage Roots International - UK Partner Universities',
        url: 'https://www.sagerootsinternational.co.uk',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.sagerootsinternational.co.uk/courses/data-science-ai-uk#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I study MSc Data Science in the UK without a Computer Science background?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Several of our partner UK universities offer Data Science conversion programmes specifically designed for graduates from business, engineering, economics, or social sciences who want to pivot into high-paying AI careers.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the average graduate salary for Data Science in the UK?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Entry-level Junior Data Scientists in London and the UK earn between £35,000 and £42,000 per year, rising to £55,000 to £75,000+ within 2 to 3 years.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I apply for Data Science in the UK without IELTS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Bangladeshi and international graduates with an English-medium undergraduate degree can qualify for direct MSc Data Science admission using an official Medium of Instruction (MOI) certificate.',
          },
        },
      ],
    },
  ],
}

export default function DataScienceCoursePage() {
  return (
    <div className="bg-[#FAFDFB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dataScienceSchemaJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] text-white pt-32 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-300 mb-6 backdrop-blur-md">
            <Binary className="w-4 h-4 text-emerald-400" />
            #1 High Demand UK Tech Qualification
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight mb-6">
            MSc Data Science &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-200">
              Artificial Intelligence
            </span>
            <br className="hidden sm:inline" /> in the UK (with 2-Year PSW)
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
            Launch a global career in AI, Machine Learning, and Big Data Analytics. Tuition from £13,000, conversion courses for non-CS graduates, MOI acceptance without IELTS, and guaranteed London job support.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/eligibility-checker"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Check Data Science Eligibility Free
            </Link>
            <a
              href="https://wa.me/447776181483?text=Hello%2C%20I%20am%20interested%20in%20MSc%20Data%20Science%20and%20AI%20in%20the%20UK."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-xl backdrop-blur-md transition"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              WhatsApp Data Science Specialist
            </a>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
            <TrendingUp className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-bold text-lg text-[#06241B] mb-1">£38,000 – £55,000</h3>
            <p className="text-xs text-gray-500 font-semibold mb-2">Average UK Starting Salary</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Highest-earning STEM discipline with thousands of sponsored vacancies across London tech corridors.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
            <Briefcase className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-bold text-lg text-[#06241B] mb-1">2-Year PSW Visa</h3>
            <p className="text-xs text-gray-500 font-semibold mb-2">Graduate Route Work Rights</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Live and work anywhere in the UK for 2 full years after graduation with an easy route to Skilled Worker sponsorship.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
            <Award className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-bold text-lg text-[#06241B] mb-1">Up to £10,000</h3>
            <p className="text-xs text-gray-500 font-semibold mb-2">Merit Scholarships Available</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Automatic assessment for academic merit bursaries, women-in-STEM awards, and early payment discounts.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section className="py-12 bg-white border-t border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 text-center mb-8">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Free Service
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            Apply for MSc Data Science &amp; AI
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Our London admissions desk will review your bachelor’s transcripts and match you with partner universities offering MOI waivers.
          </p>
        </div>
        <ConsultationForm />
      </section>
    </div>
  )
}
