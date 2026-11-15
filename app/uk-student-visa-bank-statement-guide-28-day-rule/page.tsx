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
  AlertTriangle,
  Landmark,
  Calculator,
  Calendar,
} from 'lucide-react'
import ConsultationForm from '@/components/home/ConsultationForm'
import InteractiveVisaChecklist from '@/components/home/InteractiveVisaChecklist'

export const metadata: Metadata = {
  title: 'UK Student Visa Bank Statement Guide: 28-Day Rule & Maintenance Funds | Sage Roots International',
  description:
    'Complete guide to UK Student Visa bank statement and 28-day rule requirements for international students. Learn exact living cost formulas for London and outside London, acceptable banks in Bangladesh, sponsorship rules, and visa compliance.',
  keywords: [
    'uk student visa bank statement',
    '28 day rule uk student visa',
    'ukvi financial requirements international students',
    'uk student visa maintenance funds',
    'bank balance needed for uk visa bangladesh',
    'acceptable banks in bangladesh for uk visa',
    'london vs outside london student living cost',
    'parent bank statement for uk student visa',
    'sage roots international bank statement guide',
    'best study abroad consultancy in the world',
  ],
  alternates: {
    canonical: '/uk-student-visa-bank-statement-guide-28-day-rule',
  },
  openGraph: {
    title: 'UK Student Visa Bank Statement Guide: 28-Day Rule & Maintenance Funds',
    description:
      'Avoid UK visa refusal! Master the UKVI 28-day bank statement calculation, accepted banks in Bangladesh, living costs in & outside London, and parent sponsorship rules.',
    url: 'https://www.sagerootsinternational.co.uk/uk-student-visa-bank-statement-guide-28-day-rule',
    siteName: 'Sage Roots International',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'UK Student Visa Bank Statement Guide - Sage Roots International',
      },
    ],
  },
}

const bankGuideSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://www.sagerootsinternational.co.uk/uk-student-visa-bank-statement-guide-28-day-rule#article',
      headline: 'UK Student Visa Bank Statement Guide: 28-Day Rule & Maintenance Funds Calculation',
      description:
        'A comprehensive guide explaining the UKVI 28-day financial requirement, living cost amounts for London vs outside London, accepted banks in Bangladesh, and sponsorship rules.',
      publisher: {
        '@type': 'EducationalOrganization',
        name: 'Sage Roots International',
        url: 'https://www.sagerootsinternational.co.uk',
        logo: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      },
      mainEntityOfPage:
        'https://www.sagerootsinternational.co.uk/uk-student-visa-bank-statement-guide-28-day-rule',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.sagerootsinternational.co.uk/uk-student-visa-bank-statement-guide-28-day-rule#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the 28-day rule for the UK Student Visa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Under UKVI rules, the required maintenance funds (remaining tuition fees + living costs) must be held in the accepted bank account continuously for at least 28 consecutive days without dropping below the minimum required balance even by 1 Pound or 1 Taka. The bank statement must be dated within 31 days of your visa application submission date.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much living cost is required for UK Student Visa in London vs outside London?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For courses in London (Inner & Outer London boroughs), UKVI requires £1,334 per month up to 9 months (£12,006 total). For courses outside London, UKVI requires £1,023 per month up to 9 months (£9,207 total). You must also add any outstanding tuition fees not yet paid to your university.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which banks in Bangladesh are accepted by UKVI for student visas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Commercial scheduled banks that provide online verification and meet UKVI standard verification criteria are accepted. These include Standard Chartered Bank, HSBC, Eastern Bank PLC (EBL), BRAC Bank, Prime Bank, The City Bank, Dutch-Bangla Bank, Mutual Trust Bank, Dhaka Bank, and Trust Bank.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use my parents’ bank statement for my UK visa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! You can use bank accounts held in the name of your biological father, mother, or legal guardian. You must provide your official government birth certificate, an affidavit of financial sponsorship, and a signed parental consent letter authorizing the funds for your education.',
          },
        },
      ],
    },
  ],
}

export default function BankStatementGuidePage() {
  return (
    <div className="bg-[#FAFDFB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bankGuideSchemaJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] text-white pt-32 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-300 mb-6 backdrop-blur-md">
            <Landmark className="w-4 h-4 text-emerald-400" />
            UKVI Visa Compliance &amp; Financial Evidence
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight mb-6">
            UK Student Visa{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-200">
              Bank Statement Guide
            </span>
            <br className="hidden sm:inline" /> &amp; The 28-Day Rule
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
            Avoid UK visa refusals. Learn the exact calculation formula for London vs outside London maintenance funds, acceptable commercial banks in Bangladesh, sponsorship requirements, and timing rules.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/eligibility-checker"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              Calculate Your Funds Online
            </Link>
            <a
              href="https://wa.me/447776181483?text=Hello%2C%20I%20need%20help%20verifying%20my%20UK%20student%20visa%20bank%20statement."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-xl backdrop-blur-md transition"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              Free Bank Statement Check on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Financial Formula Cards */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Exact UKVI Formula
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            How Much Money Do You Need in Your Bank Account?
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-2">
            The required amount is calculated using a straightforward UKVI formula:
            <br />
            <strong>Total Funds = Outstanding Course Tuition Fee + Living Expenses (up to 9 months)</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* London */}
          <div className="bg-white rounded-3xl p-8 border-2 border-emerald-500/30 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl">
              Inside London Campuses
            </div>
            <h3 className="text-xl font-black text-[#06241B] mb-4">Studying in London</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center py-2 border-b border-gray-100 text-sm">
                <span className="text-gray-600">Monthly Living Allowance:</span>
                <span className="font-bold text-[#06241B]">£1,334 / month</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100 text-sm">
                <span className="text-gray-600">Maximum Duration (9 months):</span>
                <span className="font-bold text-emerald-700 text-base">£12,006</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100 text-sm">
                <span className="text-gray-600">Plus Remaining Tuition:</span>
                <span className="font-semibold text-gray-700">Course fee minus CAS deposit</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed bg-emerald-50/60 p-4 rounded-xl border border-emerald-100">
              Applies to universities located in Greater London, including Stratford, Greenwich, Bloomsbury, Croydon, and Central London campuses.
            </p>
          </div>

          {/* Outside London */}
          <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#073224] text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-xl">
              Outside London Campuses
            </div>
            <h3 className="text-xl font-black text-[#06241B] mb-4">Studying Outside London</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center py-2 border-b border-gray-100 text-sm">
                <span className="text-gray-600">Monthly Living Allowance:</span>
                <span className="font-bold text-[#06241B]">£1,023 / month</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100 text-sm">
                <span className="text-gray-600">Maximum Duration (9 months):</span>
                <span className="font-bold text-emerald-700 text-base">£9,207</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100 text-sm">
                <span className="text-gray-600">Plus Remaining Tuition:</span>
                <span className="font-semibold text-gray-700">Course fee minus CAS deposit</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-200">
              Applies to universities in Manchester, Birmingham, Leeds, Portsmouth, Leicester, Scotland, Wales, and Northern Ireland.
            </p>
          </div>
        </div>
      </section>

      {/* The 28-Day & 31-Day Rule Deep-Dive */}
      <section className="py-16 bg-[#F4F9F6] border-y border-emerald-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
              Timing &amp; Deadlines
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
              Understanding the 28-Day and 31-Day Timing Rules
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-emerald-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-emerald-600" />
                <h3 className="font-bold text-lg text-[#06241B]">The 28 Consecutive Days Rule</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                The total calculated maintenance funds must be in the account for a full <strong>28 consecutive days</strong>. The balance must never fall below the threshold for even one second during this period.
              </p>
              <p className="text-xs text-amber-700 bg-amber-50 p-3 rounded-xl border border-amber-200 font-medium">
                Warning: If the closing balance drops by even 1 BDT or £1 due to bank service charges or taxes, the 28-day clock resets to Day 1!
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-emerald-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-emerald-600" />
                <h3 className="font-bold text-lg text-[#06241B]">The 31-Day Statement Rule</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                The date of the closing balance on your bank statement must not be older than <strong>31 days</strong> from the date you pay and submit your online UKVI visa application.
              </p>
              <p className="text-xs text-emerald-800 bg-emerald-50 p-3 rounded-xl border border-emerald-200 font-medium">
                Example: If you submit your visa fee on 15 November, your bank statement closing date cannot be earlier than 15 October.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Visa & Bank Statement Checklist Tool */}
      <InteractiveVisaChecklist />

      {/* Acceptable Banks in Bangladesh */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Approved Financial Institutions
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            Acceptable Commercial Banks in Bangladesh
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto mt-2">
            UKVI requires that the bank uses electronic verification and is regulated by Bangladesh Bank. The following scheduled commercial banks are widely accepted:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            'Standard Chartered Bank',
            'HSBC Bangladesh',
            'Eastern Bank PLC (EBL)',
            'BRAC Bank PLC',
            'The City Bank PLC',
            'Prime Bank PLC',
            'Mutual Trust Bank (MTB)',
            'Dutch-Bangla Bank (DBBL)',
            'Dhaka Bank Limited',
            'Trust Bank Limited',
            'Southeast Bank PLC',
            'Pubali Bank Limited',
          ].map((bank, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-emerald-100 shadow-sm flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#06241B]"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{bank}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Common Mistakes to Avoid */}
      <section className="py-16 bg-white border-t border-emerald-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-red-600 font-bold text-xs uppercase tracking-widest block mb-1">
              Visa Refusal Prevention
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
              Top 4 Bank Statement Mistakes That Cause UK Visa Refusals
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                title: '1. Bank charges causing a balance dip',
                desc: 'Students often calculate the exact amount without buffer funds. An SMS charge or annual card maintenance fee reduces the balance by 200 BDT, resetting the 28-day countdown.',
              },
              {
                title: '2. Using non-approved funds (shares, land, pensions, gold)',
                desc: 'UKVI strictly requires liquid cash in a personal savings or current account. Fixed deposits (FDR) are only accepted if the certificate states funds can be liquidated immediately without penalty.',
              },
              {
                title: '3. Third-party sponsorship (uncles, cousins, companies)',
                desc: 'Only funds held in your own name or your biological parents’ names are accepted. Uncle, brother, in-law, or corporate accounts will lead to direct visa refusal.',
              },
              {
                title: '4. Missing official bank solvency letter and stamp',
                desc: 'The bank statement must carry official bank branch stamps, an authorized officer signature, and be accompanied by a formal Bank Solvency Certificate.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-red-50/50 border border-red-100 flex gap-4">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#06241B] mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section className="py-12 bg-white border-t border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 text-center mb-8">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Free Financial Audit
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            Have Your Bank Statement Reviewed Before CAS Issuance
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Send your statement details for a free, confidential audit by our UKVI compliance experts.
          </p>
        </div>
        <ConsultationForm />
      </section>
    </div>
  )
}
