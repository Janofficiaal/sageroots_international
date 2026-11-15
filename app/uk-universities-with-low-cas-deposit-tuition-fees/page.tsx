import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Coins,
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
  Percent,
} from 'lucide-react'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'UK Universities with Low CAS Deposit (£3,000–£5,000) & Affordable Tuition Fees | Sage Roots International',
  description:
    'Complete guide to UK universities with low CAS deposits from £3,000 to £5,000 and affordable tuition fees starting from £11,000. Learn how to secure your CAS with flexible installment plans and up to £10,000 scholarships.',
  keywords: [
    'uk universities with 3000 pound deposit',
    'minimum cas deposit uk universities',
    'low tuition fee universities in uk for international students',
    'cheap uk universities for masters',
    'uk universities with 5000 pound cas deposit',
    'affordable uk universities for bangladeshi students',
    'bpp university 3000 deposit',
    'cheapest university in london for masters',
    'sage roots international low deposit uk',
    'best study abroad consultancy in the world',
  ],
  alternates: {
    canonical: '/uk-universities-with-low-cas-deposit-tuition-fees',
  },
  openGraph: {
    title: 'UK Universities with Low CAS Deposit (£3,000–£5,000) & Affordable Tuition',
    description:
      'Discover UK partner universities offering low initial CAS deposits from £3,000 to £5,000, scholarships up to £10,000, and interest-free installment options.',
    url: 'https://www.sagerootsinternational.co.uk/uk-universities-with-low-cas-deposit-tuition-fees',
    siteName: 'Sage Roots International',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'UK Universities with Low CAS Deposit - Sage Roots International',
      },
    ],
  },
}

const lowDepositSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://www.sagerootsinternational.co.uk/uk-universities-with-low-cas-deposit-tuition-fees#article',
      headline: 'UK Universities with Low CAS Deposit (£3,000–£5,000) & Affordable Tuition Fees',
      description:
        'A comprehensive guide listing British universities with minimum initial tuition deposits starting from £3,000, low course fees, and automatic scholarship reductions.',
      publisher: {
        '@type': 'EducationalOrganization',
        name: 'Sage Roots International',
        url: 'https://www.sagerootsinternational.co.uk',
        logo: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      },
      mainEntityOfPage:
        'https://www.sagerootsinternational.co.uk/uk-universities-with-low-cas-deposit-tuition-fees',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.sagerootsinternational.co.uk/uk-universities-with-low-cas-deposit-tuition-fees#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Which UK universities offer a £3,000 CAS deposit?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Institutions such as BPP University (London, Birmingham, Manchester) offer initial CAS tuition deposits starting from £3,000 for qualifying postgraduate programmes, with the remaining balance paid in flexible installments across the academic year.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the average minimum CAS deposit for UK universities?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most affordable UK universities require between £3,000 and £5,000 to issue your official CAS (Confirmation of Acceptance for Studies). Some traditional research universities require 50% of the first year tuition fee.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I pay the remaining UK tuition fees in monthly or termly installments?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Almost all UK universities allow international students to spread the remaining tuition fee balance across 3 to 6 interest-free installments payable each semester or term after arriving in the UK.',
          },
        },
      ],
    },
  ],
}

export default function LowDepositUniversitiesPage() {
  return (
    <div className="bg-[#FAFDFB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lowDepositSchemaJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] text-white pt-32 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-emerald-300 mb-6 backdrop-blur-md">
            <Coins className="w-4 h-4 text-emerald-400" />
            Affordable British Higher Education Pathways
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight mb-6">
            UK Universities with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-amber-300 to-emerald-200">
              Low CAS Deposit
            </span>
            <br className="hidden sm:inline" /> (£3,000 – £5,000 Initial Payment)
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed mb-8">
            Do not let large upfront fees hold you back. Explore British universities offering initial CAS deposits from just <strong>£3,000 to £5,000</strong>, annual tuition from £11,000, scholarships up to £10,000, and flexible installment plans.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/eligibility-checker"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Check Low Deposit Universities Free
            </Link>
            <a
              href="https://wa.me/447776181483?text=Hello%2C%20I%20am%20looking%20for%20UK%20universities%20with%20a%20low%20CAS%20deposit."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-xl backdrop-blur-md transition"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              WhatsApp Fee Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Featured Low Deposit UK Universities */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
            Top Options
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
            Affordable UK Universities by CAS Deposit
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'BPP University',
              location: 'London, Birmingham, Manchester',
              deposit: '£3,000 Initial Deposit',
              tuition: '£12,000 – £14,500 / yr',
              highlight: 'Fast-track CAS, MOI accepted for degree holders, popular for Law, Healthcare & Business.',
              link: '/universities/bpp-university',
            },
            {
              name: 'Ulster University (London Campus)',
              location: 'Stratford & Holborn, London',
              deposit: '£4,000 – £5,000 Initial Deposit',
              tuition: 'From £10,625 (after scholarship)',
              highlight: 'Generous automatic merit discounts, accept up to 5-year study gaps, prime London location.',
              link: '/universities/ulster-university',
            },
            {
              name: 'University of Roehampton',
              location: 'South West London',
              deposit: '£4,000 – £5,000 Initial Deposit',
              tuition: '£13,500 – £15,500 / yr',
              highlight: 'Beautiful parkland campus in London with flexible semester installment options.',
              link: '/universities/university-of-roehampton',
            },
            {
              name: 'De Montfort University (DMU)',
              location: 'Leicester, UK',
              deposit: '£4,000 Initial Deposit',
              tuition: '£14,500 – £16,500 / yr',
              highlight: 'Free internal English test, high graduate employability, low living costs outside London.',
              link: '/universities/de-montfort-university',
            },
            {
              name: 'Anglia Ruskin University (ARU)',
              location: 'Cambridge & Chelmsford',
              deposit: '£4,000 – £5,000 Initial Deposit',
              tuition: '£14,000 – £16,500 / yr',
              highlight: 'Top UK modern university with early payment bursaries and strong research credentials.',
              link: '/universities/anglia-ruskin-university',
            },
            {
              name: 'Abertay University',
              location: 'Dundee, Scotland',
              deposit: '£4,000 Initial Deposit',
              tuition: '£15,000 – £16,500 / yr',
              highlight: 'Up to £3,000 annual scholarship, lower living costs, leading European video games institute.',
              link: '/universities/abertay-university',
            },
          ].map((uni, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="inline-block bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {uni.deposit}
                </span>
                <h3 className="text-lg font-bold text-[#06241B] mb-1">{uni.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{uni.location}</p>
                <p className="text-xs font-semibold text-emerald-700 mb-2">Tuition: {uni.tuition}</p>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">{uni.highlight}</p>
              </div>
              <Link
                href={uni.link}
                className="text-xs font-bold text-[#073224] hover:text-emerald-700 underline underline-offset-4"
              >
                View University Details &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Installment Plan Breakdown */}
      <section className="py-16 bg-[#F4F9F6] border-y border-emerald-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest block mb-1">
              Payment Flexibility
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#06241B]">
              How UK University Tuition Installments Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
              <span className="text-3xl font-black text-emerald-300 block mb-2">01</span>
              <h3 className="font-bold text-base text-[#06241B] mb-2">Before CAS (Deposit)</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Pay your initial CAS deposit of £3,000 to £5,000 directly to the university account to trigger your final CAS letter.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
              <span className="text-3xl font-black text-emerald-300 block mb-2">02</span>
              <h3 className="font-bold text-base text-[#06241B] mb-2">At Campus Enrolment</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Upon arrival in the UK, make your first semester payment (or arrange a direct debit payment schedule with the finance desk).
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
              <span className="text-3xl font-black text-emerald-300 block mb-2">03</span>
              <h3 className="font-bold text-base text-[#06241B] mb-2">Termly Installments</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Pay the remainder across 2 to 4 interest-free installments while earning money through approved 20 hrs/week part-time employment.
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
            Find Universities That Fit Your Budget
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Submit your profile — our London admissions counselors will match you with low deposit universities within 24 hours.
          </p>
        </div>
        <ConsultationForm />
      </section>
    </div>
  )
}
