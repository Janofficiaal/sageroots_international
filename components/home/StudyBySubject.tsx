import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { subjects } from '@/data/services'

export default function StudyBySubject() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-labelledby="subjects-heading">
      <div className="text-center mb-12">
        <p className="text-brand-magenta font-bold text-xs tracking-widest uppercase mb-2">
          Find Your Path
        </p>
        <h2 id="subjects-heading" className="text-brand-dark font-black text-3xl sm:text-4xl">
          Study by Subject
        </h2>
        <p className="text-gray-500 mt-3 text-sm max-w-md mx-auto">
          Explore programmes across a wide range of academic disciplines.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {subjects.map((subject) => (
          <Link
            key={subject.id}
            href={`/courses?subject=${subject.slug}`}
            className="group flex flex-col items-center gap-3 text-center"
            aria-label={`Explore ${subject.name} programmes`}
          >
            {/* Circular image */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-brand-magenta transition-all duration-300 flex-shrink-0 shadow-md group-hover:shadow-brand-magenta/20 group-hover:shadow-xl group-hover:scale-105">
              <Image
                src={subject.image}
                alt={subject.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="96px"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-brand-magenta/0 group-hover:bg-brand-magenta/20 transition-colors duration-300" aria-hidden="true" />
            </div>

            {/* Label */}
            <div>
              <p className="text-brand-dark font-semibold text-xs leading-tight group-hover:text-brand-royal transition-colors">
                {subject.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
