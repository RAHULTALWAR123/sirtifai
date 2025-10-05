/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ExternalLink, Share2 } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

const MediaLogo = ({ name, logo, description, category }:any) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
      <div className="text-center space-y-4">
        <div className="h-16 flex items-center justify-center">
          {/* <div className="text-2xl font-bold text-gray-800 group-hover:text-[#ff7847] transition-colors">
            {logo}
          </div> */}
          <img src={logo} alt={`${name} logo`} className="max-h-12 object-contain" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 group-hover:text-[#ff7847] transition-colors">
            {name}
          </h3>
          {/* {category && (
            <span className="text-xs text-gray-500 uppercase tracking-wider">{category}</span>
          )} */}
        </div>
      </div>
    </Card>
  );
};

const MediaPartnersSection = () => {
  const mediaOutlets = [
    // Row 1
    { name: "abp News", logo: "/assets/media-campaign/businesstoday.png", category: "News" },
    { name: "CXO today", logo: "/assets/media-campaign/cxotoday.png", category: "Business" },
    { name: "Deccan Chronicle", logo: "/assets/media-campaign/deccan.png", category: "News" },
    { name: "DNA", logo: "/assets/media-campaign/dna.png", category: "News" },
    { name: "Economic Times", logo: "/assets/media-campaign/tet.png", category: "Business" },
    { name: "Good Returns", logo: "/assets/media-campaign/good.png", category: "Finance" },
    
    // Row 2
    { name: "ET Now", logo: "/assets/media-campaign/etnow.png", category: "Business TV" },
    { name: "ET CIO", logo: "/assets/media-campaign/cto.png", category: "Tech" },
    { name: "ET Government", logo: "/assets/media-campaign/etgov.png", category: "Policy" },
    { name: "ET CISO", logo: "/assets/media-campaign/ciso.png", category: "Security" },
    { name: "Financial Express", logo: "/assets/media-campaign/financial.png", category: "Finance" },
    { name: "Money Control", logo: "/assets/media-campaign/moneycontrol.png", category: "Finance" },
    
    // Row 3
    { name: "HT Insights", logo: "/assets/media-campaign/hindustan.png", category: "Analysis" },
    { name: "Hans India", logo: "/assets/media-campaign/hans.png", category: "Regional" },
    { name: "India Today", logo: "/assets/media-campaign/indiatoday.png", category: "News" },
    { name: "India.com", logo: "/assets/media-campaign/india.png", category: "Digital" },
    { name: "Livemint", logo: "/assets/media-campaign/mint.png", category: "Business" },
    { name: "Austin America Statesman", logo: "/assets/media-campaign/aas.png", category: "News" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Press & Release
          </h2>
          <p className="text-lg text-gray-600">
           Moments that capture the journey from learning to earning.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {mediaOutlets.map((outlet, index) => (
            <MediaLogo
              key={index}
              name={outlet.name}
              logo={outlet.logo}
              category={outlet.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaPartnersSection;
