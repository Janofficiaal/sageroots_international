import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { destinations } from '@/data/destinations'
import DestinationCard from '@/components/ui/DestinationCard'

export default function FeaturedDestinations() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-labelledby="destinations-heading">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <p className="text-brand-magenta font-bold text-xs tracking-widest uppercase mb-2">
            Study Worldwide
          </p>
          <h2 id="destinations-heading" className="text-brand-dark font-black text-3xl sm:text-4xl">
            Explore Your Next Destination
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Discover study opportunities around the world.
          </p>
        </div>
        <Link
          href="/destinations"
          className="text-brand-royal font-semibold text-sm hover:text-brand-magenta transition-colors flex-shrink-0 underline underline-offset-4"
        >
          View All
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {destinations.map((dest) => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
      </div>
    </section>
  )
}
