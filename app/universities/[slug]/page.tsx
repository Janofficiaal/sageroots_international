import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { universities } from '@/data/universities'
import UniversityCard from '@/components/ui/UniversityCard'
import ConsultationForm from '@/components/home/ConsultationForm'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return universities.map((u) => ({ slug: u.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const university = universities.find((u) => u.slug === params.slug)
  if (!university) return { title: 'University Not Found' }
  const title = `${university.name} (${university.city}) — UK Tuition Fees (£ GBP), Scholarships & Admissions`
  const description = `Apply to ${university.name} in ${university.city}, UK through Sage Roots International (£0 agency fee). Tuition: ${university.tuitionFeeNote}, Scholarships: ${university.scholarshipNote}, Intakes: ${university.intakes.join(', ')}. ${university.overview}`

  return {
    title,
    description,
    keywords: [
      university.name,
      `${university.name} tuition fee GBP`,
      `${university.name} scholarship`,
      `${university.name} admission requirements`,
      `study at ${university.name} from Bangladesh`,
      `${university.name} MOI accepted`,
      'Sage Roots International UK partner university',
    ],
    alternates: {
      canonical: `/universities/${university.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.sagerootsinternational.co.uk/universities/${university.slug}`,
      type: 'website',
      images: [
        {
          url: university.image,
          width: 1200,
          height: 630,
          alt: `${university.name} (${university.city}) — UK Admissions & Scholarships`,
        },
      ],
    },
  }
}

const REQUIRED_DOCS = [
  'Valid Passport (Bio Page)',
  'Academic Transcripts & Certificates (SSC, HSC / Bachelor’s)',
  'English Proof (IELTS / PTE / Duolingo / MOI Certificate)',
  'Updated Academic CV / Resume',
  'Statement of Purpose (SOP)',
  '1–2 Academic or Professional Reference Letters',
]

export default function UniversityDetailPage({ params }: Props) {
  const university = universities.find((u) => u.slug === params.slug)
  if (!university) notFound()

  const similarUniversities = universities
    .filter((u) => u.slug !== university.slug)
    .sort((a, b) => {
      const aScore =
        (a.city === university.city ? 3 : 0) +
        a.subjects.filter((s) => university.subjects.includes(s)).length
      const bScore =
        (b.city === university.city ? 3 : 0) +
        b.subjects.filter((s) => university.subjects.includes(s)).length
      return bScore - aScore
    })
    .slice(0, 4)
    .sort((a, b) => a.name.localeCompare(b.name))

  const whatsappEnquiryUrl = `https://wa.me/447776181483?text=${encodeURIComponent(
    `Hello Sage Roots International! I want to check my eligibility and scholarship options for ${university.name} (${university.city}).`
  )}`

  const universityJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollegeOrUniversity',
        name: university.name,
        url: `https://www.sagerootsinternational.co.uk/universities/${university.slug}`,
        image: university.image,
        description: university.overview,
        address: {
          '@type': 'PostalAddress',
          addressLocality: university.city,
          addressCountry: university.countryCode || 'GB',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.sagerootsinternational.co.uk',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'UK Universities',
            item: 'https://www.sagerootsinternational.co.uk/universities',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: university.name,
            item: `https://www.sagerootsinternational.co.uk/universities/${university.slug}`,
          },
        ],
      },
    ],
  }

  return (
    <div className="bg-[#F8FAF9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(universityJsonLd) }}
      />

      {/* Hero */}
      <section className="relative h-80 sm:h-[420px] overflow-hidden">
        <Image
          src={university.image}
          alt={`${university.name} (${university.city}) campus — UK university admissions`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#042017] via-[#042017]/65 to-black/30"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
          <div className="max-w-6xl mx-auto">
            {/* Visible SEO Breadcrumb Trail */}
            <nav aria-label="Breadcrumb" className="mb-3 text-xs text-white/75 flex flex-wrap items-center gap-2">
              <Link href="/" className="hover:text-emerald-300 underline underline-offset-4">
                Home
              </Link>
              <span>/</span>
              <Link href="/universities" className="hover:text-emerald-300 underline underline-offset-4">
                UK Universities
              </Link>
              <span>/</span>
              <span className="text-emerald-300 font-semibold">{university.name}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="bg-brand-magenta text-white text-xs font-bold px-3 py-1 rounded-full">
                {university.countryCode} Partner Institution
              </span>
              <span className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full">
                Applications Open: {university.intakes.join(' / ')}
              </span>
              <span className="text-white/80 text-sm">
                {university.city}, {university.country}
              </span>
            </div>
            <h1 className="text-white font-black text-3xl sm:text-5xl">{university.name}</h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-3 gap-10">
        {/* Left 2 Columns */}
        <div className="lg:col-span-2 space-y-10">
          {/* Overview */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-100 shadow-sm">
            <h2 className="text-[#06241B] font-black text-xl mb-3">University Overview</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {university.overview}
            </p>
          </div>

          {/* Study Levels & Intakes */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm">
              <h2 className="text-[#06241B] font-black text-lg mb-3">
                Study Levels
              </h2>
              <div className="flex flex-wrap gap-2">
                {university.studyLevels.map((level) => (
                  <span
                    key={level}
                    className="bg-[#ECFDF5] text-[#073224] font-bold text-xs px-3.5 py-1.5 rounded-full"
                  >
                    {level}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm">
              <h2 className="text-[#06241B] font-black text-lg mb-3">
                Available Intakes
              </h2>
              <div className="flex flex-wrap gap-2">
                {university.intakes.map((intake) => (
                  <span
                    key={intake}
                    className="border border-emerald-500/30 bg-emerald-50/50 text-[#073224] text-xs font-bold px-3.5 py-1.5 rounded-full"
                  >
                    {intake} Intake
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Subjects */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-100 shadow-sm">
            <h2 className="text-[#06241B] font-black text-xl mb-4">
              Popular Faculties &amp; Subjects
            </h2>
            <div className="flex flex-wrap gap-2">
              {university.subjects.map((subject) => (
                <span
                  key={subject}
                  className="bg-gray-100 text-[#06241B] text-xs font-semibold px-3.5 py-2 rounded-xl"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#ECFDF5] border border-emerald-200/60 rounded-2xl p-6">
              <h3 className="text-[#06241B] font-black text-sm mb-2">Academic Entry Requirements</h3>
              <p className="text-gray-700 text-xs leading-relaxed">{university.entryRequirements}</p>
            </div>
            <div className="bg-[#ECFDF5] border border-emerald-200/60 rounded-2xl p-6">
              <h3 className="text-[#06241B] font-black text-sm mb-2">English Language &amp; MOI</h3>
              <p className="text-gray-700 text-xs leading-relaxed">{university.englishRequirements}</p>
            </div>
          </div>

          {/* Fees & Scholarships */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-emerald-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-[#06241B] font-black text-sm mb-2">Estimated Tuition Fees</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{university.tuitionFeeNote}</p>
            </div>
            <div className="bg-white border border-emerald-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-[#06241B] font-black text-sm mb-2">Scholarships &amp; Bursaries</h3>
              <p className="text-gray-600 text-xs leading-relaxed">{university.scholarshipNote}</p>
            </div>
          </div>

          {/* Application Document Checklist */}
          <div className="bg-white border border-emerald-100 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-[#06241B] font-black text-lg mb-4">
              Required Documents for Offer Letter
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {REQUIRED_DOCS.map((doc) => (
                <div key={doc} className="flex items-center gap-2.5 text-xs text-gray-700 bg-[#F8FAF9] p-3 rounded-xl border border-gray-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
                  <span className="font-medium">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Data disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <p className="text-amber-800 text-xs leading-relaxed">
              <strong>Disclaimer:</strong> Fees, entry requirements, scholarships, and availability may change by intake. Please confirm current details with our UK admissions team before making any decisions.
            </p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Quick Info */}
          <div className="bg-white border border-emerald-100 rounded-2xl shadow-sm p-6">
            <h3 className="text-[#06241B] font-black text-lg mb-5">Quick Facts</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <strong>Location:</strong> {university.city}, {university.country}
              </li>
              <li>
                <strong>PSW Visa:</strong> 2-Year UK Graduate Route
              </li>
              <li>
                <a
                  href={university.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#073224] font-semibold underline underline-offset-4"
                >
                  Official University Website
                </a>
              </li>
            </ul>
          </div>

          {/* CTA card */}
          <div className="bg-gradient-to-br from-[#042017] to-[#073224] rounded-2xl p-6 text-center text-white shadow-xl">
            <span className="inline-block bg-emerald-500/20 text-emerald-300 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              100% Free Application
            </span>
            <h3 className="text-white font-black text-lg mb-2">
              Apply to {university.name}
            </h3>
            <p className="text-white/70 text-xs mb-5 leading-relaxed">
              Get a free offer letter assessment, SOP review, and automatic scholarship check from our UK team.
            </p>
            <div className="space-y-2.5">
              <Link
                href={`/contact?university=${university.slug}`}
                className="block bg-brand-magenta hover:bg-emerald-600 text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm w-full"
              >
                Enquire Now
              </Link>
              <a
                href={whatsappEnquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#25D366] hover:bg-[#1fb855] text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm w-full"
              >
                WhatsApp Assessment
              </a>
            </div>
          </div>

          {/* Back to list */}
          <Link
            href="/universities"
            className="block text-center text-sm text-[#073224] font-bold hover:text-brand-magenta transition-colors underline underline-offset-4"
          >
            Back to All 50 UK Universities
          </Link>
        </div>
      </div>

      {/* Similar UK Universities Section */}
      <section className="py-14 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-emerald-100">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-brand-magenta font-bold text-xs tracking-widest uppercase mb-1">
              Explore More Options
            </p>
            <h2 className="text-[#06241B] font-black text-2xl sm:text-3xl">
              Similar UK Universities You May Like
            </h2>
          </div>
          <Link
            href="/universities"
            className="text-sm font-bold text-[#073224] hover:underline hidden sm:inline-block"
          >
            View All 50
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {similarUniversities.map((simUni) => (
            <UniversityCard key={simUni.id} university={simUni} />
          ))}
        </div>
      </section>

      {/* Enquiry form */}
      <ConsultationForm />
    </div>
  )
}
