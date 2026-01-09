import React, { useEffect, useRef, useState } from 'react';
import { pricingTiers, pricingNote } from '../../data/mock';
import { Check } from 'lucide-react';

const PricingSection = () => {
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
      id="investment" 
      ref={sectionRef}
      className="bg-[#fffef2] py-32"
    >
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="text-center mb-20">
          <span className="text-sm tracking-[0.2em] text-[#8b3a4c] uppercase mb-4 block">Investment</span>
          <h2 className="text-4xl md:text-5xl font-light text-[#333333] mb-6">Experience Tiers</h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            {pricingNote}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index}
              className={`group relative bg-white border border-[#bcbbb4]/30 p-10 transition-all duration-500 hover:border-[#8b3a4c]/30 hover:shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${index === 1 ? 'lg:-mt-4 lg:mb-4' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8b3a4c] text-white text-xs tracking-wider px-4 py-1 uppercase">
                  Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-medium text-[#333333] mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-[#666666]">
                  {tier.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-light text-[#333333]">{tier.price}</span>
              </div>

              <div className="space-y-4">
                {tier.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#8b3a4c] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-sm text-[#666666]">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full mt-10 py-4 border border-[#333333] text-[#333333] text-sm font-medium tracking-wider uppercase hover:bg-[#333333] hover:text-white transition-all duration-300">
                Select Tier
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
