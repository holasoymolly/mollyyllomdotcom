'use client';

import { Banner } from './Banner';
import { MediaSection } from './MediaSection';
import { Services } from './Services';
import { PortfolioGrid } from '../../../components/PortfolioGrid/PortfolioGrid';
import { QuoteBanner } from '../../../components/QuoteBanner';

export const Main = () => {
  return (
    <main className="bg-white">
      <Banner />
      <MediaSection />
      <PortfolioGrid />
      <Services />
      <QuoteBanner />
    </main>
  );
};