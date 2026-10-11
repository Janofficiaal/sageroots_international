'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BoxItem {
  id: number
  text: string
}

const box1Items: BoxItem[] = [
  { id: 1, text: 'Passport (Original & Valid)' },
  { id: 2, text: 'Curriculum Vitae (CV)' },
  { id: 3, text: 'Work Experience Letter' },
  { id: 4, text: 'Internship Documents' },
]

const box2Items: BoxItem[] = [
  { id: 1, text: 'SSC & HS Marksheets' },
  { id: 2, text: "Bachelor's Degree Certificate" },
  { id: 3, text: 'Semester Wise Transcripts' },
  { id: 4, text: 'Degree Marksheet (CMM)' },
]

const box3Items: BoxItem[] = [
  { id: 1, text: 'English Test (IELTS / PTE)' },
  { id: 2, text: 'MOI Language Certificate' },
  { id: 3, text: '2 Recommendation Letters' },
  { id: 4, text: 'Statement of Purpose (SOP)' },
]

const box4Items: BoxItem[] = [
  { id: 1, text: 'Part-Time Job Assistance' },
  { id: 2, text: 'CAS & Visa Application' },
  { id: 3, text: 'Bank Loan & Finance Support' },
  { id: 4, text: 'Airport Pickup & Housing' },
]

function PushBox({
  items,
  step,
  isPushing,
  onClick,
}: {
  items: BoxItem[]
  step: number
  isPushing: boolean
  onClick: () => void
}) {
  const currentIdx = step % items.length
  const prevIdx = (step - 1 + items.length) % items.length

  const currentItem = items[currentIdx]
  const prevItem = items[prevIdx]

  return (
    <div
      onClick={onClick}
      className="relative overflow-hidden bg-[#073224] hover:bg-[#0a3d2c] active:bg-[#06291d] border border-[#144a37] hover:border-emerald-500/50 shadow-md shadow-black/20 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 h-[48px] sm:h-[52px] flex items-center select-none cursor-pointer transition-all duration-200"
      title="Click to advance"
    >
      {/* Previous item sliding out to LEFT */}
      {isPushing && (
        <div className="absolute inset-0 px-3.5 sm:px-4 flex items-center gap-2.5 w-full animate-push-out pointer-events-none">
          <span className="w-1.5 h-4 rounded-full bg-emerald-400 flex-shrink-0" />
          <span className="text-white font-bold text-xs sm:text-sm truncate">
            {prevItem.text}
          </span>
        </div>
      )}

      {/* Current item sliding in from RIGHT */}
      <div
        className={`w-full flex items-center gap-2.5 ${
          isPushing ? 'animate-push-in' : ''
        }`}
      >
        <span className="w-1.5 h-4 rounded-full bg-emerald-400 flex-shrink-0" />
        <span className="text-white font-bold text-xs sm:text-sm truncate">
          {currentItem.text}
        </span>
      </div>
    </div>
  )
}

export default function RequirementsPushSlider() {
  const [step, setStep] = useState(0)
  const [isPushing, setIsPushing] = useState(false)
  const [paused, setPaused] = useState(false)

  const advance = useCallback(() => {
    setIsPushing(true)
    setStep((prev) => prev + 1)
    setTimeout(() => {
      setIsPushing(false)
    }, 460)
  }, [])

  const retreat = useCallback(() => {
    setIsPushing(true)
    setStep((prev) => (prev > 0 ? prev - 1 : 3))
    setTimeout(() => {
      setIsPushing(false)
    }, 460)
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      advance()
    }, 3200)

    return () => clearInterval(timer)
  }, [paused, advance])

  return (
    <section
      className="relative z-20 mt-2 md:-mt-10 mx-auto max-w-4xl px-3 sm:px-6"
      aria-label="What you need - documents and requirements"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-brand-midnight/10 border border-white/80 p-4 sm:p-5">
        {/* Header Title Bar */}
        <div className="flex items-center justify-between gap-3 mb-3.5 pb-3 border-b border-gray-100">
          <div>
            <span className="block text-[11px] sm:text-xs font-black tracking-wider uppercase text-emerald-700">
              WHAT YOU NEED TO STUDY ABROAD
            </span>
            <span className="block text-[10px] text-gray-500 font-medium">
              Document Checklist &amp; Admission Requirements
            </span>
          </div>

          {/* Quick manual navigation */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={retreat}
              aria-label="Previous requirement set"
              className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-[#073224] hover:text-white text-gray-700 flex items-center justify-center transition-colors text-xs active:scale-95"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={advance}
              aria-label="Next requirement set"
              className="w-7 h-7 rounded-lg bg-[#073224] hover:bg-[#0a3d2c] text-white flex items-center justify-center transition-colors text-xs active:scale-95"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 2x2 Grid of Dark Green Rounded Rectangles */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
          <PushBox items={box1Items} step={step} isPushing={isPushing} onClick={advance} />
          <PushBox items={box2Items} step={step} isPushing={isPushing} onClick={advance} />
          <PushBox items={box3Items} step={step} isPushing={isPushing} onClick={advance} />
          <PushBox items={box4Items} step={step} isPushing={isPushing} onClick={advance} />
        </div>

        {/* Bottom Pagination Bar */}
        <div className="flex justify-center items-center gap-1.5 mt-3 pt-2">
          {[0, 1, 2, 3].map((i) => {
            const isActive = step % 4 === i
            return (
              <button
                key={i}
                onClick={() => {
                  setIsPushing(true)
                  setStep(i)
                  setTimeout(() => setIsPushing(false), 460)
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  isActive ? 'w-6 bg-[#073224]' : 'w-2 bg-gray-200 hover:bg-gray-300'
                }`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
