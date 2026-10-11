import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Cookie Policy for Sage Roots International website.',
}

export default function CookiesPage() {
  return (
    <div className="bg-[#F8FAF9] min-h-screen">
      <section className="bg-gradient-to-br from-[#042017] via-[#073224] to-[#0A4431] pt-32 pb-20 px-4 text-center">
        <div className="inline-block bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          Website Transparency
        </div>
        <h1 className="text-white font-black text-3xl sm:text-5xl mb-3">Cookie Policy</h1>
        <p className="text-emerald-100/75 text-sm max-w-xl mx-auto">
          Information about how our website uses cookies and session storage to improve your browsing experience.
        </p>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-emerald-100 shadow-sm p-8 sm:p-12 space-y-8 text-sm text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-[#06241B] font-black text-xl mb-2">1. What Are Cookies?</h2>
            <p>
              Cookies and browser storage are small text files stored on your device when you visit a website. They help the website remember your preferences and ensure smooth navigation.
            </p>
          </div>

          <div>
            <h2 className="text-[#06241B] font-black text-xl mb-2">2. How We Use Cookies &amp; Session Storage</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Essential Session Storage:</strong> We use session storage (such as <code>sri_lead_popup_closed</code>) to remember when you close our consultation popup so it does not repeatedly interrupt your browsing session.</li>
              <li><strong>Performance &amp; Analytics:</strong> Anonymous traffic metrics to understand which UK universities and courses are most helpful to students.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[#06241B] font-black text-xl mb-2">3. Managing Cookies</h2>
            <p>
              You can control or delete cookies at any time through your web browser settings. Disabling non-essential cookies will not affect your ability to browse universities or book a free consultation.
            </p>
          </div>

          <div className="pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
            <span className="text-xs text-gray-400">Last Updated: October 2026</span>
            <Link href="/privacy-policy" className="text-[#073224] font-bold text-sm hover:underline">
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
