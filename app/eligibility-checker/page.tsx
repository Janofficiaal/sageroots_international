import type { Metadata } from 'next'
import Link from 'next/link'
import EligibilityChecker from '@/components/home/EligibilityChecker'
import BankCalculator from '@/components/home/BankCalculator'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'UK University MOI & Scholarship Eligibility Checker | Sage Roots International',
  description:
    'Free interactive UK university eligibility checker. Check if you qualify for UK Master’s or Bachelor’s with IELTS or MOI (Medium of Instruction), calculate scholarship discount and minimum CAS deposit.',
  keywords: [
    'uk eligibility checker',
    'uk university scholarship calculator',
    'study in uk without ielts moi checker',
    'moi accepted universities in uk',
    'bpp ulster greenwich moi eligibility',
    'uk tuition cost in bdt calculator',
    'sage roots eligibility calculator',
  ],
  alternates: {
    canonical: '/eligibility-checker',
  },
}

export default function EligibilityCheckerPage() {
  return (
    <div className="pt-24 sm:pt-28">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] text-white py-14 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 backdrop-blur-md">
            Interactive Student Tool
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-3">
            UK University &amp; Scholarship Calculator
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
            আপনার অ্যাকাডেমিক ব্যাকগ্রাউন্ড (প্রাইভেট, পাবলিক বা জাতীয় বিশ্ববিদ্যালয়) অনুযায়ী IELTS ছাড়া MOI দিয়ে ভর্তির যোগ্যতা, সম্ভাব্য স্কলারশিপ ও মিনিমাম ডিপোজিট লাইভ হিসাব করুন।
          </p>
        </div>
      </section>

      {/* Interactive Tool */}
      <EligibilityChecker />

      {/* Financial Bank Statement Calculator */}
      <BankCalculator />

      {/* Free Application Form */}
      <ConsultationForm />
    </div>
  )
}
