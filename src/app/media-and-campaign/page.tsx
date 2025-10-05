import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import IncomeTrackerWall from "../../components/media-campaign/IncomeTrackerWall";

import UpcomingWebinars from "../../components/media-campaign/UpcomingWebinars";
import CampusActivities from "../../components/media-campaign/CampusActivities";
import FooterCTA from "../../components/media-campaign/FooterCta";
import HeroSection from "@/components/media-campaign/HeroSection";
import MediaPartnersSection from "@/components/media-campaign/PressRelease";
import MediaPR from "@/components/media-campaign/MediaPR";

export default function MediaCampaignPage() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      {/* <FeaturedLearnerStories /> */}
      <IncomeTrackerWall />
      <MediaPartnersSection />
      {/* <SuccessGallery /> */}
      <UpcomingWebinars />
      <MediaPR />
      <CampusActivities />
      <FooterCTA />
      <Footer />
    </div>
  );
}
