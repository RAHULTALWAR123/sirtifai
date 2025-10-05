import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
// import { ContactSupportSection } from "../../components/sections/ContactSupportSection";
import CtaBand from "@/components/sections/drop_i_india/cta-band";
import HeroSection from "@/components/sections/drop_i_india/hero-section";
import ImpactActions from "@/components/sections/drop_i_india/impact-actions";
import VisionMissionSection from "@/components/sections/drop_i_india/vision-mission";

export default function ContactPage() {
  return (
    <div className="bg-[#fff] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <VisionMissionSection />

      {/* <QuoteHighlight /> */}
      <ImpactActions />
      {/* <NewsletterCard /> */}
      
      <CtaBand />
      
      <Footer />
    </div>
  );
}
