import React from 'react';
import ArchievenmentItem from './ArchievementItem';
import Hero from './Hero';
import OurWorks from './OurWorks';
import ServiceItem from './ServiceItem';
import TruestedItem from './TruestedItem';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ServiceItem />
      <ArchievenmentItem />
      <OurWorks />
      <TruestedItem />
    </>
  );
};

export default HomePage;
