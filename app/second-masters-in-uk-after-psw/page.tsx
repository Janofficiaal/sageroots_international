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
  RefreshCw,
} from 'lucide-react'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'Second Master’s in UK After PSW: Switch Graduate Route to Student Visa | Sage Roots International',
  description:
    'Is your UK Graduate Route (PSW) visa expiring? Complete guide on applying for a second Master’s degree in the UK, satisfying UKVI academic progression rules, securing CAS, and switching onshore inside the UK with £0 agency fee.',
  keywords: [
    'second masters in uk after psw',
    'switch from psw to student visa uk',
    'bpp university second masters uk',
    'academic progression for second masters ukvi',
    'can i do second masters in uk after graduate visa',
    'psw expiring switch to student visa london',
    'switch graduate visa to student visa onshore',
    'sage roots international second masters',
    'best study abroad consultancy in the world',
  ],
  alternates: {
    canonical: '/second-masters-in-uk-after-psw',
  },
  openGraph: {
    title: 'Second Master’s in UK After PSW: Switch Graduate Route to Student Visa',
    description:
      'Extend your UK career legally! Switch from your expiring PSW visa to an accredited second Master’s degree onshore in the UK without returning home.',
    url: 'https://www.sagerootsinternational.co.uk/second-masters-in-uk-after-psw',
    siteName: 'Sage Roots International',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'Second Masters in UK After PSW - Sage Roots International',
      },
    ],
  },
}

const secondMastersSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://www.sagerootsinternational.co.uk/second-masters-in-uk-after-psw#article',
      headline: 'Second Master’s in UK After PSW: How to Switch Graduate Route to Student Visa Onshore',
      description:
        'A comprehensive guide for international students in the UK whose 2-year Graduate Route (PSW) visa is expiring and wish to apply for an accredited second Master’s degree onshore.',
      publisher: {
        '@type': 'EducationalOrganization',
        name: 'Sage Roots International',
        url: 'https://www.sagerootsinternational.co.uk',
        logo: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      },
      mainEntityOfPage:
        'https://www.sagerootsinternational.co.uk/second-masters-in-uk-after-psw',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.sagerootsinternational.co.uk/second-masters-in-uk-after-psw#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I apply for a second Master’s degree after my PSW expires?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Under UKVI Immigration Rules, you can apply for and switch to a Student Visa for a second Master’s degree from within the UK, provided your new course meets the Academic Progression requirement or demonstrates a deeper career specialisation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I have to return to Bangladesh or my home country to switch from PSW to a Student Visa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. As long as you submit your new Student Visa application online before your current Graduate Route (PSW) visa expires, you can switch onshore from within the UK.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which UK universities accept second Master’s applications after PSW?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'BPP University, Ulster University, Coventry University, and University of Roehampton have dedicated admissions desks and flexible CAS issuance for onshore PSW-to-Student Visa applicants.',
          },
        },
      ],
    },
  ],
}

export default function SecondMastersPage() {
  return (
    <div className="bg-[#FAFDFB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(secondMastersSchemaJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] text-white pt-32 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-300 mb-6 backdrop-blur-md">
            <RefreshCw className="w-4 h-4 text-emerald-400" />
            UK Onshore Visa Switching &amp; Career Continuity Desk
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight mb-6">
            Second Master’s in UK{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-200">
              After PSW
            </span>
            <br className="hidden sm:inline" /> (Switch Onshore Inside the UK)
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
            Is your 2-Year Graduate Route (PSW) visa coming to an end? Continue your UK journey legally by switching to an accredited second Master’s degree without returning to your home country. <strong>100% free guidance</strong> from our Stratford, London headquarters.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/eligibility-checker"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Check 2nd Master’s Eligibility
            </Link>
            <a
              href="https://wa.me/447776181483?text=Hello%2C%20my%20PSW%20is%20expiring%20and%20I%20want%20to%20apply%20for%20a%20second%20Masters%20in%20the%20UK."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-xl backdrop-blur-md transition"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              London Onshore WhatsApp Desk
            </a>
          </div>
        </div>
      </section>

      {/* Academic Progression Explained */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-100 shadow-sm">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-2">
            UKVI Compliance
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B] mb-6">
            Understanding the UKVI Academic Progression Requirement
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            Under UKVI rules, studying a second course at the same level (e.g. Master’s to Master’s, RQF Level 7) requires that the new course is connected to the previous degree, forms a deeper specialization, or supports a verified career change.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
            For instance, a student with a general <strong>MSc International Business</strong> can progress to an <strong>MSc Data Analytics &amp; AI</strong>, <strong>MSc Digital Marketing</strong>, or <strong>LLM Commercial Law</strong>. Our London team drafts your academic progression justification letter so the university issues your CAS smoothly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-emerald-50">
            <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-emerald-100/80">
              <h3 className="font-bold text-base text-[#06241B] mb-2">Switch Inside UK</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                No need to travel back home. Submit your visa application online while your current PSW is still valid.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-emerald-100/80">
              <h3 className="font-bold text-base text-[#06241B] mb-2">Work Rights Maintained</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Enjoy 20 hours/week term-time work rights and full-time employment during university holiday periods.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-emerald-100/80">
              <h3 className="font-bold text-base text-[#06241B] mb-2">Reduced Tuition Deposit</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Selected partner universities offer low initial CAS deposits starting from £3,000 with monthly installment plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section className="py-12 bg-white border-t border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 text-center mb-8">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Free Advice
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            Speak with Our Stratford, London Team
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Located at 44 Broadway, Stratford, London E15 1XH. Meet us in person or get instant advice on WhatsApp.
          </p>
        </div>
        <ConsultationForm />
      </section>
    </div>
  )
}
