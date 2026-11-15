import type { Metadata } from 'next'
import Link from 'next/link'
import {
  History,
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
  Calendar,
} from 'lucide-react'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'Study in UK with Study Gap (5 to 10+ Years Accepted) | Sage Roots International',
  description:
    'Can you study in the UK with a study gap? Yes! Learn which UK universities accept 5 to 10+ years academic gap for Master’s degrees, how to justify study gaps with professional work experience, and get 100% free visa guidance.',
  keywords: [
    'study in uk with study gap',
    'how much study gap accepted in uk for masters',
    '5 to 8 years study gap accepted uk universities',
    '10 years study gap uk student visa',
    'study gap justification uk student visa',
    'work experience for study gap in uk',
    'study in uk after 5 years gap',
    'study in uk after 10 years gap',
    'sage roots international study gap',
    'best study abroad consultancy in the world',
  ],
  alternates: {
    canonical: '/study-in-uk-with-study-gap-accepted-universities',
  },
  openGraph: {
    title: 'Study in UK with Study Gap (5 to 10+ Years Accepted) | Sage Roots International',
    description:
      'Have an academic study gap of 5, 8, or 10+ years? Learn how professional work experience qualifies you for direct UK Master’s admissions without visa risk.',
    url: 'https://www.sagerootsinternational.co.uk/study-in-uk-with-study-gap-accepted-universities',
    siteName: 'Sage Roots International',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'Study in UK with Study Gap Guide - Sage Roots International',
      },
    ],
  },
}

const studyGapSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://www.sagerootsinternational.co.uk/study-in-uk-with-study-gap-accepted-universities#article',
      headline: 'Study in UK with Study Gap: How 5 to 10+ Years Gaps Are Accepted by UK Universities',
      description:
        'A complete guide explaining how international students with 2 to 10+ years of academic study gaps can secure unconditional UK university offers and student visas using verified work experience.',
      publisher: {
        '@type': 'EducationalOrganization',
        name: 'Sage Roots International',
        url: 'https://www.sagerootsinternational.co.uk',
        logo: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      },
      mainEntityOfPage:
        'https://www.sagerootsinternational.co.uk/study-in-uk-with-study-gap-accepted-universities',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.sagerootsinternational.co.uk/study-in-uk-with-study-gap-accepted-universities#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does UKVI have an official limit on study gaps?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. UK Visas & Immigration (UKVI) has no statutory maximum limit on study gaps. As long as the applicant can provide evidence of genuine intent (GTE), an official CAS from a licensed UK sponsor, and evidence of what they did during the gap (such as professional employment, business ownership, or family care), study gaps of 5, 8, or 10+ years are routinely accepted.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I prove my activities during an academic study gap?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can provide official appointment letters, employment contracts, salary bank statements, experience certificates, or trade licenses/business documents. Sage Roots International assists students in structuring a compliant academic CV and SOP that explains the career progression seamlessly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which UK universities are flexible with study gaps?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Partner universities including Ulster University, BPP University, Coventry University, University of Hertfordshire, and University of Roehampton accept mature applicants with substantial professional work experience.',
          },
        },
      ],
    },
  ],
}

export default function StudyGapUniversitiesPage() {
  return (
    <div className="bg-[#FAFDFB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(studyGapSchemaJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] text-white pt-32 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-300 mb-6 backdrop-blur-md">
            <History className="w-4 h-4 text-emerald-400" />
            UK University Admissions for Mature &amp; Experienced Applicants
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight mb-6">
            Study in UK with a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-200">
              Study Gap
            </span>
            <br className="hidden sm:inline" /> (5 to 10+ Years Accepted)
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
            An academic gap is not a barrier to studying in the UK. Learn how to convert your professional work experience into a competitive advantage for UK Master’s admissions and student visa approval with <strong>100% free guidance</strong>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/eligibility-checker"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Check Study Gap Eligibility Free
            </Link>
            <a
              href="https://wa.me/447776181483?text=Hello%2C%20I%20have%20a%20study%20gap%20and%20want%20to%20apply%20for%20a%20UK%20Masters."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-xl backdrop-blur-md transition"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              WhatsApp Study Gap Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Gap Rules Breakdown */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-100 shadow-sm">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-2">
            Visa &amp; Admissions Policy
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B] mb-6">
            How UK Universities Evaluate Academic Gaps
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            In British higher education, professional experience is highly valued. Unlike some countries that reject applicants with gaps, the UK welcomes mature learners who have gained industry skills and are returning to university to upskill for managerial and executive roles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-emerald-50">
            <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-emerald-100/80">
              <h3 className="font-bold text-base text-[#06241B] mb-2">2 – 5 Years Gap</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Accepted by virtually all UK universities. Requires standard CV and employment reference letters.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-emerald-100/80">
              <h3 className="font-bold text-base text-[#06241B] mb-2">5 – 8 Years Gap</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Accepted by most career-focused universities with evidence of professional career progression and an aligned SOP.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-emerald-100/80">
              <h3 className="font-bold text-base text-[#06241B] mb-2">8 – 12+ Years Gap</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Routinely accepted for Global MBA, Executive Master’s, and specialized MSc degrees when accompanied by salary proof and experience certificates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-[#F4F9F6] border-y border-emerald-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
              Document Checklist
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
              Documents Required to Justify a Study Gap
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                title: 'Official Experience Letter',
                desc: 'On company letterhead stating job title, duties, and dates.',
              },
              {
                title: 'Salary Bank Statement',
                desc: 'Bank statement or pay slips showing compensation deposits.',
              },
              {
                title: 'Updated Chronological CV',
                desc: 'Detailed monthly breakdown of work history with zero gaps.',
              },
              {
                title: 'Career Progression SOP',
                desc: 'Explanation of how the UK Master’s degree accelerates your career.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-3" />
                <h4 className="font-bold text-sm text-[#06241B] mb-1">{item.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section className="py-12 bg-white border-t border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 text-center mb-8">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Free Evaluation
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            Have Your Study Gap Profile Assessed
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Send your graduation year and work experience summary — our London admissions counselors will evaluate your eligibility for free.
          </p>
        </div>
        <ConsultationForm />
      </section>
    </div>
  )
}
