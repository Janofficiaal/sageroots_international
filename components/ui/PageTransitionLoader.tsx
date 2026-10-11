'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function PageTransitionLoader() {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const exitTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Intercept internal navigation link clicks
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a')
      if (!target) return

      const href = target.getAttribute('href')
      const targetAttr = target.getAttribute('target')
      const downloadAttr = target.getAttribute('download')

      // Ignore external URLs, blank targets, hash anchors, mailto, tel
      if (
        !href ||
        href.startsWith('http') ||
        href.startsWith('//') ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        targetAttr === '_blank' ||
        downloadAttr !== null
      ) {
        return
      }

      // Avoid showing loader on identical page clicks
      try {
        const currentPath = window.location.pathname
        const targetUrl = new URL(href, window.location.origin)
        if (currentPath === targetUrl.pathname && window.location.search === targetUrl.search) {
          return
        }
      } catch {
        // Ignore parsing errors
      }

      // Clear any pending dismissal
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (exitTimeoutRef.current) clearTimeout(exitTimeoutRef.current)

      setLoading(true)
      requestAnimationFrame(() => {
        setVisible(true)
      })

      // Auto safety dismiss after 3.2s
      timeoutRef.current = setTimeout(() => {
        setVisible(false)
        exitTimeoutRef.current = setTimeout(() => {
          setLoading(false)
        }, 300)
      }, 3200)
    }

    document.addEventListener('click', handleLinkClick, { capture: true })

    return () => {
      document.removeEventListener('click', handleLinkClick, { capture: true })
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      if (exitTimeoutRef.current) clearTimeout(exitTimeoutRef.current)
    }
  }, [])

  // When route changes, keep the 100% Job Guarantee badge visible long enough to read clearly
  useEffect(() => {
    if (loading) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)

      const timer = setTimeout(() => {
        setVisible(false)
        exitTimeoutRef.current = setTimeout(() => {
          setLoading(false)
        }, 300)
      }, 1150)

      return () => clearTimeout(timer)
    }
  }, [pathname, loading])

  if (!loading) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-200 select-none pointer-events-none ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      role="status"
      aria-live="polite"
      aria-label="100% Job Guarantee — Loading page..."
    >
      {/* Light soft glass backdrop */}
      <div className="absolute inset-0 bg-white/35 backdrop-blur-[2px] transition-opacity duration-200" />

      <div className="relative flex flex-col items-center justify-center p-6 text-center z-10">
        {/* Soft glowing ambient circle */}
        <div className="absolute w-40 h-40 bg-orange-500/15 rounded-full blur-2xl pointer-events-none" />

        {/* Transparent 100% Job Guarantee Stamp */}
        <div className="relative w-36 h-32 sm:w-44 sm:h-36 animate-cap-float drop-shadow-xl">
          <Image
            src="/images/job-guarantee.png"
            alt="100% Job Guarantee"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Animated Progress Bar */}
        <div className="w-32 sm:w-40 h-1.5 bg-black/10 rounded-full overflow-hidden mt-3 relative shadow-sm">
          <div className="absolute inset-y-0 bg-gradient-to-r from-[#C8431A] to-emerald-600 rounded-full animate-progress" />
        </div>

        {/* Loading badge */}
        <span className="mt-2.5 px-3.5 py-1 rounded-full bg-white/95 shadow-sm border border-black/10 text-[11px] sm:text-xs font-extrabold tracking-wider uppercase text-[#7A1C08]">
          100% Job Guarantee
        </span>
      </div>
    </div>
  )
}
