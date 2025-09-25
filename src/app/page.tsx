import { Header } from "../components/layout/Header"
import { Footer } from "../components/layout/Footer"

import { HeroSection } from "../components/sections/HeroSection"
import { AboutSection } from "../components/sections/AboutSection"
import { ProgramTracksSection } from "../components/sections/ProgramTracksSection"
import { SuccessStoriesSection } from "../components/sections/SuccessStoriesSection"
import { CertificationsSection } from "../components/sections/CertificationsSection"
import { PartnersSection } from "../components/sections/PartnersSection"
import { PartnersRecognitionSection } from "../components/sections/PartnersRecognitionSection"
import { ImpactNumbersSection } from "../components/sections/ImpactNumbersSection"

export default function HomePage() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProgramTracksSection />
      <SuccessStoriesSection />
      <CertificationsSection />
      <PartnersSection />
      <PartnersRecognitionSection />
      <ImpactNumbersSection />
      <Footer />
    </div>
  )
}
