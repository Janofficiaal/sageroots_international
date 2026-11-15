import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertCircle, Award, CheckCircle2, ShieldCheck, Banknote } from 'lucide-react'
import EligibilityChecker from '@/components/home/EligibilityChecker'
import BankCalculator from '@/components/home/BankCalculator'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'UK University Scholarships up to £10,000 (£ GBP) & Student Finance | Sage Roots International',
  description:
    'Explore UK university scholarships up to £10,000 for international students. Check eligibility, Vice-Chancellor merit awards, early-bird fee discounts, and calculate your UKVI 28-day bank balance.',
  keywords: [
    'UK university scholarships',
    'UK scholarships for international students',
    'Vice Chancellor scholarship UK',
    'merit scholarship UK universities',
    'study in UK without IELTS scholarship',
    'UKVI 28 day bank statement calculator GBP',
    'CAS deposit discount UK',
    'best study abroad consultancy in the world',
    'UK student finance guidance',
    'scholarships for Bangladeshi students in UK',
  ],
  alternates: {
    canonical: 'https://www.sagerootsinternational.co.uk/scholarships',
  },
  openGraph: {
    title: 'UK University Scholarships up to £10,000 & Bank Calculator | Sage Roots International',
    description:
      'Assess your eligibility for up to £10,000 in British university scholarships, automatic bursaries, and calculate UKVI 28-day bank requirements with £0 agency fee.',
    url: 'https://www.sagerootsinternational.co.uk/scholarships',
    siteName: 'Sage Roots International',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'UK University Scholarships & Financial Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK University Scholarships & Financial Calculator | Sage Roots International',
    description:
      'Calculate your UK student visa financial requirements and check automatic scholarship eligibility.',
    images: ['/images/sri-logo.jpg'],
  },
}

const scholarshipsJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
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
          name: 'Scholarships & Finance',
          item: 'https://www.sagerootsinternational.co.uk/scholarships',
        },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'UK University International Scholarships & Bursaries',
      description: 'Funding opportunities and tuition reductions available across UK partner institutions.',
      itemListElement: [
        {
          '@type': 'FinancialProduct',
          position: 1,
          name: 'Vice-Chancellor International Excellence Scholarship',
          description: 'Merit-based scholarship awarding up to £5,000 to £10,000 tuition fee discount for outstanding academic profiles.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Sage Roots International Partner Universities',
            url: 'https://www.sagerootsinternational.co.uk',
          },
        },
        {
          '@type': 'FinancialProduct',
          position: 2,
          name: 'Automatic South Asia & International Merit Award',
          description: 'Automatic £1,500 to £3,000 tuition fee reduction granted on offer letter issuance based on Bachelor or HSC CGPA.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Sage Roots International Partner Universities',
            url: 'https://www.sagerootsinternational.co.uk',
          },
        },
        {
          '@type': 'FinancialProduct',
          position: 3,
          name: 'Early Bird Tuition Payment Bursary',
          description: '£500 to £1,500 fee deduction for students paying their initial CAS deposit before published university deadlines.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Sage Roots International Partner Universities',
            url: 'https://www.sagerootsinternational.co.uk',
          },
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I apply for a UK university scholarship through Sage Roots International?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When you apply through Sage Roots International, our team automatically submits your academic profile for all eligible university merit scholarships and regional bursaries at £0 agency fee.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I receive a UK scholarship if I apply with MOI without IELTS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Most UK partner universities evaluate scholarship eligibility based on academic merit (CGPA/marks), meaning students admitted via an English Medium of Instruction (MOI) certificate remain fully eligible for merit awards.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does a scholarship affect my UKVI 28-day bank statement requirement?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Any official scholarship awarded by the university is deducted directly from the tuition balance listed on your CAS, reducing the total living and tuition funds you must show in your 28-day bank statement.',
          },
        },
      ],
    },
  ],
}

export default function ScholarshipsPage() {
  return (
    <div className="bg-[#FAFDFB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scholarshipsJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] py-24 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-xs font-semibold text-emerald-300 mb-6 backdrop-blur-md">
            <Award className="w-4 h-4 text-emerald-400" />
            Automatic Merit Scholarships &amp; Financial Assessment
          </div>
          <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl mb-4 tracking-tight">
            UK Scholarships &amp; Student Finance
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover potential scholarship opportunities up to <strong>£10,000</strong>, check your admission eligibility, and calculate your exact <strong>UKVI 28-day bank balance</strong> in GBP.
          </p>
        </div>
      </section>

      {/* Interactive Tools */}
      <EligibilityChecker />
      <BankCalculator />

      {/* Featured Snippet Position 0 Comparison Table */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-emerald-100 rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200 uppercase tracking-wider mb-2">
                Official 2027 Admissions Matrix
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#042017]">
                UK University Tuition, Scholarships &amp; CAS Deposit Comparison 2027
              </h2>
              <p className="text-gray-600 text-sm mt-1 max-w-2xl">
                Quick comparison table of top UK institutions popular with international students for <strong>January 2027</strong>, <strong>April/May 2027</strong>, and <strong>September 2027</strong> intakes. Evaluated and processed with <strong>£0 agency fee</strong> by Sage Roots International London team.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-magenta hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition shadow-md whitespace-nowrap self-start md:self-auto"
            >
              Check My Scholarship Eligibility <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <caption className="sr-only">
                UK University Tuition Fee, Maximum Scholarship and Minimum CAS Deposit Comparison for 2027 Intakes
              </caption>
              <thead>
                <tr className="bg-[#042017] text-white">
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">University &amp; Campuses</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">Location</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">Annual Tuition (£ GBP)</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">Max Scholarship (£)</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">Min CAS Deposit</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">MOI Accepted?</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">Active 2027 Intakes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {[
                  {
                    name: 'Ulster University',
                    slug: 'ulster-university',
                    location: 'London, Birmingham & Belfast',
                    tuition: '£10,625 – £16,000',
                    scholarship: 'Up to £2,000',
                    deposit: '£3,000 – £5,000',
                    moi: 'Yes (Up to 5-yr Gap)',
                    intakes: 'Jan, May, Sep 2027',
                    highlight: true,
                  },
                  {
                    name: 'BPP University',
                    slug: 'bpp-university',
                    location: 'London, Manchester & Birmingham',
                    tuition: '£12,500 – £14,500',
                    scholarship: 'Up to £3,000',
                    deposit: '£3,000 (Very Low)',
                    moi: 'Yes (2nd Master’s Allowed)',
                    intakes: 'Jan, May, Sep 2027',
                    highlight: true,
                  },
                  {
                    name: 'University of Greenwich',
                    slug: 'university-of-greenwich',
                    location: 'London & Medway',
                    tuition: '£15,100 – £17,500',
                    scholarship: 'Up to £3,000',
                    deposit: '£3,000 – £4,000',
                    moi: 'Yes (Specific Universities)',
                    intakes: 'Jan, Sep 2027',
                    highlight: false,
                  },
                  {
                    name: 'University of Hertfordshire',
                    slug: 'university-of-hertfordshire',
                    location: 'Hatfield (Greater London)',
                    tuition: '£14,750 – £16,500',
                    scholarship: 'Up to £4,000',
                    deposit: '£5,000',
                    moi: 'Yes (MOI + Interview)',
                    intakes: 'Jan, Sep 2027',
                    highlight: false,
                  },
                  {
                    name: 'Coventry University',
                    slug: 'coventry-university',
                    location: 'Coventry & London',
                    tuition: '£15,300 – £18,600',
                    scholarship: 'Up to £2,500',
                    deposit: '£4,000',
                    moi: 'Yes (MOI Accepted)',
                    intakes: 'Jan, May, Sep 2027',
                    highlight: false,
                  },
                  {
                    name: 'University of Roehampton',
                    slug: 'university-of-roehampton',
                    location: 'London',
                    tuition: '£14,500 – £16,500',
                    scholarship: 'Up to £4,000',
                    deposit: '£3,000 – £5,000',
                    moi: 'Yes (MOI Accepted)',
                    intakes: 'Jan, Apr, Sep 2027',
                    highlight: false,
                  },
                  {
                    name: 'University of Bedfordshire',
                    slug: 'university-of-bedfordshire',
                    location: 'Luton & London',
                    tuition: '£13,500 – £15,500',
                    scholarship: 'Up to £2,000',
                    deposit: '£3,000 – £4,000',
                    moi: 'Yes (Wide Acceptance)',
                    intakes: 'Jan, Sep 2027',
                    highlight: false,
                  },
                  {
                    name: 'University of Portsmouth',
                    slug: 'university-of-portsmouth',
                    location: 'Portsmouth (South Coast)',
                    tuition: '£16,200 – £19,200',
                    scholarship: 'Up to £3,000',
                    deposit: '£3,500 – £5,000',
                    moi: 'Yes (MOI Accepted)',
                    intakes: 'Jan, Sep 2027',
                    highlight: false,
                  },
                  {
                    name: 'University of Chester',
                    slug: 'university-of-chester',
                    location: 'Chester (North West)',
                    tuition: '£13,950 – £15,500',
                    scholarship: 'Up to £3,000',
                    deposit: '£3,000 – £5,000',
                    moi: 'Yes (MOI Accepted)',
                    intakes: 'Jan, Sep 2027',
                    highlight: false,
                  },
                  {
                    name: 'University of Sunderland',
                    slug: 'university-of-sunderland',
                    location: 'Sunderland & Canary Wharf London',
                    tuition: '£13,500 – £16,000',
                    scholarship: 'Up to £2,000',
                    deposit: '£3,500',
                    moi: 'Yes (MOI Accepted)',
                    intakes: 'Jan, Apr, Sep 2027',
                    highlight: false,
                  },
                  {
                    name: 'University of West London',
                    slug: 'university-of-west-london',
                    location: 'Ealing & Brentford, London',
                    tuition: '£14,250 – £16,000',
                    scholarship: 'Up to £2,000',
                    deposit: '£4,000',
                    moi: 'Yes (MOI Accepted)',
                    intakes: 'Jan, Sep 2027',
                    highlight: false,
                  },
                  {
                    name: 'Leeds Beckett University',
                    slug: 'leeds-beckett-university',
                    location: 'Leeds (Yorkshire)',
                    tuition: '£14,000 – £16,000',
                    scholarship: 'Up to £3,000',
                    deposit: '£4,000 – £5,000',
                    moi: 'Yes (MOI Accepted)',
                    intakes: 'Jan, Sep 2027',
                    highlight: false,
                  },
                ].map((row) => (
                  <tr
                    key={row.slug}
                    className={`hover:bg-emerald-50/50 transition-colors ${
                      row.highlight ? 'bg-emerald-50/30 font-medium' : ''
                    }`}
                  >
                    <th scope="row" className="p-3.5 sm:p-4 text-emerald-950">
                      <Link
                        href={`/universities/${row.slug}`}
                        className="text-emerald-700 hover:text-emerald-900 font-bold hover:underline"
                      >
                        {row.name}
                      </Link>
                    </th>
                    <td className="p-3.5 sm:p-4 text-gray-600">{row.location}</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-gray-900">{row.tuition}</td>
                    <td className="p-3.5 sm:p-4 font-bold text-emerald-700">{row.scholarship}</td>
                    <td className="p-3.5 sm:p-4 font-medium text-amber-700">{row.deposit}</td>
                    <td className="p-3.5 sm:p-4 text-gray-700">
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        {row.moi}
                      </span>
                    </td>
                    <td className="p-3.5 sm:p-4 text-xs font-semibold text-gray-800">{row.intakes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-gray-500 gap-2">
            <span>* Fees and scholarship awards are subject to university terms and applicant GPA/grades.</span>
            <Link
              href="/universities"
              className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1"
            >
              Browse all 139+ UK Partner Universities <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Scholarship Opportunities Information */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12">
          <div className="flex items-center gap-2 text-amber-800 font-bold text-sm mb-1">
            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>Important Scholarship Guidance</span>
          </div>
          <p className="text-amber-700 text-xs sm:text-sm leading-relaxed">
            Scholarship availability, eligibility criteria, and award values vary by university and intake cycle. Sage Roots International provides free profile assessment and direct scholarship matching to maximize your tuition discount.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-emerald-100 rounded-2xl p-8 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h2 className="text-[#06241B] font-black text-xl mb-3">University Merit Awards</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Many British universities offer merit-based bursaries ranging from £1,000 up to £10,000 for international undergraduate and postgraduate students. Eligibility is primarily evaluated based on your prior academic performance.
            </p>
            <p className="text-gray-500 text-xs">
              Sage Roots International submits automatic scholarship appeals alongside your university application.
            </p>
          </div>

          <div className="bg-white border border-emerald-100 rounded-2xl p-8 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
              <Banknote className="w-5 h-5" />
            </div>
            <h2 className="text-[#06241B] font-black text-xl mb-3">Early Payment &amp; Regional Discounts</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Universities frequently provide early-bird incentives between £500 and £2,000 for students who confirm their offer by paying their initial CAS tuition deposit ahead of deadline.
            </p>
            <p className="text-gray-500 text-xs">
              We help you plan payment timings to lock in the lowest possible overall tuition expenditure.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#042017] to-[#073224] rounded-2xl p-8 sm:p-10 text-center text-white shadow-xl">
          <h2 className="text-white font-black text-2xl sm:text-3xl mb-3">
            Want to Maximize Your UK Scholarship?
          </h2>
          <p className="text-emerald-100/80 text-sm sm:text-base mb-6 max-w-xl mx-auto">
            Speak directly with our Stratford, London admissions desk. We review your transcripts, identify matching bursaries, and file your university application 100% free of charge.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-magenta text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-600 transition-colors text-sm shadow-lg"
          >
            Get Free Scholarship Guidance
          </Link>
        </div>
      </section>

      <ConsultationForm />
    </div>
  )
}
