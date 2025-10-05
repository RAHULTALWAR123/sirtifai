/* eslint-disable @next/next/no-img-element */
import { Check, FileText, Euro, Building } from 'lucide-react';

interface VisaService {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  services: string[];
}

interface TargetCountry {
  id: string;
  name: string;
  image: string;
}

const VISA_SERVICES: VisaService[] = [
  {
    id: 'h1b',
    title: 'H1B Visa (USA)',
    description: 'Work visa for specialty occupations in the United States.',
    icon: FileText,
    services: [
      'Documentation preparation',
      'Employer sponsorship guidance',
      'Interview preparation'
    ]
  },
  {
    id: 'eu-blue-card',
    title: 'EU Blue Card',
    description: 'Work permit for highly skilled non-EU nationals in European Union countries.',
    icon: Euro,
    services: [
      'Country-specific requirements',
      'Qualification verification',
      'Application submission assistance'
    ]
  },
  {
    id: 'ict',
    title: 'ICT Visa (Intra-Company Transfer)',
    description: 'Intra-Company Transfer visa for employees of multinational companies.',
    icon: Building,
    services: [
      'Company documentation',
      'Employment verification',
      'Transfer justification support'
    ]
  }
];

const TARGET_COUNTRIES: TargetCountry[] = [
  { id: 'usa', name: 'U.S.A.', image: '/assets/international/unitedstates.jpg' },
  { id: 'germany', name: 'Germany', image: '/assets/international/germany.jpg' },
  { id: 'canada', name: 'Canada', image: '/assets/international/canada.jpg' },
  { id: 'australia', name: 'Australia', image: '/assets/international/australia.jpg' },
  { id: 'uk', name: 'UK', image: '/assets/international/unitedkingdom.jpg' },
  { id: 'singapore', name: 'Singapore', image: '/assets/international/singapore.jpg' },
  { id: 'netherlands', name: 'Netherlands', image: '/assets/international/netherlands.jpg' },
  { id: 'sweden', name: 'Sweden', image: '/assets/international/sweden.jpg' }
];

export const ComprehensiveVisaSupport = () => {
  return (
    <>
      <style>{`
        /* Mobile horizontal scroll for visa services */
        .visa-services-wrapper {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 1rem;
        }
        .visa-services-wrapper > div {
          flex: 0 0 85%;
          scroll-snap-align: center;
        }
        /* Hide scrollbar */
        .visa-services-wrapper::-webkit-scrollbar,
        .target-countries-wrapper::-webkit-scrollbar {
          display: none;
        }
        .visa-services-wrapper,
        .target-countries-wrapper {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        /* Tablet and up */
        @media (min-width: 768px) {
          .visa-services-wrapper {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            overflow-x: visible;
          }
          .visa-services-wrapper > div {
            flex: unset;
          }
        }
        @media (min-width: 1024px) {
          .visa-services-wrapper {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Mobile horizontal scroll for target countries */
        .target-countries-wrapper {
          display: flex;
          gap: 1rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 1rem;
        }
        .target-countries-wrapper > div {
          flex: 0 0 60%;
          scroll-snap-align: center;
        }
        @media (min-width: 768px) {
          .target-countries-wrapper {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
            overflow-x: visible;
          }
          .target-countries-wrapper > div {
            flex: unset;
          }
        }
      `}</style>

      <section className="w-full bg-[#FEF7F1] py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Visa Support Overview */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold sm:text-4xl sm:font-bold text-gray-900 mb-4">
              Comprehensive Visa Support
            </h2>
            <p className="sm:text-xl text:sm text-gray-600 max-w-3xl mx-auto">
              Our Elite plan includes complete visa support for your target country, ensuring a smooth transition to your international career.
            </p>
          </div>

          {/* Visa Services Cards */}
          <div className="visa-services-wrapper mb-20">
            {VISA_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon size={32} className="text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="space-y-3 mb-6">
                  {service.services.map((serviceItem, index) => (
                    <div key={index} className="flex items-center">
                      <Check size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{serviceItem}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-orange-500 text-sm font-medium">
                    Available with Elite plan or as an add-on service
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Target Countries */}
          <div className="hidden sm:block text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-12">
              Target Countries
            </h3>
            <div className="target-countries-wrapper">
              {TARGET_COUNTRIES.map((country) => (
                <div
                  key={country.id}
                  className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow text-center"
                >
                  <img
                    src={country.image}
                    alt={country.name}
                    className="mx-auto mb-3 w-16 h-16 object-cover rounded-full"
                  />
                  <h4 className="text-lg font-semibold text-gray-900">
                    {country.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
          {/* Mobile view */}
          {/* Countries List */}

<div className=" sm:hidden w-[88vw] inline-flex justify-center items-start gap-4 flex-wrap content-start">
<h3 className="text-3xl font-bold text-gray-900 mb-12">
              Target Countries
            </h3>
  {TARGET_COUNTRIES.map((country) => (

    <div

      key={country.id}

      className="w-24 px-4 py-3 bg-white rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.05)]  outline-1 outline-offset-[-1px] outline-gray-200 inline-flex flex-col justify-center items-center gap-1"

    >

      {/* Image */}

      <div className="pb-2 flex flex-col justify-start items-start overflow-hidden">

        <img

          src={country.image}

          alt={country.name}

          className="w-12 h-12 rounded-full border border-gray-200 object-cover"

        />

      </div>



      {/* Name */}

      <div className="py-0.5 inline-flex justify-center items-center">

        <span className="text-gray-800 text-base font-medium font-['Inter']">

          {country.name}

        </span>

      </div>

    </div>

  ))}

</div>
        </div>
      </section>
    </>
  );
};
