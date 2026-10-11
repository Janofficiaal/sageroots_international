'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    src: '/images/hero-1.png',
    alt: 'Your Global Journey Starts Here — Sage Roots International',
    position: 'center top',
  },
  {
    id: 2,
    src: '/images/hero-2.png',
    alt: 'Enriching Your Future — Sage Roots International',
    position: 'center top',
  },
  {
    id: 3,
    src: '/images/hero-3.png',
    alt: 'Better People, Brighter Futures — Sage Roots International',
    position: 'center top',
  },
]

const AUTOPLAY_DELAY = 4000 // 4 seconds per slide

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const startXRef = useRef<number | null>(null)
  const startYRef = useRef<number | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const wheelLockRef = useRef(false)

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  // Autoplay timer: auto change every 4 seconds
  useEffect(() => {
    if (isDragging) return
    intervalRef.current = setInterval(() => {
      nextSlide()
    }, AUTOPLAY_DELAY)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isDragging, nextSlide])

  // Universal pointer drag/slide handlers (Works for Mouse Drag, Touch & Trackpad)
  const handlePointerDown = (e: React.PointerEvent) => {
    // Ignore clicks on navigation buttons or indicator dots
    if ((e.target as HTMLElement).closest('button')) return

    startXRef.current = e.clientX
    startYRef.current = e.clientY
    setIsDragging(true)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || startXRef.current === null) return
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    if (startXRef.current === null || startYRef.current === null) {
      setIsDragging(false)
      return
    }

    const diffX = startXRef.current - e.clientX
    const diffY = startYRef.current - e.clientY

    // Minimum drag threshold: 45px, must be primarily horizontal
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
      if (diffX > 0) {
        nextSlide() // dragged left -> next slide
      } else {
        prevSlide() // dragged right -> prev slide
      }
    }

    startXRef.current = null
    startYRef.current = null
    setIsDragging(false)
  }

  const handlePointerCancel = () => {
    startXRef.current = null
    startYRef.current = null
    setIsDragging(false)
  }

  // Horizontal mouse wheel / trackpad 2-finger swipe support
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > 35 && !wheelLockRef.current) {
      wheelLockRef.current = true
      if (e.deltaX > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
      setTimeout(() => {
        wheelLockRef.current = false
      }, 600)
    }
  }

  return (
    <div className="w-full bg-[#042017] pt-14 md:pt-0">
      <div
        className={`group relative w-full overflow-hidden bg-[#042017] md:bg-black select-none aspect-[1678/937] md:aspect-auto md:h-[100dvh] md:min-h-[520px] md:max-h-[960px] ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{
          touchAction: 'pan-y',
        }}
        onMouseLeave={() => {
          setIsDragging(false)
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onWheel={handleWheel}
        aria-label="Hero image slideshow"
      >
        {/* Slides Container */}
        {slides.map((slide, i) => {
          const isActive = i === current

          return (
            <div
              key={slide.id}
              className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
              style={{
                opacity: isActive ? 1 : 0,
                visibility: isActive ? 'visible' : 'hidden',
                transition: 'opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1), visibility 1000ms',
                zIndex: isActive ? 2 : 1,
              }}
              aria-hidden={!isActive}
            >
              {/* Subtle Zoom on Desktop; Full Uncropped 1.0 Scale on Mobile */}
              <div
                className={`relative w-full h-full transition-transform duration-[6000ms] ease-out ${
                  isActive ? 'scale-100 md:scale-105' : 'scale-100'
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={true}
                  quality={95}
                  sizes="100vw"
                  draggable={false}
                  className="object-contain md:object-cover"
                  style={{ objectPosition: slide.position }}
                />
              </div>
            </div>
          )
        })}

        {/* Prev / Next Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-12 sm:h-12 rounded-full bg-black/45 hover:bg-emerald-600 active:bg-emerald-600 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 opacity-80 sm:opacity-70 hover:opacity-100 hover:scale-110 active:scale-95 shadow-lg cursor-pointer pointer-events-auto"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-12 sm:h-12 rounded-full bg-black/45 hover:bg-emerald-600 active:bg-emerald-600 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-200 opacity-80 sm:opacity-70 hover:opacity-100 hover:scale-110 active:scale-95 shadow-lg cursor-pointer pointer-events-auto"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        {/* Bottom Pagination Indicators */}
        <div
          className="absolute bottom-2 sm:bottom-10 left-0 right-0 z-30 flex justify-center items-center gap-1.5 sm:gap-2.5 pointer-events-auto"
          role="tablist"
          aria-label="Slide navigation"
        >
          {slides.map((slide, i) => {
            const isActive = i === current

            return (
              <button
                key={slide.id}
                onClick={() => goTo(i)}
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${i + 1}`}
                className="p-1 flex items-center justify-center cursor-pointer"
              >
                <span
                  className={`block h-1.5 sm:h-2.5 rounded-full transition-all duration-500 shadow-md ${
                    isActive
                      ? 'w-6 sm:w-9 bg-emerald-500 ring-2 ring-white/60'
                      : 'w-1.5 sm:w-2.5 bg-white/60 hover:bg-white'
                  }`}
                />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
