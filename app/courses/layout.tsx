import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UK University Courses & Degree Programmes (Postgraduate & Undergraduate) | Sage Roots International',
  description:
    'Explore popular UK degree courses including MSc Data Science, MBA, Cyber Security, Engineering Management, Public Health & Law. 100% free admissions, MOI waivers without IELTS, and up to £10,000 scholarships.',
  keywords: [
    'UK university courses',
    'study in UK without IELTS',
    'UK masters courses MOI accepted',
    'study MBA in UK',
    'MSc Data Science UK',
    'MSc Cyber Security UK',
    'MSc Public Health UK',
    'Engineering courses in UK',
    'UK undergraduate degrees for international students',
    'best study abroad consultancy in the world',
    'UK student visa course requirements',
    'postgraduate courses UK scholarships',
  ],
  alternates: {
    canonical: 'https://www.sagerootsinternational.co.uk/courses',
  },
  openGraph: {
    title: 'UK University Courses & Degree Programmes | Sage Roots International',
    description:
      'Browse top undergraduate & postgraduate degree programmes across 139+ UK partner universities. Fast-track offer letters, MOI waivers, and up to £10,000 scholarships.',
    url: 'https://www.sagerootsinternational.co.uk/courses',
    siteName: 'Sage Roots International',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'UK University Courses & Degree Programmes Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK University Courses & Degree Programmes | Sage Roots International',
    description:
      'Compare UK degree courses, post-study work visa rights, MOI acceptance, and scholarships.',
    images: ['/images/sri-logo.jpg'],
  },
}

const coursesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
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
          name: 'Courses',
          item: 'https://www.sagerootsinternational.co.uk/courses',
        },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Featured UK University Degree Courses',
      description: 'Comprehensive degree courses available with MOI and IELTS options across UK partner universities.',
      itemListElement: [
        {
          '@type': 'Course',
          position: 1,
          name: 'MSc Data Science & Artificial Intelligence',
          description: '1 Year Full-Time (or 2 Years with Placement). MOI / IELTS 6.0–6.5 Accepted with 2-Year UK PSW Visa.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Sage Roots International - UK Partner Universities',
            url: 'https://www.sagerootsinternational.co.uk',
          },
        },
        {
          '@type': 'Course',
          position: 2,
          name: 'Master of Business Administration (Global MBA)',
          description: '1–2 Years with Placement. CMI Dual Accreditation, accepts study gap with work experience, no GMAT required.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Sage Roots International - UK Partner Universities',
            url: 'https://www.sagerootsinternational.co.uk',
          },
        },
        {
          '@type': 'Course',
          position: 3,
          name: 'MSc Cyber Security & Cloud Computing',
          description: '1 Year Full-Time. NCSC Aligned Curriculum with high UK tech sector demand and merit scholarships up to £6,000.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Sage Roots International - UK Partner Universities',
            url: 'https://www.sagerootsinternational.co.uk',
          },
        },
        {
          '@type': 'Course',
          position: 4,
          name: 'MSc Engineering Management & Construction Project Management',
          description: '1 Year Full-Time. RICS / Chartered Engineering pathways ideal for Civil, Mechanical & EEE graduates.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Sage Roots International - UK Partner Universities',
            url: 'https://www.sagerootsinternational.co.uk',
          },
        },
        {
          '@type': 'Course',
          position: 5,
          name: 'MSc Public Health & Healthcare Management',
          description: '1 Year Full-Time. Open to Doctors, Nurses & Bio Science graduates with NHS career pathways.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Sage Roots International - UK Partner Universities',
            url: 'https://www.sagerootsinternational.co.uk',
          },
        },
        {
          '@type': 'Course',
          position: 6,
          name: 'LLM International Commercial & Corporate Law',
          description: '1 Year Full-Time. International arbitration, trade law, moot court access, and merit scholarships.',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Sage Roots International - UK Partner Universities',
            url: 'https://www.sagerootsinternational.co.uk',
          },
        },
      ],
    },
  ],
}

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesJsonLd) }}
      />
      {children}
    </>
  )
}
