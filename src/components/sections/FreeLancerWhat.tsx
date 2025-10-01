import React from "react";

type InfoCard = { title: string; content: string };

const cardData: InfoCard[] = [
  {
    title: "Income from Month 1",
    content: "Start earning from your very first month in the programme.",
  },
  {
    title: "Deel™ Payroll Integration",
    content: "Professional payroll system for reliable monthly payments.",
  },
  {
    title: "Legal & Tax Compliant",
    content: "All work is legally documented and tax-compliant.",
  },
  {
    title: "Real Clients, Not Just Gig",
    content: "Work with established businesses on meaningful projects.",
  },
];

const FreeLancerWhat: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          What Is The PGCAP?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Sirtifai&apos;s PGCAP is a structured platform for freelancers, freshers, and career restarters to earn verified income through real projects while gaining mentorship, legal protection, and long-term client access.
        </p>

        {/* FIX: use responsive grid instead of flex-nowrap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((c) => (
            <Card key={c.title} title={c.title} content={c.content} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Reusable card component
interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow px-6 py-7 flex flex-col text-left min-h-[170px]">
    <span className="inline-flex items-center justify-center w-6 h-6 bg-orange-500 rounded-full text-white mb-4">
      <svg
        width="14"
        height="14"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 10l3 3 7-7" />
      </svg>
    </span>
    <h3 className="font-semibold text-lg mb-2 leading-snug">{title}</h3>
    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
      {content}
    </p>
  </div>
);

export default FreeLancerWhat;
