import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Calendar,
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
  AlertCircle,
} from 'lucide-react'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'UK January 2027 Intake: Universities, Courses & Application Deadlines | Sage Roots International',
  description:
    'Complete guide to UK January 2027 intake. Discover British universities accepting applications right now, course options with MOI or IELTS, CAS deposit deadlines, and £0 free agency processing from London.',
  keywords: [
    'uk january 2027 intake universities',
    'january 2027 intake deadline uk',
    'apply for january 2027 intake in uk',
    'january 2027 intake without ielts',
    'uk university intakes 2027',
    'fast track cas january 2027 uk',
    'january 2027 masters in uk',
    'sage roots international january 2027',
    'best study abroad consultancy in the world',
  ],
  alternates: {
    canonical: '/uk-january-2027-intake-universities-deadlines',
  },
  openGraph: {
    title: 'UK January 2027 Intake: Universities, Courses & Application Deadlines',
    description:
      'Fast-track your UK university admission for the January 2027 intake. Deadlines, courses without IELTS (MOI), CAS deposits from £3,000, and up to £10,000 scholarships.',
    url: 'https://www.sagerootsinternational.co.uk/uk-january-2027-intake-universities-deadlines',
    siteName: 'Sage Roots International',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'UK January 2027 Intake Guide - Sage Roots International',
      },
    ],
  },
}

const jan2027SchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://www.sagerootsinternational.co.uk/uk-january-2027-intake-universities-deadlines#article',
      headline: 'UK January 2027 Intake: Universities, Courses & Application Deadlines',
      description:
        'A comprehensive guide listing UK universities offering admissions for the January 2027 academic intake, key application deadlines, CAS processing timelines, and visa rules.',
      publisher: {
        '@type': 'EducationalOrganization',
        name: 'Sage Roots International',
        url: 'https://www.sagerootsinternational.co.uk',
        logo: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      },
      mainEntityOfPage:
        'https://www.sagerootsinternational.co.uk/uk-january-2027-intake-universities-deadlines',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.sagerootsinternational.co.uk/uk-january-2027-intake-universities-deadlines#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the application deadline for the UK January 2027 intake?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Application deadlines vary by university, typically falling between late October and early December. CAS issuance deadlines are generally mid-December to allow sufficient time for 28-day bank statement maturity and visa processing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I apply for the January 2027 intake without IELTS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Several prominent UK universities accept Medium of Instruction (MOI) certificates from recognized institutions or provide free university-administered internal English interviews.',
          },
        },
        {
          '@type': 'Question',
          name: 'How quickly can I get an offer letter for January 2027?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Through Sage Roots International’s fast-track university partnerships, students can receive conditional or unconditional offer letters within 48 to 72 hours of complete document submission.',
          },
        },
      ],
    },
  ],
}

export default function January2027IntakePage() {
  return (
    <div className="bg-[#FAFDFB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jan2027SchemaJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] text-white pt-32 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-300 mb-6 backdrop-blur-md">
            <Calendar className="w-4 h-4 text-emerald-400" />
            Active UK Enrollment Cycle
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight mb-6">
            UK{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-200">
              January 2027 Intake
            </span>
            <br className="hidden sm:inline" /> Universities, Deadlines &amp; Fast-Track CAS
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
            Do not wait for autumn. Fast-track your UK Master’s or Bachelor’s degree in the <strong>January 2027 intake</strong>. Direct admissions with MOI or IELTS, CAS deposits from £3,000, scholarships up to £10,000, and <strong>100% free application support</strong>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/eligibility-checker"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Check Jan 2027 University Options Free
            </Link>
            <a
              href="https://wa.me/447776181483?text=Hello%2C%20I%20want%20to%20apply%20for%20the%20UK%20January%202027%20intake."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-xl backdrop-blur-md transition"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              WhatsApp Jan 2027 Helpdesk
            </a>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Deadlines &amp; Roadmap
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            January 2027 Intake Timeline
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: 'Step 1',
              time: 'October – November',
              title: 'Application & Offer',
              desc: 'Submit transcripts and passport for fast-track 48-hour offer letter issuance.',
            },
            {
              step: 'Step 2',
              time: 'November',
              title: 'MOI / English Clearance',
              desc: 'Provide MOI letter or pass free university online English interview.',
            },
            {
              step: 'Step 3',
              time: 'November – December',
              title: 'Pre-CAS & Deposit',
              desc: 'Pass 1-on-1 Pre-CAS mock training and transfer initial tuition deposit.',
            },
            {
              step: 'Step 4',
              time: 'December – January',
              title: 'Visa & Departure',
              desc: 'File UK Student Visa with 28-day bank funds and land in the UK for welcome week.',
            },
          ].map((s, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md inline-block mb-2">
                {s.time}
              </span>
              <h3 className="font-bold text-base text-[#06241B] mb-2">{s.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation */}
      <section className="py-12 bg-white border-t border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 text-center mb-8">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Fast Track
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            Apply for January 2027 Today
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Seats are filling fast. Submit your application below for priority processing by our London team.
          </p>
        </div>
        <ConsultationForm />
      </section>
    </div>
  )
}
