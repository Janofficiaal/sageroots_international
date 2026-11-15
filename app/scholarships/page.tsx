import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertCircle, Award, CheckCircle2, ShieldCheck, Banknote } from 'lucide-react'
import EligibilityChecker from '@/components/home/EligibilityChecker'
import BankCalculator from '@/components/home/BankCalculator'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'UK University Scholarships up to £10,000 (£ GBP) & Student Finance | Sage Roots International',
  description:
    'Explore UK university scholarships up to £10,000 for international students. Check eligibility, Vice-Chancellor merit awards, early-bird fee discounts, and calculate your UKVI 28-day bank balance.',
  keywords: [
    'UK university scholarships',
    'UK scholarships for international students',
    'Vice Chancellor scholarship UK',
    'merit scholarship UK universities',
    'study in UK without IELTS scholarship',
    'UKVI 28 day bank statement calculator GBP',
    'CAS deposit discount UK',
    'best study abroad consultancy in the world',
    'UK student finance guidance',
    'scholarships for Bangladeshi students in UK',
  ],
  alternates: {
    canonical: 'https://www.sagerootsinternational.co.uk/scholarships',
  },
  openGraph: {
    title: 'UK University Scholarships up to £10,000 & Bank Calculator | Sage Roots International',
    description:
      'Assess your eligibility for up to £10,000 in British university scholarships, automatic bursaries, and calculate UKVI 28-day bank requirements with £0 agency fee.',
    url: 'https://www.sagerootsinternational.co.uk/scholarships',
    siteName: 'Sage Roots International',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'UK University Scholarships & Financial Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK University Scholarships & Financial Calculator | Sage Roots International',
    description:
      'Calculate your UK student visa financial requirements and check automatic scholarship eligibility.',
    images: ['/images/sri-logo.jpg'],
  },
}

const scholarshipsJsonLd = {
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
          name: 'Scholarships & Finance',
          item: 'https://www.sagerootsinternational.co.uk/scholarships',
        },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'UK University International Scholarships & Bursaries',
      description: 'Funding opportunities and tuition reductions available across UK partner institutions.',
      itemListElement: [
        {
          '@type': 'FinancialProduct',
          position: 1,
          name: 'Vice-Chancellor International Excellence Scholarship',
          description: 'Merit-based scholarship awarding up to £5,000 to £10,000 tuition fee discount for outstanding academic profiles.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Sage Roots International Partner Universities',
            url: 'https://www.sagerootsinternational.co.uk',
          },
        },
        {
          '@type': 'FinancialProduct',
          position: 2,
          name: 'Automatic South Asia & International Merit Award',
          description: 'Automatic £1,500 to £3,000 tuition fee reduction granted on offer letter issuance based on Bachelor or HSC CGPA.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Sage Roots International Partner Universities',
            url: 'https://www.sagerootsinternational.co.uk',
          },
        },
        {
          '@type': 'FinancialProduct',
          position: 3,
          name: 'Early Bird Tuition Payment Bursary',
          description: '£500 to £1,500 fee deduction for students paying their initial CAS deposit before published university deadlines.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Sage Roots International Partner Universities',
            url: 'https://www.sagerootsinternational.co.uk',
          },
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I apply for a UK university scholarship through Sage Roots International?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When you apply through Sage Roots International, our team automatically submits your academic profile for all eligible university merit scholarships and regional bursaries at £0 agency fee.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I receive a UK scholarship if I apply with MOI without IELTS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Most UK partner universities evaluate scholarship eligibility based on academic merit (CGPA/marks), meaning students admitted via an English Medium of Instruction (MOI) certificate remain fully eligible for merit awards.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does a scholarship affect my UKVI 28-day bank statement requirement?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Any official scholarship awarded by the university is deducted directly from the tuition balance listed on your CAS, reducing the total living and tuition funds you must show in your 28-day bank statement.',
          },
        },
      ],
    },
  ],
}

export default function ScholarshipsPage() {
  return (
    <div className="bg-[#FAFDFB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarshipsJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] py-24 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs font-semibold text-emerald-300 mb-6 backdrop-blur-md">
            <Award className="w-4 h-4 text-emerald-400" />
            Automatic Merit Scholarships &amp; Financial Assessment
          </div>
          <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl mb-4 tracking-tight">
            UK Scholarships &amp; Student Finance
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover potential scholarship opportunities up to <strong>£10,000</strong>, check your admission eligibility, and calculate your exact <strong>UKVI 28-day bank balance</strong> in GBP.
          </p>
        </div>
      </section>

      {/* Interactive Tools */}
      <EligibilityChecker />
      <BankCalculator />

      {/* Scholarship Opportunities Information */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12">
          <div className="flex items-center gap-2 text-amber-800 font-bold text-sm mb-1">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>Important Scholarship Guidance</span>
          </div>
          <p className="text-amber-700 text-xs sm:text-sm leading-relaxed">
            Scholarship availability, eligibility criteria, and award values vary by university and intake cycle. Sage Roots International provides free profile assessment and direct scholarship matching to maximize your tuition discount.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-emerald-100 rounded-2xl p-8 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h2 className="text-[#06241B] font-black text-xl mb-3">University Merit Awards</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Many British universities offer merit-based bursaries ranging from £1,000 up to £10,000 for international undergraduate and postgraduate students. Eligibility is primarily evaluated based on your prior academic performance.
            </p>
            <p className="text-gray-500 text-xs">
              Sage Roots International submits automatic scholarship appeals alongside your university application.
            </p>
          </div>

          <div className="bg-white border border-emerald-100 rounded-2xl p-8 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
              <Banknote className="w-5 h-5" />
            </div>
            <h2 className="text-[#06241B] font-black text-xl mb-3">Early Payment &amp; Regional Discounts</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Universities frequently provide early-bird incentives between £500 and £2,000 for students who confirm their offer by paying their initial CAS tuition deposit ahead of deadline.
            </p>
            <p className="text-gray-500 text-xs">
              We help you plan payment timings to lock in the lowest possible overall tuition expenditure.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#042017] to-[#073224] rounded-2xl p-8 sm:p-10 text-center text-white shadow-xl">
          <h2 className="text-white font-black text-2xl sm:text-3xl mb-3">
            Want to Maximize Your UK Scholarship?
          </h2>
          <p className="text-emerald-100/80 text-sm sm:text-base mb-6 max-w-xl mx-auto">
            Speak directly with our Stratford, London admissions desk. We review your transcripts, identify matching bursaries, and file your university application 100% free of charge.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-magenta text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-600 transition-colors text-sm shadow-lg"
          >
            Get Free Scholarship Guidance
          </Link>
        </div>
      </section>

      <ConsultationForm />
    </div>
  )
}
