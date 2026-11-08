'use client'

import { useState, useMemo, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  GraduationCap,
  Building,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Search,
  BookOpen,
  Award,
  Calendar,
  Layers,
  ChevronRight,
  ShieldCheck,
  Percent,
  Sparkles,
  SlidersHorizontal,
  X,
  Send,
} from 'lucide-react'
import { universities } from '@/data/universities'

type StudyLevel = 'Postgraduate' | 'Undergraduate' | 'Foundation'
type UniType = 'Private University' | 'Public University' | 'National University'
type EnglishStatus = 'MOI without IELTS' | 'IELTS 5.5' | 'IELTS 6.0' | 'IELTS 6.5 plus'

/* Priority Top Partners */
const PRIORITY_SLUGS = [
  'bpp-university',
  'richmond-american-university-london',
  'university-of-hull',
  'ulster-university',
  'university-of-greenwich',
  'coventry-university',
  'university-of-hertfordshire',
  'university-of-roehampton',
  'university-of-bedfordshire',
  'anglia-ruskin-university',
  'university-of-portsmouth',
  'university-of-sunderland',
]

const MOI_UNIVERSITIES = new Set([
  'bpp-university',
  'richmond-american-university-london',
  'university-of-hull',
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
  const [studyLevel, setStudyLevel] = useState<StudyLevel>('Postgraduate')
  const [sscGpa, setSscGpa] = useState<string>('4.50')
  const [hscGpa, setHscGpa] = useState<string>('4.20')
  const [cgpa, setCgpa] = useState<string>('3.10')
  const [uniType, setUniType] = useState<UniType>('Private University')
  const [english, setEnglish] = useState<EnglishStatus>('MOI without IELTS')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [activeTab, setActiveTab] = useState<'all' | 'moi' | 'london'>('all')

  /* Submitted State: Only show matching universities when Submit is clicked */
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const resultsRef = useRef<HTMLDivElement>(null)

  const evaluation = useMemo(() => {
    let matched = universities.filter((u) => {
      if (!u.studyLevels.includes(studyLevel)) return false

      if (english === 'MOI without IELTS') {
        if (!MOI_UNIVERSITIES.has(u.slug)) return false
      } else if (english === 'IELTS 5.5') {
        if (RUSSELL_GROUP.has(u.slug)) return false
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim()
        const nameMatch = u.name.toLowerCase().includes(query)
        const cityMatch = u.city.toLowerCase().includes(query)
        if (!nameMatch && !cityMatch) return false
      }

      if (activeTab === 'moi') {
        if (!MOI_UNIVERSITIES.has(u.slug)) return false
      }
      if (activeTab === 'london') {
        if (!u.city.toLowerCase().includes('london')) return false
      }

      return true
    })

    matched.sort((a, b) => {
      const aIndex = PRIORITY_SLUGS.indexOf(a.slug)
      const bIndex = PRIORITY_SLUGS.indexOf(b.slug)
      if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex
      if (aIndex !== -1) return -1
      if (bIndex !== -1) return 1
      return a.name.localeCompare(b.name)
    })

    const isMoiApproved = english === 'MOI without IELTS'
    const scholarshipAmount = isMoiApproved ? '£3,000' : '£4,500'
    const minCasDeposit = '£3,000'
    const matchScore = isMoiApproved ? 98 : 94

    return {
      matchedUnis: matched,
      totalCount: matched.length,
      isMoiApproved,
      scholarshipAmount,
      minCasDeposit,
      matchScore,
    }
  }, [studyLevel, sscGpa, hscGpa, cgpa, uniType, english, searchQuery, activeTab])

  const handleSubmit = () => {
    setIsSubmitted(true)
    setTimeout(() => {
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const generateWhatsAppMessage = (selectedUni?: string) => {
    const uniMention = selectedUni ? `\nTarget University: ${selectedUni}` : ''
    const text = encodeURIComponent(
      `Hello Sage Roots Team, I checked my UK University Eligibility:
Level: ${studyLevel}
SSC GPA: ${sscGpa}
HSC GPA: ${hscGpa}
Bachelor CGPA: ${studyLevel === 'Postgraduate' ? cgpa : 'N/A'}
University: ${uniType}
English: ${english}${uniMention}
Matched Universities: ${evaluation.totalCount}
Please guide me for application and CAS deposit processing.`
    )
    return `https://wa.me/447776181483?text=${text}`
  }

  return (
    <div
      style={{ fontFamily: '"Times New Roman", Times, Georgia, serif' }}
      className="bg-[#eef1f5] text-[#0f172a] py-6 px-3 sm:px-6 lg:px-8 min-h-screen pb-24 md:pb-12"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Header Card */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse" />
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                Sage Roots Admissions Desk London
              </p>
            </div>
            <h1 className="text-xl sm:text-3xl font-extrabold text-[#03261b] leading-tight">
              Real Time Student Eligibility Assessment
            </h1>
            <p className="text-xs sm:text-sm text-gray-700 font-medium mt-1">
              Select your academic profile below and click Submit to view eligible UK universities
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={generateWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-4 py-3 rounded-xl transition shadow"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>
        </div>

        {/* Input Profile Card (Primary Form) */}
        <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-md border-2 border-gray-200 space-y-6 max-w-4xl mx-auto">
          <div className="border-b border-gray-200 pb-3">
            <h2 className="text-lg sm:text-xl font-black text-[#03261b]">
              Student Academic Profile
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-semibold mt-0.5">
              Choose your results and tap Submit at the bottom to see your university list
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Target Study Level */}
            <div>
              <label className="block text-xs font-black text-[#03261b] uppercase tracking-wide mb-2">
                1. Target Degree Level
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['Postgraduate', 'Undergraduate', 'Foundation'] as StudyLevel[]).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => { setStudyLevel(lvl); setIsSubmitted(false) }}
                    className={`py-3 px-2 text-xs font-black rounded-xl border-2 transition-all text-center ${
                      studyLevel === lvl
                        ? 'bg-[#03261b] text-white border-[#03261b] shadow'
                        : 'bg-gray-50 text-gray-800 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    {lvl === 'Postgraduate' ? 'Masters' : lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Institution Type */}
            <div>
              <label className="block text-xs font-black text-[#03261b] uppercase tracking-wide mb-2">
                2. Previous Institution Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(
                  [
                    'Private University',
                    'Public University',
                    'National University',
                  ] as UniType[]
                ).map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => { setUniType(u); setIsSubmitted(false) }}
                    className={`py-3 px-1 text-xs font-black rounded-xl border-2 transition-all text-center leading-tight ${
                      uniType === u
                        ? 'bg-[#03261b] text-white border-[#03261b] shadow'
                        : 'bg-gray-50 text-gray-800 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    {u.replace(' University', '')}
                  </button>
                ))}
              </div>
            </div>

            {/* SSC Result */}
            <div>
              <label className="block text-xs font-black text-[#03261b] uppercase tracking-wide mb-2">
                3. SSC Result GPA
              </label>
              <div className="grid grid-cols-4 gap-2">
                {['5.00', '4.50', '4.00', '3.50'].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => { setSscGpa(val); setIsSubmitted(false) }}
                    className={`py-2.5 text-xs font-black rounded-xl border-2 transition-all ${
                      sscGpa === val
                        ? 'bg-emerald-700 text-white border-emerald-700 shadow'
                        : 'bg-gray-50 text-gray-800 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>

            {/* HSC Result */}
            <div>
              <label className="block text-xs font-black text-[#03261b] uppercase tracking-wide mb-2">
                4. HSC Result GPA
              </label>
              <div className="grid grid-cols-4 gap-2">
                {['5.00', '4.50', '4.00', '3.50'].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => { setHscGpa(val); setIsSubmitted(false) }}
                    className={`py-2.5 text-xs font-black rounded-xl border-2 transition-all ${
                      hscGpa === val
                        ? 'bg-emerald-700 text-white border-emerald-700 shadow'
                        : 'bg-gray-50 text-gray-800 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>

            {/* Bachelor CGPA for Masters */}
            {studyLevel === 'Postgraduate' && (
              <div>
                <label className="block text-xs font-black text-[#03261b] uppercase tracking-wide mb-2">
                  5. Bachelor CGPA
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['3.50 plus', '3.00 to 3.49', '2.75 to 2.99', 'Below 2.75'].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => { setCgpa(val); setIsSubmitted(false) }}
                      className={`py-2 px-1 text-[11px] font-black rounded-xl border-2 transition-all text-center leading-tight ${
                        cgpa === val
                          ? 'bg-emerald-700 text-white border-emerald-700 shadow'
                          : 'bg-gray-50 text-gray-800 border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* English Proficiency */}
            <div>
              <label className="block text-xs font-black text-[#03261b] uppercase tracking-wide mb-2">
                {studyLevel === 'Postgraduate' ? '6.' : '5.'} English Proficiency Status
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(
                  [
                    'MOI without IELTS',
                    'IELTS 6.0',
                    'IELTS 6.5 plus',
                    'IELTS 5.5',
                  ] as EnglishStatus[]
                ).map((eng) => (
                  <button
                    key={eng}
                    type="button"
                    onClick={() => { setEnglish(eng); setIsSubmitted(false) }}
                    className={`py-2.5 px-3 rounded-xl text-xs font-black border-2 transition-all text-left flex items-center justify-between ${
                      english === eng
                        ? 'bg-[#03261b] text-white border-[#03261b] shadow'
                        : 'bg-gray-50 text-gray-800 border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    <span>{eng}</span>
                    {eng === 'MOI without IELTS' && (
                      <span className="bg-emerald-400 text-[#03261b] text-[10px] font-black px-1.5 py-0.5 rounded">
                        No Exam
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Large Prominent Submit Button */}
          <div className="pt-4 border-t border-gray-200 text-center">
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full sm:w-auto min-w-[280px] inline-flex items-center justify-center gap-3 bg-[#03261b] hover:bg-emerald-800 text-white font-black text-sm sm:text-base py-4 px-8 rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <Send className="w-5 h-5 text-emerald-400" />
              <span>Submit to View Eligible Universities</span>
            </button>
            <p className="text-xs text-gray-500 font-semibold mt-2">
              Instant evaluation with BPP, Richmond, and Hull university matches
            </p>
          </div>
        </div>

        {/* Results Section (Appears after Submit is clicked) */}
        {isSubmitted && (
          <div ref={resultsRef} className="space-y-6 pt-2">
            {/* 4 Summary Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
              <div className="bg-[#03261b] text-white rounded-2xl p-4 sm:p-5 shadow border border-emerald-900 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-200 uppercase">
                    Eligible Universities
                  </span>
                  <span className="bg-emerald-500 text-[#03261b] text-xs font-extrabold px-2 py-0.5 rounded-full">
                    Active Fit
                  </span>
                </div>
                <div className="my-2 sm:my-3">
                  <p className="text-3xl sm:text-4xl font-black text-white">
                    {evaluation.totalCount}
                  </p>
                  <p className="text-xs text-emerald-100 font-semibold mt-0.5">
                    Ready for Application
                  </p>
                </div>
                <p className="text-xs text-emerald-300 font-bold border-t border-emerald-800/80 pt-1.5 truncate">
                  BPP, Richmond, Hull included
                </p>
              </div>

              <div className="bg-white text-[#0f172a] rounded-2xl p-4 sm:p-5 shadow border border-gray-200 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-700 uppercase">
                    English Pathway
                  </span>
                  <span className="bg-emerald-100 text-emerald-900 text-xs font-extrabold px-2 py-0.5 rounded-full">
                    Approved
                  </span>
                </div>
                <div className="my-2 sm:my-3">
                  <p className="text-xl sm:text-2xl font-black text-[#03261b]">
                    {english === 'MOI without IELTS' ? 'MOI Accepted' : english}
                  </p>
                  <p className="text-xs text-gray-700 font-semibold mt-0.5">
                    {english === 'MOI without IELTS' ? 'No IELTS Exam Required' : 'Meets Entry Score'}
                  </p>
                </div>
                <p className="text-xs text-emerald-800 font-bold border-t border-gray-100 pt-1.5">
                  Zero Agency Fee
                </p>
              </div>

              <div className="bg-white text-[#0f172a] rounded-2xl p-4 sm:p-5 shadow border border-gray-200 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-700 uppercase">
                    Scholarship Grant
                  </span>
                  <span className="bg-emerald-100 text-emerald-900 text-xs font-extrabold px-2 py-0.5 rounded-full">
                    Discount
                  </span>
                </div>
                <div className="my-2 sm:my-3">
                  <p className="text-xl sm:text-2xl font-black text-[#03261b]">
                    Up to {evaluation.scholarshipAmount}
                  </p>
                  <p className="text-xs text-gray-700 font-semibold mt-0.5">
                    Fee Waiver Deducted
                  </p>
                </div>
                <p className="text-xs text-gray-700 font-bold border-t border-gray-100 pt-1.5">
                  Automatic Merit Assessment
                </p>
              </div>

              <div className="bg-white text-[#0f172a] rounded-2xl p-4 sm:p-5 shadow border border-gray-200 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-700 uppercase">
                    Minimum CAS Deposit
                  </span>
                  <span className="bg-gray-200 text-gray-900 text-xs font-extrabold px-2 py-0.5 rounded-full">
                    Required
                  </span>
                </div>
                <div className="my-2 sm:my-3">
                  <p className="text-xl sm:text-2xl font-black text-[#03261b]">
                    {evaluation.minCasDeposit}
                  </p>
                  <p className="text-xs text-gray-700 font-semibold mt-0.5">
                    Approx 470000 BDT
                  </p>
                </div>
                <p className="text-xs text-gray-700 font-bold border-t border-gray-100 pt-1.5">
                  Low Deposit Options
                </p>
              </div>
            </div>

            {/* University Cards Grid + Right Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Universities List (8 Cols) */}
              <div className="lg:col-span-8 space-y-4">
                <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="relative w-full sm:w-72">
                    <Search className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="Search university..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-gray-50 border-2 border-gray-300 rounded-xl text-xs sm:text-sm text-gray-900 font-bold placeholder-gray-500 focus:outline-none focus:border-emerald-600 focus:bg-white transition"
                    />
                  </div>

                  <div className="flex items-center justify-between w-full sm:w-auto gap-2">
                    <p className="text-xs font-black text-[#03261b]">
                      {evaluation.totalCount} Campuses Found
                    </p>

                    <div className="flex gap-1">
                      <button
                        type="button"
                        onClick={() => setActiveTab('all')}
                        className={`text-xs px-2.5 py-1 rounded-lg font-black transition-all ${
                          activeTab === 'all'
                            ? 'bg-[#03261b] text-white shadow'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        All
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('moi')}
                        className={`text-xs px-2.5 py-1 rounded-lg font-black transition-all ${
                          activeTab === 'moi'
                            ? 'bg-[#03261b] text-white shadow'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        MOI
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab('london')}
                        className={`text-xs px-2.5 py-1 rounded-lg font-black transition-all ${
                          activeTab === 'london'
                            ? 'bg-[#03261b] text-white shadow'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        London
                      </button>
                    </div>
                  </div>
                </div>

                {/* Cards */}
                <div className="space-y-3">
                  {evaluation.matchedUnis.map((uni) => {
                    const isMoi = MOI_UNIVERSITIES.has(uni.slug)
                    const isPriority = PRIORITY_SLUGS.includes(uni.slug)
                    return (
                      <div
                        key={uni.id}
                        className={`bg-white rounded-2xl p-4 sm:p-5 shadow-md border-2 transition-all ${
                          isPriority
                            ? 'border-emerald-600 ring-2 ring-emerald-100'
                            : 'border-gray-200 hover:border-emerald-400'
                        }`}
                      >
                        <div className="flex gap-3 sm:gap-4">
                          <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-200 shadow-sm">
                            <Image
                              src={uni.image}
                              alt={uni.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 64px, 96px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-1">
                              <div>
                                <h3 className="text-base sm:text-lg font-black text-[#03261b] truncate">
                                  {uni.name}
                                </h3>
                                <p className="text-xs text-gray-600 font-bold mt-0.5 truncate">
                                  {uni.city}, United Kingdom
                                </p>
                              </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-1.5 mt-2">
                              {isPriority && (
                                <span className="bg-amber-400 text-amber-950 text-xs font-black px-2 py-0.5 rounded shadow-sm">
                                  Official Partner
                                </span>
                              )}
                              {isMoi && (
                                <span className="bg-emerald-100 text-emerald-950 text-xs font-black px-2 py-0.5 rounded border border-emerald-300">
                                  MOI Verified ✓
                                </span>
                              )}
                            </div>

                            <div className="grid grid-cols-2 gap-3 mt-3 pt-2.5 border-t border-gray-200 text-xs">
                              <div>
                                <span className="text-gray-600 font-bold text-[10px] uppercase block">
                                  Tuition Fee
                                </span>
                                <span className="font-extrabold text-gray-900 text-xs sm:text-sm">
                                  {uni.tuitionFeeNote.split('.')[0] || 'Competitive'}
                                </span>
                              </div>
                              <div>
                                <span className="text-gray-600 font-bold text-[10px] uppercase block">
                                  Scholarship
                                </span>
                                <span className="font-extrabold text-emerald-800 text-xs sm:text-sm">
                                  {uni.scholarshipNote.split('.')[0] || 'Available'}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-200">
                          <Link
                            href={`/universities/${uni.slug}`}
                            className="flex-1 text-center py-2.5 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs sm:text-sm font-black transition-colors"
                          >
                            Campus Details
                          </Link>
                          <a
                            href={generateWhatsAppMessage(uni.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center py-2.5 px-3 rounded-xl bg-[#03261b] hover:bg-emerald-800 text-white text-xs sm:text-sm font-black transition-colors flex items-center justify-center gap-1.5 shadow"
                          >
                            Apply for Free <ArrowRight className="w-4 h-4 text-emerald-300" />
                          </a>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Right Summary Column (4 Cols) */}
              <div className="lg:col-span-4 space-y-4">
                {/* Score Card */}
                <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-200 text-center">
                  <span className="text-xs font-black text-gray-600 uppercase tracking-wider block">
                    Admission Match Score
                  </span>
                  <div className="relative w-28 h-28 mx-auto my-3 flex items-center justify-center">
                    <div className="w-full h-full rounded-full border-8 border-emerald-100 border-t-[#03261b] border-r-emerald-600 flex items-center justify-center" />
                    <div className="absolute text-center">
                      <span className="text-3xl font-black text-[#03261b]">
                        {evaluation.matchScore}%
                      </span>
                      <span className="text-xs font-bold text-gray-600 block">Fit Rate</span>
                    </div>
                  </div>
                  <p className="text-xs font-black text-emerald-950 bg-emerald-100 py-2 px-3 rounded-xl border border-emerald-300">
                    High Probability of Offer Letter
                  </p>
                </div>

                {/* Admission Terms */}
                <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-200 space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#03261b]">
                    Key Admission Terms
                  </h4>
                  <div className="space-y-2 text-xs font-bold">
                    <div className="flex items-center justify-between py-1 border-b border-gray-100">
                      <span className="text-gray-600">Study Gap</span>
                      <span className="text-emerald-800 font-extrabold">Accepted with CV</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-gray-100">
                      <span className="text-gray-600">IELTS Waiver</span>
                      <span className="text-[#03261b] font-extrabold">
                        {english === 'MOI without IELTS' ? 'Eligible' : 'Not Needed'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-gray-100">
                      <span className="text-gray-600">Agency Charge</span>
                      <span className="text-emerald-800 font-extrabold">Zero Agency Fee</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-gray-600">Post Study Work</span>
                      <span className="text-gray-900 font-extrabold">2 Years PSW</span>
                    </div>
                  </div>
                </div>

                {/* Direct Consultation Box */}
                <div className="bg-gradient-to-br from-[#03261b] to-[#064e3b] text-white rounded-2xl p-5 shadow-md space-y-3">
                  <p className="text-xs font-black text-emerald-300 uppercase">
                    Sage Roots London Office
                  </p>
                  <h4 className="text-base font-black leading-snug">
                    Official University Admissions Desk
                  </h4>
                  <p className="text-xs text-emerald-100 font-medium">
                    44 Broadway Stratford London E15 1XH
                  </p>
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-[#03261b] text-xs font-black py-3 px-3 rounded-xl transition shadow"
                  >
                    <MessageCircle className="w-4 h-4 text-[#03261b]" />
                    Send Profile via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Sticky Mobile WhatsApp Bar */}
      {isSubmitted && (
        <div className="lg:hidden fixed bottom-3 left-3 right-3 z-50">
          <a
            href={generateWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between bg-[#03261b] text-white p-3 rounded-2xl shadow-2xl border-2 border-emerald-500"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center text-[#03261b]">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-black text-white leading-tight">
                  {evaluation.totalCount} Universities Found
                </p>
                <p className="text-[10px] text-emerald-300 font-bold">
                  Tap to WhatsApp Free Assessment
                </p>
              </div>
            </div>
            <span className="bg-emerald-400 text-[#03261b] text-xs font-black px-3 py-1.5 rounded-xl">
              Apply Free
            </span>
          </a>
        </div>
      )}
    </div>
  )
}
