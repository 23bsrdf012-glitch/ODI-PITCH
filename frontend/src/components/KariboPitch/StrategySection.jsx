import React, { useEffect, useRef, useState } from 'react';
import { strategyPoints } from '../../data/mock';
import { Target, Users, Share2, RefreshCw, Gem } from 'lucide-react';

const icons = [Target, Users, Share2, RefreshCw, Gem];

const StrategySection = () => {
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
      id="strategy" 
      ref={sectionRef}
      className="bg-[#f6f5e8] py-32"
    >
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="text-center mb-20">
          <span className="text-sm tracking-[0.2em] text-[#8b3a4c] uppercase mb-4 block">The Strategy</span>
          <h2 className="text-4xl md:text-5xl font-light text-[#333333]">Why This Works</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {strategyPoints.map((point, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index}
                className={`group p-8 bg-[#fffef2] border border-[#bcbbb4]/30 hover:border-[#8b3a4c]/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <Icon className="w-8 h-8 text-[#8b3a4c] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium text-[#333333] mb-3">
                  {point.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
