'use client'

import Link from 'next/link'
import { X } from 'lucide-react'
import { useState } from 'react'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="bg-brand-midnight/90 backdrop-blur-md text-white border-b border-white/10 text-center text-[11px] sm:text-xs font-medium py-1.5 px-4 relative z-50">
      <Link
        href="/universities"
        className="inline-flex items-center gap-1.5 hover:text-brand-magenta transition-colors"
      >
        <span>
          <strong className="font-bold text-white">UK Intake 2026/2027</strong> — Applications Now Open for International Students
        </span>
        <span className="hidden sm:inline text-emerald-400 font-semibold ml-1.5 underline underline-offset-2">
          Learn More
        </span>
      </Link>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors p-1"
      >
        <X className="w-3.5 h-3.5" aria-hidden="true" />
      </button>
    </div>
  )
}
