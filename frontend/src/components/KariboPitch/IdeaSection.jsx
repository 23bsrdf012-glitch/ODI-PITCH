import React, { useEffect, useRef, useState } from 'react';
import { ideaData } from '../../data/mock';

const IdeaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="idea" 
      ref={sectionRef}
      className="min-h-screen bg-[#f6f5e8] flex items-center py-32"
    >
      <div className="max-w-[1400px] mx-auto px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={ideaData.image} 
                alt="Karibo Experience Station" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#8b3a4c]/20 -z-10"></div>
          </div>

          {/* Right - Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-sm tracking-[0.2em] text-[#8b3a4c] uppercase mb-6 block">The Concept</span>
            
            <h2 className="text-4xl md:text-5xl font-light text-[#333333] leading-[1.2] mb-8">
              {ideaData.headline}
            </h2>
            
            <p className="text-lg text-[#666666] leading-relaxed">
              {ideaData.description}
            </p>

            <div className="mt-12 flex items-center gap-6">
              <div className="text-center">
                <span className="block text-3xl font-light text-[#333333]">3</span>
                <span className="text-sm text-[#666666]">Days</span>
              </div>
              <div className="w-px h-12 bg-[#bcbbb4]"></div>
              <div className="text-center">
                <span className="block text-3xl font-light text-[#333333]">1</span>
                <span className="text-sm text-[#666666]">Location</span>
              </div>
              <div className="w-px h-12 bg-[#bcbbb4]"></div>
              <div className="text-center">
                <span className="block text-3xl font-light text-[#333333]">∞</span>
                <span className="text-sm text-[#666666]">Memories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdeaSection;
