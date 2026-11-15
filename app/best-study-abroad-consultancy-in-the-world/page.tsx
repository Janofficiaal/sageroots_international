import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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
} from 'lucide-react'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'Best Study Abroad Consultancy in the World | Sage Roots International (London)',
  description:
    'Looking for the best study abroad consultancy in the world? Headquartered in London, Sage Roots International provides 100% free counseling, MOI/IELTS admissions to 50+ UK universities, up to £10,000 scholarships, and guaranteed London job support for international students worldwide.',
  keywords: [
    'best study abroad consultancy in the world',
    'best study abroad agency in the world',
    'top study abroad consultancy in the world',
    'world best education consultancy for UK',
    'best overseas education consultants in the world',
    'best international student visa agency',
    'top study abroad agency London worldwide',
    'best higher education consultancy for uk',
    'global overseas student consultants',
    'study abroad without ielts consultancy',
    'best uk university admission consultants in the world',
  ],
  alternates: {
    canonical: '/best-study-abroad-consultancy-in-the-world',
  },
  openGraph: {
    title: 'Best Study Abroad Consultancy in the World | Sage Roots International',
    description:
      'Official London-headquartered global education consultancy. 100% free university application processing, £0 agency fee, CAS deposits from £3,000, and on-ground London job support.',
    url: 'https://www.sagerootsinternational.co.uk/best-study-abroad-consultancy-in-the-world',
    siteName: 'Sage Roots International',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'Sage Roots International - Best Study Abroad Consultancy in the World',
      },
    ],
  },
}

const pageSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      '@id': 'https://www.sagerootsinternational.co.uk/best-study-abroad-consultancy-in-the-world#organization',
      name: 'Sage Roots International',
      alternateName: 'Best Study Abroad Consultancy in the World',
      url: 'https://www.sagerootsinternational.co.uk/best-study-abroad-consultancy-in-the-world',
      logo: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      image: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      description:
        'Ranked among the best study abroad consultancies in the world. Headquartered in Stratford, London, providing 100% free UK & international university admissions, scholarship matching, UKVI student visa guidance, and on-ground student career support.',
      telephone: '+447776181483',
      email: 'info@sagerootsinternational.co.uk',
      priceRange: '£0 (Free University Application Processing)',
      currenciesAccepted: 'GBP, USD, EUR, BDT',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '44 Broadway, Stratford',
        addressLocality: 'London',
        postalCode: 'E15 1XH',
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.5416,
        longitude: -0.0022,
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Worldwide' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Bangladesh' },
        { '@type': 'Country', name: 'India' },
        { '@type': 'Country', name: 'Nigeria' },
        { '@type': 'Country', name: 'Pakistan' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.sagerootsinternational.co.uk/best-study-abroad-consultancy-in-the-world#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Which is the best study abroad consultancy in the world for UK university admissions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sage Roots International is widely recognized as one of the best study abroad consultancies in the world for UK university admissions. Headquartered in Stratford, London (44 Broadway, E15 1XH), we offer 100% free university application processing, direct representation of 50+ British universities, MOI admissions without IELTS, up to £10,000 in scholarships, and verified on-ground student job placement in London.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why should international students choose a London-headquartered consultancy over local agents?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Local agents often charge exorbitant broker fees, have limited university contracts, and cannot assist students once they land abroad. Sage Roots International operates directly from London with registered British advisors, charges £0 agency fee, communicates directly with university admission boards, and provides essential post-landing welfare such as NI Number registration, UK bank account setup, and part-time jobs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can students apply without IELTS using Medium of Instruction (MOI)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! If your previous bachelor or diploma was taught in English, you qualify for Medium of Instruction (MOI) waivers at leading UK universities including BPP University, Ulster University, and others, eliminating the need to take IELTS.',
          },
        },
        {
          '@type': 'Question',
          name: 'What services are included in the £0 free application processing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our 100% free service includes personalized academic profile assessment, university and course matching, SOP & CV editing, scholarship assessment up to £10,000, 1-on-1 Pre-CAS mock credibility interview training, UKVI visa application filing, and London arrival orientation.',
          },
        },
      ],
    },
  ],
}

const keyPillars = [
  {
    icon: ShieldCheck,
    title: '£0 Free Application Processing',
    desc: 'Zero agency fees, zero file opening charges, and zero hidden costs. Complete university admissions support at 100% no charge.',
  },
  {
    icon: Building2,
    title: 'Direct London Head Office',
    desc: 'Located at 44 Broadway, Stratford, London E15 1XH. You work directly with genuine UK-based advisors and authorized university representatives.',
  },
  {
    icon: Award,
    title: 'Up to £10,000 Scholarships',
    desc: 'Automatic merit scholarship matching, early payment bursaries, and Vice-Chancellor fee reductions across leading UK universities.',
  },
  {
    icon: FileCheck2,
    title: 'IELTS Waivers via MOI',
    desc: 'Fast-track your Master’s or Bachelor’s using your English Medium of Instruction (MOI) certificate with zero IELTS requirements.',
  },
  {
    icon: Briefcase,
    title: '100% London Job Support',
    desc: 'Upon landing in London, our on-ground team assists with National Insurance Numbers, UK CV formatting, and part-time job placement.',
  },
  {
    icon: Clock,
    title: 'Express Offer Letters & CAS',
    desc: 'Direct university admission desk pipelines ensure fast-track document assessment within 24 to 48 hours for upcoming intakes.',
  },
]

const destinationsList = [
  { name: 'United Kingdom', flag: '🇬🇧', tag: 'Primary Hub (50+ Unis)' },
  { name: 'Cyprus (EU)', flag: '🇨🇾', tag: 'Affordable EU Tuition' },
  { name: 'Malta (Schengen)', flag: '🇲🇹', tag: 'English Speaking EU' },
  { name: 'Dubai (UAE)', flag: '🇦🇪', tag: 'Fast-Track UK Degrees' },
  { name: 'Australia', flag: '🇦🇺', tag: 'PSW Career Rights' },
  { name: 'Canada', flag: '🇨🇦', tag: 'Top Research Institutions' },
  { name: 'United States', flag: '🇺🇸', tag: 'STEM & Ivy Pathways' },
  { name: 'Germany & Europe', flag: '🇩🇪', tag: 'Low Tuition Options' },
]

export default function BestStudyAbroadConsultancyPage() {
  return (
    <div className="bg-[#FAFDFB]">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchemaJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] text-white pt-32 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-300 mb-6 backdrop-blur-md">
            <Globe2 className="w-4 h-4 text-emerald-400" />
            Ranked Among the Best Study Abroad Consultancies in the World
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight mb-6">
            Best Study Abroad Consultancy{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-200">
              in the World
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
            Headquartered at <strong>44 Broadway, Stratford, London E15 1XH</strong>. Sage Roots International provides students worldwide with <strong>100% free</strong> university admissions, direct representation of 50+ UK universities, MOI without IELTS, up to £10,000 in scholarships, and guaranteed on-ground student job placement.
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
              href="https://wa.me/447776181483?text=Hello%2C%20I%20would%20like%20to%20consult%20with%20Sage%20Roots%20International%20regarding%20study%20abroad%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-xl backdrop-blur-md transition"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              WhatsApp London Desk (+44 7776 181483)
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto text-left">
            {[
              { label: 'Agency Service Fee', value: '£0 / Free', desc: 'Zero file opening or agency fee' },
              { label: 'Partner Universities', value: '50+ UK', desc: 'Direct UK institutional contracts' },
              { label: 'Visa Success Rate', value: '98.4%', desc: 'Strict UKVI compliance auditing' },
              { label: 'London Job Support', value: '100% Guaranteed', desc: 'On-ground assistance upon arrival' },
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

      {/* Why We Are Rated #1 in the World */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-emerald-700 font-bold text-xs uppercase tracking-widest mb-2">
            The Global Standard in Education Advisory
          </p>
          <h2 className="text-2xl sm:text-4xl font-black text-[#06241B]">
            Why Students Worldwide Trust Sage Roots International
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3">
            Say goodbye to overseas sub-agents and hidden charges. Work directly with genuine UK-based advisors committed to your academic and professional success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyPillars.map((p, i) => {
            const Icon = p.icon
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#073224] flex items-center justify-center mb-5 ring-1 ring-emerald-200">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#06241B] mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Worldwide Destinations */}
      <section className="py-16 bg-white border-y border-emerald-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
              Global Study Portfolios
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
              Top Study Abroad Destinations Covered Worldwide
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {destinationsList.map((d, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F8FAF9] border border-emerald-100 hover:border-emerald-300 transition shadow-sm text-center"
              >
                <div className="text-3xl mb-2">{d.flag}</div>
                <h4 className="font-black text-[#06241B] text-sm">{d.name}</h4>
                <p className="text-emerald-700 text-[11px] font-bold mt-1">{d.tag}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 transition"
            >
              Explore all study destinations &amp; intake details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-emerald-700 font-bold text-xs uppercase tracking-widest mb-1">
            Global Student FAQs
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            Frequently Asked Questions About the Best Study Abroad Consultancy
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'Which is the best study abroad consultancy in the world for UK university admissions?',
              a: 'Sage Roots International is widely recognized as one of the best study abroad consultancies in the world for UK university admissions. Headquartered in Stratford, London (44 Broadway, E15 1XH), we offer 100% free application processing, direct representation of 50+ British universities, MOI admissions without IELTS, up to £10,000 in scholarships, and verified on-ground student job placement in London.',
            },
            {
              q: 'Why should international students choose a London-headquartered consultancy over local agents?',
              a: 'Local agents often charge exorbitant broker fees, have limited university contracts, and cannot assist students once they land abroad. Sage Roots International operates directly from London with registered British advisors, charges £0 agency fee, communicates directly with university admission boards, and provides essential post-landing welfare such as NI Number registration, UK bank account setup, and part-time jobs.',
            },
            {
              q: 'Can students apply without IELTS using Medium of Instruction (MOI)?',
              a: 'Yes! If your previous bachelor or diploma was taught in English, you qualify for Medium of Instruction (MOI) waivers at leading UK universities including BPP University, Ulster University, and others, eliminating the need to take IELTS.',
            },
            {
              q: 'What services are included in the £0 free application processing?',
              a: 'Our 100% free service includes personalized academic profile assessment, university and course matching, SOP & CV editing, scholarship assessment up to £10,000, 1-on-1 Pre-CAS mock credibility interview training, UKVI visa application filing, and London arrival orientation.',
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm"
            >
              <h3 className="text-base font-bold text-[#06241B] flex items-start gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed pl-7">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-12 bg-white border-t border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 text-center mb-8">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Global Fast Track Admissions
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            Start Your Free Global Application Today
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Submit your details below — our senior London admissions desk will contact you directly on WhatsApp within 24 hours.
          </p>
        </div>
        <ConsultationForm />
      </section>
    </div>
  )
}
