import { 
  FaCalendarAlt, 
  FaLaptop, 
  FaCertificate, 
  FaComments, 
  FaBook, 
  FaChartLine,
  
} from 'react-icons/fa';


const WhatYouGetSection: React.FC = () => {

  const benefits = [
    {
      icon: FaCalendarAlt,
      iconColor: 'text-orange-500',
      title: 'Real Projects with Monthly Pay',
      description: 'Work on actual client projects with guaranteed monthly payments.'
    },
    {
      icon: FaLaptop,
      iconColor: 'text-orange-500',
      title: 'Mentor Feedback on Every Task',
      description: 'Get professional guidance to improve your skills with each project.'
    },
    {
      icon: FaCertificate,
      iconColor: 'text-red-500',
      title: 'Legal Contracts (Elite only)',
      description: 'Professional legal protection for your freelance work.'
    },
    {
      icon: FaComments,
      iconColor: 'text-purple-500',
      title: 'Career & Client Growth',
      description: 'Build long-term relationships with clients and expand your network.'
    },
    {
      icon: FaBook,
      iconColor: 'text-orange-500',
      title: 'Verified Portfolio Access',
      description: 'Showcase your verified work experience to future clients'
    },
    {
      icon: FaChartLine,
      iconColor: 'text-pink-500',
      title: 'AI Resume & Profile Setup',
      description: 'Get professional help setting up your freelance profile.'
    }
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl text-left md:text-center md:text-5xl font-bold tracking-tight mb-14">What You Get</h2>
        <div className="grid gap-x-12 gap-y-12 md:grid-cols-3 text-left mb-10">
          {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <benefit.icon className={`w-4 h-4 text-orange-500`} />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 font-medium text-[1.125rem] leading-tight mb-1">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-[1rem] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
        </div>
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-md bg-slate-200/70 px-5 py-3 text-[13px] md:text-sm font-medium text-gray-800">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-slate-600"
              aria-hidden="true"
            >
              <path d="M12 2l3 7h7l-5.5 4.5L18 22l-6-4-6 4 1.5-8.5L2 9h7z" />
            </svg>
            <span className="font-bold">
              <span>Bonus:</span> Certificate of Freelance Readiness (Sirtifai Verified)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;