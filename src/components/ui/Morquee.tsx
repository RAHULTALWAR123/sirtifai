/* eslint-disable @next/next/no-img-element */
import React from 'react'

export const Morquee = ({logos}: {logos: string[]}) => {
  return (
    <div className="w-full overflow-hidden bg-white ">
      <div className="py-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First set of logos */}
          {logos.map((src, i) => (
            <div key={`first-${i}`} className="flex items-center justify-center flex-shrink-0 mx-12">
              <img 
                src={src} 
                alt={`Partner ${i + 1}`} 
                className="h-20 w-auto opacity-80 object-contain" 
                style={{
                  mixBlendMode: 'multiply',
                  backgroundColor: 'transparent',
                  filter: 'contrast(1.2) brightness(1.1) saturate(1.2)',
                  WebkitFilter: 'contrast(1.2) brightness(1.1) saturate(1.2)',
                  isolation: 'isolate'
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {logos.map((src, i) => (
            <div key={`second-${i}`} className="flex items-center justify-center flex-shrink-0 mx-12">
              <img 
                src={src} 
                alt={`Partner ${i + 1}`} 
                className="h-20 w-auto opacity-80 object-contain" 
                style={{
                  mixBlendMode: 'multiply',
                  backgroundColor: 'transparent',
                  filter: 'contrast(1.2) brightness(1.1) saturate(1.2)',
                  WebkitFilter: 'contrast(1.2) brightness(1.1) saturate(1.2)',
                  isolation: 'isolate'
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}