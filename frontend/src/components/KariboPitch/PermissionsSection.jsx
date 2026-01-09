import React, { useEffect, useRef, useState } from 'react';
import { permissionsData } from '../../data/mock';
import { FileCheck, Shield, AlertCircle } from 'lucide-react';

const PermissionsSection = () => {
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
      id="permissions" 
      ref={sectionRef}
      className="bg-[#f6f5e8] py-32"
    >
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.2em] text-[#8b3a4c] uppercase mb-4 block">Compliance</span>
          <h2 className="text-4xl md:text-5xl font-light text-[#333333] mb-6">Permissions & Approvals</h2>
          <p className="text-lg text-[#666666] max-w-3xl mx-auto leading-relaxed">
            {permissionsData.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {permissionsData.permissions.map((permission, index) => (
            <div 
              key={index}
              className={`group bg-[#fffef2] border border-[#bcbbb4]/30 p-8 transition-all duration-500 hover:border-[#8b3a4c]/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#8b3a4c]/10 rounded-sm">
                  {permission.required ? (
                    <Shield className="w-5 h-5 text-[#8b3a4c]" strokeWidth={1.5} />
                  ) : (
                    <FileCheck className="w-5 h-5 text-[#666666]" strokeWidth={1.5} />
                  )}
                </div>
                {permission.required ? (
                  <span className="text-xs tracking-wider text-[#8b3a4c] uppercase bg-[#8b3a4c]/10 px-2 py-1">Required</span>
                ) : (
                  <span className="text-xs tracking-wider text-[#666666] uppercase bg-[#666666]/10 px-2 py-1">Optional</span>
                )}
              </div>
              
              <h3 className="text-lg font-medium text-[#333333] mb-2">
                {permission.title}
              </h3>
              <p className="text-sm text-[#8b3a4c] mb-3">
                {permission.authority}
              </p>
              <p className="text-sm text-[#666666] leading-relaxed">
                {permission.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`mt-12 p-6 bg-[#fffef2] border border-[#bcbbb4]/30 flex items-start gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <AlertCircle className="w-6 h-6 text-[#8b3a4c] flex-shrink-0" strokeWidth={1.5} />
          <p className="text-sm text-[#666666] leading-relaxed">
            <span className="font-medium text-[#333333]">Note:</span> Our team handles all permission applications and liaisons with authorities. Timeline for approvals typically ranges from 7-14 days prior to the event date.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PermissionsSection;
