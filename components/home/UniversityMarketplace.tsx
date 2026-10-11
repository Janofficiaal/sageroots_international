'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, SlidersHorizontal, X, ArrowRight } from 'lucide-react'
import { universities } from '@/data/universities'
import UniversityCard from '@/components/ui/UniversityCard'

const ALL_LEVELS = ['Undergraduate', 'Postgraduate', 'Foundation', 'PhD']
const ALL_INTAKES = ['September 2025', 'January 2026', 'May 2026', 'September 2026']
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

function getUniversityLetters(name: string): string[] {
  const first = name.charAt(0).toUpperCase()
  const core = name
    .replace(/^(The\s+)?(University\s+of\s+the\s+|University\s+of\s+|University\s+for\s+the\s+|University\s+College\s+)/i, '')
    .trim()
  const coreFirst = core.charAt(0).toUpperCase()
  return first === coreFirst ? [first] : [first, coreFirst]
}

export default function UniversityMarketplace() {
  const [query, setQuery] = useState('')
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)
  const [selectedIntake, setSelectedIntake] = useState<string | null>(null)
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(8)

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
        const matchesIntake = !selectedIntake || u.intakes.some((i) => i.includes(selectedIntake))
        const matchesLetter =
          !selectedLetter || getUniversityLetters(u.name).includes(selectedLetter)
        return matchesQuery && matchesLevel && matchesIntake && matchesLetter
      })
  }, [query, selectedLevel, selectedIntake, selectedLetter])

  const hasFilters = !!query || !!selectedLevel || !!selectedIntake || !!selectedLetter

  const clearFilters = () => {
    setQuery('')
    setSelectedLevel(null)
    setSelectedIntake(null)
    setSelectedLetter(null)
    setVisibleCount(8)
  }

  const displayedUniversities = filtered.slice(0, visibleCount)
  const remainingCount = Math.max(0, filtered.length - visibleCount)

  return (
    <section className="py-20 bg-[#F4F9F6]" aria-labelledby="universities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-brand-magenta font-bold text-xs tracking-widest uppercase mb-2">
              A to Z University Directory
            </p>
            <h2 id="universities-heading" className="text-brand-dark font-black text-3xl sm:text-4xl">
              Explore {universities.length}+ UK Partner Universities (A–Z)
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Discover Russell Group and modern career-focused UK universities arranged in A to Z alphabetical order.
            </p>
          </div>
          <Link
            href="/universities"
            className="text-brand-royal font-bold text-sm hover:text-brand-magenta transition-colors flex-shrink-0 underline underline-offset-4"
          >
            View All {universities.length} Universities (A–Z)
          </Link>
        </div>

        {/* Search & Filter bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-4 mb-8 flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search input */}
            <div className="relative flex-1">
              <Search
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setVisibleCount(8)
                }}
                placeholder="Search by university, city (e.g. London, Manchester) or subject..."
                aria-label="Search universities"
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-magenta/30 focus:border-brand-magenta transition"
              />
            </div>

            {/* Filter toggle */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              aria-expanded={filtersOpen}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-colors ${
                filtersOpen || hasFilters
                  ? 'border-brand-royal bg-brand-lavender text-brand-royal'
                  : 'border-gray-200 text-gray-600 hover:border-brand-royal hover:text-brand-royal'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" aria-hidden="true" />
              Filters
              {hasFilters && (
                <span className="w-2 h-2 rounded-full bg-brand-magenta ml-0.5" aria-hidden="true" />
              )}
            </button>

            {hasFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm text-gray-500 hover:text-brand-magenta transition-colors"
              >
                <X className="w-4 h-4" aria-hidden="true" /> Clear
              </button>
            )}
          </div>

          {/* A to Z Alphabetical Filter Bar */}
          <div className="pt-3 border-t border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800">
                Filter by Letter (A to Z Serial)
              </span>
              {selectedLetter && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedLetter(null)
                    setVisibleCount(8)
                  }}
                  className="text-xs font-bold text-emerald-700 hover:underline"
                >
                  Show All Letters (A–Z)
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => {
                  setSelectedLetter(null)
                  setVisibleCount(8)
                }}
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
                    onClick={() => {
                      setSelectedLetter(isActive ? null : letter)
                      setVisibleCount(8)
                    }}
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

        {/* Expanded filters */}
        {filtersOpen && (
          <div className="bg-white rounded-2xl border border-emerald-100 p-5 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Study Level */}
            <div>
              <p className="text-xs font-bold text-brand-dark uppercase tracking-widest mb-3">
                Study Level
              </p>
              <div className="flex flex-wrap gap-2">
                {ALL_LEVELS.map((level) => (
                  <button
                    key={level}
                    onClick={() => {
                      setSelectedLevel(selectedLevel === level ? null : level)
                      setVisibleCount(8)
                    }}
                    aria-pressed={selectedLevel === level}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                      selectedLevel === level
                        ? 'bg-brand-royal text-white border-brand-royal'
                        : 'border-gray-200 text-gray-600 hover:border-brand-royal hover:text-brand-royal'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Intake */}
            <div>
              <p className="text-xs font-bold text-brand-dark uppercase tracking-widest mb-3">
                Intake
              </p>
              <div className="flex flex-wrap gap-2">
                {ALL_INTAKES.map((intake) => (
                  <button
                    key={intake}
                    onClick={() => {
                      setSelectedIntake(selectedIntake === intake ? null : intake)
                      setVisibleCount(8)
                    }}
                    aria-pressed={selectedIntake === intake}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                      selectedIntake === intake
                        ? 'bg-brand-royal text-white border-brand-royal'
                        : 'border-gray-200 text-gray-600 hover:border-brand-royal hover:text-brand-royal'
                    }`}
                  >
                    {intake}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results count */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-5">
          <span>
            Showing <strong className="text-brand-dark">{displayedUniversities.length}</strong> of{' '}
            <strong className="text-brand-dark">{filtered.length}</strong> UK universities in{' '}
            <strong className="text-emerald-800">A–Z order</strong>
            {selectedLetter ? ` (Starting with "${selectedLetter}")` : ''}
          </span>
          {hasFilters && (
            <button onClick={clearFilters} className="text-brand-magenta font-semibold hover:underline">
              Reset filters
            </button>
          )}
        </div>

        {/* University grid */}
        {displayedUniversities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {displayedUniversities.map((university) => (
              <UniversityCard key={university.id} university={university} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 mb-3">No universities matched your search.</p>
            <button
              onClick={clearFilters}
              className="text-brand-royal font-semibold text-sm hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Show More + View All CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          {remainingCount > 0 && (
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white border-2 border-brand-royal text-brand-royal font-bold px-8 py-4 rounded-xl hover:bg-brand-lavender transition-colors duration-200 text-sm"
            >
              Show More Universities (+{Math.min(8, remainingCount)} of {remainingCount} more)
            </button>
          )}
          <Link
            href="/universities"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-midnight text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-royal transition-colors duration-200 text-sm"
          >
            View All {universities.length} UK Universities
          </Link>
        </div>
      </div>
    </section>
  )
}
