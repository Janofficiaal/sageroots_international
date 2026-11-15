import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ShieldCheck,
  Award,
  Briefcase,
  CheckCircle2,
  Clock,
  Building2,
  MapPin,
  MessageCircle,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Lock,
} from 'lucide-react'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'MSc Cyber Security & Cloud in UK: NCSC Accredited Courses & Fees | Sage Roots International',
  description:
    'Study MSc Cyber Security & Cloud Computing in the UK. Explore NCSC-accredited programmes, 1-year master’s with 2-year PSW visa, placement year options, MOI without IELTS, and scholarships up to £10,000.',
  keywords: [
    'msc cyber security uk',
    'study cyber security in uk with placement',
    'cyber security without ielts uk',
    'ncsc accredited cyber security universities uk',
    'uk cyber security salary',
    'ethical hacking courses in uk',
    'cloud computing masters uk',
    'sage roots international cyber security',
    'best study abroad consultancy in the world',
  ],
  alternates: {
    canonical: '/courses/cyber-security-uk',
  },
  openGraph: {
    title: 'MSc Cyber Security & Cloud in UK: NCSC Accredited Courses',
    description:
      'Critical national shortage skill! Study MSc Cyber Security in the UK with 2-year Graduate Route work visa, MOI waivers, and £0 agency fees.',
    url: 'https://www.sagerootsinternational.co.uk/courses/cyber-security-uk',
    siteName: 'Sage Roots International',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'MSc Cyber Security in UK - Sage Roots International',
      },
    ],
  },
}

const cyberSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Course',
      '@id': 'https://www.sagerootsinternational.co.uk/courses/cyber-security-uk#course',
      name: 'MSc Cyber Security & Cloud Computing (UK)',
      description:
        'A comprehensive 1-year postgraduate programme covering ethical hacking, network defense, penetration testing, and cloud architecture with 2-year UK PSW work rights.',
      provider: {
        '@type': 'EducationalOrganization',
        name: 'Sage Roots International - UK Partner Universities',
        url: 'https://www.sagerootsinternational.co.uk',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.sagerootsinternational.co.uk/courses/cyber-security-uk#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is Cyber Security in high demand in the UK?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Cyber security is listed on the UK Critical Skills Shortage List. Graduates enjoy exceptionally high employment rates and sponsorship opportunities across government, banking, healthcare, and defence sectors.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I apply for Cyber Security in the UK with Medium of Instruction (MOI)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Graduates from recognized institutions whose degrees were conducted in English can secure unconditional offers without taking IELTS at our partner UK universities.',
          },
        },
      ],
    },
  ],
}

export default function CyberSecurityCoursePage() {
  return (
    <div className="bg-[#FAFDFB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cyberSchemaJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] text-white pt-32 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-300 mb-6 backdrop-blur-md">
            <Lock className="w-4 h-4 text-emerald-400" />
            UK Critical Shortage Skill
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight mb-6">
            MSc Cyber Security &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-200">
              Cloud Computing
            </span>
            <br className="hidden sm:inline" /> in the UK (with 2-Year PSW)
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
            Protect vital infrastructure and lead global security operations. NCSC-accredited programmes, optional paid industry placements, MOI waivers without IELTS, and scholarships up to £10,000.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/eligibility-checker"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Check Cyber Security Options
            </Link>
            <a
              href="https://wa.me/447776181483?text=Hello%2C%20I%20am%20interested%20in%20MSc%20Cyber%20Security%20in%20the%20UK."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-xl backdrop-blur-md transition"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              WhatsApp Cyber Advisor
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-bold text-lg text-[#06241B] mb-1">NCSC Aligned</h3>
            <p className="text-xs text-gray-500 font-semibold mb-2">Government Standard Curriculum</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Curricula meeting the National Cyber Security Centre guidelines for maximum industry credibility.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
            <Briefcase className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-bold text-lg text-[#06241B] mb-1">High Employability</h3>
            <p className="text-xs text-gray-500 font-semibold mb-2">Shortage Occupation</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Exceptional demand for Security Analysts, Ethical Hackers, and Cloud Engineers across the UK.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
            <Award className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-bold text-lg text-[#06241B] mb-1">Up to £10,000</h3>
            <p className="text-xs text-gray-500 font-semibold mb-2">Merit Bursaries</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Automatic scholarship evaluations based on previous academic performance and STEM backgrounds.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section className="py-12 bg-white border-t border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 text-center mb-8">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Free Processing
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            Apply for MSc Cyber Security
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Submit your details below — our London tech admissions team will review your qualifications within 24 hours.
          </p>
        </div>
        <ConsultationForm />
      </section>
    </div>
  )
}
