import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy and UK GDPR Data Protection Statement for Sage Roots International.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#F8FAF9] min-h-screen">
      <section className="bg-gradient-to-br from-[#042017] via-[#073224] to-[#0A4431] pt-32 pb-20 px-4 text-center">
        <div className="inline-block bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          UK GDPR &amp; Data Protection
        </div>
        <h1 className="text-white font-black text-3xl sm:text-5xl mb-3">Privacy Policy</h1>
        <p className="text-emerald-100/75 text-sm max-w-xl mx-auto">
          How Sage Roots International collects, uses, and protects your personal and academic information.
        </p>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-emerald-100 shadow-sm p-8 sm:p-12 space-y-8 text-sm text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-[#06241B] font-black text-xl mb-2">1. Who We Are</h2>
            <p>
              <strong>Sage Roots International</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is a UK-based global education consultancy and university representative. We respect your privacy and are committed to protecting your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </div>

          <div>
            <h2 className="text-[#06241B] font-black text-xl mb-2">2. Information We Collect</h2>
            <p className="mb-2">When you submit an enquiry, popup consultation form, or eligibility check on our website, we may collect:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Contact Details:</strong> Full name, WhatsApp/phone number, email address, and country of residence.</li>
              <li><strong>Academic Profile:</strong> Preferred study destination, study level, academic qualifications (GPA/CGPA), English proficiency status (IELTS/PTE/MOI), and preferred universities.</li>
              <li><strong>Technical Data:</strong> Essential browser session data and cookies to ensure website functionality.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#06241B] font-black text-xl mb-2">3. How We Use Your Information</h2>
            <p className="mb-2">We use your information strictly for legitimate educational counselling purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To assess your eligibility for UK and international university admissions and merit scholarships.</li>
              <li>To contact you via WhatsApp, phone, or email regarding your free consultation request.</li>
              <li>To assist you with university applications, CAS preparation, and UKVI student visa documentation upon your consent.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#06241B] font-black text-xl mb-2">4. Data Sharing &amp; Security</h2>
            <p>
              We <strong>never sell or rent</strong> your personal data to third-party marketers. Your academic and personal details are shared only with our authorised admissions counsellors and, with your explicit consent, the partner universities to which you choose to apply.
            </p>
          </div>

          <div>
            <h2 className="text-[#06241B] font-black text-xl mb-2">5. Your Data Protection Rights</h2>
            <p>
              Under UK data protection law, you have the right to request access to, correction of, or deletion of your personal data at any time. To exercise these rights, please contact us at{' '}
              <a href="mailto:info@sagerootsinternational.co.uk" className="text-[#073224] font-semibold underline">
                info@sagerootsinternational.co.uk
              </a>{' '}
              or via WhatsApp at <strong>+44 7776 181483</strong>.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
            <span className="text-xs text-gray-400">Last Updated: October 2026</span>
            <Link href="/contact" className="text-[#073224] font-bold text-sm hover:underline">
              Contact Our Data Compliance Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
