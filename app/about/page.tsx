import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Sage Roots International — a UK-based global education consultancy dedicated to helping international students achieve their study abroad dreams with 100% transparency.',
}

const values = [
  {
    number: '01',
    title: 'Our Mission',
    text: 'To provide honest, UK-led, personalised guidance that helps students navigate university admissions, scholarships, and UKVI visa pathways with 100% clarity and confidence.',
  },
  {
    number: '02',
    title: 'Our Vision',
    text: 'To be the most trusted UK-based education consultancy for international students, bridging the gap between ambitious learners and world-class British universities.',
  },
  {
    number: '03',
    title: 'Our Core Values',
    text: '100% transparency, zero hidden fees, ethical UKVI compliance, and on-ground support in the United Kingdom — from your first enquiry until graduation.',
  },
]

const sageRootsHighlights = [
  'Direct Representation of 50+ UK Universities (Russell Group & Modern)',
  '98.4% UKVI Visa Compliance & 1-on-1 Pre-CAS Mock Interviews',
  '100% Free Application, SOP Review & Merit Scholarship Assessment',
  'Dedicated On-Ground UK Support for Accommodation & Arrival',
]

const keyPillars = [
  {
    stat: '50+',
    label: 'UK Partner Universities',
    desc: 'Direct admission pathways across England, Scotland, Wales, and Northern Ireland.',
  },
  {
    stat: '98.4%',
    label: 'Visa Success & Compliance',
    desc: 'Strict UKVI financial document auditing and credibility interview preparation.',
  },
  {
    stat: 'Up to £10k',
    label: 'Merit Scholarships',
    desc: 'Automatic bursaries and Vice-Chancellor awards matched to your academic profile.',
  },
  {
    stat: '100% Free',
    label: 'Zero Agency Processing Fee',
    desc: 'Complete application, SOP guidance, and CAS processing at zero cost to students.',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-[#F8FAF9]">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-[#042017] via-[#073224] to-[#0A4431] pt-32 pb-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&q=80"
          alt="London United Kingdom skyline"
          fill
          className="object-cover opacity-15"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#042017] via-transparent to-[#042017]/60"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Headquartered in the United Kingdom
          </div>
          <h1 className="text-white font-black text-4xl sm:text-6xl leading-tight mb-5">
            About Sage Roots International
          </h1>
          <p className="text-emerald-100/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Global University Representative &amp; UK Visa Consultants. Operating directly from the United Kingdom, we empower international students with transparent admissions, merit scholarships, and end-to-end support.
          </p>

          <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-black/35 border border-white/15 backdrop-blur-md">
            <Link
              href="/about"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-bold shadow-sm"
            >
              About Sage Roots
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/10 text-xs sm:text-sm font-bold transition-colors"
            >
              Contact &amp; London Office
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Who We Are — About Sage Roots International */}
      <section className="py-20 sm:py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl shadow-emerald-950/10 border border-emerald-100 overflow-hidden">
            <div className="grid lg:grid-cols-12 items-stretch">
              {/* Left Column: Official Sage Roots International Brand & Emblem Showcase */}
              <div className="lg:col-span-5 relative bg-gradient-to-b from-[#073224] via-[#042017] to-[#02130d] p-7 sm:p-10 flex flex-col justify-center gap-7">
                {/* Top UK Badges */}
                <div className="flex items-center justify-between gap-2 z-10">
                  <span className="inline-block bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[11px] font-bold px-3 py-1 rounded-full">
                    London, United Kingdom
                  </span>
                  <span className="inline-block bg-white/10 text-white/90 text-[11px] font-semibold px-3 py-1 rounded-full">
                    UKVI Compliant
                  </span>
                </div>

                {/* Official SRI Circular Crest Centerpiece */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full overflow-hidden ring-4 ring-amber-400/80 shadow-2xl shadow-black/60 bg-[#042017]">
                    <Image
                      src="/images/sri-logo.jpg"
                      alt="Sage Roots International Official Logo"
                      fill
                      className="object-cover scale-[1.04]"
                      sizes="240px"
                      priority
                    />
                  </div>

                  <p className="text-emerald-400 text-xs font-extrabold uppercase tracking-widest mt-5">
                    Enriching Your Future
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-1">
                    Sage Roots International
                  </h2>
                  <p className="text-white/70 text-xs sm:text-sm mt-1.5 max-w-xs leading-relaxed">
                    Global University Representative &amp; UK Student Visa Consultants
                  </p>
                </div>

                {/* Bottom Quick Stats (2x2 Grid) */}
                <div className="grid grid-cols-2 gap-3 pt-5 border-t border-white/10 text-center">
                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
                    <p className="text-emerald-400 font-black text-xl leading-none">50+ UK Unis</p>
                    <p className="text-white/60 text-[11px] mt-1">Official Partner Network</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
                    <p className="text-emerald-400 font-black text-xl leading-none">100% Free</p>
                    <p className="text-white/60 text-[11px] mt-1">Admission &amp; Visa Support</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
                    <p className="text-amber-400 font-black text-xl leading-none">98% Success</p>
                    <p className="text-white/60 text-[11px] mt-1">UK Student Visa Rate</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3.5 border border-white/10">
                    <p className="text-amber-400 font-black text-xl leading-none">48 Hours</p>
                    <p className="text-white/60 text-[11px] mt-1">Fast-Track Offer Letter</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed Overview of Sage Roots International */}
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
                <p className="text-brand-magenta font-bold text-xs tracking-widest uppercase mb-3">
                  Who We Are
                </p>

                <h2 className="text-[#06241B] font-black text-2xl sm:text-4xl leading-tight mb-5">
                  Your Trusted UK-Based Partner for Global Higher Education
                </h2>

                <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed mb-7">
                  <p>
                    <strong>Sage Roots International</strong> is a premier UK-based education consultancy and official university representative dedicated to guiding international students toward life-changing academic opportunities in the United Kingdom and top global study destinations.
                  </p>
                  <p>
                    We understand that choosing the right university, securing maximum merit scholarships, and preparing a compliant UK Student Visa application can feel overwhelming. That is why our UK-trained counselors provide honest, personalized, step-by-step mentorship—starting from your initial profile assessment all the way to your arrival and settlement in the UK.
                  </p>
                  <p>
                    Whether you are applying for a <strong>Foundation Pathway, Bachelor&apos;s Degree, Master&apos;s Programme, or PhD</strong>—with IELTS, PTE, or MOI (Medium of Instruction)—Sage Roots International ensures a smooth, transparent, and 100% free application journey.
                  </p>
                </div>

                {/* Highlights Checklist */}
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {sageRootsHighlights.map((item) => (
                    <div
                      key={item}
                      className="bg-emerald-50/70 border border-emerald-100 border-l-4 border-l-[#073224] rounded-xl px-4 py-3"
                    >
                      <span className="text-[#06241B] font-semibold text-xs leading-snug block">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-gray-100">
                  <Link
                    href="#consultation"
                    className="inline-block bg-brand-magenta hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl transition shadow-md shadow-emerald-900/15"
                  >
                    Book Free UK Consultation
                  </Link>
                  <a
                    href="https://wa.me/447776181483?text=Hello%20Sage%20Roots%20International!%20I%20would%20like%20to%20discuss%20my%20UK%20study%20abroad%20options."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#042017] hover:bg-[#073224] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition"
                  >
                    WhatsApp UK Desk (+44 7776 181483)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Students Choose Sage Roots International (4 Key Pillars) */}
      <section className="pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyPillars.map(({ stat, label, desc }) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-6 border border-emerald-100 border-t-4 border-t-[#073224] shadow-sm card-hover"
            >
              <p className="text-3xl font-black text-[#073224]">{stat}</p>
              <h3 className="font-bold text-[#06241B] text-sm mt-2 mb-2">{label}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Mission, Vision & Values */}
      <section className="py-16 bg-[#ECFDF5]/70 border-y border-emerald-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-brand-magenta font-bold text-xs tracking-widest uppercase mb-2">
              What Drives Us
            </p>
            <h2 className="text-[#06241B] font-black text-3xl sm:text-4xl">
              Our Mission, Vision &amp; Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ number, title, text }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-emerald-100 card-hover"
              >
                <span className="inline-block text-xs font-black tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg mb-4">
                  {number}
                </span>
                <h3 className="font-black text-[#06241B] text-lg mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Consultation Form */}
      <ConsultationForm />
    </div>
  )
}
