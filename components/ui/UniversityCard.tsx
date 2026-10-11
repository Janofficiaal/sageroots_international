'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { University } from '@/data/universities'

interface UniversityCardProps {
  university: University
}

export default function UniversityCard({ university }: UniversityCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden card-hover border border-emerald-100 group flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={university.image}
          alt={`${university.name} campus`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Country badge */}
        <div className="absolute top-3 left-3 bg-brand-midnight/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
          {university.countryCode}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-brand-dark text-base leading-snug mb-1 group-hover:text-brand-royal transition-colors">
          {university.name}
        </h3>

        <p className="text-gray-500 text-sm mb-3">
          {university.city}, {university.country}
        </p>

        {/* Study levels */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {university.studyLevels.slice(0, 3).map((level) => (
            <span
              key={level}
              className="bg-brand-lavender text-brand-royal text-xs font-medium px-2.5 py-1 rounded-full"
            >
              {level}
            </span>
          ))}
        </div>

        {/* Intake */}
        {university.intakes[0] && (
          <p className="text-xs text-gray-500 mb-4">
            Next intake: <span className="font-semibold text-brand-dark">{university.intakes[0]}</span>
          </p>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Actions */}
        <div className="flex gap-2 mt-auto pt-4 border-t border-gray-100">
          <Link
            href={`/universities/${university.slug}`}
            className="flex-1 text-center bg-brand-lavender text-brand-royal text-sm font-semibold py-2.5 rounded-lg hover:bg-brand-royal hover:text-white transition-all duration-200"
          >
            View Details
          </Link>
          <Link
            href={`/contact?university=${university.slug}`}
            className="flex-1 text-center bg-brand-magenta text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-emerald-700 transition-all duration-200"
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  )
}
