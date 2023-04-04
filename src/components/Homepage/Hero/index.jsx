import React from 'react';
import { Navbar } from '../../index';
import Caption from './Caption';
import Content from './Content';
import { imgOrnamentBox } from '../../../assets';
import Banner from './Banner';

const Hero = () => {
  return (
    <div
      className="bg-[#0C111F] text-white relative w-full h-full xl:pb-24"
      style={{ backgroundImage: `url(${imgOrnamentBox})` }}
    >
      <Caption />
      <Content />
      <Banner />
    </div>
  );
};

export default Hero;
