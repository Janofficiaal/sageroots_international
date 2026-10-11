import Image from 'next/image'
import Link from 'next/link'
import { testimonials } from '@/data/services'

const IMPACT_STATS = [
  {
    value: '50+',
    label: 'UK Partner Universities',
    sub: 'Russell Group & Modern',
  },
  {
    value: '98.4%',
    label: 'Visa Compliance Rate',
    sub: 'UKVI Document Audited',
  },
  {
    value: '£10,000',
    label: 'Max Merit Scholarship',
    sub: 'Automatic & VC Awards',
  },
  {
    value: '100% Free',
    label: 'Application & Pre-CAS Prep',
    sub: '1-on-1 Mock Interviews',
  },
]

export default function SuccessStories() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      aria-labelledby="stories-heading"
    >
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80"
        alt="University campus with students"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(4,32,23,0.96) 0%, rgba(7,50,36,0.94) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Live Trust & Impact Counter Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {IMPACT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-md border border-emerald-400/20 rounded-2xl p-5 text-center sm:text-left"
            >
              <p className="text-2xl sm:text-3xl font-black text-white leading-none">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-bold text-emerald-300 mt-1.5">
                {stat.label}
              </p>
              <p className="text-[11px] text-white/60 mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-emerald-400 font-bold text-xs tracking-widest uppercase mb-2">
            Verified UK Admission &amp; Visa Case Studies
          </p>
          <h2 id="stories-heading" className="text-white font-black text-3xl sm:text-4xl">
            Real Student Profiles. Verified Visa Outcomes.
          </h2>
          <p className="text-white/65 mt-3 text-sm max-w-2xl mx-auto">
            Review real academic profiles, MOI and IELTS pathways, merit scholarship awards, and UKVI visa turnaround times achieved by our students.
          </p>
        </div>

        {/* Case Study Cards (Top 3 on Home) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, 3).map((t) => (
            <div
              key={t.id}
              className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 hover:bg-white/15 hover:border-emerald-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Case Reference + Status */}
                <div className="flex items-center justify-between gap-2 pb-3.5 mb-4 border-b border-white/10">
                  <span className="text-[11px] font-mono font-bold text-emerald-300 tracking-wider whitespace-nowrap">
                    {t.caseId}
                  </span>
                  <span className="inline-block text-[10.5px] font-bold text-[#042017] bg-emerald-400 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                    {t.visaTurnaround}
                  </span>
                </div>

                {/* University & Course Header */}
                <div className="mb-4">
                  <p className="text-base font-black text-white leading-snug">
                    {t.university}
                  </p>
                  <p className="text-xs font-bold text-emerald-300 mt-0.5">
                    {t.course} ({t.intake})
                  </p>
                </div>

                {/* Structured Case Metrics Grid */}
                <div className="grid grid-cols-1 gap-2 bg-[#042017]/75 border border-white/10 rounded-xl p-3.5 mb-4 text-xs">
                  <div className="flex justify-between gap-2">
                    <span className="text-white/55">Academic Profile:</span>
                    <span className="text-white font-semibold text-right">{t.academicProfile}</span>
                  </div>
                  <div className="flex justify-between gap-2 border-t border-white/10 pt-1.5">
                    <span className="text-white/55">English Pathway:</span>
                    <span className="text-emerald-300 font-semibold text-right">{t.englishPathway}</span>
                  </div>
                  <div className="flex justify-between gap-2 border-t border-white/10 pt-1.5">
                    <span className="text-white/55">Scholarship:</span>
                    <span className="text-amber-300 font-bold text-right">{t.scholarship}</span>
                  </div>
                </div>

                <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/25 border border-emerald-400/40 flex items-center justify-center flex-shrink-0 text-xs font-black text-emerald-300">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-white/55 text-xs">{t.origin}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/success-stories"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-[#042017] font-extrabold px-8 py-4 rounded-xl transition-colors duration-200 text-sm shadow-lg shadow-emerald-950/30"
          >
            View All Verified Visa Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}
