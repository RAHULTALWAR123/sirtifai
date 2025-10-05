import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import { LearnersHeroSection } from "../../components/sections/LearnersHeroSection"
import { WhoCanJoinSection } from "../../components/sections/WhoCanJoinSection"
import { ToolsSection } from "../../components/sections/ToolsSection"
import { PortfolioCertificationSection } from "../../components/sections/PortfolioCertificationSection"
import { LearningJourneySection } from "../../components/sections/LearningJourneySection"

import { CTABannerSection } from "../../components/sections/CTABannerSection"
import { SuccessStoriesSection } from "../../components/sections/SuccessStoriesSection"

export default function LearnersPage() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <LearnersHeroSection />
      <WhoCanJoinSection />
      <ToolsSection />
      <PortfolioCertificationSection />
      <LearningJourneySection />
      <SuccessStoriesSection />
      {/* <TestimonialsSection /> */}
      <CTABannerSection />
      <Footer />
    </div>
  )
}
