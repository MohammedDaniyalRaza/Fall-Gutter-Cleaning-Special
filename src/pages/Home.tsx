import React from 'react';
import { PageTransition } from '../components/layout/PageTransition';
import { AscentProcess } from '../components/home/AscentProcess';
import { BeforeAfter } from '../components/home/BeforeAfter';
import { CTABand } from '../components/home/CTABand';
import { FAQ } from '../components/home/FAQ';
import { Hero } from '../components/home/Hero';
import { ProblemHouse } from '../components/home/ProblemHouse';
import { SeasonCalendar } from '../components/home/SeasonCalendar';
import { ServiceAreaMap } from '../components/home/ServiceAreaMap';
import { ServiceRows } from '../components/home/ServiceRows';
import { Testimonials } from '../components/home/Testimonials';
import { Ticker } from '../components/home/Ticker';
import { WhyPeakline } from '../components/home/WhyPeakline';
import { FallSpecialSection } from '../components/promo/FallSpecialSection';

const Home: React.FC = () => {
  return (
    <PageTransition>
      <Hero />
      <Ticker />
      <FallSpecialSection />
      <ProblemHouse />
      <ServiceRows />
      <AscentProcess />
      <BeforeAfter />
      <SeasonCalendar />
      <WhyPeakline />
      <ServiceAreaMap />
      <Testimonials />
      <FAQ />
      <CTABand />
    </PageTransition>
  );
};

export default Home;
