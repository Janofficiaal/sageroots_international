import Link from 'next/link'
import { services } from '@/data/services'

export default function ServicesSection() {
  return (
    <section className="py-20 bg-brand-midnight" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-magenta font-bold text-xs tracking-widest uppercase mb-2">
            How We Help
          </p>
          <h2 id="services-heading" className="text-white font-black text-3xl sm:text-4xl">
            Our Services
          </h2>
          <p className="text-white/50 mt-3 text-sm max-w-md mx-auto">
            Comprehensive support for every step of your international education journey.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-magenta/40 rounded-2xl p-6 transition-all duration-300"
            >
              <span className="inline-block text-xs font-black tracking-widest text-emerald-400 bg-emerald-500/15 px-2.5 py-1 rounded-md mb-4">
                0{idx + 1}
              </span>
              <h3 className="text-white font-bold text-sm mb-2 leading-snug">{service.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block border border-white/25 hover:border-brand-magenta text-white hover:text-brand-magenta font-semibold px-6 py-3 rounded-xl transition-colors duration-200 text-sm"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
