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
} from 'lucide-react'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'Study Abroad Consultancy in Khulna — Best UK & Global Admissions Desk',
  description:
    'Sage Roots International is the leading study abroad consultancy in Khulna. 100% free counseling for UK, Cyprus, Malta, Dubai & Canada. Direct university admissions with MOI (no IELTS), up to £10,000 scholarships, and London student job support.',
  keywords: [
    'study abroad consultancy in khulna',
    'best study abroad consultancy in khulna',
    'education consultancy in khulna',
    'uk student visa consultancy in khulna',
    'best student visa agency in khulna',
    'study in uk from khulna without ielts',
    'khulna university study abroad consultancy',
    'kuet abroad higher study consultancy',
    'nubtk nwu ielts waiver consultancy khulna',
    'sage roots international khulna desk',
    'best study abroad consultancy in the world',
  ],
  alternates: {
    canonical: 'https://www.sagerootsinternational.co.uk/study-abroad-consultancy-in-khulna',
  },
  openGraph: {
    title: 'Study Abroad Consultancy in Khulna — Best UK & Global Admissions Desk',
    description:
      'Official London-headquartered study abroad consultancy serving Khulna students with £0 agency fee, IELTS waivers via MOI, and UK student visa guidance.',
    url: 'https://www.sagerootsinternational.co.uk/study-abroad-consultancy-in-khulna',
    siteName: 'Sage Roots International',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'Sage Roots International — Study Abroad Consultancy in Khulna',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study Abroad Consultancy in Khulna | Sage Roots International',
    description:
      'Leading overseas education consultants in Khulna. 100% free application processing to 139+ UK partner universities.',
    images: ['/images/sri-logo.jpg'],
  },
}

const khulnaConsultancyJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      '@id': 'https://www.sagerootsinternational.co.uk/study-abroad-consultancy-in-khulna#localbusiness',
      name: 'Sage Roots International - Study Abroad Consultancy in Khulna',
      alternateName: 'Best Education Consultancy Khulna',
      url: 'https://www.sagerootsinternational.co.uk/study-abroad-consultancy-in-khulna',
      logo: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      image: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      description:
        'Premier study abroad consultancy serving students across Khulna City, KU, KUET, NUBTK, NWU, and BL College. Offering 100% free admission processing, MOI waivers without IELTS, scholarships up to £10,000, and London career support.',
      telephone: '+447776181483',
      email: 'info@sagerootsinternational.co.uk',
      priceRange: '£0 (100% Free Processing)',
      currenciesAccepted: 'GBP, BDT',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sonadanga R/A (1st Phase)',
        addressLocality: 'Khulna',
        postalCode: '9100',
        addressRegion: 'Khulna Division',
        addressCountry: 'BD',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 22.8456,
        longitude: 89.5403,
      },
      areaServed: [
        { '@type': 'City', name: 'Khulna' },
        { '@type': 'AdministrativeArea', name: 'Khulna Division' },
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
          name: 'Khulna Regional Desk',
          item: 'https://www.sagerootsinternational.co.uk/khulna',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Study Abroad Consultancy in Khulna',
          item: 'https://www.sagerootsinternational.co.uk/study-abroad-consultancy-in-khulna',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Which is the best study abroad consultancy in Khulna for UK student visas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sage Roots International is widely recognized as the premier study abroad consultancy serving Khulna students. With our direct headquarters in Stratford, London and local counseling presence in Sonadanga R/A Khulna, we provide 100% free university application processing, official IELTS waivers with MOI, and guaranteed on-ground student job assistance in the UK.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Khulna students apply to UK universities without IELTS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Graduates of Khulna University (KU), KUET, Northern University of Business & Technology Khulna (NUBTK), North Western University (NWU), and Govt. BL College can apply using an English Medium of Instruction (MOI) certificate with complete IELTS waiver at partner universities including BPP University, Ulster University, and others.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Sage Roots International charge any service fee in Khulna?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Sage Roots International operates on a strict £0 agency fee policy. University file assessment, admission application, scholarship appeal, and visa document guidance are 100% free of charge.',
          },
        },
      ],
    },
  ],
}

const keyFeatures = [
  {
    icon: ShieldCheck,
    title: '£0 Processing Charge',
    desc: 'Zero file opening or hidden agency fees. All university admission assistance is completely free.',
  },
  {
    icon: Building2,
    title: 'Stratford, London Headquarters',
    desc: 'Direct connection to our UK head office (44 Broadway, E15 1XH) ensuring faster offer letters and CAS.',
  },
  {
    icon: Briefcase,
    title: 'On-Ground London Job Support',
    desc: 'Receive CV optimization, NI number support, and part-time job placement guidance upon arriving in the UK.',
  },
  {
    icon: Award,
    title: 'Scholarships up to £10,000',
    desc: 'We automatically submit your profile for British merit awards, Vice-Chancellor bursaries, and early payment discounts.',
  },
  {
    icon: FileCheck2,
    title: 'MOI Acceptance (No IELTS)',
    desc: 'Admissions available using Medium of Instruction certificates for graduates from Khulna institutions.',
  },
  {
    icon: Clock,
    title: 'Express 24–48h Assessment',
    desc: 'Submit your transcripts and receive an official eligibility breakdown from our London team within 24 to 48 hours.',
  },
]

const targetColleges = [
  'Khulna University (KU)',
  'Khulna University of Engineering & Technology (KUET)',
  'Northern University of Business & Technology Khulna (NUBTK)',
  'North Western University (NWU Khulna)',
  'Govt. Brajalal (BL) College, Daulatpur',
  'Govt. Majid Memorial City College',
  'Khulna Govt. Girls College',
  'Sundarban & Khulna Division Colleges',
]

export default function StudyAbroadConsultancyInKhulnaPage() {
  return (
    <div className="bg-[#FAFDFB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(khulnaConsultancyJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] text-white pt-32 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-300 mb-6 backdrop-blur-md">
            <MapPin className="w-4 h-4 text-emerald-400" />
            Sonadanga R/A, Khulna &amp; Stratford, London Office
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
            Premier Study Abroad Consultancy in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-200">
              Khulna
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
            Empowering students from <strong>Khulna University</strong>, <strong>KUET</strong>, <strong>NUBTK</strong>, <strong>NWU</strong>, and <strong>BL College</strong> to secure direct admissions to 139+ UK partner universities. <strong>100% free processing (£0 fee)</strong>, IELTS waivers via MOI, up to £10,000 scholarships, and verified London job placement.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/eligibility-checker"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Check Eligibility Free Online
            </Link>
            <a
              href="https://wa.me/447776181483?text=Hello%2C%20I%20am%20from%20Khulna%20and%20looking%20for%20study%20abroad%20consultancy%20guidance."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-xl backdrop-blur-md transition"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              Khulna Helpdesk WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto text-left">
            {[
              { label: 'Agency Fee', value: '£0 / Free', desc: 'No file opening charges' },
              { label: 'UK Universities', value: '139+ Partners', desc: 'Direct representation' },
              { label: 'Scholarships', value: 'Up to £10k', desc: 'Automatic merit matching' },
              { label: 'London Support', value: '100% Assistance', desc: 'On-ground jobs & NI' },
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

      {/* Target Institutions in Khulna */}
      <section className="py-16 bg-white border-y border-emerald-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
              Serving All Khulna Institutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
              Direct Admission &amp; IELTS Waivers for Khulna Students
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-2">
              Graduates from the following institutions can apply directly for UK Master’s, MBA, and Bachelor programmes using an English Medium of Instruction (MOI) certificate:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {targetColleges.map((col, idx) => (
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

      {/* Why Choose Sage Roots */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Why We Are #1 in Khulna
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#06241B]">
            Why Khulna Students Choose Sage Roots International
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

      {/* Regional Desk FAQs */}
      <section className="py-16 bg-white border-t border-emerald-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
              Frequently Asked Questions (Khulna Desk)
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Which is the best study abroad consultancy in Khulna for UK admissions?',
                a: 'Sage Roots International is the premier London-headquartered consultancy providing direct admissions support in Khulna with £0 agency fee, official IELTS waivers with MOI, and guaranteed on-ground student job assistance in the UK.',
              },
              {
                q: 'Can Khulna University, KUET, or BL College graduates apply to the UK without IELTS?',
                a: 'Yes! If your degree was taught in English, you can apply using an English Medium of Instruction (MOI) certificate with 100% IELTS waiver at top partner universities including BPP University, Ulster University, and others.',
              },
              {
                q: 'Can graduates from NUBTK or North Western University Khulna apply with MOI?',
                a: 'Yes! Graduates from Northern University of Business & Technology Khulna (NUBTK) and North Western University (NWU Khulna) can apply using an MOI certificate for Master’s and MBA programs with initial tuition deposit starting from £3,000.',
              },
              {
                q: 'How do students in Khulna start their free application?',
                a: 'Students in Khulna can submit their transcripts using the consultation form below or contact our WhatsApp helpline at +44 7776 181483. Document evaluation is completely free.',
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
            Start Your Free Application with the Khulna Desk
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Submit your information below to speak directly with our senior counselors.
          </p>
        </div>
        <ConsultationForm />
      </section>
    </div>
  )
}
