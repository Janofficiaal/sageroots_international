import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { destinations } from '@/data/destinations'
import DestinationCard from '@/components/ui/DestinationCard'

export const metadata: Metadata = {
  title: 'Study Destinations — UK, Cyprus, Malta, Dubai, Australia, Canada & Europe',
  description:
    'Explore international study destinations including the United Kingdom, Cyprus, Malta, Dubai (UAE), Australia, Canada, Germany, Ireland, New Zealand, and the United States.',
}

export default function DestinationsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-midnight to-brand-royal py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-magenta font-bold text-xs tracking-widest uppercase mb-4">
            Global Opportunities
          </p>
          <h1 className="text-white font-black text-4xl sm:text-5xl mb-5">
            Study Destinations
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto leading-relaxed">
            Discover study opportunities across the UK, Cyprus, Malta, Dubai (UAE), Europe, North America, and Australasia.
          </p>
        </div>
      </section>

      {/* Destinations grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* UK spotlight */}
      <section className="py-16 bg-brand-lavender">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-brand-dark font-black text-3xl mb-4">Our Primary Expertise: UK</h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xl mx-auto mb-8">
            The United Kingdom is our core market. We work with UK universities to help international students explore admission pathways, foundation programmes, and study opportunities.
          </p>
          <Link
            href="/universities"
            className="inline-block bg-brand-magenta text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-700 transition-colors text-sm"
          >
            Explore UK Universities
          </Link>
        </div>
      </section>
    </div>
  )
}
