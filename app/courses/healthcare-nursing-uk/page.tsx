import type { Metadata } from 'next'
import Link from 'next/link'
import {
  HeartPulse,
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
  Stethoscope,
} from 'lucide-react'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'Healthcare & Nursing Degrees in UK: Public Health, Management & NHS Careers | Sage Roots International',
  description:
    'Study Healthcare Management, MSc Public Health, or BSc/MSc Nursing in the UK. Direct pathways to NHS careers, £3,000 CAS deposits, free London care training, and 2-year PSW visa.',
  keywords: [
    'study nursing in uk',
    'healthcare management in uk',
    'msc public health uk',
    'uk healthcare courses without ielts',
    'nhs healthcare jobs for international students',
    'adult nursing degree uk for international students',
    'sage roots international healthcare',
    'best study abroad consultancy in the world',
  ],
  alternates: {
    canonical: '/courses/healthcare-nursing-uk',
  },
  openGraph: {
    title: 'Healthcare & Nursing Degrees in UK: NHS Career Pathways',
    description:
      'High NHS demand! Study Healthcare Management & Public Health in the UK with 2-year Graduate Route visa, £0 agency fee, and London career support.',
    url: 'https://www.sagerootsinternational.co.uk/courses/healthcare-nursing-uk',
    siteName: 'Sage Roots International',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'Healthcare and Nursing Degrees in UK - Sage Roots International',
      },
    ],
  },
}

const healthSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Course',
      '@id': 'https://www.sagerootsinternational.co.uk/courses/healthcare-nursing-uk#course',
      name: 'MSc Public Health & Healthcare Management (UK)',
      description:
        'A comprehensive postgraduate degree preparing international students for healthcare leadership, epidemiology, and health policy with 2-year UK PSW work rights.',
      provider: {
        '@type': 'EducationalOrganization',
        name: 'Sage Roots International - UK Partner Universities',
        url: 'https://www.sagerootsinternational.co.uk',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.sagerootsinternational.co.uk/courses/healthcare-nursing-uk#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I study Healthcare Management in the UK without a medical background?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! MSc Healthcare Management and MSc Global Public Health accept graduates from business, social science, biological sciences, and general undergraduate degrees.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Sage Roots International provide healthcare training support in London?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Our Stratford London team assists healthcare students with mandatory training guidance (Mandatory Care Certificate, DBS checks, and NHS trust bank onboarding) for legal 20 hours/week part-time work.',
          },
        },
      ],
    },
  ],
}

export default function HealthcareCoursePage() {
  return (
    <div className="bg-[#FAFDFB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(healthSchemaJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] text-white pt-32 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-300 mb-6 backdrop-blur-md">
            <HeartPulse className="w-4 h-4 text-emerald-400" />
            Healthcare Leadership &amp; NHS Pathways
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight mb-6">
            Healthcare &amp; Nursing Degrees{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-200">
              in the UK
            </span>
            <br className="hidden sm:inline" /> (with 2-Year PSW &amp; London Job Care)
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
            Build a respected career in the world’s leading healthcare system. MSc Public Health, Healthcare Leadership, and Nursing degrees with £0 agency fee and direct London NHS onboarding.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/eligibility-checker"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Check Healthcare Eligibility Free
            </Link>
            <a
              href="https://wa.me/447776181483?text=Hello%2C%20I%20am%20interested%20in%20Healthcare%20and%20Nursing%20degrees%20in%20the%20UK."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-xl backdrop-blur-md transition"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              WhatsApp Healthcare Advisor
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
            <Stethoscope className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-bold text-lg text-[#06241B] mb-1">Direct NHS Pathways</h3>
            <p className="text-xs text-gray-500 font-semibold mb-2">High National Demand</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Healthcare and clinical management represent the largest sector of sponsored employment visas in the UK.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
            <Building2 className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-bold text-lg text-[#06241B] mb-1">Stratford Job Support</h3>
            <p className="text-xs text-gray-500 font-semibold mb-2">Care Work Guidance</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Our Stratford London office assists healthcare students with DBS certification and verified care work placements.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
            <Award className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-bold text-lg text-[#06241B] mb-1">Up to £10,000</h3>
            <p className="text-xs text-gray-500 font-semibold mb-2">Automatic Scholarships</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Generous international student fee reductions and health science bursaries across partner institutions.
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
            Apply for UK Healthcare &amp; Nursing Degrees
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Submit your profile — our specialized London healthcare admissions advisors will assist you free of charge.
          </p>
        </div>
        <ConsultationForm />
      </section>
    </div>
  )
}
