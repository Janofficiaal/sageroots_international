'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { universities } from '@/data/universities'

type ScoreTier = 'high' | 'medium' | 'flexible'
type EnglishTier = 'ielts_65' | 'ielts_60' | 'moi_duolingo'
type BudgetTier = 'budget' | 'mid' | 'elite'

const RUSSELL_SLUGS = new Set([
  'imperial-college-london',
  'university-college-london',
  'london-school-of-economics',
  'kings-college-london',
  'university-of-edinburgh',
  'university-of-manchester',
  'university-of-warwick',
  'university-of-bristol',
  'university-of-glasgow',
  'university-of-birmingham',
  'university-of-southampton',
  'university-of-leeds',
  'university-of-sheffield',
  'university-of-nottingham',
  'queen-mary-university-of-london',
  'newcastle-university',
  'university-of-york',
  'university-of-exeter',
  'cardiff-university',
  'university-of-liverpool',
  'university-of-aberdeen',
  'queens-university-belfast',
])

const MOI_FRIENDLY_SLUGS = new Set([
  'university-of-greenwich',
  'university-of-east-london',
  'university-of-hertfordshire',
  'coventry-university',
  'northumbria-university',
  'anglia-ruskin-university',
  'de-montfort-university',
  'university-of-bedfordshire',
  'bpp-university',
  'london-metropolitan-university',
  'university-of-sunderland',
  'university-of-west-london',
  'ulster-university',
  'bangor-university',
  'university-of-portsmouth',
])

export default function EligibilityChecker() {
  const [level, setLevel] = useState<string>('Postgraduate')
  const [score, setScore] = useState<ScoreTier>('medium')
  const [english, setEnglish] = useState<EnglishTier>('ielts_60')
  const [budget, setBudget] = useState<BudgetTier>('budget')

  const result = useMemo(() => {
    const matched = universities.filter((u) => {
      if (!u.studyLevels.includes(level)) return false

      const isRussell = RUSSELL_SLUGS.has(u.slug)
      const isMoiFriendly = MOI_FRIENDLY_SLUGS.has(u.slug)

      if (budget === 'budget' && isRussell && u.slug !== 'queens-university-belfast' && u.slug !== 'university-of-aberdeen') {
        return false
      }
      if (budget === 'elite' && !isRussell) {
        return false
      }

      if (english === 'moi_duolingo' && isRussell) {
        return false
      }
      if (english === 'moi_duolingo' && !isMoiFriendly) {
        return false
      }

      if (score === 'flexible' && isRussell) {
        return false
      }

      return true
    })

    const finalMatches =
      matched.length >= 3
        ? matched.slice(0, 6)
        : universities
            .filter((u) => u.studyLevels.includes(level) && !RUSSELL_SLUGS.has(u.slug))
            .slice(0, 6)

    let scholarshipRange = '£1,500 – £4,000'
    let badgeText = 'Direct Admission Eligible'
    let note =
      'You qualify for guaranteed international bursaries and early-payment fee discounts.'

    if (score === 'high' && english === 'ielts_65') {
      scholarshipRange = '£3,000 – £10,000'
      badgeText = 'Top Merit & Russell Group Eligible'
      note =
        'Your strong academic profile and IELTS score unlock Vice-Chancellor & Global Excellence Scholarships.'
    } else if (score === 'high') {
      scholarshipRange = '£2,500 – £6,000'
      badgeText = 'High Merit Scholarship Match'
      note =
        'Your academic GPA qualifies you for high-tier automatic merit scholarships across UK campuses.'
    } else if (english === 'moi_duolingo') {
      scholarshipRange = '£1,000 – £3,000'
      badgeText = 'MOI / Duolingo / Internal Test Pathway'
      note =
        'Selected UK universities accept Medium of Instruction (MOI), Duolingo, or internal English tests without IELTS.'
    }

    return {
      matches: finalMatches,
      totalCount: matched.length || finalMatches.length,
      scholarshipRange,
      badgeText,
      note,
    }
  }, [level, score, english, budget])

  return (
    <section
      id="eligibility-checker"
      className="py-20 bg-gradient-to-b from-[#042017] via-[#073224] to-[#042017] text-white relative overflow-hidden"
      aria-labelledby="eligibility-heading"
    >
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-teal-400/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Instant Assessment
          </div>
          <h2
            id="eligibility-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4"
          >
            UK Eligibility &amp; Scholarship Calculator
          </h2>
          <p className="text-emerald-100/75 text-sm sm:text-base leading-relaxed">
            Select your academic GPA, English test status, and preferred tuition budget to instantly discover matching UK universities and your estimated scholarship amount.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Interactive Controls (5 cols) */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6">
            {/* 1. Study Level */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3">
                1. Target Study Level
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {['Undergraduate', 'Postgraduate', 'Foundation', 'PhD'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setLevel(item)}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold border transition-all text-center ${
                      level === item
                        ? 'bg-emerald-500 text-[#042017] border-emerald-400 shadow-lg shadow-emerald-500/20'
                        : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Academic GPA / Percentage */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3">
                2. Academic Score (HSC / Bachelor CGPA)
              </label>
              <div className="space-y-2">
                {[
                  {
                    id: 'high' as ScoreTier,
                    title: 'GPA 4.5–5.0 / CGPA 3.3+ (65%–70%+)',
                    sub: 'First Class / High Achiever',
                  },
                  {
                    id: 'medium' as ScoreTier,
                    title: 'GPA 3.8–4.4 / CGPA 2.8–3.2 (58%–64%)',
                    sub: 'Upper Second Class (2:1 Equivalent)',
                  },
                  {
                    id: 'flexible' as ScoreTier,
                    title: 'GPA 3.0–3.7 / CGPA 2.4–2.7 (50%–57%)',
                    sub: 'Standard Pass / Flexible Entry',
                  },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setScore(opt.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                      score === opt.id
                        ? 'bg-emerald-500/20 border-emerald-400 text-white'
                        : 'bg-white/5 border-white/10 text-white/75 hover:bg-white/10'
                    }`}
                  >
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-white">{opt.title}</p>
                      <p className="text-[11px] text-emerald-200/70">{opt.sub}</p>
                    </div>
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                        score === opt.id
                          ? 'border-emerald-400 bg-emerald-400'
                          : 'border-white/30'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* 3. English Proficiency */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3">
                3. English Language Status
              </label>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { id: 'ielts_65' as EnglishTier, label: 'IELTS 6.5+ / PTE 62+ (All Universities)' },
                  { id: 'ielts_60' as EnglishTier, label: 'IELTS 6.0 (Min 5.5) / PTE 56+' },
                  {
                    id: 'moi_duolingo' as EnglishTier,
                    label: 'MOI / Duolingo / Internal English Test (No IELTS)',
                  },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setEnglish(opt.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold border transition-all flex items-center justify-between ${
                      english === opt.id
                        ? 'bg-emerald-500 text-[#042017] border-emerald-400 font-bold'
                        : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Tuition Budget */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3">
                4. Preferred Annual Tuition Range
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'budget' as BudgetTier, label: '£14k – £17.5k', sub: 'Affordable' },
                  { id: 'mid' as BudgetTier, label: '£17.5k – £24k', sub: 'Standard' },
                  { id: 'elite' as BudgetTier, label: '£24k+', sub: 'Russell Group' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setBudget(opt.id)}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      budget === opt.id
                        ? 'bg-emerald-500 text-[#042017] border-emerald-400 font-bold'
                        : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <p className="text-xs sm:text-sm font-bold">{opt.label}</p>
                    <p
                      className={`text-[10px] ${
                        budget === opt.id ? 'text-[#042017]/80 font-semibold' : 'text-white/50'
                      }`}
                    >
                      {opt.sub}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Live Results & Matching Universities (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Scholarship & Eligibility Summary Card */}
            <div className="bg-gradient-to-r from-emerald-600/30 via-teal-700/25 to-emerald-800/30 border border-emerald-400/35 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/15">
                <div>
                  <span className="inline-block bg-emerald-400 text-[#042017] text-xs font-extrabold px-3 py-1 rounded-full mb-2.5">
                    {result.badgeText}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Estimated Scholarship Potential
                  </h3>
                </div>
                <div className="bg-[#042017]/80 border border-emerald-400/40 rounded-2xl px-5 py-3 text-left sm:text-right">
                  <p className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold">
                    Expected Award
                  </p>
                  <p className="text-2xl sm:text-3xl font-black text-emerald-400">
                    {result.scholarshipRange}
                  </p>
                </div>
              </div>

              <p className="text-emerald-100/85 text-xs sm:text-sm mt-4 leading-relaxed">
                {result.note}
              </p>
            </div>

            {/* Matched Universities Grid */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm sm:text-base font-bold text-emerald-200">
                  Top Recommended UK Universities ({result.totalCount} Matches Found)
                </h4>
                <Link
                  href="/universities"
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                >
                  View All 50
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {result.matches.map((uni) => (
                  <div
                    key={uni.id}
                    className="bg-white/95 text-brand-dark rounded-2xl p-4 border border-white/20 shadow-lg flex flex-col justify-between hover:-translate-y-0.5 transition-transform"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                          <Image
                            src={uni.image}
                            alt={uni.name}
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </div>
                        <div className="min-w-0">
                          <h5 className="font-bold text-sm text-brand-dark truncate">
                            {uni.name}
                          </h5>
                          <p className="text-xs text-gray-500 mt-0.5 truncate">
                            {uni.city}, United Kingdom
                          </p>
                        </div>
                      </div>

                      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-2.5 mb-3">
                        <p className="text-[11px] font-bold text-emerald-900 line-clamp-1">
                          Tuition: {uni.tuitionFeeNote}
                        </p>
                        <p className="text-[11px] text-emerald-700 line-clamp-1 mt-0.5">
                          {uni.scholarshipNote}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <Link
                        href={`/universities/${uni.slug}`}
                        className="flex-1 text-center py-2 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-brand-dark text-xs font-bold transition-colors"
                      >
                        Details
                      </Link>
                      <a
                        href="#consultation"
                        className="flex-1 text-center py-2 px-3 rounded-xl bg-[#073224] hover:bg-emerald-800 text-white text-xs font-bold transition-colors"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
