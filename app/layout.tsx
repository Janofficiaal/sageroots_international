import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import FloatingSocial from '@/components/ui/FloatingSocial'
import LeadPopupModal from '@/components/ui/LeadPopupModal'
import TabVisibility from '@/components/ui/TabVisibility'
import ClickSound from '@/components/ui/ClickSound'
import PageTransitionLoader from '@/components/ui/PageTransitionLoader'

export const viewport: Viewport = {
  themeColor: '#042017',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sagerootsinternational.co.uk'),
  title: {
    default:
      'Sage Roots International | UK & Global University Admissions, MOI & Visa Consultants (London)',
    template: '%s | Sage Roots International',
  },
  description:
    'Sage Roots International (44 Broadway, Stratford, London E15 1XH) — Official UK & global university admissions consultancy. Apply to 50+ UK universities, Cyprus, Malta & Dubai with MOI/IELTS, up to £10,000 scholarships, 100% job support & £0 agency fee.',
  keywords: [
    'Sage Roots International',
    'Sage Roots International London',
    'UK university admissions',
    'study in UK without IELTS MOI',
    'MOI accepted universities in UK',
    'January 2027 intake UK universities',
    'BPP University second masters UK PSW',
    'Ulster University tuition fee £10625',
    'UK student visa 28 day bank statement calculator GBP',
    'study in Cyprus from Bangladesh',
    'study in Malta Schengen student visa',
    'study in Dubai UK branch campus',
    'education consultancy Stratford London E15 1XH',
    '100% part time job support UK students London',
    'UK scholarship for international students',
    'যুক্তরাজ্যে উচ্চশিক্ষা',
    'IELTS ছাড়া UK স্টুডেন্ট ভিসা',
  ],
  alternates: {
    canonical: '/',
    languages: {
      'en-GB': '/',
      'en-US': '/',
    },
  },
  openGraph: {
    title:
      'Sage Roots International | Official UK, Cyprus, Malta & Dubai University Admissions Desk',
    description:
      'Direct admission to 50+ UK & global partner universities with £0 agency fee, up to £10,000 scholarship, MOI pathways, and onshore London student job support.',
    url: 'https://www.sagerootsinternational.co.uk',
    siteName: 'Sage Roots International',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'Sage Roots International Official Emblem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sage Roots International | Study in UK, Cyprus, Malta & Dubai',
    description:
      'Official London-based university representative & UKVI student visa consultants. £0 application processing fee.',
    images: ['/images/sri-logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/sri-logo.jpg',
    shortcut: '/images/sri-logo.jpg',
    apple: '/images/sri-logo.jpg',
  },
  other: {
    'geo.region': 'GB-LND',
    'geo.placename': 'Stratford, London',
    'geo.position': '51.5416;-0.0022',
    ICBM: '51.5416, -0.0022',
  },
}

const globalSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      '@id': 'https://www.sagerootsinternational.co.uk/#organization',
      name: 'Sage Roots International',
      alternateName: 'SageRoots International UK',
      url: 'https://www.sagerootsinternational.co.uk',
      logo: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      image: 'https://www.sagerootsinternational.co.uk/images/sri-logo.jpg',
      description:
        'London-headquartered international higher education consultancy providing 100% free UK, Cyprus, Malta, Dubai, Australia, Canada, and European university admissions, scholarship matching, Pre-CAS interview preparation, and onshore student career support.',
      telephone: '+447776181483',
      email: 'info@sagerootsinternational.co.uk',
      priceRange: '£0 (Free University Application Processing)',
      currenciesAccepted: 'GBP',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '44 Broadway, Stratford',
        addressLocality: 'London',
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
      areaServed: [
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Bangladesh' },
        { '@type': 'Country', name: 'India' },
        { '@type': 'Country', name: 'Cyprus' },
        { '@type': 'Country', name: 'Malta' },
        { '@type': 'Country', name: 'United Arab Emirates' },
      ],
      sameAs: [
        'https://www.facebook.com/SageRootsInternation',
        'https://www.instagram.com/sagerootsinternational/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.sagerootsinternational.co.uk/#website',
      url: 'https://www.sagerootsinternational.co.uk',
      name: 'Sage Roots International',
      publisher: {
        '@id': 'https://www.sagerootsinternational.co.uk/#organization',
      },
      inLanguage: 'en-GB',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchemaJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-brand-bg">
        <PageTransitionLoader />
        <ClickSound />
        <TabVisibility />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingSocial />
        <FloatingWhatsApp phoneNumber="+447776181483" />
        <LeadPopupModal />
      </body>
    </html>
  )
}
