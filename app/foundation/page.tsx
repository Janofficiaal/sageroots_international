import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'Foundation Courses',
  description: 'Explore foundation and pathway programmes designed to prepare international students for undergraduate and postgraduate study in the UK.',
}

const pathways = [
  {
    id: 'business-foundation',
    title: 'Business Foundation',
    description:
      'Designed to develop the academic skills and business knowledge needed for undergraduate or postgraduate business programmes.',
    progression: 'Typical progression into Business, Finance, Management, and Marketing programmes.',
    duration: 'Duration and structure vary by institution. Please confirm current details.',
    color: 'border-brand-royal',
    tag: 'Business & Finance',
  },
  {
    id: 'engineering-foundation',
    title: 'Engineering Foundation',
    description:
      'Develops technical and mathematical skills to prepare students for engineering and technology degree programmes.',
    progression: 'Typical progression into Engineering, Computing, and Technology programmes.',
    duration: 'Duration and structure vary by institution. Please confirm current details.',
    color: 'border-brand-magenta',
    tag: 'Engineering & Tech',
  },
  {
    id: 'health-sciences-foundation',
    title: 'Health Sciences Foundation',
    description:
      'Builds the scientific foundation needed for health, nursing, biomedical and related degree programmes.',
    progression: 'Typical progression into Nursing, Healthcare, and Biomedical Science programmes.',
    duration: 'Duration and structure vary by institution. Please confirm current details.',
    color: 'border-brand-royal',
    tag: 'Health & Science',
  },
  {
    id: 'arts-humanities-foundation',
    title: 'Arts & Humanities Foundation',
    description:
      'Develops critical thinking, writing and analytical skills suited for arts, humanities, and social science programmes.',
    progression: 'Typical progression into Law, Media, Arts, Education, and Social Science programmes.',
    duration: 'Duration and structure vary by institution. Please confirm current details.',
    color: 'border-brand-magenta',
    tag: 'Arts & Humanities',
  },
]

export default function FoundationPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-midnight to-brand-royal py-24 px-4 text-center">
        <p className="text-brand-magenta font-bold text-xs tracking-widest uppercase mb-4">Pathways</p>
        <h1 className="text-white font-black text-4xl sm:text-5xl mb-4">Foundation Courses</h1>
        <p className="text-white/60 text-base max-w-xl mx-auto">
          Your pathway to a global degree. Foundation programmes help you build the skills and knowledge needed to progress to university study.
        </p>
      </section>

      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-6">
          {pathways.map((p) => (
            <div
              key={p.id}
              id={p.id}
              className={`bg-white border-l-4 ${p.color} rounded-2xl p-8 shadow-sm card-hover`}
            >
              <span className="inline-block bg-brand-lavender text-brand-royal text-xs font-bold px-3 py-1 rounded-full mb-4">
                {p.tag}
              </span>
              <h2 className="text-brand-dark font-black text-xl mb-3">{p.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.description}</p>
              <p className="text-xs text-gray-400 mb-3">
                {p.duration}
              </p>
              <p className="text-brand-royal text-xs font-medium mb-6">{p.progression}</p>
              <Link
                href="/contact"
                className="inline-block text-brand-magenta font-bold text-sm hover:underline"
              >
                Enquire About This Pathway
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-amber-800 text-xs leading-relaxed">
          <strong>Note:</strong> Foundation programme availability, duration, and progression routes vary by institution and may change. Please confirm current details with the relevant institution or our admissions team.
        </div>
      </section>

      <ConsultationForm />
    </div>
  )
}
