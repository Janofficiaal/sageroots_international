'use client'

import { useState } from 'react'
import Link from 'next/link'

interface IntakeDetail {
  id: 'september' | 'january' | 'may'
  name: string
  badge: string
  status: string
  courseAvailability: string
  overview: string
  milestones: {
    phase: string
    window: string
    action: string
  }[]
  popularUniversities: { name: string; slug: string }[]
}

const INTAKES: IntakeDetail[] = [
  {
    id: 'september',
    name: 'September / Autumn Intake',
    badge: 'Primary UK Intake',
    status: 'Applications Open Now',
    courseAvailability: '100% of Undergraduate, Postgraduate, Foundation & Research Programmes',
    overview:
      'September is the main academic intake across all British universities, offering the widest selection of degree programmes, maximum Vice-Chancellor merit scholarships, and campus accommodation.',
    milestones: [
      {
        phase: '01. Application & SOP Submission',
        window: 'January – June',
        action: 'Submit academic transcripts, passport, CV, and Statement of Purpose for priority offer letters.',
      },
      {
        phase: '02. Conditional / Unconditional Offer',
        window: 'Within 5 – 15 Working Days',
        action: 'Receive official university offer letter and automatic scholarship assessment.',
      },
      {
        phase: '03. Pre-CAS Interview & Tuition Deposit',
        window: 'May – July',
        action: 'Complete 1-on-1 mock interview training, pass university Pre-CAS check, and transfer CAS deposit.',
      },
      {
        phase: '04. 28-Day Bank Statement & Visa Filing',
        window: 'June – August',
        action: 'Verify 28-day UKVI maintenance funds, receive CAS, pay IHS fee, and attend VFS biometrics.',
      },
      {
        phase: '05. UK Arrival & Enrolment',
        window: 'September',
        action: 'Fly to the United Kingdom, complete campus enrolment, and attend International Welcome Week.',
      },
    ],
    popularUniversities: [
      { name: 'The University of Manchester', slug: 'university-of-manchester' },
      { name: 'University of Greenwich', slug: 'university-of-greenwich' },
      { name: 'University of Portsmouth', slug: 'university-of-portsmouth' },
      { name: "Queen's University Belfast", slug: 'queens-university-belfast' },
    ],
  },
  {
    id: 'january',
    name: 'January / Winter Intake',
    badge: 'Secondary Major Intake',
    status: 'Applications Open Now',
    courseAvailability: 'Postgraduate Master’s, Foundation Pathways & Selected Bachelor’s Degrees',
    overview:
      'Ideal for students who missed the September cycle or needed additional time to complete degree transcripts, IELTS/MOI certificates, or 28-day bank fund maturity.',
    milestones: [
      {
        phase: '01. Application & Document Filing',
        window: 'July – October',
        action: 'Shortlist January-intake universities and submit complete application package.',
      },
      {
        phase: '02. Offer Letter & Condition Clearance',
        window: 'August – November',
        action: 'Fulfil English proficiency (IELTS/PTE/MOI) and academic transcript conditions.',
      },
      {
        phase: '03. Pre-CAS Credibility Interview & Deposit',
        window: 'October – November',
        action: 'Clear university Pre-CAS interview and pay initial tuition fee deposit via bank student file.',
      },
      {
        phase: '04. CAS Issuance & UKVI Visa Submission',
        window: 'November – December',
        action: 'Submit online UK Student Visa application with 28-day matured bank statement and TB certificate.',
      },
      {
        phase: '05. UK Arrival & Winter Term Start',
        window: 'January',
        action: 'Arrive in the UK and begin full-time academic classes.',
      },
    ],
    popularUniversities: [
      { name: 'Coventry University', slug: 'coventry-university' },
      { name: 'University of Hertfordshire', slug: 'university-of-hertfordshire' },
      { name: 'Ulster University', slug: 'ulster-university' },
      { name: 'University of Roehampton', slug: 'university-of-roehampton' },
    ],
  },
  {
    id: 'may',
    name: 'May / Spring Intake',
    badge: 'Fast-Track Intake',
    status: 'Limited Seats Available',
    courseAvailability: 'Selected MSc Business, Management, Computing, IT & MBA Programmes',
    overview:
      'A focused fast-track intake offered by selected career-oriented UK universities, allowing students to begin their UK Master’s or Top-Up degree without waiting until September.',
    milestones: [
      {
        phase: '01. Fast-Track Application Submission',
        window: 'December – February',
        action: 'Apply early to secure limited May-intake seats in Business, Computing, and Project Management.',
      },
      {
        phase: '02. Priority Offer & Pre-CAS Interview',
        window: 'January – March',
        action: 'Complete rapid condition clearance and pass Pre-CAS interview.',
      },
      {
        phase: '03. Tuition Deposit & Final CAS',
        window: 'February – March',
        action: 'Transfer CAS deposit and obtain Confirmation of Acceptance for Studies.',
      },
      {
        phase: '04. UKVI Student Visa & Biometrics',
        window: 'March – April',
        action: 'Complete VFS biometric appointment with verified 28-day bank statement.',
      },
      {
        phase: '05. UK Arrival & Summer Semester Start',
        window: 'May',
        action: 'Travel to the UK and commence Spring/Summer cohort studies.',
      },
    ],
    popularUniversities: [
      { name: 'Coventry University', slug: 'coventry-university' },
      { name: 'University of East London', slug: 'university-of-east-london' },
      { name: 'University of Bedfordshire', slug: 'university-of-bedfordshire' },
      { name: 'Ulster University', slug: 'ulster-university' },
    ],
  },
]

export default function IntakeCalendar() {
  const [selectedId, setSelectedId] = useState<'september' | 'january' | 'may'>('september')
  const activeIntake = INTAKES.find((i) => i.id === selectedId) || INTAKES[0]

  return (
    <section
      id="uk-intake-calendar"
      className="py-20 bg-white border-b border-emerald-100"
      aria-labelledby="intake-calendar-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-brand-magenta font-bold text-xs tracking-widest uppercase mb-2">
              Academic Admission Calendar
            </p>
            <h2
              id="intake-calendar-heading"
              className="text-[#06241B] font-black text-3xl sm:text-4xl"
            >
              UK University Intakes &amp; Application Deadlines
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
              Plan your UK application ahead of time. Select your target intake below to view key admission, Pre-CAS, tuition deposit, and UKVI visa submission windows.
            </p>
          </div>

          {/* Intake Tabs */}
          <div className="flex flex-wrap gap-2 bg-[#F4F9F6] p-1.5 rounded-2xl border border-emerald-100">
            {INTAKES.map((intake) => {
              const isSelected = intake.id === selectedId
              return (
                <button
                  key={intake.id}
                  type="button"
                  onClick={() => setSelectedId(intake.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isSelected
                      ? 'bg-[#073224] text-white shadow-md'
                      : 'text-[#06241B] hover:bg-emerald-100/60'
                  }`}
                >
                  {intake.name.split('/')[0].trim()} Intake
                </button>
              )
            })}
          </div>
        </div>

        {/* Active Intake Board */}
        <div className="bg-[#F8FAF9] rounded-3xl border border-emerald-100 overflow-hidden shadow-sm">
          {/* Top Overview Banner */}
          <div className="bg-[#073224] text-white p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="bg-emerald-400 text-[#042017] text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                  {activeIntake.badge}
                </span>
                <span className="bg-white/10 text-emerald-200 text-xs font-semibold px-3 py-1 rounded-full">
                  {activeIntake.status}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                {activeIntake.name}
              </h3>
              <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed">
                {activeIntake.overview}
              </p>
            </div>

            <div className="bg-white/10 border border-white/15 rounded-2xl p-4 sm:p-5 lg:w-80 flex-shrink-0">
              <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 mb-1">
                Programme Availability
              </p>
              <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                {activeIntake.courseAvailability}
              </p>
            </div>
          </div>

          {/* 5-Stage Timeline Table */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {activeIntake.milestones.map((m) => (
                <div
                  key={m.phase}
                  className="bg-white rounded-2xl p-5 border border-emerald-100 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 bg-[#ECFDF5] px-2.5 py-1 rounded-md mb-3">
                      {m.window}
                    </span>
                    <h4 className="font-black text-[#06241B] text-sm mb-2 leading-snug">
                      {m.phase}
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {m.action}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Bar: Popular Universities for this Intake + CTA */}
            <div className="mt-6 pt-6 border-t border-emerald-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-gray-500 mr-1">
                  Key Universities for {activeIntake.name.split('/')[0].trim()}:
                </span>
                {activeIntake.popularUniversities.map((u) => (
                  <Link
                    key={u.slug}
                    href={`/universities/${u.slug}`}
                    className="text-xs font-semibold text-[#073224] bg-white hover:bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg transition"
                  >
                    {u.name}
                  </Link>
                ))}
              </div>

              <a
                href="#consultation"
                className="inline-block text-center bg-brand-magenta hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition flex-shrink-0"
              >
                Apply for {activeIntake.name.split('/')[0].trim()} Intake
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
