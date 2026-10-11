'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqs: FAQItem[] = [
  {
    category: 'English Proficiency (MOI / No IELTS)',
    question: 'Can I apply to UK universities without IELTS (using MOI or Internal Test)?',
    answer:
      'Yes! Many of our UK partner universities—including University of Portsmouth, Roehampton, South Wales, Bedfordshire, and Ulster—accept Medium of Instruction (MOI) certificates from recognized universities, as well as Duolingo, PTE, UKVI IELTS (including 5.5 overall options), or free internal university English waiver assessments.',
  },
  {
    category: 'Financial & Bank Statement (£ GBP)',
    question: 'How much bank balance in GBP (£) is required for the UK Student Visa (28-day rule)?',
    answer:
      'Under official UKVI guidelines, you must show your remaining 1st-year tuition fee in GBP (after deducting your CAS deposit & scholarship) plus 9 months of living expenses: £1,483/month (£13,347 total) inside London or £1,136/month (£10,224 total) outside London. These funds must be held continuously for at least 28 consecutive days in your own or your parents’ bank account.',
  },
  {
    category: 'Onshore UK Students & 2nd Master’s',
    question: 'Is my PSW ending soon? Can I apply for a 2nd Master’s inside the UK with a low CAS deposit?',
    answer:
      'Yes! For onshore international students whose Graduate Route (PSW) visa is ending soon, partner institutions like BPP University offer an 18-month Master’s course granting a 22-month visa with a reduced total tuition fee of £12,500, a CAS deposit of only £3,000, no CAS interview, Offer Letter in 2 days, and CAS within 10 days.',
  },
  {
    category: 'Scholarships & £0 Agency Fee',
    question: 'Do I have to pay any agency or processing fees to Sage Roots International?',
    answer:
      'No—our entire end-to-end service (profile assessment, university application, SOP review, automatic scholarship matching up to £10,000, Pre-CAS mock interviews, and UKVI visa filing) is 100% free (£0 agency fee) for students applying to our partner universities.',
  },
  {
    category: 'Part-Time Job & Career Support',
    question: 'Does Sage Roots International provide part-time job support in London for enrolled students?',
    answer:
      'Yes. Because our head office is located at 44 Broadway, Stratford, London E15 1XH, we provide dedicated onshore career mentorship, free Care & Support sector training, UK CV preparation, and verified part-time job support (including stadium, hospitality, and event roles) to students who process their university admissions through us.',
  },
  {
    category: 'Cyprus, Malta & Dubai (UAE) Pathways',
    question: 'What are the tuition fees in GBP (£) for studying in Cyprus, Malta, or Dubai UK Branch Campuses?',
    answer:
      'For students seeking affordable European or fast-visa alternatives: Cyprus tuition ranges from £3,000 to £6,400/year; Malta (English-speaking Schengen country) ranges from £4,250 to £9,800/year; and Dubai UK Branch Campuses (offering identical British degree certificates with 2–4 week visa processing and no 28-day bank maturity rule) range from £8,000 to £15,800/year.',
  },
  {
    category: 'Study Gap & Eligibility',
    question: 'Is a study gap accepted for UK Undergraduate or Master’s programs?',
    answer:
      'Yes. For Undergraduate programs, up to 2–3 years of study gap is widely accepted. For Postgraduate (Master’s) programs, study gaps of 5–10+ years are routinely accepted (such as Ulster University accepting up to 5 years gap with £10,625 net tuition) when supported by work experience and a strong Statement of Purpose.',
  },
  {
    category: 'Post-Study Work (Graduate Route)',
    question: 'Does the UK still offer the Graduate Route (PSW) work visa after graduation?',
    answer:
      'Yes! International students who successfully complete an eligible UK Bachelor’s or Master’s degree qualify for the Graduate Route (Post-Study Work) visa (and up to 3 years for PhD graduates), allowing full-time unrestricted employment in the United Kingdom after graduation.',
  },
]

const faqSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx))
  }

  return (
    <section
      className="py-20 bg-white border-t border-emerald-100/60"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-brand-magenta font-bold text-xs tracking-widest uppercase mb-2">
            Got Questions?
          </p>
          <h2 id="faq-heading" className="text-brand-dark font-black text-3xl sm:text-4xl">
            Frequently Asked UK, Europe &amp; Visa Questions
          </h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed">
            Clear, transparent answers in GBP (£) to the most important questions asked by students and parents regarding UK admissions, MOI, 28-day bank statements, scholarships, and global study pathways.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-emerald-500/40 bg-[#F4F9F6] shadow-md shadow-emerald-950/5'
                    : 'border-gray-200 bg-white hover:border-emerald-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none"
                >
                  <div className="flex items-start gap-3.5">
                    <span
                      className={`mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors ${
                        isOpen
                          ? 'bg-[#042017] text-emerald-400'
                          : 'bg-emerald-50 text-brand-royal'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <div>
                      <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-brand-magenta mb-1">
                        {faq.category}
                      </span>
                      <h3 className="font-bold text-brand-dark text-base sm:text-lg leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#042017] text-white rotate-180'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 pl-16 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-emerald-100/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom reassurance banner */}
        <div className="mt-10 bg-gradient-to-r from-[#042017] via-[#073224] to-[#0A4431] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="font-bold text-base sm:text-lg text-white">
              Still have a specific question about your profile or GBP bank funds?
            </h4>
            <p className="text-emerald-100/80 text-xs sm:text-sm mt-1">
              Speak directly with our senior UK compliance &amp; admissions counselors in Stratford, London for free.
            </p>
          </div>
          <a
            href="#consultation"
            className="w-full sm:w-auto text-center whitespace-nowrap bg-brand-magenta hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition shadow-lg shadow-emerald-950/30"
          >
            Ask an Advisor Free
          </a>
        </div>
      </div>
    </section>
  )
}
