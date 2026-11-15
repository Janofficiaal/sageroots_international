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
    id: 'january',
    name: 'January 2027 Intake',
    badge: 'Immediate Priority Intake',
    status: 'Applications & Fast-Track CAS Open',
    courseAvailability: 'Postgraduate Master’s, Foundation Pathways & Selected Bachelor’s Degrees',
    overview:
      'The January 2027 intake is in peak enrollment right now. Ideal for students who have degree transcripts, IELTS/MOI certificates, or 28-day bank fund maturity ready for immediate offer letter and CAS issuance.',
    milestones: [
      {
        phase: '01. Fast-Track Application & Document Filing',
        window: 'October – November 2026',
        action: 'Submit complete academic transcripts, passport, and CV for 48-hour offer letter turnaround.',
      },
      {
        phase: '02. Condition Clearance & MOI Assessment',
        window: 'November 2026',
        action: 'Clear academic or English requirements via IELTS, PTE, or Medium of Instruction (MOI) verification.',
      },
      {
        phase: '03. Pre-CAS Interview & CAS Deposit',
        window: 'November – December 2026',
        action: 'Complete mock Pre-CAS interview preparation with our London desk and pay initial tuition deposit (£3,000–£5,000).',
      },
      {
        phase: '04. 28-Day Bank Statement & Visa Filing',
        window: 'December 2026',
        action: 'Submit online UK Student Visa application with 28-day matured bank statement and attend VFS biometrics.',
      },
      {
        phase: '05. UK Arrival & Classes Begin',
        window: 'January 2027',
        action: 'Arrive in the UK, complete campus registration, and begin full-time academic classes.',
      },
    ],
    popularUniversities: [
      { name: 'Ulster University (London & Birmingham)', slug: 'ulster-university' },
      { name: 'BPP University (London)', slug: 'bpp-university' },
      { name: 'Coventry University', slug: 'coventry-university' },
      { name: 'University of Hertfordshire', slug: 'university-of-hertfordshire' },
    ],
  },
  {
    id: 'may',
    name: 'April / May 2027 Intake',
    badge: 'Spring Fast-Track Intake',
    status: 'Early Applications Open',
    courseAvailability: 'MSc Business Management, Computing, Cyber Security, Project Management & MBA',
    overview:
      'A focused spring fast-track intake offered by selected career-oriented UK universities, allowing students to begin their UK Master’s or Top-Up degree without waiting until autumn.',
    milestones: [
      {
        phase: '01. Priority Application Submission',
        window: 'December 2026 – February 2027',
        action: 'Apply early to secure limited May 2027 seats in high-demand Business, Computing, and Healthcare courses.',
      },
      {
        phase: '02. Priority Offer & Pre-CAS Interview',
        window: 'January – March 2027',
        action: 'Complete rapid condition clearance, scholarship matching, and pass university Pre-CAS interview.',
      },
      {
        phase: '03. Tuition Deposit & Final CAS',
        window: 'February – March 2027',
        action: 'Transfer CAS deposit and obtain official Confirmation of Acceptance for Studies.',
      },
      {
        phase: '04. UKVI Student Visa & Biometrics',
        window: 'March – April 2027',
        action: 'Complete VFS biometric appointment with verified 28-day bank statement.',
      },
      {
        phase: '05. UK Arrival & Summer Semester Start',
        window: 'April – May 2027',
        action: 'Travel to the UK, attend International Welcome Week, and begin Spring/Summer semester.',
      },
    ],
    popularUniversities: [
      { name: 'Anglia Ruskin University', slug: 'anglia-ruskin-university' },
      { name: 'University of Portsmouth', slug: 'university-of-portsmouth' },
      { name: 'De Montfort University', slug: 'de-montfort-university' },
      { name: 'University of Roehampton', slug: 'university-of-roehampton' },
    ],
  },
  {
    id: 'september',
    name: 'September 2027 Intake',
    badge: 'Major Autumn Intake',
    status: 'Pre-Registration & Course Matching Open',
    courseAvailability: '100% of All Undergraduate, Postgraduate, Foundation & PhD Degrees',
    overview:
      'September 2027 is the flagship academic intake across all British universities, offering the widest choice of 139+ institutions, maximum Vice-Chancellor merit scholarships (up to £10,000), and guaranteed university accommodation.',
    milestones: [
      {
        phase: '01. Course Shortlisting & Early Applications',
        window: 'January – May 2027',
        action: 'Submit academic transcripts and Statement of Purpose (SOP) for maximum scholarship eligibility.',
      },
      {
        phase: '02. Unconditional Offer Letters',
        window: 'Within 5 – 15 Working Days',
        action: 'Receive official university offer letters and automatic early-bird scholarship discounts.',
      },
      {
        phase: '03. Pre-CAS Interview & CAS Deposit',
        window: 'May – July 2027',
        action: 'Complete 1-on-1 mock interview training with our London team and transfer tuition deposit.',
      },
      {
        phase: '04. 28-Day Bank Statement & Visa Filing',
        window: 'June – August 2027',
        action: 'Verify 28-day UKVI maintenance funds, receive CAS, and attend VFS biometrics.',
      },
      {
        phase: '05. UK Arrival & Autumn Enrolment',
        window: 'September 2027',
        action: 'Fly to the United Kingdom, complete campus enrolment, and start your degree journey.',
      },
    ],
    popularUniversities: [
      { name: 'The University of Manchester', slug: 'university-of-manchester' },
      { name: 'University of Greenwich', slug: 'university-of-greenwich' },
      { name: 'Abertay University', slug: 'abertay-university' },
      { name: "Queen's University Belfast", slug: 'queens-university-belfast' },
    ],
  },
]

export default function IntakeCalendar() {
  const [selectedId, setSelectedId] = useState<'september' | 'january' | 'may'>('january')
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
