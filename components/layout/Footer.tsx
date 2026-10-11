import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram } from 'lucide-react'

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'UK Universities (50+)', href: '/universities' },
  { label: 'Study Destinations (10)', href: '/destinations' },
  { label: 'Daily Facebook Posts', href: '/posts' },
  { label: 'Our Services', href: '/services' },
  { label: 'Foundation Courses', href: '/foundation' },
  { label: 'Scholarships (£ GBP)', href: '/scholarships' },
  { label: 'Success Stories', href: '/success-stories' },
  { label: 'Contact London Office', href: '/contact' },
]

const destinations = [
  { label: 'United Kingdom', href: '/destinations/united-kingdom' },
  { label: 'Cyprus (EU)', href: '/destinations/cyprus' },
  { label: 'Malta (Schengen)', href: '/destinations/malta' },
  { label: 'Dubai (UAE)', href: '/destinations/dubai' },
  { label: 'Australia', href: '/destinations/australia' },
  { label: 'Canada', href: '/destinations/canada' },
  { label: 'Germany', href: '/destinations/germany' },
  { label: 'Ireland', href: '/destinations/ireland' },
  { label: 'New Zealand', href: '/destinations/new-zealand' },
  { label: 'United States', href: '/destinations/united-states' },
]

const seoPathways = [
  {
    label: 'BPP University 2nd Master’s (£12,500 Fee / £3,000 Deposit)',
    href: '/posts/bpp-university-second-masters-in-uk-psw-ending-tuition-fee-reduced',
  },
  {
    label: 'Ulster University Jan 2027 (£10,625 Tuition & 5-Yr Gap)',
    href: '/posts/study-in-ulster-university-january-2027-intake-tuition-10625',
  },
  {
    label: 'Study in UK with IELTS 5.5 Overall (Business & Law)',
    href: '/posts/study-in-the-uk-january-2027-intake-ielts-5-5-business-management-law',
  },
  {
    label: 'UK Master’s Entry Requirements (IELTS 6.0/6.5 or MOI)',
    href: '/posts/entry-requirements-for-masters-in-the-uk-ielts-or-moi',
  },
  {
    label: '100% Part-Time Job Support in Stratford, London',
    href: '/posts/uk-student-part-time-job-support-stratford-london-office',
  },
  {
    label: 'UK Care & Support Work Free Training in London',
    href: '/posts/build-your-career-in-the-uk-care-and-support-work-opportunities',
  },
  {
    label: 'UK Tuition From £11,200 & CAS Deposit From £5,900',
    href: '/posts/study-in-the-uk-cas-deposit-from-5900-tuition-from-11200-ielts-waiver',
  },
  {
    label: 'UKVI 28-Day Bank Statement Calculator (£ GBP)',
    href: '/#bank-calculator',
  },
]

const legal = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-midnight text-white" aria-label="Site footer">
      {/* CTA Strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black">Ready to Begin Your Journey?</h2>
            <p className="text-white/60 mt-1 text-sm">
              Speak directly with our Stratford, London admissions team — 100% free (£0 agency fee).
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-brand-magenta hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl transition-colors duration-200 whitespace-nowrap flex-shrink-0"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5" aria-label="Sage Roots International">
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-amber-400/70 shadow-md">
                <Image
                  src="/images/sri-logo.jpg"
                  alt="Sage Roots International Official Logo"
                  fill
                  className="object-cover scale-[1.04]"
                  sizes="48px"
                />
              </div>
              <div className="leading-tight">
                <span className="block text-white font-black text-base">Sage Roots</span>
                <span className="block text-brand-magenta font-bold text-[10px] tracking-widest uppercase">
                  International
                </span>
              </div>
            </Link>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Official UK &amp; Global University Representative and Student Visa Consultants. Headquartered at 44 Broadway, Stratford, London E15 1XH.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, href: 'https://www.facebook.com/SageRootsInternation', label: 'Facebook' },
                { Icon: Instagram, href: 'https://www.instagram.com/sagerootsinternational/', label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-brand-magenta flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-5">
              Study Destinations
            </h3>
            <ul className="space-y-2.5">
              {destinations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-5">
              London Head Office
            </h3>
            <ul className="space-y-3.5">
              <li className="text-white/60 text-sm">
                <span className="block text-white font-semibold">44 Broadway, Stratford</span>
                <span className="text-white/60 text-xs block">London E15 1XH, United Kingdom</span>
                <span className="text-white/40 text-xs block mt-1">
                  Regional Desks: Dhaka (Bangladesh) • Kolkata &amp; Hyderabad (India)
                </span>
              </li>
              <li className="text-white/60 text-sm">
                <a
                  href="mailto:info@sagerootsinternational.co.uk"
                  className="hover:text-white transition-colors"
                >
                  info@sagerootsinternational.co.uk
                </a>
              </li>
              <li className="text-white/60 text-sm">
                <a
                  href="https://wa.me/447776181483"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-semibold text-emerald-400"
                >
                  +44 7776 181483 (WhatsApp / Call)
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-white/30 text-xs leading-relaxed">
                Office hours: Mon–Sat, 9:00am–6:00pm (UK time)
              </p>
            </div>
          </div>
        </div>

        {/* High-Demand SEO Admission Pathways Directory */}
        <div className="mt-14 pt-10 border-t border-white/10">
          <h3 className="font-bold text-xs uppercase tracking-widest text-emerald-400 mb-4">
            Featured UK &amp; Global Admission Pathways (Direct SEO Index)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {seoPathways.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-white/65 hover:text-emerald-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-3.5 py-2.5 transition-colors leading-snug"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <p className="text-[11px] text-white/35 mt-5 leading-relaxed">
            Sage Roots International (সেজ রুটস ইন্টারন্যাশনাল লন্ডন) — যুক্তরাজ্যে উচ্চশিক্ষা, IELTS বা MOI দিয়ে UK, Cyprus, Malta ও Dubai-এর শীর্ষ ইউনিভার্সিটিতে ভর্তি, আপ টু £10,000 স্কলারশিপ, 2nd Master’s after PSW, এবং লন্ডনে ১০০% পার্ট-টাইম জব ও ক্যারিয়ার গাইডলাইন।
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {currentYear} Sage Roots International. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {legal.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white/30 hover:text-white/70 text-xs transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
