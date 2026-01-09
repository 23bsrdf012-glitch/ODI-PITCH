import React from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import ProblemSection from './ProblemSection';
import IdeaSection from './IdeaSection';
import ExperienceJourneySection from './ExperienceJourneySection';
import StrategySection from './StrategySection';
import AgencySection from './AgencySection';
import PricingSection from './PricingSection';
import PermissionsSection from './PermissionsSection';
import ClosingSection from './ClosingSection';
import Footer from './Footer';

const KariboPitchPage = () => {
  return (
    <div className="min-h-screen bg-[#fffef2]">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <IdeaSection />
        <ExperienceJourneySection />
        <StrategySection />
        <AgencySection />
        <PricingSection />
        <PermissionsSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
};

export default KariboPitchPage;
