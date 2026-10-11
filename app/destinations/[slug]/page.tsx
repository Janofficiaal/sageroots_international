import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { destinations } from '@/data/destinations'
import { universities } from '@/data/universities'
import UniversityCard from '@/components/ui/UniversityCard'
import ConsultationForm from '@/components/home/ConsultationForm'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dest = destinations.find((d) => d.slug === params.slug)
  if (!dest) return { title: 'Destination Not Found' }
  const title = `Study in ${dest.name} — Tuition Fees (£ GBP), Student Visa & Scholarships`
  const description = `Complete guide to studying in ${dest.name} with Sage Roots International. Tuition fee range: ${dest.tuitionRange}, Living cost: ${dest.livingCost}, Post-study work: ${dest.postStudyWork}. ${dest.overview}`

  return {
    title,
    description,
    keywords: [
      `Study in ${dest.name}`,
      `${dest.name} student visa requirements`,
      `${dest.name} university tuition fees in GBP`,
      `Study in ${dest.name} from Bangladesh`,
      `${dest.name} scholarship for international students`,
      `Sage Roots International ${dest.name}`,
    ],
    alternates: {
      canonical: `/destinations/${dest.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.sagerootsinternational.co.uk/destinations/${dest.slug}`,
      type: 'website',
      images: [
        {
          url: dest.image,
          width: 1200,
          height: 630,
          alt: `Study in ${dest.name} — Tuition Fees, Visa & Universities`,
        },
      ],
    },
  }
}

export default function DestinationDetailPage({ params }: Props) {
  const dest = destinations.find((d) => d.slug === params.slug)
  if (!dest) notFound()

  const isUK = dest.slug === 'united-kingdom'
  const featuredUKUniversities = isUK ? universities.slice(0, 8) : []
  const otherDestinations = destinations.filter((d) => d.slug !== dest.slug)

  const destinationJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: `Study in ${dest.name} — Tuition Fees, Student Visa & Universities`,
        description: dest.overview,
        url: `https://www.sagerootsinternational.co.uk/destinations/${dest.slug}`,
        publisher: {
          '@type': 'EducationalOrganization',
          name: 'Sage Roots International',
          url: 'https://www.sagerootsinternational.co.uk',
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
            name: 'Study Destinations',
            item: 'https://www.sagerootsinternational.co.uk/destinations',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `Study in ${dest.name}`,
            item: `https://www.sagerootsinternational.co.uk/destinations/${dest.slug}`,
          },
        ],
      },
    ],
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationJsonLd) }}
      />

      {/* Hero Banner */}
      <section className="relative h-80 sm:h-[420px] overflow-hidden">
        <Image
          src={dest.image}
          alt={`Study in ${dest.name} — Universities, Tuition Fees & Student Visa`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-brand-midnight/65 to-brand-midnight/30"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-12">
          <div className="max-w-7xl mx-auto">
            {/* Visible SEO Breadcrumb Trail */}
            <nav aria-label="Breadcrumb" className="mb-3 text-xs text-white/75 flex flex-wrap items-center gap-2">
              <Link href="/" className="hover:text-emerald-300 underline underline-offset-4">
                Home
              </Link>
              <span>/</span>
              <Link href="/destinations" className="hover:text-emerald-300 underline underline-offset-4">
                Study Destinations
              </Link>
              <span>/</span>
              <span className="text-emerald-300 font-semibold">Study in {dest.name}</span>
            </nav>

            <div className="inline-block bg-emerald-600/90 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-full mb-4">
              {dest.highlight}
            </div>
            <h1 className="text-white font-black text-3xl sm:text-5xl mb-3">
              Study in {dest.name}
            </h1>
            <p className="text-white/80 text-sm sm:text-base max-w-2xl leading-relaxed">
              {dest.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Key Facts Bar */}
      <section className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Tuition Fee Range
              </p>
              <p className="text-sm font-bold text-brand-dark mt-1">{dest.tuitionRange}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Post-Study Work Visa
              </p>
              <p className="text-sm font-bold text-brand-dark mt-1">{dest.postStudyWork}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Part-Time Work Rights
              </p>
              <p className="text-sm font-bold text-brand-dark mt-1">{dest.partTimeWork}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Living Cost Estimate
              </p>
              <p className="text-sm font-bold text-brand-dark mt-1">{dest.livingCost}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left 2 Columns */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              <h2 className="text-brand-dark font-black text-2xl mb-4">
                Overview of Studying in {dest.name}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {dest.overview}
              </p>
            </div>

            {/* Why Study Here */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              <h2 className="text-brand-dark font-black text-2xl mb-5">
                Why Choose {dest.name}?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dest.whyStudy.map((reason, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 border-l-4 border-l-emerald-600"
                  >
                    <span className="text-sm text-gray-700 font-medium leading-snug block">
                      {reason}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visa & Admission Requirements */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
              <h2 className="text-brand-dark font-black text-2xl mb-5">
                Student Visa &amp; Document Checklist
              </h2>
              <ul className="space-y-3.5">
                {dest.visaRequirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="w-6 h-6 rounded-full bg-brand-midnight text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Intakes */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-brand-dark text-base mb-4">
                Available Intakes
              </h3>
              <div className="flex flex-wrap gap-2">
                {dest.intakes.map((intake) => (
                  <span
                    key={intake}
                    className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold px-3.5 py-2 rounded-xl"
                  >
                    {intake}
                  </span>
                ))}
              </div>
            </div>

            {/* Popular Subjects */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-brand-dark text-base mb-4">
                Top Demand Courses in {dest.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {dest.popularSubjects.map((sub) => (
                  <span
                    key={sub}
                    className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-lg"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-[#073224] rounded-2xl p-6 text-white shadow-lg">
              <p className="text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
                Free Assessment
              </p>
              <h3 className="font-black text-xl mb-2">
                Want to Study in {dest.name}?
              </h3>
              <p className="text-white/75 text-xs leading-relaxed mb-6">
                Get 1-on-1 guidance on university shortlisting, scholarship eligibility, and complete visa documentation from our expert counsellors.
              </p>
              <a
                href="#consultation"
                className="w-full block text-center bg-emerald-500 hover:bg-emerald-400 text-[#042017] font-bold px-5 py-3.5 rounded-xl text-sm transition-colors"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured UK Universities if UK */}
      {isUK && (
        <section className="py-16 bg-[#F4F9F6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-emerald-700 font-bold text-xs tracking-widest uppercase mb-2">
                  Top UK Institutions
                </p>
                <h2 className="text-brand-dark font-black text-3xl">
                  Explore Our 50 UK Partner Universities
                </h2>
              </div>
              <Link
                href="/universities"
                className="inline-block bg-brand-royal text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-emerald-800 transition-colors"
              >
                View All 50 UK Universities
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredUKUniversities.map((uni) => (
                <UniversityCard key={uni.id} university={uni} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Internal SEO Cross-Links to Other Study Destinations */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-brand-dark font-black text-2xl mb-2">
            Compare Other Global Study Destinations
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Explore tuition fees in GBP (£), visa requirements, and post-study work pathways across our other international destinations:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {otherDestinations.map((d) => (
              <Link
                key={d.slug}
                href={`/destinations/${d.slug}`}
                className="p-4 rounded-xl border border-emerald-100 bg-[#F8FAF9] hover:bg-emerald-50/70 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-magenta">
                    {d.highlight}
                  </span>
                  <h3 className="text-base font-black text-[#06241B] mt-0.5">
                    Study in {d.name}
                  </h3>
                </div>
                <p className="text-xs text-gray-600 font-semibold mt-2">
                  Tuition: {d.tuitionRange}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <ConsultationForm />
    </div>
  )
}
