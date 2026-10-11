'use client'

import { useState } from 'react'
import Link from 'next/link'

const PRE_CAS_QUESTIONS = [
  {
    q: 'Why have you chosen to study in the United Kingdom over your home country or other destinations?',
    focus: 'Assesses genuine academic intent, UK degree duration advantage (1-year Master’s / 3-year Bachelor’s), and global recognition.',
  },
  {
    q: 'Why did you select this specific UK university and how did you compare it with at least two other universities?',
    focus: 'Tests whether you researched campus location, TEF teaching quality, tuition fees, and specific faculty strengths.',
  },
  {
    q: 'Can you name 4 to 5 core modules from your chosen course and explain how they align with your career plans?',
    focus: 'Verifies that you know the exact curriculum structure, assessment methods, and how the degree supports your future career.',
  },
  {
    q: 'How are your tuition fees and UKVI living maintenance costs being funded, and what is your sponsor’s annual income?',
    focus: 'Audits financial genuineness, relationship with your sponsor (parents), and awareness of the 28-day bank balance requirement.',
  },
  {
    q: 'If you have a study gap since your last qualification, how have you utilised that time professionally or academically?',
    focus: 'Ensures any gap is transparently explained with verifiable employment letters, internships, or skill development.',
  },
]

const MOI_UNIVERSITIES = [
  {
    name: 'Coventry University',
    city: 'Coventry & London',
    slug: 'coventry-university',
    policy: 'Conducts free internal English test (Spot Test) and accepts MOI for qualifying profiles.',
  },
  {
    name: 'University of Greenwich',
    city: 'London',
    slug: 'university-of-greenwich',
    policy: 'Accepts MOI from recognised universities (subject to graduation year & academic CGPA) or internal English test.',
  },
  {
    name: 'University of Hertfordshire',
    city: 'Hatfield',
    slug: 'university-of-hertfordshire',
    policy: 'Accepts Duolingo, PTE, UKVI IELTS, and selected English waiver pathways.',
  },
  {
    name: 'University of Portsmouth',
    city: 'Portsmouth',
    slug: 'university-of-portsmouth',
    policy: 'Accepts MOI for eligible Bachelor’s graduates along with Duolingo, PTE, and internal English assessment.',
  },
  {
    name: 'University of Roehampton',
    city: 'London',
    slug: 'university-of-roehampton',
    policy: 'Accepts MOI and internal university English waiver test for both January and September intakes.',
  },
  {
    name: 'University of South Wales',
    city: 'Cardiff & Newport',
    slug: 'university-of-south-wales',
    policy: 'MOI accepted from approved institutions with strong Pre-CAS interview performance.',
  },
]

const DOCUMENT_STAGES = [
  {
    stage: 'Stage 01',
    title: 'Offer Letter Application Documents',
    items: [
      'Valid Passport (Bio-data page with minimum 6 months validity)',
      'SSC / O-Level & HSC / A-Level Transcripts and Certificates',
      'Bachelor’s Degree Transcripts & Provisional/Main Certificate (for Master’s)',
      'English Proficiency Certificate (IELTS / PTE / Duolingo / MOI Letter)',
      'Tailored Statement of Purpose (SOP) & Updated Academic CV',
      'Two Academic or Professional Reference Letters (LOR)',
    ],
  },
  {
    stage: 'Stage 02',
    title: 'Pre-CAS & Unconditional Clearance',
    items: [
      'Signed Offer Acceptance Form',
      'Completion of University 1-on-1 Pre-CAS Credibility Interview',
      'Work Experience / Internship Letters (if covering a study gap)',
      'Official Tuition Fee Deposit Payment Receipt (via Bank Student File / Flywire)',
      'UKVI Approved Clinic Tuberculosis (TB) Test Certificate',
    ],
  },
  {
    stage: 'Stage 03',
    title: 'UKVI Student Visa & Financial Filing',
    items: [
      'Official Confirmation of Acceptance for Studies (CAS) Statement',
      '28-Day Consecutive Matured Bank Statement & Bank Solvency Certificate',
      'Financial Sponsor Affidavit / Birth Certificate (if sponsored by parents)',
      'Online UKVI Visa Application Form & IHS Health Surcharge Payment Receipt',
      'VFS Global Biometric Appointment Confirmation Letter',
    ],
  },
]

export default function PreCasMoiGuide() {
  const [activeTab, setActiveTab] = useState<'precas' | 'moi' | 'checklist'>('precas')

  return (
    <section
      id="uk-admission-guide"
      className="py-20 bg-[#F4F9F6] border-t border-emerald-100"
      aria-labelledby="admission-guide-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-brand-magenta font-bold text-xs tracking-widest uppercase mb-2">
            UK Compliance &amp; Admission Handbook
          </p>
          <h2
            id="admission-guide-heading"
            className="text-[#06241B] font-black text-3xl sm:text-4xl"
          >
            Pre-CAS Interview, MOI &amp; Document Guide
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
            Everything international students need to know about passing the UK university Pre-CAS interview, applying without IELTS via MOI, and preparing a 100% compliant visa file.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {[
            { id: 'precas' as const, label: '01. Pre-CAS Credibility Interview Guide' },
            { id: 'moi' as const, label: '02. Study in UK Without IELTS (MOI)' },
            { id: 'checklist' as const, label: '03. Complete Document Checklist' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                activeTab === tab.id
                  ? 'bg-[#073224] text-white border-[#073224] shadow-md'
                  : 'bg-white text-[#06241B] border-emerald-100 hover:border-[#073224]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Pre-CAS Credibility Interview Guide */}
        {activeTab === 'precas' && (
          <div className="bg-white rounded-3xl border border-emerald-100 p-6 sm:p-10 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 bg-[#073224] text-white rounded-2xl p-6 sm:p-8">
                <span className="inline-block bg-emerald-400 text-[#042017] text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  1-on-1 Mock Preparation
                </span>
                <h3 className="text-xl sm:text-2xl font-black mb-3">
                  How We Prepare You to Pass Your Pre-CAS Interview on the First Attempt
                </h3>
                <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed mb-6">
                  Before issuing your final CAS letter, UK universities conduct a mandatory credibility interview (via Zoom, Teams, or recorded video portal) to verify that you are a genuine student with clear academic and financial plans.
                </p>
                <div className="space-y-3 border-t border-white/15 pt-5 text-xs sm:text-sm text-white/90">
                  <div className="border-l-2 border-emerald-400 pl-3">
                    University-specific question bank tailored to your exact degree &amp; campus
                  </div>
                  <div className="border-l-2 border-emerald-400 pl-3">
                    Complete breakdown of your 1st-year tuition, scholarship &amp; 28-day maintenance calculation
                  </div>
                  <div className="border-l-2 border-emerald-400 pl-3">
                    Unlimited 1-on-1 mock interview sessions with our UK compliance advisors
                  </div>
                </div>
                <div className="mt-7">
                  <a
                    href="#consultation"
                    className="block text-center bg-emerald-400 hover:bg-emerald-300 text-[#042017] font-black text-xs sm:text-sm py-3.5 px-5 rounded-xl transition"
                  >
                    Book Free Pre-CAS Mock Session
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h4 className="font-black text-[#06241B] text-lg mb-2">
                  Top 5 Questions Asked in UK Pre-CAS Interviews
                </h4>
                {PRE_CAS_QUESTIONS.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F8FAF9] rounded-2xl p-4 sm:p-5 border border-emerald-100"
                  >
                    <p className="text-xs font-extrabold text-brand-magenta uppercase tracking-wider mb-1">
                      Core Question 0{idx + 1}
                    </p>
                    <h5 className="font-bold text-[#06241B] text-sm sm:text-base mb-1.5">
                      &ldquo;{item.q}&rdquo;
                    </h5>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      <strong>What Assessors Look For:</strong> {item.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Study in UK Without IELTS (MOI Guide) */}
        {activeTab === 'moi' && (
          <div className="bg-white rounded-3xl border border-emerald-100 p-6 sm:p-10 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-8 border-b border-gray-100">
              <div className="max-w-2xl">
                <h3 className="text-[#06241B] font-black text-xl sm:text-2xl mb-2">
                  UK Universities Accepting MOI (Medium of Instruction) &amp; Internal English Tests
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  If your Bachelor&apos;s degree was taught entirely in English at a recognised university, or if you prefer to take a free internal university English assessment instead of IELTS, explore our top MOI-friendly UK partner institutions below.
                </p>
              </div>
              <a
                href="https://wa.me/447776181483?text=Hello%20Sage%20Roots%20International!%20I%20want%20to%20check%20if%20my%20university%20is%20accepted%20for%20UK%20MOI%20admission."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center bg-[#073224] hover:bg-[#042017] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl transition flex-shrink-0"
              >
                Check My MOI Eligibility on WhatsApp
              </a>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {MOI_UNIVERSITIES.map((u) => (
                <div
                  key={u.slug}
                  className="bg-[#F8FAF9] rounded-2xl p-5 border border-emerald-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded">
                        {u.city}, UK
                      </span>
                      <span className="text-[11px] font-bold text-brand-magenta">
                        MOI / Waiver Pathway
                      </span>
                    </div>
                    <h4 className="font-black text-[#06241B] text-base mb-2">
                      {u.name}
                    </h4>
                    <p className="text-gray-600 text-xs leading-relaxed mb-4">
                      {u.policy}
                    </p>
                  </div>
                  <Link
                    href={`/universities/${u.slug}`}
                    className="text-xs font-bold text-[#073224] hover:text-brand-magenta underline underline-offset-4"
                  >
                    View University Entry Requirements
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Complete Offer-to-Visa Document Checklist */}
        {activeTab === 'checklist' && (
          <div className="grid md:grid-cols-3 gap-6">
            {DOCUMENT_STAGES.map((stage) => (
              <div
                key={stage.stage}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-emerald-100 border-t-4 border-t-[#073224] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-xs font-black uppercase tracking-widest text-emerald-800 bg-[#ECFDF5] px-3 py-1 rounded-md mb-3">
                    {stage.stage}
                  </span>
                  <h3 className="font-black text-[#06241B] text-lg mb-4">
                    {stage.title}
                  </h3>
                  <ul className="space-y-3">
                    {stage.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs text-gray-600 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#073224] flex-shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
