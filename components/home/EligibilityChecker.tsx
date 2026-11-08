'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Building2,
  Sparkles,
  BookOpen,
  Globe,
  BadgeCheck,
  Search,
} from 'lucide-react'
import { universities } from '@/data/universities'

/* ─── Types ─── */
type StudyLevel = 'Postgraduate' | 'Undergraduate' | 'Foundation'
type UniBackground = 'private' | 'public' | 'national' | 'hsc'
type EnglishStatus = 'moi' | 'ielts_60' | 'ielts_65' | 'ielts_55'

/* ─── Partner slugs that accept MOI (no IELTS) ─── */
const MOI_PARTNERS = new Set([
  'bpp-university',
  'ulster-university',
  'university-of-greenwich',
  'university-of-hertfordshire',
  'university-of-roehampton',
  'university-of-bedfordshire',
  'anglia-ruskin-university',
  'coventry-university',
  'university-of-portsmouth',
  'university-of-sunderland',
  'university-of-east-london',
  'london-metropolitan-university',
  'university-of-northampton',
  'university-of-bolton',
  'bucks-new-university',
  'university-of-central-lancashire',
  'canterbury-christ-church-university',
  'university-of-suffolk',
  'birmingham-city-university',
  'university-of-wolverhampton',
  'de-montfort-university',
  'university-of-the-west-of-scotland',
  'abertay-university',
])

/* ─── Russell Group slugs ─── */
const RUSSELL_GROUP = new Set([
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

export default function EligibilityChecker() {
  const [level, setLevel] = useState<StudyLevel>('Postgraduate')
  const [background, setBackground] = useState<UniBackground>('private')
  const [english, setEnglish] = useState<EnglishStatus>('moi')
  const [showResults, setShowResults] = useState(false)

  /* ─── Filter matching universities ─── */
  const results = useMemo(() => {
    const matched = universities.filter((u) => {
      // Must offer the selected study level
      if (!u.studyLevels.includes(level)) return false

      // English filter
      if (english === 'moi') {
        return MOI_PARTNERS.has(u.slug)
      }
      if (english === 'ielts_55') {
        // IELTS 5.5 — exclude Russell Group
        return !RUSSELL_GROUP.has(u.slug)
      }
      if (english === 'ielts_60') {
        // IELTS 6.0 — all non-Russell + some Russell
        return true
      }
      // ielts_65 — all universities eligible
      return true
    })

    return matched
  }, [level, background, english])

  /* WhatsApp link generator */
  const waLink = () => {
    const bgMap: Record<UniBackground, string> = {
      private: 'Private University (NUBTK/NWU/AIUB)',
      public: 'Public University (KUET/KU/DU)',
      national: 'National University',
      hsc: 'HSC / A-Level / Diploma',
    }
    const engMap: Record<EnglishStatus, string> = {
      moi: 'MOI (No IELTS)',
      ielts_55: 'IELTS 5.5 / Internal Test',
      ielts_60: 'IELTS 6.0 / Duolingo 105+',
      ielts_65: 'IELTS 6.5+ (Russell Group)',
    }
    const text = encodeURIComponent(
      `Hello Sage Roots Team,\nI checked eligibility on your website:\n• Level: ${level}\n• Background: ${bgMap[background]}\n• English: ${engMap[english]}\n• Matched: ${results.length} universities\nPlease guide me for admission & scholarship.`
    )
    return `https://wa.me/447776181483?text=${text}`
  }

  return (
    <section
      id="eligibility-checker"
      className="py-16 sm:py-20 bg-gradient-to-b from-[#f8faf9] to-white relative overflow-hidden"
      aria-labelledby="eligibility-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <Search className="w-3.5 h-3.5" />
            Instant University Finder
          </div>
          <h2
            id="eligibility-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight mb-3"
          >
            আপনি কোন কোন University-তে <span className="text-emerald-600">Apply করতে পারবেন?</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            ৩টি অপশন সিলেক্ট করুন — সাথে সাথে দেখুন আপনার জন্য কোন বিশ্ববিদ্যালয় উপযুক্ত
          </p>
        </div>

        {/* ── Filter Bar ── */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sm:p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* 1. Study Level */}
            <div>
              <label className="flex items-center gap-2 text-xs font-bold text-gray-800 uppercase tracking-wider mb-3">
                <GraduationCap className="w-4 h-4 text-emerald-600" />
                Study Level
              </label>
              <div className="flex flex-wrap gap-2">
                {(
                  [
                    { id: 'Postgraduate', label: "Master's / MBA" },
                    { id: 'Undergraduate', label: 'Undergraduate' },
                    { id: 'Foundation', label: 'Foundation' },
                  ] as { id: StudyLevel; label: string }[]
                ).map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => { setLevel(opt.id); setShowResults(true) }}
                    className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                      level === opt.id
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-emerald-50 hover:border-emerald-300'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Background */}
            <div>
              <label className="flex items-center gap-2 text-xs font-bold text-gray-800 uppercase tracking-wider mb-3">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                Your Background
              </label>
              <div className="flex flex-wrap gap-2">
                {(
                  [
                    { id: 'private', label: 'Private Univ' },
                    { id: 'public', label: 'Public Univ' },
                    { id: 'national', label: 'National Univ' },
                    { id: 'hsc', label: 'HSC / Diploma' },
                  ] as { id: UniBackground; label: string }[]
                ).map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => { setBackground(opt.id); setShowResults(true) }}
                    className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                      background === opt.id
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-emerald-50 hover:border-emerald-300'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. English Status */}
            <div>
              <label className="flex items-center gap-2 text-xs font-bold text-gray-800 uppercase tracking-wider mb-3">
                <Globe className="w-4 h-4 text-emerald-600" />
                English Proficiency
              </label>
              <div className="flex flex-wrap gap-2">
                {(
                  [
                    { id: 'moi', label: 'MOI (No IELTS)' },
                    { id: 'ielts_55', label: 'IELTS 5.5' },
                    { id: 'ielts_60', label: 'IELTS 6.0' },
                    { id: 'ielts_65', label: 'IELTS 6.5+' },
                  ] as { id: EnglishStatus; label: string }[]
                ).map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => { setEnglish(opt.id); setShowResults(true) }}
                    className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                      english === opt.id
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-emerald-50 hover:border-emerald-300'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Results ── */}
        {showResults && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Result count bar */}
            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full">
                  <Building2 className="w-4 h-4" />
                  <span className="text-sm font-bold">{results.length} Universities Found</span>
                </div>
                {english === 'moi' && (
                  <span className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold px-3 py-1.5 rounded-full">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    IELTS ছাড়া MOI দিয়ে যোগ্য
                  </span>
                )}
              </div>
              <Link
                href="/universities"
                className="text-xs font-bold text-emerald-600 hover:text-emerald-800 underline underline-offset-4 flex items-center gap-1"
              >
                সকল ৫০+ বিশ্ববিদ্যালয় দেখুন <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* University Cards Grid */}
            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((uni) => (
                  <div
                    key={uni.id}
                    className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    {/* University Image */}
                    <div className="relative h-36 w-full overflow-hidden">
                      <Image
                        src={uni.image}
                        alt={uni.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-white font-bold text-sm drop-shadow-md leading-tight">
                          {uni.name}
                        </h3>
                        <p className="text-white/80 text-xs mt-0.5">{uni.city}</p>
                      </div>
                      {MOI_PARTNERS.has(uni.slug) && (
                        <span className="absolute top-2.5 right-2.5 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                          MOI ✓
                        </span>
                      )}
                      {RUSSELL_GROUP.has(uni.slug) && (
                        <span className="absolute top-2.5 right-2.5 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                          Russell Group
                        </span>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <div className="space-y-1.5 mb-3">
                        <p className="text-xs text-gray-700">
                          <span className="font-semibold text-gray-900">Fee:</span>{' '}
                          {uni.tuitionFeeNote}
                        </p>
                        <p className="text-xs text-emerald-700">
                          <span className="font-semibold">Scholarship:</span>{' '}
                          {uni.scholarshipNote}
                        </p>
                      </div>

                      {/* Intakes */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {uni.intakes.slice(0, 3).map((intake) => (
                          <span
                            key={intake}
                            className="text-[10px] font-semibold bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                          >
                            {intake}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Link
                          href={`/universities/${uni.slug}`}
                          className="flex-1 text-center py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold transition-colors"
                        >
                          বিস্তারিত দেখুন
                        </Link>
                        <a
                          href={waLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1"
                        >
                          Apply Free <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-gray-400" />
                </div>
                <p className="text-gray-500 text-sm mb-2">এই ক্রাইটেরিয়ায় কোনো ইউনিভার্সিটি পাওয়া যায়নি</p>
                <p className="text-gray-400 text-xs">অন্য অপশন সিলেক্ট করে আবার চেষ্টা করুন</p>
              </div>
            )}

            {/* Bottom CTA */}
            {results.length > 0 && (
              <div className="mt-8 bg-gradient-to-r from-[#042017] to-[#073224] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-white font-bold text-sm sm:text-base">
                    {results.length}টি University-তে <span className="text-emerald-400">ফ্রি এডমিশন প্রসেসিং</span> পাওয়া যাবে
                  </p>
                  <p className="text-white/60 text-xs mt-1">
                    £0 Agency Fee • Scholarship Assessment • London Job Support
                  </p>
                </div>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-6 py-3 rounded-xl transition shadow-lg whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp-এ জানুন
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
