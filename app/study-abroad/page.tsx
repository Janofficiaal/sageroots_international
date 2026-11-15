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
  Globe2,
  Compass,
  Plane,
} from 'lucide-react'
import { destinations } from '@/data/destinations'
import DestinationCard from '@/components/ui/DestinationCard'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'Study Abroad — Global University Admissions, Scholarships & Visas | Sage Roots International',
  description:
    'Plan your study abroad journey with Sage Roots International (sageroots international). 100% free application processing, direct admissions to 50+ UK & global universities, MOI without IELTS, scholarships up to £10,000, and London student support.',
  keywords: [
    'study abroad',
    'study abroad consultancy',
    'study abroad agency',
    'sageroots',
    'sageroots international',
    'study abroad in uk',
    'study abroad bangladesh',
    'best study abroad consultancy in the world',
    'study abroad programs',
    'study abroad scholarships',
    'study abroad without ielts',
    'overseas education consultants',
  ],
  alternates: {
    canonical: '/study-abroad',
  },
  openGraph: {
    title: 'Study Abroad — Global Admissions & Visas | Sage Roots International (sageroots)',
    description:
      'Official London-headquartered study abroad advisory (sageroots international). Free university applications, scholarships up to £10,000, and guaranteed London career support.',
    url: 'https://www.sagerootsinternational.co.uk/study-abroad',
    siteName: 'Sage Roots International',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'Study Abroad - Sage Roots International (sageroots)',
      },
    ],
  },
}

const studyAbroadSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      '@id': 'https://www.sagerootsinternational.co.uk/study-abroad#organization',
      name: 'Sage Roots International (sageroots)',
      alternateName: [
        'sageroots',
        'sageroots international',
        'sagerootsinternational',
        'SageRoots',
        'Study Abroad Agency',
      ],
      url: 'https://www.sagerootsinternational.co.uk/study-abroad',
      logo: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      image: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      description:
        'Sage Roots International (sageroots international) is a leading global study abroad consultancy headquartered in Stratford, London, providing 100% free university admissions across the UK, Cyprus, Malta, Dubai, Canada, and Australia.',
      priceRange: '£0 (Free University Application Processing)',
      telephone: '+447776181483',
      email: 'info@sagerootsinternational.co.uk',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.sagerootsinternational.co.uk/study-abroad#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why is Sage Roots International (sageroots) considered the best study abroad consultancy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sage Roots International is headquartered in Stratford, London, providing students with direct, fee-free (£0 agency fee) admissions to over 50 top universities, automatic scholarship evaluations up to £10,000, Medium of Instruction (MOI) options without IELTS, and dedicated on-ground London career and job support.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I study abroad without IELTS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! International and Bangladeshi students who graduated from English-medium curricula can study abroad in the UK and European universities using an official Medium of Instruction (MOI) certificate, or take free university-administered internal English tests.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which countries can I study abroad in through Sage Roots International?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We represent institutions across the United Kingdom, Cyprus, Malta (Schengen Area), Dubai (United Arab Emirates), Australia, Canada, Germany, Ireland, New Zealand, and the United States.',
          },
        },
      ],
    },
  ],
}

export default function StudyAbroadPillarPage() {
  return (
    <div className="bg-[#FAFDFB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(studyAbroadSchemaJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] text-white pt-32 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-300 mb-6 backdrop-blur-md">
            <Globe2 className="w-4 h-4 text-emerald-400" />
            Sage Roots International (sageroots) — Global Education Advisory
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight mb-6">
            Study Abroad with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-200">
              Sage Roots International
            </span>
            <br className="hidden sm:inline" /> (sageroots international)
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
            Your gateway to world-class higher education in the UK, Europe, UAE, and North America. <strong>100% free</strong> application processing, MOI admissions without IELTS, up to £10,000 scholarships, and full London onboarding.
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
              href="https://wa.me/447776181483?text=Hello%20Sage%20Roots%2C%20I%20want%20to%20apply%20to%20study%20abroad."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-xl backdrop-blur-md transition"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              WhatsApp London Desk
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto text-left">
            {[
              { label: 'Agency Fee', value: '£0 / Free', desc: 'No service or file charges' },
              { label: 'Partner Universities', value: '50+ UK & Global', desc: 'Direct university contracts' },
              { label: 'Scholarship Grants', value: 'Up to £10k', desc: 'Automatic merit matching' },
              { label: 'London Job Support', value: '100% Guaranteed', desc: 'Stratford, London desk' },
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

      {/* Featured Destinations Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-2">
            Global Destinations
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#06241B]">
            Where Do You Want to Study Abroad?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-2">
            Explore world-renowned study abroad destinations with top-ranked universities, post-study work (PSW) visas, and high employability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* Why Sage Roots International (sageroots) */}
      <section className="py-16 bg-[#F4F9F6] border-y border-emerald-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
              Why Choose sageroots international
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
              The Sage Roots International Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
              <ShieldCheck className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="font-bold text-lg text-[#06241B] mb-2">100% Free Service (£0 Fee)</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                We are officially funded and contracted by British and global universities. Students never pay any consultancy, assessment, or file opening charges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
              <FileCheck2 className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="font-bold text-lg text-[#06241B] mb-2">Study Abroad Without IELTS</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Save time and test fees with Medium of Instruction (MOI) waivers and free online university-administered English assessments for eligible graduates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
              <Briefcase className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="font-bold text-lg text-[#06241B] mb-2">London Onshore Career Desk</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                When you land in London, our Stratford team helps you with National Insurance, UK bank accounts, student housing, and compliant part-time job placements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Navigation To Cornerstone Guides */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Essential Guides
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            Key Study Abroad Admission Resources
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/study-in-uk-without-ielts-moi-accepted-universities"
            className="p-6 rounded-2xl bg-white border border-emerald-100 hover:border-emerald-300 shadow-sm hover:shadow-md transition group"
          >
            <div className="text-xs font-bold uppercase text-emerald-600 mb-1">Cornerstone Guide</div>
            <h3 className="text-base font-bold text-[#06241B] group-hover:text-emerald-700 mb-2">
              Study in UK Without IELTS: MOI Accepted Universities &rarr;
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Complete list of UK universities that accept Medium of Instruction letters from Bangladeshi and international universities.
            </p>
          </Link>

          <Link
            href="/uk-student-visa-bank-statement-guide-28-day-rule"
            className="p-6 rounded-2xl bg-white border border-emerald-100 hover:border-emerald-300 shadow-sm hover:shadow-md transition group"
          >
            <div className="text-xs font-bold uppercase text-emerald-600 mb-1">Visa Compliance</div>
            <h3 className="text-base font-bold text-[#06241B] group-hover:text-emerald-700 mb-2">
              UK Student Visa Bank Statement &amp; 28-Day Rule Guide &rarr;
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Step-by-step financial requirements, accepted banks in Bangladesh, living costs in and outside London, and 28-day holding rules.
            </p>
          </Link>
        </div>
      </section>

      {/* Consultation */}
      <section className="py-12 bg-white border-t border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 text-center mb-8">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Free Consultation
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            Begin Your Study Abroad Journey with Sage Roots International
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Fill in your details below — our London admissions team will assess your profile and contact you within 24 hours.
          </p>
        </div>
        <ConsultationForm />
      </section>
    </div>
  )
}
