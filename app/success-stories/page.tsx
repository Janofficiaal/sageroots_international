import type { Metadata } from 'next'
import Link from 'next/link'
import { testimonials } from '@/data/services'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'Verified UK Visa Case Studies & Success Stories',
  description:
    'Explore real student academic profiles, MOI and IELTS admission pathways, merit scholarships, and UK Student Visa approvals with Sage Roots International.',
}

export default function SuccessStoriesPage() {
  return (
    <div className="bg-[#F8FAF9]">
      <section className="bg-gradient-to-br from-[#042017] via-[#073224] to-[#0A4431] pt-32 pb-20 px-4 text-center">
        <p className="text-emerald-400 font-bold text-xs tracking-widest uppercase mb-3">
          Verified Student Admission &amp; Visa Files
        </p>
        <h1 className="text-white font-black text-4xl sm:text-5xl mb-4">
          UK Student Visa Case Studies
        </h1>
        <p className="text-emerald-100/80 text-base max-w-2xl mx-auto leading-relaxed">
          Transparent case files showing how students with various GPAs, study gaps, MOI certificates, and IELTS scores secured UK university admissions, scholarships, and visas.
        </p>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-emerald-100 rounded-2xl p-6 shadow-sm card-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-gray-100">
                  <span className="text-[11px] font-mono font-bold text-[#073224] whitespace-nowrap">
                    {t.caseId}
                  </span>
                  <span className="inline-block text-[10.5px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                    {t.visaTurnaround}
                  </span>
                </div>

                <div className="mb-4">
                  <h2 className="text-base font-black text-[#06241B] leading-snug">
                    {t.university}
                  </h2>
                  <p className="text-xs font-bold text-brand-magenta mt-0.5">
                    {t.course} ({t.intake})
                  </p>
                </div>

                {/* Case Study Metrics */}
                <div className="bg-[#F4F9F6] border border-emerald-100 rounded-xl p-3.5 mb-4 space-y-2 text-xs">
                  <div className="flex justify-between gap-2">
                    <span className="text-gray-500">Academic Profile:</span>
                    <span className="text-[#06241B] font-bold text-right">{t.academicProfile}</span>
                  </div>
                  <div className="flex justify-between gap-2 border-t border-emerald-100 pt-1.5">
                    <span className="text-gray-500">English Pathway:</span>
                    <span className="text-[#073224] font-bold text-right">{t.englishPathway}</span>
                  </div>
                  <div className="flex justify-between gap-2 border-t border-emerald-100 pt-1.5">
                    <span className="text-gray-500">Scholarship:</span>
                    <span className="text-emerald-700 font-extrabold text-right">{t.scholarship}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-[#073224] text-emerald-300 flex items-center justify-center flex-shrink-0 text-xs font-black">
                  {t.initials}
                </div>
                <div>
                  <p className="text-[#06241B] font-bold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.origin}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="#consultation"
            className="inline-block bg-[#073224] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#042017] transition-colors text-sm"
          >
            Assess My Profile for UK Admission
          </Link>
        </div>
      </section>

      <ConsultationForm />
    </div>
  )
}
