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
  BookOpen,
} from 'lucide-react'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'Best UK & Abroad Student Visa Consultancy in Rajshahi | Sage Roots International',
  description:
    'Looking for the best UK & abroad student visa consultancy in Rajshahi? Sage Roots International provides 100% free counseling, MOI/IELTS admissions to 139+ UK universities, up to £10,000 scholarships, and London student support for RU, RUET, Varendra & Rajshahi College graduates.',
  keywords: [
    'best student consultancy in rajshahi',
    'uk student visa consultancy in rajshahi',
    'study abroad consultancy in rajshahi',
    'study in uk from rajshahi without ielts',
    'ruet uk masters admission',
    'rajshahi university study abroad consultancy',
    'varendra university moi uk admission',
    'rajshahi to london student visa consultant',
    'best uk education consultancy rajshahi bangladesh',
    'sage roots international rajshahi',
    'best study abroad consultancy in the world',
  ],
  alternates: {
    canonical: 'https://www.sagerootsinternational.co.uk/rajshahi',
  },
  openGraph: {
    title: 'Best UK & Abroad Student Visa Consultancy in Rajshahi | Sage Roots International',
    description:
      'Direct London admissions desk for Rajshahi students. 100% free application processing, £0 agency fee, CAS deposit from £3,000, and comprehensive London housing & job onboarding.',
    url: 'https://www.sagerootsinternational.co.uk/rajshahi',
    siteName: 'Sage Roots International',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'Sage Roots International Rajshahi Student Support Desk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best UK & Abroad Student Visa Consultancy in Rajshahi | Sage Roots International',
    description:
      'Direct UK university representation for RU, RUET, and Rajshahi students with £0 agency fee.',
    images: ['/images/sri-logo.jpg'],
  },
}

const rajshahiSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      '@id': 'https://www.sagerootsinternational.co.uk/rajshahi#organization',
      name: 'Sage Roots International - Rajshahi Student Support Desk',
      url: 'https://www.sagerootsinternational.co.uk/rajshahi',
      logo: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      image: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      description:
        'The #1 UK & abroad student visa consultancy serving Rajshahi Division, RU, RUET, Varendra University, and Rajshahi College. Headquartered in London with £0 agency fees and direct university partnerships.',
      telephone: '+447776181483',
      email: 'info@sagerootsinternational.co.uk',
      priceRange: '£0 (Free Counseling & Admission)',
      currenciesAccepted: 'GBP, BDT',
      areaServed: [
        { '@type': 'City', name: 'Rajshahi' },
        { '@type': 'AdministrativeArea', name: 'Rajshahi Division' },
        { '@type': 'Country', name: 'Bangladesh' },
      ],
      sameAs: [
        'https://www.facebook.com/SageRootsInternation',
        'https://www.instagram.com/sagerootsinternational/',
      ],
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
          name: 'Regional Desks',
          item: 'https://www.sagerootsinternational.co.uk/universities',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Rajshahi Regional Desk',
          item: 'https://www.sagerootsinternational.co.uk/rajshahi',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.sagerootsinternational.co.uk/rajshahi#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can RUET and Rajshahi University (RU) graduates apply to the UK without IELTS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Graduates of RUET, University of Rajshahi (RU), and Varendra University whose undergraduate degrees were conducted in English can apply using an official Medium of Instruction (MOI) certificate with 100% IELTS waiver at top British universities.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why should students from Rajshahi choose Sage Roots International over local agents?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sage Roots International is directly headquartered in Stratford, London (44 Broadway, E15 1XH) with zero sub-agent middlemen. We charge £0 agency fee, guarantee transparent direct communication with UK university admissions teams, and provide on-ground London career and accommodation onboarding.',
          },
        },
        {
          '@type': 'Question',
          name: 'What scholarships are available for Rajshahi students in the UK?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rajshahi students can access automatic South Asia merit bursaries, Vice-Chancellor scholarships, and early-bird fee discounts ranging from £1,500 up to £10,000 depending on their academic CGPA.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do Rajshahi applicants get started?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can submit your certificates and transcripts via our online consultation form or message our London-Rajshahi WhatsApp desk at +44 7776 181483 for a free eligibility evaluation within 24 hours.',
          },
        },
      ],
    },
  ],
}

const targetCollegesRajshahi = [
  'Rajshahi University of Engineering & Technology (RUET)',
  'University of Rajshahi (RU)',
  'Varendra University',
  'Rajshahi College',
  'Rajshahi Medical College',
  'North Bengal International University (NBIU)',
  'Govt. City College Rajshahi',
  'Shah Mokhdum College Rajshahi',
]

const keyFeatures = [
  {
    icon: ShieldCheck,
    title: '£0 Processing Charge',
    desc: 'File opening and university admissions are 100% free. No hidden costs or service fees.',
  },
  {
    icon: Building2,
    title: 'Direct London Head Office Desk',
    desc: 'Headquartered at 44 Broadway, Stratford, London E15 1XH. Real UK-based senior consultants.',
  },
  {
    icon: Briefcase,
    title: 'On-Ground London Career Support',
    desc: 'Complete CV optimization, NI number support, and part-time job placement guidance upon landing.',
  },
  {
    icon: Award,
    title: 'Scholarships up to £10,000',
    desc: 'Automatic assessment for STEM, business, and humanities merit bursaries across top universities.',
  },
  {
    icon: FileCheck2,
    title: 'IELTS Waivers via MOI',
    desc: 'Graduates from RUET, RU, and Varendra University can apply directly using Medium of Instruction.',
  },
  {
    icon: Clock,
    title: 'Express Offer Letter Delivery',
    desc: 'Fast document assessment within 24 to 48 hours for upcoming January and September intakes.',
  },
]

export default function RajshahiPage() {
  return (
    <div className="bg-[#FAFDFB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rajshahiSchemaJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] text-white pt-32 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-300 mb-6 backdrop-blur-md">
            <MapPin className="w-4 h-4 text-emerald-400" />
            London Head Office Direct Desk for Rajshahi Students
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
            Best UK &amp; Abroad Student Consultancy in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-200">
              Rajshahi
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
            Direct university representation for students from <strong>RUET</strong>, <strong>University of Rajshahi (RU)</strong>, <strong>Varendra University</strong>, and <strong>Rajshahi College</strong>. <strong>100% free file processing</strong>, IELTS waivers via MOI, up to £10,000 scholarships, and dedicated London student career onboarding.
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
              href="https://wa.me/447776181483?text=Hello%2C%20I%20am%20a%20student%20from%20Rajshahi%20interested%20in%20studying%20in%20the%20UK."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-xl backdrop-blur-md transition"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              Rajshahi Helpdesk WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto text-left">
            {[
              { label: 'Agency Fee', value: '£0 / Free', desc: 'No file opening charge' },
              { label: 'UK Universities', value: '139+ Partners', desc: 'Direct British representation' },
              { label: 'Scholarships', value: 'Up to £10,000', desc: 'Automatic merit matching' },
              { label: 'London Support', value: '100% On-Ground', desc: 'Career & housing assistance' },
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

      {/* Target Institutions in Rajshahi */}
      <section className="py-16 bg-white border-y border-emerald-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
              Academic Excellence in Northern Bangladesh
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
              Supporting Students Across Rajshahi Educational Hubs
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-2">
              Graduates from RUET, RU, Varendra, and major regional colleges are eligible for fast-track UK Master’s admissions with Medium of Instruction (MOI) English waivers:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {targetCollegesRajshahi.map((col, idx) => (
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

      {/* Key Advantages */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Why We Are #1
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#06241B]">
            Why Rajshahi Students Choose Sage Roots International
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
                <feat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#06241B] mb-2">{feat.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white border-t border-emerald-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
              Rajshahi Desk FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Can RUET and Rajshahi University (RU) graduates apply to the UK without IELTS?',
                a: 'Yes! Graduates of RUET, University of Rajshahi (RU), and Varendra University whose undergraduate degrees were conducted in English can apply using an official Medium of Instruction (MOI) certificate with 100% IELTS waiver at top British universities.',
              },
              {
                q: 'Why should students from Rajshahi choose Sage Roots International over local agents?',
                a: 'Sage Roots International is directly headquartered in Stratford, London (44 Broadway, E15 1XH) with zero sub-agent middlemen. We charge £0 agency fee, guarantee transparent direct communication with UK university admissions teams, and provide on-ground London career and accommodation onboarding.',
              },
              {
                q: 'What scholarships are available for Rajshahi students in the UK?',
                a: 'Rajshahi students can access automatic South Asia merit bursaries, Vice-Chancellor scholarships, and early-bird fee discounts ranging from £1,500 up to £10,000 depending on their academic CGPA.',
              },
              {
                q: 'How do Rajshahi applicants get started?',
                a: 'You can submit your certificates and transcripts via our online consultation form or message our London-Rajshahi WhatsApp desk at +44 7776 181483 for a free eligibility evaluation within 24 hours.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#F8FAF9] border border-emerald-100">
                <h3 className="font-bold text-sm sm:text-base text-[#06241B] mb-2 flex items-start gap-2">
                  <span className="text-emerald-600 font-black">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-12 bg-[#FAFDFB] border-t border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 text-center mb-8">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Free Consultation
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            Start Your Free Application from Rajshahi
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Fill in your details below to connect directly with our London admissions team on WhatsApp.
          </p>
        </div>
        <ConsultationForm />
      </section>
    </div>
  )
}
