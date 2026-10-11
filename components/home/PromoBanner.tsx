import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function PromoBanner() {
  return (
    <section className="relative w-full overflow-hidden" aria-label="Study abroad promotion" style={{ minHeight: '420px' }}>
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=85"
        alt="Students celebrating their international academic journey"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(4,32,23,0.95) 0%, rgba(7,50,36,0.88) 45%, rgba(10,68,49,0.65) 75%, rgba(4,32,23,0.35) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full min-h-[420px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-emerald-400" aria-hidden="true" />
              <span className="text-emerald-300 text-xs font-bold uppercase tracking-[0.2em]">
                Expert Guidance
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-white font-black text-4xl sm:text-5xl leading-[1.1] mb-5">
              Your Next Chapter
              <br />
              <span className="text-emerald-400">Starts Here.</span>
            </h2>

            {/* Body */}
            <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-8">
              Explore global study opportunities with expert guidance. From UK universities to international pathways — we&apos;re with you at every step.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-[#042017] font-extrabold px-8 py-4 rounded-xl transition-colors duration-200 text-sm shadow-lg shadow-emerald-950/30"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative side accent */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to left, rgba(16,185,129,0.12), transparent)',
        }}
      />
    </section>
  )
}
