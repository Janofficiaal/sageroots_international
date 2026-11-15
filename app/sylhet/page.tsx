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
  Plane,
  HeartHandshake,
} from 'lucide-react'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'Best UK & Abroad Student Visa Consultancy in Sylhet | Sage Roots International',
  description:
    'Looking for the best UK & abroad student visa consultancy in Sylhet? Sage Roots International provides 100% free counseling, MOI/IELTS admissions to 50+ UK universities, up to £10,000 scholarships, and London student community support for SUST, Leading University & Metropolitan University graduates.',
  keywords: [
    'best student consultancy in sylhet',
    'uk student visa consultancy in sylhet',
    'study abroad consultancy in sylhet',
    'study in uk from sylhet without ielts',
    'sust uk student visa consultancy',
    'leading university moi uk admission',
    'metropolitan university sylhet uk admission',
    'sylhet to london student visa consultant',
    'best uk education consultancy sylhet bangladesh',
    'sage roots international sylhet',
  ],
  alternates: {
    canonical: '/sylhet',
  },
  openGraph: {
    title: 'Best UK & Abroad Student Visa Consultancy in Sylhet | Sage Roots International',
    description:
      'Direct London admissions desk for Sylhet students. 100% free application processing, £0 agency fee, CAS deposit from £3,000, and comprehensive London housing & job onboarding.',
    url: 'https://www.sagerootsinternational.co.uk/sylhet',
    siteName: 'Sage Roots International',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'Sage Roots International Sylhet Student Support Desk',
      },
    ],
  },
}

const sylhetSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      '@id': 'https://www.sagerootsinternational.co.uk/sylhet#organization',
      name: 'Sage Roots International - Sylhet Student Support Desk',
      url: 'https://www.sagerootsinternational.co.uk/sylhet',
      logo: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      image: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      description:
        'The premier UK study abroad consultancy serving students across Sylhet Division, SUST, Leading University, and Metropolitan University. Headquartered in Stratford, London with £0 agency fees and direct diaspora student support.',
      telephone: '+447776181483',
      email: 'info@sagerootsinternational.co.uk',
      priceRange: '£0 (Free Counseling & Admission)',
      currenciesAccepted: 'GBP, BDT',
      areaServed: [
        { '@type': 'City', name: 'Sylhet' },
        { '@type': 'AdministrativeArea', name: 'Sylhet Division' },
        { '@type': 'Country', name: 'Bangladesh' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.sagerootsinternational.co.uk/sylhet#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can Sylhet students apply to UK universities without IELTS using MOI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Graduates from recognized universities in Sylhet (such as SUST, Leading University, Metropolitan University Sylhet, and Sylhet Agricultural University) can apply for UK Master’s degrees with an official Medium of Instruction (MOI) certificate without needing IELTS at several top UK institutions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why should Sylhet students choose a London-headquartered consultancy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Because Sage Roots International is headquartered in Stratford, London, we provide real-time onshore support when Sylhet students land in the UK: National Insurance (NI) guidance, student bank accounts, London student accommodation assistance, and part-time job placement guidance.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Sage Roots International charge any service or processing fees in Sylhet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Our entire admission processing, SOP drafting guidance, scholarship matching, and visa file preparation is 100% free (£0 agency fee) for all students across Sylhet and Bangladesh.',
          },
        },
      ],
    },
  ],
}

const targetCollegesSylhet = [
  'Shahjalal University of Science & Technology (SUST)',
  'Leading University (LU)',
  'Metropolitan University, Sylhet',
  'Sylhet Agricultural University (SAU)',
  'Murari Chand (MC) College, Sylhet',
  'North East University Bangladesh (NEUB)',
  'Sylhet International University (SIU)',
  'Government Women’s College, Sylhet',
]

const sylhetHighlights = [
  {
    icon: ShieldCheck,
    title: '£0 Free Processing',
    desc: 'Zero consultation fees, zero file opening charges, and direct official UK university representation.',
  },
  {
    icon: FileCheck2,
    title: 'MOI / IELTS Waiver',
    desc: 'English medium graduates from SUST and private universities in Sylhet can qualify with an MOI letter.',
  },
  {
    icon: Award,
    title: 'Up to £10,000 Scholarships',
    desc: 'Automatic assessment for academic merit bursaries and international student discounts across 50+ UK partners.',
  },
  {
    icon: HeartHandshake,
    title: 'London-Sylhet Onshore Care',
    desc: 'Direct connection to the UK Sylheti student community, airport assistance, accommodation, and part-time jobs.',
  },
]

export default function SylhetPage() {
  return (
    <div className="bg-[#FAFDFB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sylhetSchemaJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] text-white pt-32 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-300 mb-6 backdrop-blur-md">
            <MapPin className="w-4 h-4 text-emerald-400" />
            London Head Office Direct Support for Sylhet Students
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight mb-6">
            Best UK &amp; Abroad Student Consultancy in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-200">
              Sylhet
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
            Fast-track British higher education admissions for students from <strong>SUST</strong>, <strong>Leading University</strong>, <strong>Metropolitan University</strong>, and Sylhet Division. <strong>100% free</strong> application processing, MOI pathways without IELTS, and direct London student care.
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
              href="https://wa.me/447776181483?text=Hello%2C%20I%20am%20a%20student%20from%20Sylhet%20interested%20in%20UK%20study%20options."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-xl backdrop-blur-md transition"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              Sylhet Helpdesk WhatsApp
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
            Why Sylhet Students Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            From Surma to the Thames — Your Trusted London Education Desk
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sylhetHighlights.map((item, idx) => {
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
              Sylhet Academic Institutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
              Supporting Graduates from Sylhet’s Leading Colleges &amp; Universities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {targetCollegesSylhet.map((col, idx) => (
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

      {/* Sylhet FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            UK Student Admissions FAQ for Sylhet Students
          </h2>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
            <h3 className="font-bold text-sm sm:text-base text-[#06241B] mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              Can I study in the UK without IELTS from SUST or Leading University?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-6">
              Yes. If your undergraduate degree was conducted in English, you can obtain a Medium of Instruction (MOI) letter. Many of our partner UK universities accept this in place of IELTS, allowing you to secure unconditional offers and CAS smoothly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
            <h3 className="font-bold text-sm sm:text-base text-[#06241B] mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              What is the minimum CAS deposit required for UK universities?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-6">
              Initial CAS tuition deposits start from £3,000 to £5,000 depending on the university. The remaining tuition can be paid in flexible interest-free installments after arriving in the UK.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
            <h3 className="font-bold text-sm sm:text-base text-[#06241B] mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              How do you help Sylhet students once they arrive in London?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-6">
              Our Stratford London headquarters assists you with airport transfers, opening a UK bank account, National Insurance (NI) registration, student travel cards (Oyster), and vetted part-time job opportunities compliant with 20 hours/week student visa rules.
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
            Start Your Free Application from Sylhet
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
