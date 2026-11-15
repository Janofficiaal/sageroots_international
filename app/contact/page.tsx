import type { Metadata } from 'next'
import Link from 'next/link'
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Navigation,
  Train,
  CheckCircle2,
  Building,
  Globe2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'Contact Sage Roots International | 44 Broadway, Stratford, London Head Office & BD Desks',
  description:
    'Contact Sage Roots International at our London head office (44 Broadway, Stratford, London E15 1XH) or connect with our student desks in Dhaka, Sylhet, Chittagong, Rajshahi and Khulna. Free £0 agency fee UK university consultation.',
  keywords: [
    'contact sage roots international',
    'sageroots international london office',
    '44 broadway stratford london e15 1xh',
    'sageroots stratford phone number',
    'study abroad consultancy stratford london',
    'uk student visa consultancy contact',
    'sage roots international whatsapp number',
    'sageroots dhaka office',
    'sageroots sylhet office',
    'best study abroad consultancy in the world',
  ],
  alternates: {
    canonical: 'https://www.sagerootsinternational.co.uk/contact',
  },
  openGraph: {
    title: 'Contact Sage Roots International | London Head Office & BD Desks',
    description:
      'Visit us at 44 Broadway, Stratford, London E15 1XH or contact our admissions counselors on WhatsApp +44 7776 181483 for 100% free UK study guidance.',
    url: 'https://www.sagerootsinternational.co.uk/contact',
    siteName: 'Sage Roots International',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'Sage Roots International London Office',
      },
    ],
  },
}

const contactSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.sagerootsinternational.co.uk/#localbusiness',
      name: 'Sage Roots International',
      alternateName: ['sageroots', 'sageroots international', 'Sage Roots UK'],
      description:
        'Global education advisory and UK student visa consulting headquarters offering free university applications, MOI admissions, and scholarship processing.',
      url: 'https://www.sagerootsinternational.co.uk',
      logo: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      image: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      telephone: '+447776181483',
      email: 'info@sagerootsinternational.co.uk',
      priceRange: '£0 Free Consultation',
      currenciesAccepted: 'GBP',
      paymentAccepted: 'Free Service (£0 Agency Fee)',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '44 Broadway',
        addressLocality: 'Stratford, London',
        postalCode: 'E15 1XH',
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.5416,
        longitude: -0.0022,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      hasMap: 'https://maps.google.com/maps?q=44+Broadway,+Stratford,+London+E15+1XH,+UK',
      sameAs: [
        'https://www.facebook.com/SageRootsInternation',
        'https://www.instagram.com/sagerootsinternational/',
      ],
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
          name: 'Contact & London Office',
          item: 'https://www.sagerootsinternational.co.uk/contact',
        },
      ],
    },
  ],
}

export default function ContactPage() {
  return (
    <div className="bg-[#FAFDFB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchemaJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#031812] via-[#073224] to-[#0D4433] pt-32 pb-20 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-emerald-400 font-bold text-xs tracking-widest uppercase mb-4">
            London Head Office &amp; Global Student Desks
          </p>
          <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl mb-4 tracking-tight">
            Contact Sage Roots International
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Visit our Stratford, London headquarters or connect with our international student desks across Bangladesh and India. <strong>100% free consultation (£0 agency fee)</strong>.
          </p>

          <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl bg-black/35 border border-white/15 backdrop-blur-md">
            <Link
              href="/about"
              className="px-5 py-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/10 text-xs sm:text-sm font-bold transition-colors"
            >
              About Sage Roots
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-bold shadow-sm"
            >
              London Office &amp; Map
            </Link>
            <Link
              href="/eligibility-checker"
              className="px-5 py-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/10 text-xs sm:text-sm font-bold transition-colors"
            >
              Instant Eligibility
            </Link>
          </div>
        </div>
      </section>

      {/* Main Details Cards */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white border border-emerald-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-[#06241B] font-bold text-base mb-1">London Headquarters</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                44 Broadway, Stratford<br />
                London E15 1XH<br />
                United Kingdom
              </p>
            </div>
            <p className="text-[11px] text-emerald-800 font-semibold mt-3 pt-3 border-t border-gray-100">
              4 min walk from Stratford Station
            </p>
          </div>

          <div className="bg-white border border-emerald-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-[#06241B] font-bold text-base mb-1">WhatsApp &amp; Direct UK Call</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Direct UK admissions hotline and international WhatsApp guidance.
              </p>
            </div>
            <a
              href="https://wa.me/447776181483"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 mt-3 pt-3 border-t border-gray-100 inline-flex items-center gap-1"
            >
              +44 7776 181483 →
            </a>
          </div>

          <div className="bg-white border border-emerald-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-[#06241B] font-bold text-base mb-1">Official Email</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Send transcripts, MOI certificates and admission queries.
              </p>
            </div>
            <a
              href="mailto:info@sagerootsinternational.co.uk"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 mt-3 pt-3 border-t border-gray-100 truncate block"
            >
              info@sagerootsinternational.co.uk
            </a>
          </div>

          <div className="bg-white border border-emerald-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-[#06241B] font-bold text-base mb-1">Operating Hours</h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Monday – Saturday: 9:00am – 6:00pm (UK Time)<br />
                Sunday: Closed (Online Inquiries Monitored)
              </p>
            </div>
            <span className="text-[11px] text-gray-500 mt-3 pt-3 border-t border-gray-100">
              London &amp; Bangladesh Timezones
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Google Map & Travel Directions Section */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-emerald-100 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Map iframe */}
            <div className="lg:col-span-7">
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-gray-200 shadow-inner bg-gray-100">
                <iframe
                  title="Sage Roots International London Office Map"
                  src="https://maps.google.com/maps?q=44+Broadway,+Stratford,+London+E15+1XH,+UK&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  GPS: 51.5416° N, 0.0022° W (Stratford, London)
                </span>
                <a
                  href="https://maps.google.com/maps?q=44+Broadway,+Stratford,+London+E15+1XH,+UK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 font-bold hover:underline"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>

            {/* Travel Directions & Office Info */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200 uppercase tracking-wider mb-3">
                  <Navigation className="w-3.5 h-3.5" />
                  How to Reach Us in London
                </span>
                <h2 className="text-2xl font-black text-[#042017] mb-3">
                  Visit Our Stratford Office
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Our headquarters is located on the vibrant high street of <strong>Stratford, East London</strong>. Our team is always ready to welcome students for face-to-face course counseling, document verification, and visa mock interviews.
                </p>

                <div className="space-y-3.5 mb-6">
                  <div className="flex items-start gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-200/80">
                    <Train className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-gray-900">Stratford Station (Major Interchange)</p>
                      <p className="text-[11px] text-gray-600 mt-0.5">
                        Central Line, Jubilee Line, Elizabeth Line, DLR, and London Overground — only a <strong>4-minute walk</strong> to 44 Broadway.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-200/80">
                    <Building className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-gray-900">Stratford High Street DLR</p>
                      <p className="text-[11px] text-gray-600 mt-0.5">
                        Just a <strong>3-minute walk</strong> from Stratford High Street Station.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-gray-50 p-3.5 rounded-xl border border-gray-200/80">
                    <ShieldCheck className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold text-gray-900">100% Free Consultation Guarantee</p>
                      <p className="text-[11px] text-gray-600 mt-0.5">
                        No appointment fee, no agency fee, and zero hidden charges for UK university admissions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/447776181483?text=Hello%20Sage%20Roots%20International,%20I%20would%20like%20to%20visit%20your%20Stratford%20London%20office%20for%20admissions%20guidance."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-4 rounded-xl text-sm transition shadow-md"
              >
                Schedule In-Person Meeting in London
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bangladesh Regional Student Desks Hub */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-emerald-700 font-bold text-xs uppercase tracking-widest mb-1">
            Nationwide Bangladesh Support
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#042017]">
            Dedicated Regional Student Desks
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm max-w-2xl mx-auto mt-2">
            Wherever you are in Bangladesh, Sage Roots International provides specialized local guidance for university entry, document attested copies, and UKVI compliant bank statements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              city: 'Khulna Regional Desk',
              location: 'Sonadanga R/A, Khulna',
              target: 'Khulna University, KUET, BL College students',
              href: '/khulna',
            },
            {
              city: 'Dhaka Central Desk',
              location: 'Dhaka Metropolitan',
              target: 'DU, NSU, BRAC, AIUB, IUB, EWU, UIU students',
              href: '/dhaka',
            },
            {
              city: 'Sylhet Regional Desk',
              location: 'Sylhet City & Division',
              target: 'SUST, Leading, Metropolitan University students',
              href: '/sylhet',
            },
            {
              city: 'Chittagong Port City Desk',
              location: 'Chattogram Metropolitan',
              target: 'CU, CUET, IIUC, Premier University students',
              href: '/chittagong',
            },
            {
              city: 'Rajshahi Divisional Desk',
              location: 'Rajshahi City',
              target: 'Rajshahi University (RU), RUET, Varendra students',
              href: '/rajshahi',
            },
            {
              city: 'India Student Desks',
              location: 'Kolkata & Hyderabad',
              target: 'Pan-India students applying for UK & Global admissions',
              href: '/contact',
            },
          ].map((desk) => (
            <div
              key={desk.city}
              className="bg-white border border-emerald-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-sm text-[#06241B]">{desk.city}</h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <p className="text-xs text-emerald-800 font-semibold mb-1">{desk.location}</p>
                <p className="text-gray-500 text-xs">{desk.target}</p>
              </div>
              <Link
                href={desk.href}
                className="mt-4 pt-3 border-t border-gray-100 text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
              >
                Explore Desk Details <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation form */}
      <ConsultationForm />
    </div>
  )
}
