'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  GraduationCap,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  MessageCircle,
  Building,
  Coins,
  ShieldCheck,
  Briefcase,
} from 'lucide-react'
import { universities } from '@/data/universities'

type UniBackground = 'private_moi' | 'public_moi' | 'national_univ' | 'hsc_college'
type EnglishTier = 'moi_certificate' | 'ielts_65' | 'ielts_60' | 'ielts_55_internal'
type TargetIntake = 'jan_2027' | 'sept_2027'

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

const MOI_PARTNER_SLUGS = [
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
]

export default function EligibilityChecker() {
  const [level, setLevel] = useState<string>('Postgraduate')
  const [uniBackground, setUniBackground] = useState<UniBackground>('private_moi')
  const [cgpa, setCgpa] = useState<string>('cgpa_medium')
  const [english, setEnglish] = useState<EnglishTier>('moi_certificate')
  const [intake, setIntake] = useState<TargetIntake>('jan_2027')

  const calculation = useMemo(() => {
    // Determine MOI eligibility
    const isMoiEligible =
      (uniBackground === 'private_moi' || uniBackground === 'public_moi') &&
      (english === 'moi_certificate' || english === 'ielts_55_internal')

    // Find matched universities
    let matched = universities.filter((u) => {
      if (!u.studyLevels.includes(level)) return false

      const isRussell = RUSSELL_SLUGS.has(u.slug)

      if (english === 'moi_certificate') {
        return MOI_PARTNER_SLUGS.includes(u.slug)
      }

      if (english === 'ielts_55_internal' && isRussell) {
        return false
      }

      return true
    })

    if (matched.length < 4) {
      const fallback = universities.filter(
        (u) => MOI_PARTNER_SLUGS.includes(u.slug) && u.studyLevels.includes(level)
      )
      matched = fallback.length ? fallback : universities.slice(0, 6)
    }

    // Scholarship calculation logic
    let scholarshipGbp = 2500
    let avgTuitionGbp = 14500
    let minDepositGbp = 3000
    let badgeText = 'IELTS Waiver (MOI) Verified'
    let summaryNote =
      'আপনার পূর্ববর্তী ডিগ্রি অনুযায়ী কোনো IELTS ছাড়াই Medium of Instruction (MOI) দিয়ে সরাসরি Master’s/MBA প্রোগ্রামে অফার লেটার ও স্কলারশিপ পাওয়ার ১০০% সুযোগ রয়েছে।'

    if (english === 'ielts_65' && cgpa === 'cgpa_high') {
      scholarshipGbp = 4500
      avgTuitionGbp = 16500
      minDepositGbp = 4000
      badgeText = 'Top Merit & Russell Group Eligible'
      summaryNote =
        'অসাধারণ সিজিপিএ এবং IELTS 6.5+ স্কোরের কারণে আপনি যুক্তরাজ্যের শীর্ষ ইউনিভার্সিটি ও ভাইস-চ্যান্সেলর মেরিট স্কলারশিপের জন্য যোগ্য।'
    } else if (uniBackground === 'national_univ') {
      scholarshipGbp = 2000
      avgTuitionGbp = 13800
      minDepositGbp = 3500
      badgeText = 'National Univ Fast-Track Pathway'
      summaryNote =
        'জাতীয় বিশ্ববিদ্যালয়ের শিক্ষার্থীদের জন্য প্রাক-মাস্টার্স ও ইন্টারনাল ইংলিশ টেস্ট বা ডুওলিঙ্গো দিয়ে দ্রুত ইউকে ভিসা প্রসেসিং সুবিধা।'
    } else if (english === 'moi_certificate') {
      scholarshipGbp = 3000
      avgTuitionGbp = 12500
      minDepositGbp = 3000
      badgeText = '100% MOI Accepted (No IELTS)'
      summaryNote =
        'NUBTK, North Western, KUET, KU ও প্রাইভেট/পাবলিক ভার্সিটি গ্র্যাজুয়েটদের জন্য সরাসরি MOI দিয়ে BPP, Ulster ও অন্যান্য শীর্ষ ক্যাম্পাসে ভর্তি।'
    }

    const netTuitionGbp = avgTuitionGbp - scholarshipGbp
    const gbpToBdtRate = 158 // live reference approx
    const netTuitionBdt = Math.round(netTuitionGbp * gbpToBdtRate).toLocaleString('en-IN')
    const depositBdt = Math.round(minDepositGbp * gbpToBdtRate).toLocaleString('en-IN')

    return {
      matchedUnis: matched.slice(0, 6),
      isMoiEligible,
      scholarshipGbp,
      avgTuitionGbp,
      netTuitionGbp,
      minDepositGbp,
      netTuitionBdt,
      depositBdt,
      badgeText,
      summaryNote,
    }
  }, [level, uniBackground, cgpa, english, intake])

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Sage Roots Team, I checked my UK Eligibility on the website:
• Degree Level: ${level}
• Background: ${uniBackground === 'private_moi' ? 'Private Univ (NUBTK/NWU/etc)' : uniBackground === 'public_moi' ? 'Public Univ (KU/KUET/etc)' : 'National Univ/College'}
• English Status: ${english === 'moi_certificate' ? 'MOI (No IELTS)' : english}
• Target Intake: ${intake === 'jan_2027' ? 'January 2027' : 'September 2027'}
Please assess my admission & scholarship options.`
    )
    return `https://wa.me/447776181483?text=${text}`
  }

  return (
    <section
      id="eligibility-checker"
      className="py-20 bg-gradient-to-b from-[#031812] via-[#073224] to-[#042017] text-white relative overflow-hidden"
      aria-labelledby="eligibility-heading"
    >
      {/* Background Glows */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Live Assessment &amp; Net Cost Calculator
          </div>
          <h2
            id="eligibility-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4"
          >
            UK Eligibility, MOI &amp; Cost Calculator
          </h2>
          <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
            আপনার অ্যাকাডেমিক ব্যাকগ্রাউন্ড (NUBTK, NWU, KUET, KU, ন্যাশনাল ভার্সিটি) ও ইংলিশ স্ট্যাটাস সিলেক্ট করে সরাসরি দেখুন কোন কোন ইউনিভার্সিটিতে <strong>IELTS ছাড়া MOI দিয়ে ভর্তি</strong>, স্কলারশিপ ও মিনিমাম কত ডিপোজিটে ক্যাশ (CAS) পাওয়া যাবে।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Panel: Interactive Inputs (5 cols) */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md border border-white/15 rounded-3xl p-6 sm:p-7 space-y-5">
            {/* 1. Target Study Level */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2.5">
                ১. কোন কোর্সে আবেদন করতে চান?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Postgraduate', 'Undergraduate', 'Foundation'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setLevel(item)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                      level === item
                        ? 'bg-emerald-500 text-[#042017] border-emerald-400 shadow-md font-extrabold'
                        : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {item === 'Postgraduate' ? "Master's/MBA" : item}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Educational Institution Background */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2.5">
                ২. পূর্ববর্তী শিক্ষা প্রতিষ্ঠানের ধরন
              </label>
              <div className="space-y-2">
                {[
                  {
                    id: 'private_moi' as UniBackground,
                    title: 'Private University (NUBTK, NWU, AIUB, etc.)',
                    desc: '১০০% ইংরেজি মাধ্যমে পড়াশোনা (MOI Eligible)',
                  },
                  {
                    id: 'public_moi' as UniBackground,
                    title: 'Public University (KUET, KU, DU, RU, etc.)',
                    desc: 'পাবলিক ভার্সিটি অনার্স/মাস্টার্স (Direct & MOI)',
                  },
                  {
                    id: 'national_univ' as UniBackground,
                    title: 'National University (BL College, City College, etc.)',
                    desc: 'জাতীয় বিশ্ববিদ্যালয় ডিগ্রি / অনার্স পাস',
                  },
                  {
                    id: 'hsc_college' as UniBackground,
                    title: 'HSC / A-Level / Diploma College',
                    desc: 'আন্ডারগ্র্যাজুয়েট ও ফাউন্ডেশন লেভেল',
                  },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setUniBackground(opt.id)}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                      uniBackground === opt.id
                        ? 'bg-emerald-500/25 border-emerald-400 text-white font-bold'
                        : 'bg-white/5 border-white/10 text-white/75 hover:bg-white/10'
                    }`}
                  >
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-white">{opt.title}</p>
                      <p className="text-[11px] text-emerald-200/60">{opt.desc}</p>
                    </div>
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                        uniBackground === opt.id ? 'border-emerald-400 bg-emerald-400' : 'border-white/30'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* 3. English Proficiency / MOI */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2.5">
                ৩. ইংলিশ টেস্ট ও MOI সার্টিফিকেট স্ট্যাটাস
              </label>
              <div className="space-y-2">
                {[
                  {
                    id: 'moi_certificate' as EnglishTier,
                    label: 'Medium of Instruction (MOI) - কোনো IELTS লাগবে না',
                    badge: 'No IELTS',
                  },
                  {
                    id: 'ielts_60' as EnglishTier,
                    label: 'IELTS 6.0 / Duolingo 105+ / PTE 54+',
                    badge: 'Popular',
                  },
                  {
                    id: 'ielts_65' as EnglishTier,
                    label: 'IELTS 6.5+ / PTE 62+ (Russell Group Eligible)',
                    badge: 'High Merit',
                  },
                  {
                    id: 'ielts_55_internal' as EnglishTier,
                    label: 'IELTS 5.5 অথবা ভার্সিটির ফ্রি ইন্টারনাল টেস্ট',
                    badge: 'Flexible',
                  },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setEnglish(opt.id)}
                    className={`w-full text-left p-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all flex items-center justify-between ${
                      english === opt.id
                        ? 'bg-emerald-500 text-[#042017] border-emerald-400 font-bold'
                        : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <span>{opt.label}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                        english === opt.id ? 'bg-[#042017] text-emerald-300' : 'bg-white/10 text-white/70'
                      }`}
                    >
                      {opt.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Target Intake */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-emerald-300 mb-2.5">
                ৪. সম্ভাব্য ভর্তি সেশন (Intake)
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'jan_2027' as TargetIntake, label: 'January 2027 (Now Open)' },
                  { id: 'sept_2027' as TargetIntake, label: 'September 2027' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setIntake(opt.id)}
                    className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all ${
                      intake === opt.id
                        ? 'bg-emerald-500 text-[#042017] border-emerald-400 font-extrabold shadow-md'
                        : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Live Calculation & Results (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Financial Summary Card */}
            <div className="bg-gradient-to-r from-emerald-600/30 via-[#073224] to-emerald-800/40 border border-emerald-400/40 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="bg-emerald-400 text-[#042017] text-xs font-black px-3.5 py-1 rounded-full">
                  {calculation.badgeText}
                </span>
                <span className="text-amber-300 text-xs font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> £0 Agency Processing Fee
                </span>
              </div>

              {/* Dynamic Cost Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-5">
                <div className="bg-black/30 border border-white/10 rounded-2xl p-4">
                  <p className="text-[11px] text-emerald-200/70 font-semibold uppercase">গড় টিউশন ফি</p>
                  <p className="text-xl sm:text-2xl font-black text-white mt-1">
                    £{calculation.avgTuitionGbp.toLocaleString()}
                  </p>
                  <p className="text-[10px] text-white/50">কোর্স অনুযায়ী বার্ষিক ফি</p>
                </div>

                <div className="bg-emerald-500/20 border border-emerald-400/40 rounded-2xl p-4">
                  <p className="text-[11px] text-emerald-300 font-semibold uppercase">স্কলারশিপ ছাড়</p>
                  <p className="text-xl sm:text-2xl font-black text-emerald-300 mt-1">
                    -£{calculation.scholarshipGbp.toLocaleString()}
                  </p>
                  <p className="text-[10px] text-emerald-200/70">অটোমেটিক মেরিট ওয়েভার</p>
                </div>

                <div className="bg-amber-400/15 border border-amber-400/30 rounded-2xl p-4">
                  <p className="text-[11px] text-amber-200 font-semibold uppercase">মিনিমাম CAS ডিপোজিট</p>
                  <p className="text-xl sm:text-2xl font-black text-amber-300 mt-1">
                    £{calculation.minDepositGbp.toLocaleString()}
                  </p>
                  <p className="text-[10px] text-amber-100/70">প্রায় ৳{calculation.depositBdt} BDT</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className="text-xs text-white/75">
                    স্কলারশিপ বাদে নিট টিউশন ফি: <strong className="text-emerald-300 font-black">£{calculation.netTuitionGbp.toLocaleString()}</strong> (প্রায় ৳{calculation.netTuitionBdt} BDT)
                  </p>
                  <p className="text-[11px] text-white/60 mt-0.5">{calculation.summaryNote}</p>
                </div>
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-[#042017] font-black text-xs sm:text-sm px-5 py-3 rounded-xl transition shadow-md whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  এই প্রোফাইলে আবেদন করুন
                </a>
              </div>
            </div>

            {/* Matching Universities List */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm sm:text-base font-bold text-emerald-200 flex items-center gap-2">
                  <Building className="w-4 h-4 text-emerald-400" />
                  আপনার জন্য প্রস্তাবিত সেরা বিশ্ববিদ্যালয়সমূহ ({calculation.matchedUnis.length})
                </h4>
                <Link
                  href="/universities"
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
                >
                  সকল ৫০+ বিশ্ববিদ্যালয় দেখুন
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {calculation.matchedUnis.map((uni) => (
                  <div
                    key={uni.id}
                    className="bg-white text-brand-dark rounded-2xl p-4 border border-emerald-100 shadow-md flex flex-col justify-between hover:-translate-y-0.5 transition-transform"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 ring-1 ring-gray-100">
                          <Image
                            src={uni.image}
                            alt={uni.name}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                        <div className="min-w-0">
                          <h5 className="font-bold text-sm text-[#06241B] truncate">
                            {uni.name}
                          </h5>
                          <p className="text-xs text-gray-500 mt-0.5 truncate">
                            {uni.city}, United Kingdom
                          </p>
                        </div>
                      </div>

                      <div className="bg-emerald-50/80 border border-emerald-100 rounded-xl p-2.5 mb-3 text-xs space-y-1">
                        <p className="font-bold text-emerald-950 truncate">
                          ফি: {uni.tuitionFeeNote}
                        </p>
                        <p className="text-emerald-700 text-[11px] truncate">
                          স্কলারশিপ: {uni.scholarshipNote}
                        </p>
                        <div className="flex items-center gap-1.5 pt-0.5 text-[10px] text-gray-600 font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>MOI ও London Job Support অন্তর্ভুক্ত</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <Link
                        href={`/universities/${uni.slug}`}
                        className="flex-1 text-center py-2 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#06241B] text-xs font-bold transition-colors"
                      >
                        বিস্তারিত
                      </Link>
                      <a
                        href={generateWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 px-3 rounded-xl bg-[#073224] hover:bg-emerald-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1"
                      >
                        ফ্রি অ্যাডমিশন <ArrowRight className="w-3 h-3" />
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
