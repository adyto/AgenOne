import React from 'react';
import ArchievenmentItem from './ArchievementItem';
import Hero from './Hero';
import OurWorks from './OurWorks';
import ServiceItem from './ServiceItem';
import Testimonials from './Testimonials';
import TruestedItem from './TruestedItem';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ServiceItem />
      <ArchievenmentItem />
      <OurWorks />
      <TruestedItem />
      <Testimonials />
    </>
  );
};

export default HomePage;
