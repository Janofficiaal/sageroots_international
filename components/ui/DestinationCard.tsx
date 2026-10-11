'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Destination } from '@/data/destinations'

interface DestinationCardProps {
  destination: Destination
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group relative block rounded-2xl overflow-hidden card-hover aspect-[3/4] md:aspect-[4/5]"
      aria-label={`Explore study opportunities in ${destination.name}`}
    >
      {/* Background image */}
      <Image
        src={destination.image}
        alt={`Study in ${destination.name}`}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-700"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 200px"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-brand-midnight/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-white/70 text-xs font-medium mb-0.5 uppercase tracking-wide">
          {destination.highlight}
        </p>
        <h3 className="text-white font-bold text-lg leading-tight mb-1">
          {destination.name}
        </h3>
        <div className="text-brand-magenta text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          Explore
        </div>
      </div>
    </Link>
  )
}
