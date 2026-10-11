'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, Scale, X, ArrowRight, Check } from 'lucide-react'
import { universities, type University } from '@/data/universities'
import UniversityCard from '@/components/ui/UniversityCard'

const ALL_LEVELS = ['Undergraduate', 'Postgraduate', 'Foundation', 'PhD']
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

function getUniversityLetters(name: string): string[] {
  const first = name.charAt(0).toUpperCase()
  const core = name
    .replace(/^(The\s+)?(University\s+of\s+the\s+|University\s+of\s+|University\s+for\s+the\s+|University\s+College\s+)/i, '')
    .trim()
  const coreFirst = core.charAt(0).toUpperCase()
  return first === coreFirst ? [first] : [first, coreFirst]
}

export default function UniversitiesPage() {
  const [query, setQuery] = useState('')
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)
  const [compareList, setCompareList] = useState<University[]>([])
  const [showCompareModal, setShowCompareModal] = useState(false)

  const availableLetters = useMemo(() => {
    const set = new Set<string>()
    universities.forEach((u) => {
      getUniversityLetters(u.name).forEach((l) => set.add(l))
    })
    return set
  }, [])

  const filtered = useMemo(() => {
    return [...universities]
      .sort((a, b) => a.name.localeCompare(b.name))
      .filter((u) => {
        const q = query.toLowerCase()
        const matchesQuery =
          !q ||
          u.name.toLowerCase().includes(q) ||
          u.city.toLowerCase().includes(q) ||
          u.subjects.some((s) => s.toLowerCase().includes(q))
        const matchesLevel = !selectedLevel || u.studyLevels.includes(selectedLevel)
        const matchesLetter =
          !selectedLetter || getUniversityLetters(u.name).includes(selectedLetter)
        return matchesQuery && matchesLevel && matchesLetter
      })
  }, [query, selectedLevel, selectedLetter])

  const toggleCompare = (uni: University) => {
    setCompareList((prev) => {
      const exists = prev.some((item) => item.id === uni.id)
      if (exists) return prev.filter((item) => item.id !== uni.id)
      if (prev.length >= 3) return prev
      return [...prev, uni]
    })
  }

  return (
    <div className="bg-[#F8FAF9] min-h-screen pb-24">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#042017] via-[#073224] to-[#0A4431] pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-emerald-400 font-bold text-xs tracking-widest uppercase mb-4">
            A to Z University Directory &amp; Comparison
          </p>
          <h1 className="text-white font-black text-4xl sm:text-5xl mb-4">
            Explore {universities.length}+ UK Partner Universities (A–Z)
          </h1>
          <p className="text-emerald-100/80 text-base max-w-xl mx-auto leading-relaxed">
            Browse all UK partner universities in A to Z alphabetical order, filter by starting letter or degree level, and compare up to 3 universities side-by-side.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-4 mb-8 bg-white p-4 sm:p-5 rounded-2xl border border-emerald-100 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search universities, subjects, or UK cities (e.g. London, Manchester, Birmingham)..."
                aria-label="Search universities"
                className="w-full pl-10 pr-4 py-3 text-sm border border-gray-200 rounded-xl text-[#06241B] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-magenta/30 focus:border-brand-magenta transition"
              />
            </div>
            <div className="flex gap-2 flex-wrap items-center">
              <button
                onClick={() => setSelectedLevel(null)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                  !selectedLevel
                    ? 'bg-[#073224] text-white border-[#073224]'
                    : 'border-gray-200 text-gray-600 hover:border-[#073224] hover:text-[#073224]'
                }`}
              >
                All Levels ({universities.length})
              </button>
              {ALL_LEVELS.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
                  aria-pressed={selectedLevel === level}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                    selectedLevel === level
                      ? 'bg-[#073224] text-white border-[#073224]'
                      : 'border-gray-200 text-gray-600 hover:border-[#073224] hover:text-[#073224]'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* A to Z Alphabetical Filter Bar */}
          <div className="pt-3 border-t border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800">
                Browse Alphabetically (A to Z Serial)
              </span>
              {selectedLetter && (
                <button
                  type="button"
                  onClick={() => setSelectedLetter(null)}
                  className="text-xs font-bold text-emerald-700 hover:underline"
                >
                  Show All Letters (A–Z)
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedLetter(null)}
                className={`px-3 py-1.5 rounded-lg text-xs font-extrabold border transition-all ${
                  !selectedLetter
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-emerald-600 hover:text-emerald-700'
                }`}
              >
                All A–Z
              </button>
              {ALPHABET.map((letter) => {
                const hasUni = availableLetters.has(letter)
                const isActive = selectedLetter === letter
                return (
                  <button
                    key={letter}
                    type="button"
                    disabled={!hasUni}
                    onClick={() => setSelectedLetter(isActive ? null : letter)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold border transition-all flex items-center justify-center ${
                      isActive
                        ? 'bg-[#073224] text-white border-[#073224] shadow-sm'
                        : hasUni
                        ? 'bg-white text-[#06241B] border-gray-200 hover:border-emerald-600 hover:bg-emerald-50'
                        : 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed'
                    }`}
                  >
                    {letter}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Results Bar */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
          <p className="text-sm text-gray-500 font-medium">
            Showing <strong className="text-[#06241B]">{filtered.length}</strong> UK partner universit
            {filtered.length === 1 ? 'y' : 'ies'} in <strong className="text-emerald-800">A–Z alphabetical order</strong>
            {selectedLetter ? ` (Starting with "${selectedLetter}")` : ''}
          </p>
          <p className="text-xs text-emerald-700 font-semibold">
            Click &ldquo;Compare&rdquo; on any card to compare up to 3 universities side-by-side
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((university) => {
              const isSelected = compareList.some((u) => u.id === university.id)
              return (
                <div key={university.id} className="relative flex flex-col">
                  {/* Compare Pill Overlay */}
                  <button
                    type="button"
                    onClick={() => toggleCompare(university)}
                    className={`absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full text-[11px] font-bold shadow-md transition ${
                      isSelected
                        ? 'bg-emerald-500 text-white'
                        : 'bg-white/90 hover:bg-white text-[#06241B]'
                    }`}
                  >
                    {isSelected ? 'Selected' : 'Compare'}
                  </button>
                  <UniversityCard university={university} />
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-emerald-100">
            <p className="text-gray-500 mb-3">No universities matched your search.</p>
            <button
              onClick={() => {
                setQuery('')
                setSelectedLevel(null)
                setSelectedLetter(null)
              }}
              className="text-[#073224] font-bold text-sm hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* Sticky Bottom Compare Bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-3xl bg-[#042017] text-white rounded-2xl p-4 shadow-2xl border border-emerald-400/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 mr-1">
              Compare ({compareList.length}/3):
            </span>
            {compareList.map((u) => (
              <span
                key={u.id}
                className="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-lg"
              >
                <span className="truncate max-w-[140px]">{u.name}</span>
                <button
                  type="button"
                  onClick={() => toggleCompare(u)}
                  aria-label={`Remove ${u.name}`}
                  className="text-white/60 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={() => setCompareList([])}
              className="text-xs text-white/60 hover:text-white underline px-2"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => setShowCompareModal(true)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition shadow-lg"
            >
              Compare Now
            </button>
          </div>
        </div>
      )}

      {/* Side-by-Side Comparison Modal */}
      {showCompareModal && compareList.length > 0 && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="University Comparison"
        >
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowCompareModal(false)}
          />
          <div className="relative z-10 w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="bg-[#073224] text-white px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg sm:text-xl font-black">
                  UK University Side-by-Side Comparison
                </h2>
                <p className="text-emerald-200/80 text-xs">
                  Compare key admission criteria, English waivers, tuition fees, and scholarships
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowCompareModal(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 overflow-x-auto overflow-y-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 text-xs uppercase text-gray-400 font-bold w-44">
                      Criteria
                    </th>
                    {compareList.map((u) => (
                      <th key={u.id} className="py-3 px-4 text-[#06241B] font-black text-base">
                        {u.name}
                        <span className="block text-xs font-semibold text-emerald-700 mt-0.5">
                          {u.city}, {u.countryCode}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-[#06241B] bg-gray-50/60">
                      Study Levels
                    </td>
                    {compareList.map((u) => (
                      <td key={u.id} className="py-3.5 px-4 text-gray-700">
                        {u.studyLevels.join(', ')}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-[#06241B] bg-gray-50/60">
                      Intakes
                    </td>
                    {compareList.map((u) => (
                      <td key={u.id} className="py-3.5 px-4 font-semibold text-emerald-700">
                        {u.intakes.join(', ')}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-[#06241B] bg-gray-50/60">
                      Entry Requirements
                    </td>
                    {compareList.map((u) => (
                      <td key={u.id} className="py-3.5 px-4 text-gray-600 leading-relaxed">
                        {u.entryRequirements}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-[#06241B] bg-gray-50/60">
                      English / MOI Status
                    </td>
                    {compareList.map((u) => (
                      <td key={u.id} className="py-3.5 px-4 text-gray-600 leading-relaxed">
                        {u.englishRequirements}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-[#06241B] bg-gray-50/60">
                      Tuition Fees
                    </td>
                    {compareList.map((u) => (
                      <td key={u.id} className="py-3.5 px-4 text-gray-700 font-medium">
                        {u.tuitionFeeNote}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-[#06241B] bg-gray-50/60">
                      Scholarships
                    </td>
                    {compareList.map((u) => (
                      <td key={u.id} className="py-3.5 px-4 text-emerald-800 font-medium">
                        {u.scholarshipNote}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold text-[#06241B] bg-gray-50/60">
                      Action
                    </td>
                    {compareList.map((u) => (
                      <td key={u.id} className="py-4 px-4">
                        <Link
                          href={`/contact?university=${u.slug}`}
                          onClick={() => setShowCompareModal(false)}
                          className="inline-block bg-[#073224] hover:bg-[#042017] text-white font-bold text-xs px-4 py-2.5 rounded-xl transition"
                        >
                          Apply Free
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
