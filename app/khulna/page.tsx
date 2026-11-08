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
  PhoneCall,
  MessageCircle,
  Sparkles,
  ArrowRight,
  HelpCircle,
  FileCheck2,
} from 'lucide-react'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'Best UK & Abroad Student Visa Consultancy in Khulna | Sage Roots International',
  description:
    'Looking for the best UK & abroad student visa consultancy in Khulna? Sage Roots International provides 100% free counseling, IELTS/MOI admissions to 50+ UK universities, up to £10,000 scholarships, and 100% London part-time job support for students from Khulna, KU, KUET, and BL College.',
  keywords: [
    'best student consultancy in khulna',
    'uk student visa consultancy in khulna',
    'study abroad consultancy in khulna',
    'education consultancy in khulna',
    'nubtk study abroad consultancy',
    'nubtk uk student visa',
    'northern university khulna study in uk',
    'north western university khulna study abroad',
    'nwu khulna uk student visa',
    'nubtk nwu ielts waiver moi uk',
    'khulna to uk student visa',
    'ielts waiver uk admission khulna',
    'study in uk from khulna bangladesh',
    'kuet higher study uk',
    'khulna university study abroad consultancy',
    'bl college daulatpur study abroad',
    'sage roots international khulna',
    'best abroad consultancy in khulna city',
    'best uk student visa agency khulna',
    'khulna student abroad consultancy',
  ],
  alternates: {
    canonical: '/khulna',
  },
  openGraph: {
    title: 'Best UK & Abroad Student Visa Consultancy in Khulna | Sage Roots International',
    description:
      'Official London-headquartered UK admissions consultancy dedicated to Khulna students. 100% free file processing, £0 agency fee, CAS deposit from £3,000, and London job support.',
    url: 'https://www.sagerootsinternational.co.uk/khulna',
    siteName: 'Sage Roots International',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'Sage Roots International Khulna Desk',
      },
    ],
  },
}

const khulnaSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      '@id': 'https://www.sagerootsinternational.co.uk/khulna#localbusiness',
      name: 'Sage Roots International - Khulna Support Desk',
      alternateName: 'Sage Roots International Education Consultancy Khulna',
      url: 'https://www.sagerootsinternational.co.uk/khulna',
      logo: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      image: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      description:
        'The #1 trusted UK and abroad higher education consultancy serving students across Khulna, KUET, Khulna University, and BL College. 100% free processing, UKVI visa guidance, and Stratford London job support.',
      telephone: '+447776181483',
      email: 'info@sagerootsinternational.co.uk',
      priceRange: '£0 (Free Counseling & Admission)',
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
      '@type': 'FAQPage',
      '@id': 'https://www.sagerootsinternational.co.uk/khulna#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why is Sage Roots International the best UK student consultancy for Khulna students?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sage Roots International is headquartered in Stratford, London (44 Broadway, E15 1XH) with a dedicated support desk for Khulna students. Unlike local middleman agents, we charge £0 agency fee (100% free service), represent 50+ UK universities directly, and provide 100% part-time job placement support once you land in the UK.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can Khulna University, KUET, or BL College graduates apply to the UK without IELTS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! If your bachelor degree was taught in English, you can apply using an English Medium of Instruction (MOI) certificate without retaking IELTS at top partner universities including BPP University, Ulster University, and others.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can graduates from NUBTK or North Western University Khulna apply to the UK with MOI without IELTS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Graduates of Northern University of Business & Technology Khulna (NUBTK) and North Western University (NWU Khulna) can apply to top UK universities using an English Medium of Instruction (MOI) certificate without taking IELTS for Master’s, MBA, and postgraduate programs with tuition deposit starting from £3,000.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do students from Khulna start their application with Sage Roots?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Khulna students can submit their details through our online consultation form or message our WhatsApp desk at +44 7776 181483. Our UK-based senior counselors will assess your academic documents for free within 24 hours.',
          },
        },
      ],
    },
  ],
}

const keyFeatures = [
  {
    icon: ShieldCheck,
    title: '£0 Agency Processing Fee',
    desc: 'File opening and university admission processing are 100% free for all students. No hidden charges or extra fees.',
  },
  {
    icon: Building2,
    title: 'Direct Support from London Head Office',
    desc: 'Our headquarters is located at Stratford, London (44 Broadway, E15 1XH). You work directly with genuine UK-based advisors.',
  },
  {
    icon: Briefcase,
    title: '100% Part-Time Job Assistance',
    desc: 'Upon arriving in the UK, receive one-on-one career onboarding, CV optimization, and part-time job placement guidance in London.',
  },
  {
    icon: Award,
    title: 'Up to £10,000 Scholarships',
    desc: 'Attractive merit-based and regional scholarship assessment across top British partner universities.',
  },
  {
    icon: FileCheck2,
    title: 'IELTS Waiver with MOI',
    desc: 'Graduates from Khulna University, KUET, NUBTK, NWU, and recognized institutions can apply directly using Medium of Instruction (MOI).',
  },
  {
    icon: Clock,
    title: 'Fast Offer Letter & CAS Delivery',
    desc: 'Express document assessment within 24 to 48 hours for upcoming January and September intakes.',
  },
]

const targetColleges = [
  'Northern University of Business & Technology Khulna (NUBTK)',
  'North Western University (NWU Khulna)',
  'Khulna University (KU)',
  'Khulna University of Engineering & Technology (KUET)',
  'Govt. Brajalal (BL) College, Daulatpur',
  'Govt. Majid Memorial City College',
  'Khulna Govt. Girls College',
  'Sheikh Burhanuddin & Khulna Region Colleges',
]

const popularPathways = [
  {
    title: 'BPP University (London / Birmingham)',
    fee: 'Tuition from £12,500 • CAS Deposit £3,000',
    desc: '2nd Master’s pathway with reduced tuition and post-study work visa support.',
    href: '/posts/bpp-university-second-masters-in-uk-psw-ending-tuition-fee-reduced',
  },
  {
    title: 'Ulster University (London & Birmingham)',
    fee: 'Tuition from £10,625 • Up to 5 Years Study Gap Accepted',
    desc: 'Popular among Khulna graduates for MBA, Data Science, and Computing programs.',
    href: '/posts/study-in-ulster-university-january-2027-intake-tuition-10625',
  },
  {
    title: 'Cyprus & Malta European Pathways',
    fee: 'Affordable Tuition • Schengen & EU Opportunities',
    desc: 'Ideal low-cost alternative study destinations with high visa success rate.',
    href: '/destinations',
  },
]

const faqs = [
  {
    q: 'Can graduates from NUBTK or North Western University Khulna apply for UK Master’s without IELTS?',
    a: 'Yes, 100% eligible! Graduates from NUBTK (Northern University of Business & Technology Khulna) and North Western University (NWU) in BBA, CSE, LLB, English, etc. can submit their official English Medium of Instruction (MOI) certificate to secure direct Master’s or MBA admission and CAS from top UK universities including BPP University and Ulster University without taking IELTS.',
  },
  {
    q: 'How does Sage Roots International support students from Khulna?',
    a: 'We offer a dedicated digital admissions desk and direct WhatsApp consultation for students in Khulna. You can scan and share your academic credentials online. Our London-based senior counselors manage your application directly with UK university admission boards to secure your offer letter swiftly.',
  },
  {
    q: 'Can I apply to UK universities without IELTS from Khulna?',
    a: 'Yes, absolutely. If your previous degree was taught in English, you qualify for Medium of Instruction (MOI) waivers at leading partner universities across the UK. Alternatively, applications with IELTS 5.5, Duolingo, or internal university English tests are also accepted.',
  },
  {
    q: 'What part-time job support is provided once I land in London?',
    a: 'Our London head office is situated at 44 Broadway, Stratford, London E15 1XH. As soon as you arrive, our student welfare team assists you with National Insurance Number (NIN) registration, UK bank account opening, CV tailoring, and connecting with vetted part-time job employers in hospitality, administration, and care sectors.',
  },
  {
    q: 'Do you provide guidance for the 28-day bank statement and visa interview?',
    a: 'Yes. We provide complete step-by-step guidance on calculating the mandatory UKVI 28-day financial proof (including our free live bank statement calculator) and conduct one-on-one mock interview sessions to prepare you for university Pre-CAS and UKVI visa credibility checks.',
  },
]

export default function KhulnaPage() {
  return (
    <div className="bg-[#FAFDFB]">
      {/* Inject Local Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(khulnaSchemaJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] text-white pt-32 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-300 mb-6 backdrop-blur-md">
            <MapPin className="w-4 h-4 text-emerald-400" />
            World-Class UK Higher Education Consultancy for Khulna Students
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight mb-6">
            Best UK &amp; Abroad Student Consultancy in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-200">
              Khulna
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
            Dedicated admissions desk for <strong>NUBTK</strong>, <strong>North Western University (NWU)</strong>, <strong>Khulna University (KU)</strong>, <strong>KUET</strong>, and <strong>BL College</strong> students. Direct <strong>London Head Office</strong> guidance, <strong>100% free</strong> file processing, up to £10,000 scholarships, IELTS waivers via MOI, and guaranteed part-time job support upon UK arrival.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#consultation"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              Book Free Profile Assessment
            </Link>
            <a
              href="https://wa.me/447776181483?text=Hello%2C%20I%20am%20a%20student%20from%20Khulna%20interested%20in%20UK%20study%20options."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-xl backdrop-blur-md transition"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              Khulna Helpdesk WhatsApp
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto text-left">
            {[
              { label: 'Agency Service Fee', value: '£0 / Free', desc: 'No hidden or file opening charges' },
              { label: 'Partner Universities', value: '50+ UK', desc: 'Top-ranked British institutions' },
              { label: 'Scholarship Amount', value: 'Up to £10k', desc: 'Merit and regional fee discounts' },
              { label: 'London Job Support', value: '100% Guaranteed', desc: 'On-ground assistance at London office' },
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

      {/* Why Choose Sage Roots for Khulna Students */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-emerald-700 font-bold text-xs uppercase tracking-widest mb-2">
            The #1 Trusted Choice in Khulna
          </p>
          <h2 className="text-2xl sm:text-4xl font-black text-[#06241B]">
            Why Khulna Students Choose Sage Roots International
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3">
            Avoid third-party broker fees and local agency risks by applying directly through our registered London Head Office.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyFeatures.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#073224] flex items-center justify-center mb-5 ring-1 ring-emerald-200">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#06241B] mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Target Institutions in Khulna */}
      <section className="py-16 bg-white border-y border-emerald-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
              Dedicated Support Across Khulna Division
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
              Open for Students Across Leading Educational Institutions in Khulna
            </h2>
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

          <div className="mt-8 text-center text-xs sm:text-sm text-gray-500">
            Also welcoming students from Jashore, Satkhira, Bagerhat, and the wider Khulna Division.
          </div>
        </div>
      </section>

      {/* Special MOI & Fast-Track Desk for NUBTK & North Western University */}
      <section className="py-16 bg-gradient-to-r from-emerald-950 via-[#073224] to-emerald-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 border border-emerald-400/30 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/40 rounded-full px-3.5 py-1 text-xs font-bold mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  NUBTK &amp; NWU Khulna Dedicated Fast-Track Desk
                </div>
                <h3 className="text-2xl sm:text-3xl font-black leading-snug mb-3">
                  Special Study Abroad Opportunity for NUBTK &amp; North Western University
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6">
                  Graduates of Northern University (NUBTK) and North Western University (NWU) in BBA, CSE, EEE, LLB, and English can secure direct Master’s &amp; MBA admission at prestigious UK universities using an <strong>English Medium of Instruction (MOI) letter with zero IELTS requirement</strong>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 bg-black/20 rounded-xl p-3 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong>IELTS Waiver:</strong> 100% MOI Certificate Accepted</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/20 rounded-xl p-3 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong>Low CAS Deposit:</strong> Minimum Deposit Starting from £3,000</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/20 rounded-xl p-3 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong>Study Gap:</strong> Up to 5 to 7 Years Study Gap Accepted</span>
                  </div>
                  <div className="flex items-center gap-2 bg-black/20 rounded-xl p-3 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong>London Job Guarantee:</strong> Part-Time Employment Support on Arrival</span>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-full lg:w-auto">
                <a
                  href="https://wa.me/447776181483?text=Hello%2C%20I%20am%20a%20student%20from%20NUBTK%20%2F%20North%20Western%20University%20Khulna%20interested%20in%20UK%20admissions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-[#073224] font-black text-sm px-6 py-4 rounded-xl shadow-lg transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  NUBTK &amp; NWU WhatsApp Helpdesk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Study Pathways for Bangladeshi Students */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-emerald-700 font-bold text-xs uppercase tracking-widest mb-2">
            Top University Admissions
          </p>
          <h2 className="text-2xl sm:text-4xl font-black text-[#06241B]">
            Popular Study Pathways &amp; Universities for Khulna Students
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popularPathways.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold mb-3">
                  {item.fee}
                </span>
                <h3 className="text-lg font-bold text-[#06241B] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">{item.desc}</p>
              </div>
              <Link
                href={item.href}
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition"
              >
                View Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Job Guarantee Highlight in London */}
      <section className="py-16 bg-[#073224] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/30 rounded-full px-3.5 py-1 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Exclusive Student Welfare Program
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mb-3">
              On-Ground Part-Time Job Support Upon Arrival in London
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl">
              Moving abroad without local connections can be challenging. Our Stratford, London headquarters ensures every arriving student receives prompt assistance with National Insurance Numbers (NIN), CV optimization, and trusted part-time employment placement.
            </p>
          </div>
          <a
            href="https://wa.me/447776181483"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#073224] hover:bg-emerald-50 font-black text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg whitespace-nowrap transition"
          >
            Speak with London Team
          </a>
        </div>
      </section>

      {/* Frequently Asked Questions (Khulna Local SEO FAQs) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-emerald-700 font-bold text-xs uppercase tracking-widest mb-1">Got Questions?</p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            Frequently Asked Questions for Khulna Students (FAQs)
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
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

      {/* Consultation Form for Khulna */}
      <section id="consultation" className="py-12 bg-white border-t border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 text-center mb-8">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Fast Track Application
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            Start Your Free Application from Khulna
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Fill in your details below — our expert UK team will reach out directly on WhatsApp within 24 hours.
          </p>
        </div>
        <ConsultationForm />
      </section>
    </div>
  )
}
