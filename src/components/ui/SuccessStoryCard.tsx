/* eslint-disable @next/next/no-img-element */
// import { Play } from 'lucide-react';
import type { SuccessStory } from '../../types';
import { FaPlay } from 'react-icons/fa';

interface SuccessStoryCardProps {
  story: SuccessStory;
}

export const SuccessStoryCard = ({ story }: SuccessStoryCardProps) => {
  return (
    <div className="bg-[#FEF7F1] rounded-2xl py-6 px-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full lg:h-[384px]">
      {/* Location Tag */}
      <div className="flex justify-end mb-4">
        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
          {story.location}
        </span>
      </div>

      {/* Image with Play Button Overlay */}
      <div className="relative mb-6">
        <img 
          src="/assets/success.jpg" 
          alt={story.name}
          className="w-full h-[125px] object-cover rounded-xl"
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200">
            <FaPlay size={24} className="text-black ml-1" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4">
        <h4 className="text-xl font-bold text-gray-900">{story.name}</h4>
        <p className="text-gray-600 text-sm leading-relaxed italic">
          &quot;{story.quote}&quot;
        </p>
        <p className="text-gray-500 text-xs font-medium">
          {story.designation}
        </p>
      </div>
    </div>
  );
};
