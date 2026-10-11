import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

const pathways = [
  {
    id: '1',
    title: 'Business Foundation',
    description: 'Prepare for undergraduate or postgraduate business programmes.',
    duration: 'Duration: Please confirm with institution',
    progression: 'Progression to Business, Finance, Management programmes.',
    color: 'from-brand-royal/20 to-brand-purple/10',
    accent: 'bg-brand-royal',
    slug: 'business-foundation',
  },
  {
    id: '2',
    title: 'Engineering Foundation',
    description: 'Build technical skills and academic foundations for engineering study.',
    duration: 'Duration: Please confirm with institution',
    progression: 'Progression to Engineering, Technology, and Computing programmes.',
    color: 'from-brand-magenta/15 to-pink-50',
    accent: 'bg-brand-magenta',
    slug: 'engineering-foundation',
  },
  {
    id: '3',
    title: 'Health Sciences Foundation',
    description: 'Lay the groundwork for health, medicine, and science degree study.',
    duration: 'Duration: Please confirm with institution',
    progression: 'Progression to Nursing, Healthcare, and Biomedical programmes.',
    color: 'from-brand-royal/20 to-brand-purple/10',
    accent: 'bg-brand-royal',
    slug: 'health-sciences-foundation',
  },
  {
    id: '4',
    title: 'Arts & Humanities',
    description: 'Develop critical thinking, writing and creative skills for arts programmes.',
    duration: 'Duration: Please confirm with institution',
    progression: 'Progression to Law, Media, Arts, and Social Science programmes.',
    color: 'from-brand-magenta/15 to-pink-50',
    accent: 'bg-brand-magenta',
    slug: 'arts-humanities-foundation',
  },
]

export default function FoundationPathways() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-labelledby="foundation-heading">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <p className="text-brand-magenta font-bold text-xs tracking-widest uppercase mb-2">
            Pathways
          </p>
          <h2 id="foundation-heading" className="text-brand-dark font-black text-3xl sm:text-4xl">
            Your Pathway to a Global Degree
          </h2>
          <p className="text-gray-500 mt-2 text-sm max-w-lg">
            Foundation programmes designed to help you move confidently towards your degree.
          </p>
        </div>
        <Link
          href="/foundation"
          className="text-brand-royal font-semibold text-sm hover:text-brand-magenta transition-colors flex-shrink-0 underline underline-offset-4"
        >
          View All Pathways
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {pathways.map((pathway) => (
          <div
            key={pathway.id}
            className={`relative bg-gradient-to-br ${pathway.color} rounded-2xl border border-white overflow-hidden p-6 card-hover group`}
          >
            {/* Accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 ${pathway.accent}`} aria-hidden="true" />

            <h3 className="font-black text-brand-dark text-lg mb-2 group-hover:text-brand-royal transition-colors">
              {pathway.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{pathway.description}</p>

            <p className="text-xs text-gray-400 mb-1">
              {pathway.duration}
            </p>
            <p className="text-xs text-brand-royal font-medium mt-3 mb-5 leading-snug">
              {pathway.progression}
            </p>

            <Link
              href={`/foundation#${pathway.slug}`}
              className="inline-block text-brand-magenta font-bold text-sm hover:underline"
            >
              Explore
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
