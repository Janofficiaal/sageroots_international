import type { Metadata } from 'next'
import Link from 'next/link'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive study abroad support services from Sage Roots International — from profile counselling to visa documentation guidance.',
}

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-midnight to-brand-royal py-24 px-4 text-center">
        <p className="text-brand-magenta font-bold text-xs tracking-widest uppercase mb-4">How We Help</p>
        <h1 className="text-white font-black text-4xl sm:text-5xl mb-4">Our Services</h1>
        <p className="text-white/60 text-base max-w-lg mx-auto">
          Comprehensive, personalised support for every stage of your international education journey.
        </p>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={service.id} className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm card-hover group">
              <span className="inline-block text-xs font-black tracking-widest text-brand-royal bg-brand-lavender px-3 py-1 rounded-md mb-4">
                0{idx + 1}
              </span>
              <h3 className="text-brand-dark font-bold text-base mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-brand-lavender rounded-3xl p-10 text-center">
          <h2 className="text-brand-dark font-black text-2xl mb-3">Not Sure Where to Start?</h2>
          <p className="text-gray-600 text-sm mb-6">Book a free consultation and our team will guide you through your options.</p>
          <Link href="/contact" className="inline-block bg-brand-magenta text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-700 transition-colors text-sm">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
