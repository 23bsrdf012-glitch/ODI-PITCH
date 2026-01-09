import React, { useEffect, useRef, useState } from 'react';
import { agencyData } from '../../data/mock';
import { ArrowRight } from 'lucide-react';

const AgencySection = () => {
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
      id="agency" 
      ref={sectionRef}
      className="bg-[#333333] py-32"
    >
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Headline */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="text-sm tracking-[0.2em] text-[#8b3a4c] uppercase mb-6 block">Our Role</span>
            
            <h2 className="text-4xl md:text-5xl font-light text-white leading-[1.2] mb-6">
              {agencyData.headline}
              <br />
              <span className="text-[#d4a5a5]">{agencyData.headlineAccent}</span>
            </h2>
            
            <p className="text-lg text-white/70 leading-relaxed">
              {agencyData.description}
            </p>
          </div>

          {/* Right - Services */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-0">
              {agencyData.services.map((service, index) => (
                <div 
                  key={index}
                  className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-[#8b3a4c]/50 transition-colors cursor-default"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="text-xl text-white/80 group-hover:text-white transition-colors">
                    {service}
                  </span>
                  <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-[#8b3a4c] group-hover:translate-x-2 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencySection;
