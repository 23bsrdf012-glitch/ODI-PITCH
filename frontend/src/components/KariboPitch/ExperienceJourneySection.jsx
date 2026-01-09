import React, { useEffect, useRef, useState } from 'react';
import { experienceJourney } from '../../data/mock';

const ExperienceJourneySection = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = document.querySelectorAll('.journey-item');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="bg-[#fffef2] py-32"
    >
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="text-center mb-20">
          <span className="text-sm tracking-[0.2em] text-[#8b3a4c] uppercase mb-4 block">The Journey</span>
          <h2 className="text-4xl md:text-5xl font-light text-[#333333]">The Experience Flow</h2>
        </div>

        <div className="space-y-32">
          {experienceJourney.map((item, index) => (
            <div 
              key={item.id}
              data-index={index}
              className={`journey-item grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                {item.useLogo ? (
                  // Special styling for Discovery section with logo
                  <div className="aspect-[4/3] bg-[#8b3a4c] flex items-center justify-center overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-2/3 h-auto object-contain"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}
                <div className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center bg-[#8b3a4c] text-white text-lg font-light">
                  {String(item.id).padStart(2, '0')}
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}`}>
                <h3 className="text-3xl md:text-4xl font-light text-[#333333] mb-6">
                  {item.title}
                </h3>
                <p className="text-xl text-[#666666] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceJourneySection;
