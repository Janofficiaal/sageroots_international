import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and Conditions of use and student consultancy services for Sage Roots International.',
}

export default function TermsPage() {
  return (
    <div className="bg-[#F8FAF9] min-h-screen">
      <section className="bg-gradient-to-br from-[#042017] via-[#073224] to-[#0A4431] pt-32 pb-20 px-4 text-center">
        <div className="inline-block bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          Legal Agreement
        </div>
        <h1 className="text-white font-black text-3xl sm:text-5xl mb-3">Terms &amp; Conditions</h1>
        <p className="text-emerald-100/75 text-sm max-w-xl mx-auto">
          Please read these terms carefully before using Sage Roots International&apos;s website and consultancy services.
        </p>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-emerald-100 shadow-sm p-8 sm:p-12 space-y-8 text-sm text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-[#06241B] font-black text-xl mb-2">1. Scope of Services</h2>
            <p>
              <strong>Sage Roots International</strong> provides international education counselling, university admission guidance, scholarship matching, Pre-CAS interview preparation, and student visa documentation support. Our initial assessment and partner university application services are 100% free for prospective students.
            </p>
          </div>

          <div>
            <h2 className="text-[#06241B] font-black text-xl mb-2">2. Accuracy of Student Information</h2>
            <p>
              Students are responsible for providing authentic, accurate, and verifiable academic transcripts, English language certificates, identity documents, and financial statements. Submission of fraudulent or altered documents will result in immediate termination of representation.
            </p>
          </div>

          <div>
            <h2 className="text-[#06241B] font-black text-xl mb-2">3. University Offers, Scholarships &amp; Visas</h2>
            <p>
              While Sage Roots International maintains a high success and compliance rate, final decisions regarding admission offers, CAS issuance, scholarship awards, and UKVI Student Visa approvals rest solely with the respective universities and UK Visas and Immigration (UKVI). Tuition fees, maintenance funds, and entry requirements are subject to institutional and government updates.
            </p>
          </div>

          <div>
            <h2 className="text-[#06241B] font-black text-xl mb-2">4. Intellectual Property</h2>
            <p>
              All content, branding, interactive tools, calculators, and graphics on this website are the intellectual property of Sage Roots International and may not be reproduced without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-[#06241B] font-black text-xl mb-2">5. Governing Law</h2>
            <p>
              These Terms &amp; Conditions are governed by and construed in accordance with the laws of England and Wales.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
            <span className="text-xs text-gray-400">Last Updated: October 2026</span>
            <Link href="/contact" className="text-[#073224] font-bold text-sm hover:underline">
              Questions? Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
