import type { Metadata } from 'next'
import HeroSlider from '@/components/home/HeroSlider'
import RequirementsPushSlider from '@/components/home/RequirementsPushSlider'
import UniversityMarquee from '@/components/home/UniversityMarquee'
import FeaturedDestinations from '@/components/home/FeaturedDestinations'
import IntakeCalendar from '@/components/home/IntakeCalendar'
import PromoBanner from '@/components/home/PromoBanner'
import UniversityMarketplace from '@/components/home/UniversityMarketplace'
import EligibilityChecker from '@/components/home/EligibilityChecker'
import PreCasMoiGuide from '@/components/home/PreCasMoiGuide'
import VisaRoadmap from '@/components/home/VisaRoadmap'
import StudyBySubject from '@/components/home/StudyBySubject'
import ServicesSection from '@/components/home/ServicesSection'
import FoundationPathways from '@/components/home/FoundationPathways'
import SuccessStories from '@/components/home/SuccessStories'
import BankCalculator from '@/components/home/BankCalculator'
import LatestFacebookPosts from '@/components/home/LatestFacebookPosts'
import FAQSection from '@/components/home/FAQSection'
import ConsultationForm from '@/components/home/ConsultationForm'

export const metadata: Metadata = {
  title: 'Sage Roots International | Best Study Abroad Consultancy in the World (sageroots)',
  description:
    'Sage Roots International (sageroots international) is the premier global study abroad consultancy for UK, Cyprus, Malta, Dubai, and Canada. 100% free application processing, MOI admissions without IELTS, scholarships up to £10,000, and London student job support.',
  keywords: [
    'sageroots',
    'sageroots international',
    'sagerootsinternational',
    'sage roots',
    'sage roots international',
    'study abroad',
    'study abroad consultancy',
    'study abroad agency',
    'study abroad in uk',
    'study abroad bangladesh',
    'best study abroad consultancy in the world',
    'best study abroad consultancy',
    'best study abroad agency in the world',
    'top study abroad consultancy',
    'overseas education consultants',
    'study in uk without ielts',
    'January 2027 intake UK universities',
    'April May 2027 intake UK universities',
    'September 2027 intake UK universities',
    'minimum CAS deposit UK universities',
    'UK universities with 3000 pound deposit',
    'study in UK with study gap',
    'how much study gap accepted in UK for masters',
    'second masters in UK after PSW',
    'sage roots international london',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sage Roots International | Best Study Abroad Consultancy in the World (sageroots)',
    description:
      'Official London-headquartered study abroad consultancy (sageroots international). 100% free university applications, up to £10,000 scholarships, MOI without IELTS, and London job placement.',
    url: 'https://www.sagerootsinternational.co.uk',
    siteName: 'Sage Roots International',
    images: [
      {
        url: '/images/sri-logo.jpg',
        width: 800,
        height: 800,
        alt: 'Sage Roots International - sageroots international study abroad',
      },
    ],
  },
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSlider />

      {/* 2. What You Need - Animated Requirements Push Slider */}
      <RequirementsPushSlider />

      {/* 3. Official UK University Partner Strip */}
      <UniversityMarquee />

      {/* 4. Study Destinations */}
      <FeaturedDestinations />

      {/* 5. UK Intake Calendar & Application Deadlines */}
      <IntakeCalendar />

      {/* 6. Interactive UK Eligibility & Scholarship Calculator */}
      <EligibilityChecker />

      {/* 7. Pre-CAS Credibility Interview, MOI & Document Guide */}
      <PreCasMoiGuide />

      {/* 8. Step-by-Step UK Application & Visa Roadmap */}
      <VisaRoadmap />

      {/* 9. Promo editorial banner */}
      <PromoBanner />

      {/* 10. University Marketplace */}
      <UniversityMarketplace />

      {/* 11. Study by Subject */}
      <StudyBySubject />

      {/* 12. Services */}
      <ServicesSection />

      {/* 13. Foundation Pathways */}
      <FoundationPathways />

      {/* 14. Verified Student Visa Case Studies */}
      <SuccessStories />

      {/* 15. Interactive UKVI 28-Day Bank Statement Calculator */}
      <BankCalculator />

      {/* 16. Official Daily Facebook Page Posts & SEO Feed */}
      <LatestFacebookPosts />

      {/* 17. Interactive UK Study & Visa FAQ */}
      <FAQSection />

      {/* 18. Free Consultation Form */}
      <ConsultationForm />
    </>
  )
}
