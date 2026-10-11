'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  GraduationCap,
  Clock,
  Briefcase,
  CheckCircle2,
  Building2,
  Search,
} from 'lucide-react'
import { subjects } from '@/data/services'
import { universities } from '@/data/universities'
import UniversityCard from '@/components/ui/UniversityCard'
import ConsultationForm from '@/components/home/ConsultationForm'

interface DegreeProgramme {
  title: string
  level: 'Postgraduate' | 'Undergraduate' | 'Foundation'
  duration: string
  subjectSlug: string
  subjectName: string
  avgSalary: string
  highlights: string[]
}

const DEGREE_PROGRAMMES: DegreeProgramme[] = [
  // Computer Science & IT
  {
    title: 'MSc Data Science & Artificial Intelligence',
    level: 'Postgraduate',
    duration: '1 Year Full-Time (or 2 Years with Placement)',
    subjectSlug: 'computer-science',
    subjectName: 'Computer Science & IT',
    avgSalary: '£35,000 – £55,000 / yr',
    highlights: ['Python, Machine Learning & Big Data', 'MOI / IELTS 6.0–6.5 Accepted', '2-Year UK PSW Visa'],
  },
  {
    title: 'MSc Cyber Security & Cloud Computing',
    level: 'Postgraduate',
    duration: '1 Year Full-Time',
    subjectSlug: 'computer-science',
    subjectName: 'Computer Science & IT',
    avgSalary: '£34,000 – £52,000 / yr',
    highlights: ['NCSC Aligned Curriculum', 'High UK Tech Sector Demand', 'Up to £6,000 Merit Scholarship'],
  },
  {
    title: 'BSc (Hons) Computer Science & Software Engineering',
    level: 'Undergraduate',
    duration: '3 Years Full-Time (4 Years Sandwich)',
    subjectSlug: 'computer-science',
    subjectName: 'Computer Science & IT',
    avgSalary: '£30,000 – £42,000 / yr',
    highlights: ['BCS Accredited Pathway', 'Paid Industry Year Option', 'September & January Intakes'],
  },

  // Business & Management
  {
    title: 'Master of Business Administration (Global MBA)',
    level: 'Postgraduate',
    duration: '1 Year – 2 Years (with Placement)',
    subjectSlug: 'business',
    subjectName: 'Business & Management',
    avgSalary: '£38,000 – £60,000 / yr',
    highlights: ['CMI Dual Accreditation', 'Accepts Study Gap with Work Exp', 'No GMAT Required'],
  },
  {
    title: 'MSc International Business & Project Management',
    level: 'Postgraduate',
    duration: '1 Year Full-Time',
    subjectSlug: 'business',
    subjectName: 'Business & Management',
    avgSalary: '£32,000 – £46,000 / yr',
    highlights: ['PRINCE2 / APM Aligned', 'Open to Any Bachelor Background', 'MOI Accepted at Select Unis'],
  },
  {
    title: 'BSc (Hons) Accounting, Finance & Business Management',
    level: 'Undergraduate',
    duration: '3 Years Full-Time',
    subjectSlug: 'business',
    subjectName: 'Business & Management',
    avgSalary: '£28,000 – £40,000 / yr',
    highlights: ['ACCA / CIMA Paper Exemptions', 'London & Regional Campuses', 'Automatic Bursaries Available'],
  },

  // Engineering & Technology
  {
    title: 'MSc Engineering Management & Construction Project Management',
    level: 'Postgraduate',
    duration: '1 Year Full-Time',
    subjectSlug: 'engineering',
    subjectName: 'Engineering & Technology',
    avgSalary: '£35,000 – £50,000 / yr',
    highlights: ['RICS / Chartered Engineering Pathways', 'Ideal for Civil, Mechanical & EEE Grads', 'High Employability'],
  },
  {
    title: 'BEng / MEng Mechanical, Civil & Electrical Engineering',
    level: 'Undergraduate',
    duration: '3–4 Years Full-Time',
    subjectSlug: 'engineering',
    subjectName: 'Engineering & Technology',
    avgSalary: '£31,000 – £45,000 / yr',
    highlights: ['IMechE / IET Accredited Labs', 'Formula Student & Robotics Facilities', 'Industry Placement Year'],
  },

  // Health Sciences
  {
    title: 'MSc Public Health & Healthcare Management',
    level: 'Postgraduate',
    duration: '1 Year Full-Time',
    subjectSlug: 'health-sciences',
    subjectName: 'Health Sciences',
    avgSalary: '£32,000 – £48,000 / yr',
    highlights: ['Open to Doctors, Nurses & Bio Science Grads', 'NHS & Global Health Career Track', 'Sep & Jan Intakes'],
  },
  {
    title: 'BSc (Hons) Adult Nursing / Biomedical Science',
    level: 'Undergraduate',
    duration: '3 Years Full-Time',
    subjectSlug: 'health-sciences',
    subjectName: 'Health Sciences',
    avgSalary: '£29,970 – £40,000 / yr (NHS Band 5+)',
    highlights: ['NMC / IBMS Approved Clinical Placements', 'Direct NHS Hospital Training', 'High UK Job Security'],
  },

  // Law & Humanities
  {
    title: 'LLM International Commercial & Corporate Law',
    level: 'Postgraduate',
    duration: '1 Year Full-Time',
    subjectSlug: 'law',
    subjectName: 'Law & Humanities',
    avgSalary: '£34,000 – £55,000 / yr',
    highlights: ['International Arbitration & Trade Law', 'Moot Court & Legal Clinic Access', 'Merit Scholarships'],
  },
  {
    title: 'LLB (Hons) Law (Qualifying Law Degree)',
    level: 'Undergraduate',
    duration: '3 Years Full-Time',
    subjectSlug: 'law',
    subjectName: 'Law & Humanities',
    avgSalary: '£30,000 – £45,000 / yr',
    highlights: ['SQE / Bar Preparation Track', 'Recognised in UK & Commonwealth', 'Pro-Bono Legal Clinics'],
  },

  // Foundation Pathways
  {
    title: 'International Foundation Year (Business, Computing, Engineering & Law)',
    level: 'Foundation',
    duration: '6–9 Months (2–3 Semesters)',
    subjectSlug: 'foundation',
    subjectName: 'Foundation Pathways',
    avgSalary: 'Direct Progression to Year 1 BSc / BA',
    highlights: ['Accepts HSC / A-Levels / Lower GPA', 'Integrated English & Academic Skills', 'Guaranteed University Progression'],
  },
  {
    title: 'International Incorporated Master’s (Pre-Master’s Pathway)',
    level: 'Foundation',
    duration: '1–2 Terms (3–6 Months)',
    subjectSlug: 'foundation',
    subjectName: 'Foundation Pathways',
    avgSalary: 'Direct Progression to UK Master’s',
    highlights: ['Accepts 3-Year Pass Degree / Lower CGPA', 'Single CAS for Pre-Master’s + Master’s', 'No Separate Visa Renewal Needed'],
  },
]

const SUBJECT_KEYWORDS: Record<string, string[]> = {
  'computer-science': ['computer', 'computing', 'data', 'cyber', 'it', 'software', 'ai'],
  business: ['business', 'management', 'finance', 'accounting', 'marketing', 'economics'],
  engineering: ['engineering', 'technology', 'architecture', 'construction', 'aviation'],
  'health-sciences': ['health', 'nursing', 'medicine', 'biomedical', 'pharmacy', 'psychology', 'life sciences'],
  law: ['law', 'humanities', 'social', 'media', 'arts', 'international relations', 'education'],
  foundation: ['business', 'computing', 'engineering', 'law'],
}

export default function CoursesPage() {
  const [selectedSlug, setSelectedSlug] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const subj = params.get('subject')
      if (subj && subjects.some((s) => s.slug === subj)) {
        setSelectedSlug(subj)
      }
    }
  }, [])

  const activeSubject = subjects.find((s) => s.slug === selectedSlug)

  const filteredProgrammes = useMemo(() => {
    return DEGREE_PROGRAMMES.filter((prog) => {
      const matchesTab = selectedSlug === 'all' || prog.subjectSlug === selectedSlug
      const q = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !q ||
        prog.title.toLowerCase().includes(q) ||
        prog.subjectName.toLowerCase().includes(q) ||
        prog.level.toLowerCase().includes(q)
      return matchesTab && matchesSearch
    })
  }, [selectedSlug, searchQuery])

  const matchingUniversities = useMemo(() => {
    if (selectedSlug === 'all') return universities.slice(0, 8)
    if (selectedSlug === 'foundation') {
      return universities.filter((u) => u.studyLevels.includes('Foundation')).slice(0, 8)
    }
    const keywords = SUBJECT_KEYWORDS[selectedSlug] || []
    return universities
      .filter((u) =>
        u.subjects.some((s) => keywords.some((kw) => s.toLowerCase().includes(kw)))
      )
      .slice(0, 8)
  }, [selectedSlug])

  return (
    <div className="bg-[#F8FAF9]">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#042017] via-[#073224] to-[#0A4431] pt-32 pb-20 px-4 text-center">
        <p className="text-emerald-400 font-bold text-xs tracking-widest uppercase mb-3">
          UK Study Programmes
        </p>
        <h1 className="text-white font-black text-4xl sm:text-5xl mb-4">
          Courses &amp; Subject Pathways
        </h1>
        <p className="text-emerald-100/80 text-base max-w-2xl mx-auto leading-relaxed">
          Explore high-demand UK Bachelor&apos;s, Master&apos;s, and Foundation programmes across 50+ partner universities—with career outcomes and matching institutions.
        </p>
      </section>

      {/* Interactive Subject Cards + Filter Bar */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subject Visual Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {subjects.map((subject) => {
            const isSelected = selectedSlug === subject.slug
            return (
              <button
                key={subject.id}
                type="button"
                onClick={() =>
                  setSelectedSlug((prev) => (prev === subject.slug ? 'all' : subject.slug))
                }
                className={`group relative rounded-2xl overflow-hidden text-left transition-all duration-300 h-36 border-2 ${
                  isSelected
                    ? 'border-emerald-500 ring-4 ring-emerald-500/20 scale-[1.02]'
                    : 'border-transparent hover:border-emerald-300'
                }`}
              >
                <Image
                  src={subject.image}
                  alt={subject.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
                <div
                  className={`absolute inset-0 transition-colors ${
                    isSelected
                      ? 'bg-gradient-to-t from-[#042017] via-[#042017]/70 to-emerald-900/30'
                      : 'bg-gradient-to-t from-[#042017] via-[#042017]/55 to-transparent'
                  }`}
                />
                <div className="absolute bottom-0 left-0 right-0 p-3.5">
                  <p className="text-white font-extrabold text-xs sm:text-sm leading-snug">
                    {subject.name}
                  </p>
                  <span className="inline-block text-emerald-400 text-[11px] font-bold mt-1">
                    {isSelected ? 'Selected' : 'Filter Courses'}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        {/* Search & Reset Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-emerald-100 shadow-sm mb-10">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search degree title (e.g. MBA, Data Science, Cyber Security, Nursing, Law)..."
              aria-label="Search degree programmes"
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl text-[#06241B] focus:outline-none focus:border-[#073224]"
            />
          </div>
          <div className="flex items-center gap-2">
            {selectedSlug !== 'all' && (
              <button
                type="button"
                onClick={() => setSelectedSlug('all')}
                className="px-4 py-2.5 rounded-xl bg-emerald-50 text-[#073224] font-bold text-xs hover:bg-emerald-100 transition"
              >
                Show All Subjects ({DEGREE_PROGRAMMES.length})
              </button>
            )}
          </div>
        </div>

        {/* Featured Degree Programmes List */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-[#06241B] font-black text-2xl sm:text-3xl">
                {activeSubject ? `${activeSubject.name} Programmes` : 'Top UK Degree Programmes'}
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                High-employability degrees eligible for the 2-Year UK Graduate Route (PSW) Visa.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredProgrammes.map((prog) => (
              <div
                key={prog.title}
                className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="bg-[#ECFDF5] text-[#073224] text-xs font-bold px-3 py-1 rounded-full">
                      {prog.level}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                      {prog.subjectName}
                    </span>
                  </div>

                  <h3 className="font-black text-[#06241B] text-lg sm:text-xl mb-3">
                    {prog.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-4">
                    <span>Duration: <strong className="text-[#06241B]">{prog.duration}</strong></span>
                    <span>
                      Typical UK Outcome: <strong className="text-[#06241B]">{prog.avgSalary}</strong>
                    </span>
                  </div>

                  <div className="space-y-1.5 mb-5">
                    {prog.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <Link
                    href="#consultation"
                    className="text-sm font-bold text-brand-magenta hover:text-[#073224] transition underline underline-offset-4"
                  >
                    Check My Eligibility
                  </Link>
                  <a
                    href={`https://wa.me/447776181483?text=${encodeURIComponent(
                      `Hello Sage Roots International! I want to enquire about studying ${prog.title} in the UK.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold bg-[#073224] hover:bg-[#042017] text-white px-4 py-2 rounded-lg transition"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Matching UK Universities for Selected Subject */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-brand-magenta font-bold text-xs tracking-widest uppercase mb-1">
                Partner Institutions
              </p>
              <h2 className="text-[#06241B] font-black text-2xl sm:text-3xl">
                {activeSubject
                  ? `UK Universities for ${activeSubject.name}`
                  : 'Featured UK Partner Universities'}
              </h2>
            </div>
            <Link
              href="/universities"
              className="text-sm font-bold text-[#073224] hover:text-brand-magenta underline underline-offset-4"
            >
              View All 50 UK Universities
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {matchingUniversities.map((uni) => (
              <UniversityCard key={uni.id} university={uni} />
            ))}
          </div>
        </div>
      </section>

      <ConsultationForm />
    </div>
  )
}
