import React from 'react';
import { brandData } from '../../data/mock';

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fffef2]/95 backdrop-blur-sm border-b border-[#bcbbb4]">
      <div className="max-w-[1400px] mx-auto px-10 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={brandData.logoUrl} 
            alt="Karibo" 
            className="h-10 w-auto object-contain"
          />
          <span className="text-xs text-[#666666] tracking-wider uppercase">× {brandData.agencyName}</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('hero')}
            className="nav-link text-sm text-[#333333] hover:text-[#000000] transition-colors relative group"
          >
            Overview
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#333333] transition-all duration-500 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="nav-link text-sm text-[#333333] hover:text-[#000000] transition-colors relative group"
          >
            Experience
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#333333] transition-all duration-500 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('strategy')}
            className="nav-link text-sm text-[#333333] hover:text-[#000000] transition-colors relative group"
          >
            Strategy
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#333333] transition-all duration-500 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => scrollToSection('investment')}
            className="nav-link text-sm text-[#333333] hover:text-[#000000] transition-colors relative group"
          >
            Investment
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#333333] transition-all duration-500 group-hover:w-full"></span>
          </button>
        </div>

        <div className="text-xs text-[#666666] tracking-wider uppercase hidden lg:block">
          Pitch Deck
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
