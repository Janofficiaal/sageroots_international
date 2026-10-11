import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertCircle } from 'lucide-react'
import EligibilityChecker from '@/components/home/EligibilityChecker'
import BankCalculator from '@/components/home/BankCalculator'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'Scholarships & Financial Calculator',
  description: 'Explore potential scholarship opportunities and calculate your UKVI 28-day bank statement requirements at UK universities with Sage Roots International.',
}

export default function ScholarshipsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brand-midnight to-brand-royal py-24 px-4 text-center">
        <p className="text-brand-magenta font-bold text-xs tracking-widest uppercase mb-4">Financial Support</p>
        <h1 className="text-white font-black text-4xl sm:text-5xl mb-4">Scholarships &amp; Finance</h1>
        <p className="text-white/60 text-base max-w-xl mx-auto">
          Discover potential scholarship opportunities and calculate your UK Student Visa financial requirements.
        </p>
      </section>

      <EligibilityChecker />
      <BankCalculator />

      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
          <p className="text-amber-800 text-sm font-bold mb-1">Important Notice</p>
          <p className="text-amber-700 text-xs leading-relaxed">
            Scholarship availability, eligibility criteria, and values vary by university and change regularly. The information below is for general guidance only. Please confirm current scholarship details directly with the relevant institution or contact our team.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm card-hover">
            <h2 className="text-brand-dark font-black text-xl mb-3">University Scholarships</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Many UK universities offer merit-based and needs-based scholarships to international students. Availability and eligibility vary by programme, nationality, and academic background.
            </p>
            <p className="text-gray-500 text-xs">
              Contact us to discuss scholarship options that may be relevant to your profile and chosen university.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm card-hover">
            <h2 className="text-brand-dark font-black text-xl mb-3">External Funding Opportunities</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              There may be external funding sources available from government bodies, foundations, and international organisations. We can help you explore relevant opportunities for your situation.
            </p>
            <p className="text-gray-500 text-xs">
              Eligibility and availability depend on your country of origin and chosen study destination.
            </p>
          </div>

          <div className="bg-brand-lavender rounded-2xl p-8 text-center">
            <h2 className="text-brand-dark font-black text-xl mb-3">Discuss Your Scholarship Options</h2>
            <p className="text-gray-600 text-sm mb-6">
              Our team can help you identify potential scholarship opportunities relevant to your academic background and study goals.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-brand-magenta text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-700 transition-colors text-sm"
            >
              Get Scholarship Guidance
            </Link>
          </div>
        </div>
      </section>

      <ConsultationForm />
    </div>
  )
}
