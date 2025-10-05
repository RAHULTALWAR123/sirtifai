import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
// import { ContactSupportSection } from "../../components/sections/ContactSupportSection";
// import CtaBand from "@/components/sections/investors_page/cta-band";
import HeroSection from "@/components/sections/investors_page/hero-section";
import JobTech from "@/components/sections/investors_page/jobtech";

// import VisionMissionSection from "@/components/sections/drop_i_india/vision-mission";

export default function ContactPage() {
  return (
    <div className="bg-[#fff] font-sans min-h-screen overflow-x-hidden">
      {/* <h1>hello</h1> */}
      <Header />
      <HeroSection />
      {/* <PrimeInvestor /> */}
      <JobTech />
      {/* <IndustryApplications />
      <InnovationInAction />
      <LogoMarquee /> */}

      {/* <CtaBand /> */}

      <Footer />
    </div>
  );
}
