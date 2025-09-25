import dynamic from 'next/dynamic';
import { Header } from "../components/layout/Header"
import { Footer } from "../components/layout/Footer"
import { CardSkeleton } from "../components/ui/OptimizedImage"

// Lazy load heavy components with loading states
const HeroSection = dynamic(() => import("../components/sections/HeroSection").then(mod => ({ default: mod.HeroSection })), {
  loading: () => <CardSkeleton />,
  ssr: true
});

const ProgramTracksSection = dynamic(() => import("../components/sections/ProgramTracksSection").then(mod => ({ default: mod.ProgramTracksSection })), {
  loading: () => <CardSkeleton />,
  ssr: true
});

const SuccessStoriesSection = dynamic(() => import("../components/sections/SuccessStoriesSection").then(mod => ({ default: mod.SuccessStoriesSection })), {
  loading: () => <CardSkeleton />,
  ssr: true
});

const CertificationsSection = dynamic(() => import("../components/sections/CertificationsSection").then(mod => ({ default: mod.CertificationsSection })), {
  loading: () => <CardSkeleton />,
  ssr: true
});

const PartnersSection = dynamic(() => import("../components/sections/PartnersSection").then(mod => ({ default: mod.PartnersSection })), {
  loading: () => <CardSkeleton />,
  ssr: true
});

const PartnersRecognitionSection = dynamic(() => import("../components/sections/PartnersRecognitionSection").then(mod => ({ default: mod.PartnersRecognitionSection })), {
  loading: () => <CardSkeleton />,
  ssr: true
});

const ImpactNumbersSection = dynamic(() => import("../components/sections/ImpactNumbersSection").then(mod => ({ default: mod.ImpactNumbersSection })), {
  loading: () => <CardSkeleton />,
  ssr: true
});

// Keep lightweight components as regular imports
import { AboutSection } from "../components/sections/AboutSection"

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
