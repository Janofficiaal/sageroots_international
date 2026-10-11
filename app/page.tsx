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
