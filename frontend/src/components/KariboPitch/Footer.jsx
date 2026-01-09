import React from 'react';
import { brandData } from '../../data/mock';

const Footer = () => {
  return (
    <footer className="bg-[#333333] border-t border-white/10 py-12">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img 
              src={brandData.logoUrl} 
              alt="Karibo" 
              className="h-8 w-auto object-contain brightness-0 invert opacity-80"
            />
            <span className="text-xs text-white/50 tracking-wider uppercase">× {brandData.agencyName}</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-white/50">
              A proposal by {brandData.agencyName}
            </p>
            <p className="text-xs text-white/30 mt-1">
              © 2025 {brandData.agencyName}. Confidential.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
