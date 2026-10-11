'use client'

import { useState } from 'react'

interface RoadmapStep {
  step: string
  title: string
  duration: string
  subtitle: string
  description: string
  checklist: string[]
}

const ROADMAP_STEPS: RoadmapStep[] = [
  {
    step: '01',
    title: 'Profile Assessment & University Shortlisting',
    duration: 'Day 1 – 3',
    subtitle: 'Free 1-on-1 Counselling & Scholarship Matching',
    description:
      'Our senior UK education counsellors evaluate your academic transcripts, English proficiency (IELTS/PTE/Duolingo/MOI), study gap, and budget to shortlist the best-fit UK universities.',
    checklist: [
      'Academic transcript & certificate evaluation',
      'Course & intake selection (Sept / Jan / May)',
      'Automatic & merit scholarship identification',
    ],
  },
  {
    step: '02',
    title: 'Application Submission & Offer Letter',
    duration: 'Week 1 – 3',
    subtitle: 'SOP Guidance & Fast-Track University Portal Submission',
    description:
      'We prepare and submit a complete, error-free application directly to your chosen UK universities and help craft a compelling Statement of Purpose (SOP) to secure your Offer Letter quickly.',
    checklist: [
      'Tailored Statement of Purpose (SOP) & CV review',
      'Academic & employer reference letter formatting',
      'Receive Conditional or Unconditional Offer Letter',
    ],
  },
  {
    step: '03',
    title: 'Pre-CAS & Credibility Interview Prep',
    duration: 'Week 3 – 5',
    subtitle: 'Mock Interviews & Condition Clearance',
    description:
      'Before issuing your CAS, UK universities conduct a Pre-CAS credibility interview. Our team runs realistic 1-on-1 mock sessions so you can answer every question with confidence.',
    checklist: [
      '1-on-1 mock Pre-CAS interview training',
      'University course modules & career plan briefing',
      'Fulfilment of academic & English conditions',
    ],
  },
  {
    step: '04',
    title: 'Tuition Deposit & Final CAS Letter',
    duration: 'Week 5 – 7',
    subtitle: 'Official Bank Transfer & CAS Verification',
    description:
      'Once all conditions are met, you pay your initial tuition deposit directly to the university via official Student File bank transfer, and receive your Confirmation of Acceptance for Studies (CAS).',
    checklist: [
      'Official bank student file & Flywire/Convera guidance',
      '28-day bank statement maturation monitoring',
      'Official CAS number issued by the UK university',
    ],
  },
  {
    step: '05',
    title: 'UKVI Visa Application, IHS & Biometrics',
    duration: 'Week 7 – 9',
    subtitle: 'Zero-Error Visa Filing & VFS Appointment',
    description:
      'Our dedicated visa compliance team completes your UK Student Visa application, calculates your Immigration Health Surcharge (IHS), verifies your TB test & bank statement, and books your VFS biometrics.',
    checklist: [
      'UKVI approved clinic TB test certificate',
      '28-day matured bank statement & financial compliance check',
      'IHS payment, online visa submission & VFS biometrics',
    ],
  },
  {
    step: '06',
    title: 'Visa Success, Accommodation & Fly to UK',
    duration: 'Week 9 – 11',
    subtitle: 'Pre-Departure Briefing & UK Arrival Support',
    description:
      'Celebrate your UK Student Visa approval! We assist you with booking student accommodation, flight ticketing, eVisa setup, and airport pickup guidance in the UK.',
    checklist: [
      'UK eVisa / UKVI account setup & share code guidance',
      'University hall or private student accommodation booking',
      'Pre-departure orientation & NI/Bank account guide in UK',
    ],
  },
]

export default function VisaRoadmap() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const activeStep = ROADMAP_STEPS[activeIndex]

  return (
    <section
      className="py-20 bg-[#F4F9F6] relative overflow-hidden"
      aria-labelledby="visa-roadmap-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block bg-emerald-700/10 border border-emerald-700/20 text-[#073224] text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Step-By-Step Journey
          </div>
          <h2
            id="visa-roadmap-heading"
            className="text-brand-dark font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4"
          >
            UK Application &amp; Student Visa Roadmap
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            From your first free counselling session to landing in the UK — explore our structured 6-stage admission and visa success process.
          </p>
        </div>

        {/* Interactive Step Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {ROADMAP_STEPS.map((item, idx) => {
            const isActive = idx === activeIndex
            const isCompleted = idx < activeIndex

            return (
              <button
                key={item.step}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`group text-left p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#073224] text-white border-[#073224] shadow-xl shadow-[#073224]/20 -translate-y-1'
                    : isCompleted
                    ? 'bg-emerald-50 text-[#073224] border-emerald-200 hover:bg-emerald-100/70'
                    : 'bg-white text-brand-dark border-gray-200 hover:border-emerald-600/40'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span
                    className={`text-xs font-black px-2.5 py-1 rounded-lg ${
                      isActive
                        ? 'bg-emerald-400 text-[#042017]'
                        : isCompleted
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    STEP {item.step}
                  </span>
                </div>
                <div>
                  <p
                    className={`font-bold text-xs sm:text-sm line-clamp-2 leading-snug ${
                      isActive ? 'text-white' : 'text-brand-dark'
                    }`}
                  >
                    {item.title}
                  </p>
                  <p
                    className={`text-[11px] mt-1.5 font-medium ${
                      isActive ? 'text-emerald-200' : 'text-gray-400'
                    }`}
                  >
                    {item.duration}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Featured Active Step Spotlight Card */}
        <div className="bg-[#073224] rounded-3xl p-6 sm:p-10 text-white shadow-2xl border border-emerald-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-emerald-400 text-[#042017] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  Stage {activeStep.step} of 06
                </span>
                <span className="bg-white/10 text-emerald-200 text-xs font-semibold px-3.5 py-1.5 rounded-full">
                  Estimated Timeline: {activeStep.duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {activeStep.title}
              </h3>
              <p className="text-emerald-300 font-semibold text-sm">
                {activeStep.subtitle}
              </p>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                {activeStep.description}
              </p>

              {/* Step Navigation Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                {activeIndex > 0 && (
                  <button
                    type="button"
                    onClick={() => setActiveIndex(activeIndex - 1)}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
                  >
                    Previous Step
                  </button>
                )}
                {activeIndex < ROADMAP_STEPS.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setActiveIndex(activeIndex + 1)}
                    className="px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-[#042017] text-xs font-extrabold transition-colors"
                  >
                    Next Step: {ROADMAP_STEPS[activeIndex + 1].title.split('&')[0]}
                  </button>
                ) : (
                  <a
                    href="#consultation"
                    className="px-5 py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-[#042017] text-xs font-extrabold transition-colors"
                  >
                    Start Step 01 Today
                  </a>
                )}
              </div>
            </div>

            {/* Right Key Deliverables Box */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-4">
                Key Checklist for Stage {activeStep.step}
              </p>
              <ul className="space-y-3.5">
                {activeStep.checklist.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-2" />
                    <span className="text-sm text-white/95 font-medium leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-white/15 flex items-center justify-between">
                <span className="text-xs text-emerald-200/80">
                  Need help with this step?
                </span>
                <a
                  href="#consultation"
                  className="text-xs font-bold text-emerald-300 hover:text-white underline underline-offset-4"
                >
                  Speak to an Advisor
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
