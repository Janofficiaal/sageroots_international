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
  Anchor,
  Compass,
} from 'lucide-react'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'Best UK & Abroad Student Visa Consultancy in Chittagong | Sage Roots International',
  description:
    'Looking for the best UK & abroad student visa consultancy in Chittagong? Sage Roots International provides 100% free counseling, MOI/IELTS admissions to 50+ UK universities, up to £10,000 scholarships, and London student support for CU, CUET, Premier, IIUC & EDU graduates.',
  keywords: [
    'best student consultancy in chittagong',
    'uk student visa consultancy in chittagong',
    'study abroad consultancy in chittagong',
    'study in uk from chittagong without ielts',
    'cu uk student visa consultancy',
    'cuet uk masters admission',
    'premier university chittagong moi uk admission',
    'iiuc uk admission ielts waiver',
    'east delta university study abroad',
    'best uk education consultancy chittagong bangladesh',
    'sage roots international chittagong',
  ],
  alternates: {
    canonical: '/chittagong',
  },
  openGraph: {
    title: 'Best UK & Abroad Student Visa Consultancy in Chittagong | Sage Roots International',
    description:
      'Direct London admissions desk for Chittagong students. 100% free application processing, £0 agency fee, CAS deposit from £3,000, and comprehensive London housing & job onboarding.',
    url: 'https://www.sagerootsinternational.co.uk/chittagong',
    siteName: 'Sage Roots International',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'Sage Roots International Chittagong Student Support Desk',
      },
    ],
  },
}

const chittagongSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      '@id': 'https://www.sagerootsinternational.co.uk/chittagong#organization',
      name: 'Sage Roots International - Chittagong Student Support Desk',
      url: 'https://www.sagerootsinternational.co.uk/chittagong',
      logo: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      image: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      description:
        'The #1 UK & abroad student visa consultancy serving Chittagong Division, CU, CUET, Premier University, IIUC, and East Delta University. Headquartered in London with £0 agency fees and direct university partnerships.',
      telephone: '+447776181483',
      email: 'info@sagerootsinternational.co.uk',
      priceRange: '£0 (Free Counseling & Admission)',
      currenciesAccepted: 'GBP, BDT',
      areaServed: [
        { '@type': 'City', name: 'Chittagong' },
        { '@type': 'AdministrativeArea', name: 'Chittagong Division' },
        { '@type': 'Country', name: 'Bangladesh' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.sagerootsinternational.co.uk/chittagong#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can Chittagong university graduates apply to UK universities without IELTS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Graduates from English-medium curricula and universities in Chittagong (including Premier University, IIUC, East Delta University, and CU) can apply using a Medium of Instruction (MOI) certificate to receive unconditional offers with IELTS waivers at our partner UK universities.',
          },
        },
        {
          '@type': 'Question',
          name: 'What services does Sage Roots International provide for Chittagong students?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We provide end-to-end support with 100% free service (£0 agency fee): university course matching, fast-track offer letters, Statement of Purpose (SOP) editing, automatic scholarship evaluation, 28-day financial bank statement verification, Pre-CAS interview preparation, and London career onboarding.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I start my UK admission process from Chittagong?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Simply submit your academic certificates, transcripts, and passport copy via our online Eligibility Checker or message our senior team directly on WhatsApp (+44 7776 181483). Your eligibility assessment is completed within 24 hours.',
          },
        },
      ],
    },
  ],
}

const targetCollegesChittagong = [
  'University of Chittagong (CU)',
  'Chittagong University of Engineering & Technology (CUET)',
  'Premier University, Chittagong (PUC)',
  'International Islamic University Chittagong (IIUC)',
  'East Delta University (EDU)',
  'Port City International University (PCIU)',
  'Chittagong Independent University (CIU)',
  'Chittagong College',
]

const chittagongHighlights = [
  {
    icon: ShieldCheck,
    title: '100% Free (£0 Agency Fee)',
    desc: 'No consultation fees, file opening fees, or hidden commission. We are directly funded by UK universities.',
  },
  {
    icon: FileCheck2,
    title: 'MOI / IELTS Exemption',
    desc: 'Premier University, IIUC, and EDU graduates can qualify for UK Master’s admissions with an MOI certificate.',
  },
  {
    icon: Award,
    title: 'Up to £10,000 Scholarships',
    desc: 'Automatic evaluation for early-bird discounts, regional awards, and vice-chancellor merit scholarships.',
  },
  {
    icon: Briefcase,
    title: 'London Job & Onshore Support',
    desc: 'Direct assistance with UK NI numbers, student bank accounts, London accommodation, and 20 hrs/week part-time jobs.',
  },
]

export default function ChittagongPage() {
  return (
    <div className="bg-[#FAFDFB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chittagongSchemaJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] text-white pt-32 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-300 mb-6 backdrop-blur-md">
            <MapPin className="w-4 h-4 text-emerald-400" />
            London Head Office Direct Support for Chittagong Students
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight mb-6">
            Best UK &amp; Abroad Student Consultancy in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-200">
              Chittagong
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
            Premier British admissions and visa advisory for students from <strong>CU</strong>, <strong>CUET</strong>, <strong>Premier University</strong>, <strong>IIUC</strong>, and <strong>East Delta University</strong>. <strong>100% free</strong> file processing, MOI pathways without IELTS, and direct London student care.
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
              href="https://wa.me/447776181483?text=Hello%2C%20I%20am%20a%20student%20from%20Chittagong%20interested%20in%20UK%20study%20options."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-xl backdrop-blur-md transition"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              Chittagong Helpdesk WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto text-left">
            {[
              { label: 'Agency Service Fee', value: '£0 / Free', desc: 'No file opening charge' },
              { label: 'Partner Universities', value: '50+ UK', desc: 'Direct British partners' },
              { label: 'Scholarship Matching', value: 'Up to £10k', desc: 'Merit-based fee reductions' },
              { label: 'London Student Support', value: '100% Comprehensive', desc: 'On-ground onboarding' },
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

      {/* Key Benefits */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Why Chittagong Students Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            From the Port City to the UK — Seamless, Reliable Global Admissions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {chittagongHighlights.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base text-[#06241B] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Target Institutions */}
      <section className="py-16 bg-white border-y border-emerald-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
              Chittagong Institutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
              Supporting Graduates from Chittagong’s Top Universities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {targetCollegesChittagong.map((col, idx) => (
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

      {/* Chittagong FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            UK Student Admissions FAQ for Chittagong Students
          </h2>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
            <h3 className="font-bold text-sm sm:text-base text-[#06241B] mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              Can I apply for a UK Master’s without IELTS from Premier University or IIUC?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-6">
              Yes. If you graduated with an undergraduate degree from an English-medium curriculum, our partner universities in the UK accept an official Medium of Instruction (MOI) certificate in lieu of IELTS, with fast offer letter issuance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
            <h3 className="font-bold text-sm sm:text-base text-[#06241B] mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              What are the 28-day bank statement requirements for the UK visa in Chittagong?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-6">
              For universities outside London, you need approximately £9,207 for living costs plus remaining tuition. For London universities, you need £12,006 plus remaining tuition. The funds must be held continuously for 28 consecutive days in an accepted bank (such as Eastern Bank, Prime Bank, Standard Chartered, or BRAC Bank).
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
            <h3 className="font-bold text-sm sm:text-base text-[#06241B] mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              Do I have to pay any consultation or processing fees?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-6">
              No. Sage Roots International operates with £0 agency fees. All consultation, document assessment, SOP proofreading, and visa guidance is 100% free of charge for students.
            </p>
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
            Start Your Free Application from Chittagong
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
