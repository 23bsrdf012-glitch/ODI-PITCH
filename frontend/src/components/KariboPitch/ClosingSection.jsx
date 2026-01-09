import React from 'react';
import { closingData, brandData } from '../../data/mock';

const ClosingSection = () => {
  return (
    <section 
      id="closing" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={closingData.image} 
          alt="Evening Activation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 via-[#333333]/50 to-[#333333]/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-[1.1]">
          {closingData.headline}
          <br />
          <span className="text-[#d4a5a5]">{closingData.headlineAccent}</span>
        </h2>
        
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-12">
          {closingData.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-10 py-4 bg-transparent border border-white text-white text-sm font-medium tracking-wider uppercase hover:bg-white hover:text-[#333333] transition-all duration-300">
            Let's Talk
          </button>
          <button className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white text-sm font-medium tracking-wider uppercase hover:bg-white/20 transition-all duration-300">
            Download Proposal
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
