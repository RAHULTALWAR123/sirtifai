import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import { InternationalHeroSection } from "../../components/sections/InternationalHeroSection"
import { GlobalCareerRoadmap } from "../../components/sections/GlobalCareerRoadmap"
import { ComprehensiveVisaSupport } from "../../components/sections/ComprehensiveVisaSupport"
import { SuccessStoryCTABanner } from "../../components/sections/SuccessStoryCTABanner"
import { SuccessStoriesSection } from "../../components/sections/SuccessStoriesSection"
import PricingInterface from "@/components/sections/international/pricing-interface"

export default function SirtifyInternationalPage() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <InternationalHeroSection />
      <GlobalCareerRoadmap />
      {/* <InternationalPricingPlans /> */}
      <PricingInterface />
      <ComprehensiveVisaSupport />
      {/* <RealSuccessStories /> */}
      <SuccessStoriesSection />
      {/* <OptionalAddOns /> */}
      <SuccessStoryCTABanner />
      <Footer />
    </div>
  )
}
