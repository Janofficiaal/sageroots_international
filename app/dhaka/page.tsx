import type { Metadata } from 'next'
import Link from 'next/link'
import {
  GraduationCap,
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
  FileCheck2,
} from 'lucide-react'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'Best UK & Abroad Student Visa Consultancy in Dhaka | Sage Roots International',
  description:
    'Looking for the best UK & abroad student visa consultancy in Dhaka? Sage Roots International offers 100% free counseling, MOI/IELTS admissions to 50+ UK universities, up to £10,000 scholarships, and guaranteed London job support for students from DU, NSU, BRAC, AIUB, IUB & Dhaka Division.',
  keywords: [
    'best student consultancy in dhaka',
    'uk student visa consultancy in dhaka',
    'study abroad consultancy in dhaka',
    'education consultancy in dhanmondi',
    'study abroad agency in gulshan uttara',
    'nsu brac study in uk without ielts',
    'du ielts waiver moi uk admission',
    'best uk education consultancy dhaka bangladesh',
    'sage roots international dhaka',
    'london head office study abroad agency dhaka',
  ],
  alternates: {
    canonical: '/dhaka',
  },
  openGraph: {
    title: 'Best UK & Abroad Student Visa Consultancy in Dhaka | Sage Roots International',
    description:
      'Official London-headquartered UK admissions consultancy for Dhaka students. 100% free file processing, £0 agency fee, CAS deposit from £3,000, and London job support.',
    url: 'https://www.sagerootsinternational.co.uk/dhaka',
    siteName: 'Sage Roots International',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'Sage Roots International Dhaka Student Desk',
      },
    ],
  },
}

const dhakaSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      '@id': 'https://www.sagerootsinternational.co.uk/dhaka#organization',
      name: 'Sage Roots International - Dhaka Student Support Desk',
      url: 'https://www.sagerootsinternational.co.uk/dhaka',
      logo: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      image: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      description:
        'The #1 trusted UK and abroad higher education consultancy serving students across Dhaka, DU, NSU, BRAC, AIUB, IUB, and Daffodil. 100% free processing, UKVI visa guidance, and Stratford London job support.',
      telephone: '+447776181483',
      email: 'info@sagerootsinternational.co.uk',
      priceRange: '£0 (Free Counseling & Admission)',
      currenciesAccepted: 'GBP, BDT',
      areaServed: [
        { '@type': 'City', name: 'Dhaka' },
        { '@type': 'AdministrativeArea', name: 'Dhaka Division' },
        { '@type': 'Country', name: 'Bangladesh' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.sagerootsinternational.co.uk/dhaka#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can graduates from NSU, BRAC, AIUB, and DU apply to UK universities without IELTS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Graduates from English-medium private and public universities in Dhaka (including NSU, BRAC, AIUB, IUB, EWU, ULAB, and DU) can apply using an official Medium of Instruction (MOI) certificate with 100% IELTS waiver at top partner universities such as BPP University and Ulster University.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Sage Roots International charge £0 agency fee in Dhaka?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'As authorized representatives of UK universities, our services are fully funded by British institutional partners. Students in Dhaka never pay any consultation fees, file opening fees, or hidden charges.',
          },
        },
      ],
    },
  ],
}

const targetCollegesDhaka = [
  'University of Dhaka (DU)',
  'North South University (NSU)',
  'BRAC University',
  'American International University-Bangladesh (AIUB)',
  'Independent University, Bangladesh (IUB)',
  'East West University (EWU)',
  'Daffodil International University (DIU)',
  'United International University (UIU)',
]

export default function DhakaPage() {
  return (
    <div className="bg-[#FAFDFB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dhakaSchemaJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] text-white pt-32 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-300 mb-6 backdrop-blur-md">
            <MapPin className="w-4 h-4 text-emerald-400" />
            London Head Office Direct Support for Dhaka Students
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight mb-6">
            Best UK &amp; Abroad Student Consultancy in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-200">
              Dhaka
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
            Dedicated admissions support for students from <strong>DU</strong>, <strong>NSU</strong>, <strong>BRAC</strong>, <strong>AIUB</strong>, <strong>IUB</strong>, and top colleges across Dhaka. <strong>100% free</strong> file processing, up to £10,000 scholarships, IELTS waivers via MOI, and guaranteed London job support.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/eligibility-checker"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Check Eligibility Online Free
            </Link>
            <a
              href="https://wa.me/447776181483?text=Hello%2C%20I%20am%20a%20student%20from%20Dhaka%20interested%20in%20UK%20study%20options."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-xl backdrop-blur-md transition"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              Dhaka Helpdesk WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto text-left">
            {[
              { label: 'Agency Service Fee', value: '£0 / Free', desc: 'No file opening charge' },
              { label: 'Partner Universities', value: '50+ UK', desc: 'Top British institutions' },
              { label: 'Scholarship Matching', value: 'Up to £10k', desc: 'Merit-based fee waivers' },
              { label: 'London Job Support', value: '100% Guaranteed', desc: 'On-ground career onboarding' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-sm"
              >
                <div className="text-xl sm:text-2xl font-black text-emerald-300 mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm font-bold text-white mb-0.5">{stat.label}</div>
                <div className="text-[11px] text-white/60">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Institutions */}
      <section className="py-16 bg-white border-y border-emerald-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
              Top University Representation
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
              Supporting Students from Leading Universities Across Dhaka
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {targetCollegesDhaka.map((col, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#F8FAF9] border border-emerald-100/80 flex items-center gap-3 text-sm font-semibold text-[#06241B]"
              >
                <GraduationCap className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>{col}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section className="py-12 bg-white border-t border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 text-center mb-8">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Fast Track Admission
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            Start Your Free Application from Dhaka
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Fill in your details below — our senior London team will contact you directly on WhatsApp within 24 hours.
          </p>
        </div>
        <ConsultationForm />
      </section>
    </div>
  )
}
