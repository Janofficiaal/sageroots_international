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
  AlertCircle,
  BookOpen,
  DollarSign,
} from 'lucide-react'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'Study in UK Without IELTS: Complete MOI Accepted Universities Guide | Sage Roots International',
  description:
    'Comprehensive guide on studying in the UK without IELTS using Medium of Instruction (MOI). Complete list of MOI accepted UK universities, eligibility criteria for Bangladeshi graduates, CAS requirements, and 100% free application support from London.',
  keywords: [
    'study in uk without ielts',
    'moi accepted universities in uk',
    'uk universities accepting medium of instruction',
    'study in uk with moi from bangladesh',
    'uk masters without ielts',
    'ielts waiver universities in uk',
    'moi letter format for uk universities',
    'du nsu brac moi uk admission',
    'best study abroad consultancy in the world',
    'sage roots international moi uk',
  ],
  alternates: {
    canonical: '/study-in-uk-without-ielts-moi-accepted-universities',
  },
  openGraph: {
    title: 'Study in UK Without IELTS: Complete MOI Accepted Universities Guide',
    description:
      'Learn how to secure a UK university offer and Student Visa without IELTS using an official Medium of Instruction (MOI) certificate. Fast-track admissions & scholarships up to £10,000.',
    url: 'https://www.sagerootsinternational.co.uk/study-in-uk-without-ielts-moi-accepted-universities',
    siteName: 'Sage Roots International',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'Study in UK Without IELTS MOI Guide - Sage Roots International',
      },
    ],
  },
}

const moiSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://www.sagerootsinternational.co.uk/study-in-uk-without-ielts-moi-accepted-universities#article',
      headline: 'Study in UK Without IELTS: Complete MOI Accepted Universities & Admission Guide',
      description:
        'A comprehensive, up-to-date guide on securing UK university admissions and CAS without IELTS via Medium of Instruction (MOI) certificates for international students.',
      publisher: {
        '@type': 'EducationalOrganization',
        name: 'Sage Roots International',
        url: 'https://www.sagerootsinternational.co.uk',
        logo: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      },
      mainEntityOfPage:
        'https://www.sagerootsinternational.co.uk/study-in-uk-without-ielts-moi-accepted-universities',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.sagerootsinternational.co.uk/study-in-uk-without-ielts-moi-accepted-universities#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Medium of Instruction (MOI) for UK university admissions?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Medium of Instruction (MOI) is an official letter issued by your graduating college or university confirming that your entire degree curriculum, lectures, coursework, and exams were conducted 100% in the English language. UK universities use this document to grant an official English language condition waiver in place of IELTS or PTE.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which Bangladeshi universities are widely accepted for MOI in the UK?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Graduates from North South University (NSU), BRAC University, American International University-Bangladesh (AIUB), Independent University Bangladesh (IUB), East West University (EWU), University of Dhaka (DU), SUST, CU, and UIU are widely accepted for MOI-based UK university admissions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does UKVI (UK Visas & Immigration) accept MOI for student visas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. For degree-level study (RQF Level 6/7/8 - Bachelor’s, Master’s, or PhD), UK Higher Education Institutions with Student Sponsor status have the legal authority to assess English language ability themselves. When the university assesses your MOI and issues your CAS letter stating English language assessed by Higher Education Institution, UKVI fully accepts it without requesting an IELTS test.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there any university internal English test if MOI is not accepted?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Several of our partner UK universities offer free online internal English language tests (such as Oxford ELLT, Pearson PTE Academic, or university-administered online interviews) if your previous institution is not on the standard MOI exemption list.',
          },
        },
      ],
    },
  ],
}

const criteriaPoints = [
  {
    title: 'Degree Completed in English',
    desc: 'You must have completed a 3-year or 4-year Bachelor’s degree from a recognized university where the medium of teaching was English.',
  },
  {
    title: 'Recency of Graduation',
    desc: 'Most UK universities accept MOI certificates for degrees completed within the last 2 to 5 years (some allow up to 7–8 years with relevant professional work experience).',
  },
  {
    title: 'Official Registrar Letterhead',
    desc: 'The MOI document must be printed on official university letterhead, signed and stamped by the Registrar, Controller of Examinations, or Vice Chancellor.',
  },
  {
    title: 'Minimum CGPA Standard',
    desc: 'Generally a CGPA of 2.60 to 3.00+ on a 4.00 scale (or 50%–60%+) is required for direct Master’s entry, though foundation or Pre-Master’s options exist for lower scores.',
  },
]

export default function MoiUniversitiesPage() {
  return (
    <div className="bg-[#FAFDFB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(moiSchemaJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] text-white pt-32 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-300 mb-6 backdrop-blur-md">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            Official UK Higher Education Admissions Pathway
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight mb-6">
            Study in UK{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-200">
              Without IELTS
            </span>
            <br className="hidden sm:inline" /> (MOI Accepted Universities)
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
            Complete guide on how to secure an unconditional UK university offer and Student Visa without IELTS using an official <strong>Medium of Instruction (MOI)</strong> certificate. Fast-track CAS processing, up to £10,000 scholarships, and 100% free guidance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/eligibility-checker"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Check Your MOI Eligibility Free
            </Link>
            <a
              href="https://wa.me/447776181483?text=Hello%2C%20I%20want%20to%20check%20if%20my%20university%20MOI%20is%20accepted%20for%20UK%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-xl backdrop-blur-md transition"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              Instant WhatsApp MOI Review
            </a>
          </div>
        </div>
      </section>

      {/* What is MOI Section */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-100 shadow-sm">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-2">
            Admissions Clarity
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B] mb-6">
            What is a Medium of Instruction (MOI) Certificate?
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
            A <strong>Medium of Instruction (MOI)</strong> certificate is an official university document confirming that your previous degree was taught and evaluated entirely in the English language. Under UKVI regulations, UK Higher Education Providers with Student Sponsor licenses have the discretion to assess international applicants’ English language proficiency using institutional qualifications rather than mandatory SELT exams.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
            This means Bangladeshi and international graduates who studied their Bachelor’s or Master’s degrees in English can save thousands of Taka and months of preparation time by gaining direct admission without taking IELTS or PTE.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-emerald-50">
            {criteriaPoints.map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#06241B] mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured MOI Partner Pathways */}
      <section className="py-16 bg-[#F4F9F6] border-y border-emerald-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
              Top UK University Options
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
              Popular UK Universities Accepting MOI &amp; Internal Tests
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-2">
              Sage Roots International is an authorized representative of over 50 British universities. Below are prominent institutions offering flexible English pathways:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'BPP University',
                location: 'London, Birmingham, Manchester',
                tuition: '£12,000 – £15,000 / yr',
                feature: 'MOI Accepted for Bangladeshi Graduates; Career-focused Law & Business Degrees.',
                link: '/universities/bpp-university',
              },
              {
                name: 'Ulster University (London & Birmingham)',
                location: 'London & Birmingham Campuses',
                tuition: '£13,000 – £16,000 / yr',
                feature: 'Generous scholarships up to £4,000; MOI & free internal English assessment accepted.',
                link: '/universities/ulster-university',
              },
              {
                name: 'University of Portsmouth',
                location: 'Portsmouth, Hampshire',
                tuition: '£16,000 – £19,000 / yr',
                feature: 'High graduate employability rating; accepted MOI letters from top recognized institutions.',
                link: '/universities/university-of-portsmouth',
              },
              {
                name: 'De Montfort University (DMU)',
                location: 'Leicester, UK',
                tuition: '£15,000 – £17,500 / yr',
                feature: 'Free university-administered English test for applicants who do not have IELTS.',
                link: '/universities/de-montfort-university',
              },
              {
                name: 'Anglia Ruskin University (ARU)',
                location: 'Cambridge & Chelmsford',
                tuition: '£14,500 – £17,000 / yr',
                feature: 'Direct admissions for graduates with strong English medium Bachelor’s degrees.',
                link: '/universities/anglia-ruskin-university',
              },
              {
                name: 'Abertay University',
                location: 'Dundee, Scotland',
                tuition: '£15,000 – £16,500 / yr',
                feature: 'Up to £3,000 international scholarships with streamlined MOI evaluation.',
                link: '/universities/abertay-university',
              },
            ].map((uni, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md inline-block mb-3">
                    {uni.location}
                  </span>
                  <h3 className="text-lg font-bold text-[#06241B] mb-2">{uni.name}</h3>
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">{uni.feature}</p>
                  <p className="text-xs font-semibold text-emerald-800 mb-4">
                    Tuition Estimate: {uni.tuition}
                  </p>
                </div>
                <Link
                  href={uni.link}
                  className="text-xs font-bold text-[#073224] hover:text-emerald-700 underline underline-offset-4 flex items-center gap-1"
                >
                  View University Profile &rarr;
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/universities"
              className="inline-flex items-center gap-2 bg-[#073224] hover:bg-[#0a4230] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition"
            >
              Browse All 139+ Partner Universities Directory
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Step by Step Application */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Simple 4-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            How to Apply Without IELTS in 4 Easy Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Get MOI Letter',
              desc: 'Request an official Medium of Instruction certificate from your university registrar.',
            },
            {
              step: '02',
              title: 'Eligibility Check',
              desc: 'Submit documents to Sage Roots International for free university matching and fee review.',
            },
            {
              step: '03',
              title: 'Receive Offer',
              desc: 'Get your unconditional or conditional offer letter issued within 48 to 72 hours.',
            },
            {
              step: '04',
              title: 'CAS & Visa',
              desc: 'Pay your initial CAS deposit, complete Pre-CAS interview, and apply for your UK Student Visa.',
            },
          ].map((s, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm relative">
              <span className="text-3xl font-black text-emerald-200 block mb-2">{s.step}</span>
              <h3 className="font-bold text-base text-[#06241B] mb-2">{s.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F8FAF9] border-t border-emerald-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
              Frequently Asked Questions About MOI in the UK
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
              <h3 className="font-bold text-sm sm:text-base text-[#06241B] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                Will my visa be rejected if I apply without IELTS?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-6">
                No. As long as the university confirms on your CAS that English was assessed by the institution (using your MOI or internal assessment), UKVI visa officers do not require an IELTS certificate.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
              <h3 className="font-bold text-sm sm:text-base text-[#06241B] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                What if my university MOI is rejected by a specific UK university?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-6">
                If one institution does not accept your specific graduating college, Sage Roots International provides alternative options including universities that accept free online internal English interviews, Oxford ELLT, or PTE Academic.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
              <h3 className="font-bold text-sm sm:text-base text-[#06241B] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                How much does Sage Roots International charge for MOI processing?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-6">
                Zero. All services provided by Sage Roots International — including university course selection, document assessment, offer letter processing, and visa guidance — are 100% free of charge (£0 agency fee).
              </p>
            </div>
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
            Check If Your University Qualifies for MOI
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Submit your university name and degree details — our admissions team will verify your eligibility within 24 hours.
          </p>
        </div>
        <ConsultationForm />
      </section>
    </div>
  )
}
