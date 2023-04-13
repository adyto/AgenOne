import React from 'react';
import ArchievenmentItem from './ArchievementItem';
import Hero from './Hero';
import OurWorks from './OurWorks';
import ServiceItem from './ServiceItem';
import Testimonials from './Testimonials';
import TruestedItem from './TruestedItem';
import { Footer, Navbar } from '../../components';

const HomePage = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      {/* <div className="py-96">123</div>
      <div className="py-96">123</div>
      <div className="py-96">123</div>
      <div className="py-96">123</div> */}

      <ServiceItem />
      <ArchievenmentItem />
      <OurWorks />
      <TruestedItem />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
