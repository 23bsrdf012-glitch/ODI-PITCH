import React, { useEffect, useRef, useState } from 'react';
import { agencyData } from '../../data/mock';
import { Lightbulb, Palette, Wrench, Users, Shield } from 'lucide-react';

const icons = [Lightbulb, Palette, Wrench, Users, Shield];

const AgencySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
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
      id="agency" 
      ref={sectionRef}
      className="bg-[#333333] py-32"
    >
      <div className="max-w-[1400px] mx-auto px-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-sm tracking-[0.2em] text-[#8b3a4c] uppercase mb-6 block">Our Role</span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.2] mb-6">
            {agencyData.headline}
            <br />
            <span className="text-[#d4a5a5]">{agencyData.headlineAccent}</span>
          </h2>
          
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            {agencyData.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agencyData.services.map((service, index) => {
            const Icon = icons[index];
            const isExpanded = expandedIndex === index;
            
            return (
              <div 
                key={index}
                className={`group bg-white/5 border border-white/10 p-8 transition-all duration-500 hover:bg-white/10 hover:border-[#8b3a4c]/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#8b3a4c]/20 flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#d4a5a5]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium text-white pt-2">
                    {service.name}
                  </h3>
                </div>
                
                <p className="text-sm text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgencySection;
