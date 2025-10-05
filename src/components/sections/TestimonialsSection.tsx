import { Star, ArrowRight } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  program: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'vikram',
    name: 'Vikram Desai',
    title: 'Data Scientist at TechCorp',
    quote: 'The structured approach of SPP helped me transition from a non-tech background to a data science role. The practice phase was invaluable in building my portfolio and confidence.',
    program: 'SPP International'
  },
  {
    id: 'meera',
    name: 'Meera Patel',
    title: 'UI/UX Designer',
    quote: 'After a 3-year career break, I was worried about re-entering the workforce. The Domestic Freelancer program helped me update my skills and build a new portfolio while earning from home.',
    program: 'SPP Domestic Freelancer'
  },
  {
    id: 'arjun',
    name: 'Arjun Reddy',
    title: 'Software Engineer',
    quote: 'Coming from a tier-3 city, I never thought I\'d get opportunities with global companies. Sirtifai\'s SPP program bridged that gap and helped me land a job that I could only dream of.',
    program: 'SPP Freshers Track'
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-0">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="w-[230px] sm:w-[610px] h-9 text-center text-nowrap mx-auto justify-center text-zinc-900 text-2xl sm:text-6xl  font-semibold font-['Open Sans'] capitalize leading-[80px] mb-18">
            What Our Learners Say
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from those who have transformed their careers through our programs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              {/* Name and Title */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {testimonial.title}
                </p>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Star Rating and Program */}
              <div className="flex sm:flex-row flex-col gap-1 items-start sm:items-center justify-between">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className="text-orange-500 fill-current"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {testimonial.program}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation and Call to Action */}
        <div className="flex justify-end items-center gap-4">
          <button className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg">
            View More
          </button>
          <button className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors shadow-md">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
