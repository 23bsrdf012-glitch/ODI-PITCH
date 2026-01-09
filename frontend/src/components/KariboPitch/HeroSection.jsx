import React from 'react';
import { heroData, brandData } from '../../data/mock';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToNext = () => {
    const element = document.getElementById('problem');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Pink Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroData.image} 
          alt="Carter Road Activation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#8b3a4c]/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#8b3a4c]/20 via-transparent to-[#333333]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-10 max-w-4xl mx-auto">
        <div className="mb-6 animate-fadeIn">
          <span className="text-sm tracking-[0.3em] text-white/80 uppercase">
            A Proposal by {brandData.agencyName}
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 tracking-tight leading-[1.1] animate-slideUp">
          {heroData.headline}
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 font-light mb-4 animate-slideUp animation-delay-200">
          {heroData.subheadline}
        </p>
        
        <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed animate-slideUp animation-delay-400">
          {heroData.description}
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 animate-slideUp animation-delay-600">
          <div className="flex items-center gap-6 text-sm text-white/60">
            <span>{brandData.campaign.location}</span>
            <span className="w-1 h-1 rounded-full bg-white/40"></span>
            <span>{brandData.campaign.duration}</span>
            <span className="w-1 h-1 rounded-full bg-white/40"></span>
            <span>{brandData.campaign.period}</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer group"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
