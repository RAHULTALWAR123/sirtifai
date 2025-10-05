import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import TestimonialSection from "../../components/sections/TestimonialSection"
import WhoIsThisForSection from "../../components/sections/WhoIsThisForSection"
import WhatYouGetSection from "../../components/sections/WhatYouGetSection"

import BonusesSection from "../../components/sections/BonusesSection"
import FinalCTASection from "../../components/sections/FinalCTASection"
import FreeLancerWhat from "../../components/sections/FreeLancerWhat";
import PricingInterface from "@/components/sections/freelancer/pricing-interface";
import FreelncerHeroSection from "@/components/sections/freelancerHeroSection";
import { SuccessStoriesSection } from "../../components/sections/SuccessStoriesSection"

export default function FreelancerPage() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <FreelncerHeroSection />
      {/* <LandingFreelancer /> */}
      <FreeLancerWhat />
      <PricingInterface />
      {/* <PricingSection /> */}
      {/* <AddOnsSection /> */}
      <TestimonialSection />
      <WhoIsThisForSection />
      <WhatYouGetSection />
      {/* <TestimonialsSection /> */}
      <SuccessStoriesSection />
      <BonusesSection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}
