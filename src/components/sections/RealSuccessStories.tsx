/* eslint-disable @next/next/no-img-element */
'use client';

interface SuccessStory {
  id: string;
  name: string;
  location: string;
  jobTitle: string;
  country: string;
  image: string;
}

const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'anand-prakash',
    name: 'Anand Prakash',
    location: 'From Hyderabad to Berlin',
    jobTitle: 'Software Developer',
    country: 'Germany',
    image: '/assets/international/1789.png'
  },
  {
    id: 'sneha-reddy',
    name: 'Sneha Reddy',
    location: 'From Bangalore to San Francisco',
    jobTitle: 'UX Designer',
    country: 'USA',
    image: '/assets/international/1789.png'
  },
  {
    id: 'ravi-kumar',
    name: 'Ravi Kumar',
    location: 'From Chennai to Toronto',
    jobTitle: 'Data Scientist',
    country: 'Canada',
    image: '/assets/international/1789.png'
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    location: 'From Pune to Sydney',
    jobTitle: 'DevOps Engineer',
    country: 'Australia',
    image: '/assets/international/1789.png'
  }
];

export const RealSuccessStories = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold text-gray-900 mb-4">
            Real Success Stories
          </h2>
        </div>

        {/* Mobile: Horizontal Scroll, Desktop: Grid */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible">
          {SUCCESS_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow overflow-hidden flex-shrink-0 w-72 snap-start md:w-auto"
            >
              {/* Image with Overlay */}
              <div className="relative h-48 bg-gray-200">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />

                {/* Fallback if image fails to load */}
                <div className=" w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-500 rounded-full mx-auto mb-2"></div>
                    <p className="text-gray-600 text-sm">Success Story</p>
                  </div>
                </div>

                {/* Country Overlay */}
                <div className="absolute top-3 left-3">
                  <span className="bg-white bg-opacity-90 text-gray-900 px-2 py-1 rounded text-sm font-medium">
                    {story.country}
                  </span>
                </div>

                {/* Job Title Button */}
                <div className="absolute bottom-3 right-3">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-medium">
                    {story.jobTitle}
                  </span>
                </div>
              </div>

              {/* Story Details */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{story.name}</h3>
                <p className="text-gray-600 text-sm">{story.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
