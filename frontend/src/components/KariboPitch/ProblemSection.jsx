import React, { useEffect, useRef, useState } from 'react';
import { problemData } from '../../data/mock';

const ProblemSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="problem" 
      ref={sectionRef}
      className="min-h-screen bg-[#fffef2] flex items-center py-32"
    >
      <div className="max-w-[1400px] mx-auto px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Problem Points */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-2">
              {problemData.points.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 py-4 border-b border-[#bcbbb4]/50"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#8b3a4c]"></span>
                  <span className="text-lg text-[#666666]">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Headline */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#333333] leading-[1.2] mb-8">
              {problemData.headline}
              <br />
              <span className="text-[#8b3a4c]">{problemData.headlineAccent}</span>
            </h2>
            
            <p className="text-lg text-[#666666] leading-relaxed max-w-lg">
              {problemData.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
