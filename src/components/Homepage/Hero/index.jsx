import React from 'react';
import { imgOrnamentBox, icArrowRight2 } from '../../../assets';
import Banner from './Banner';

const Hero = () => {
  return (
    <div
      className="bg-[#0C111F] text-white relative w-full h-full px-6 pt-28 pb-[58px] xl:pt-24 xl:pb-24"
      style={{ backgroundImage: `url(${imgOrnamentBox})` }}
    >
      <div className="container mx-auto flex flex-col text-center items-center">
        <h1 className="bg-white/10 rounded-full font-medium py-2 px-3 text-[10px] mb-2 xl:py-3 xl:px-4 xl:text-sm">
          NUMBER ONE CREATIVE DIGITAL AGENCY
        </h1>
        <h2 className="font-bold text-4xl xl:text-7xl">
          <span className=" bg-gradient-to-br from-text-color-palette-1 to-text-color-palette-2 text-transparent bg-clip-text">
            Smart Choices
          </span>{' '}
          <span className="block text-white">For Your Business Growth</span>
        </h2>
        <h3 className="text-gray-400 mt-[14px] mb-10 text-sm xl:mt-6 xl:mb-14">
          We're a team of experienced designers, developers,
          <span className=" inline xl:block">
            and marketers, passionate about delivering exceptional digital
            solutions.
          </span>
        </h3>
        <button className="flex flex-row items-center bg-gradient-to-br from-text-color-palette-1 to-text-color-palette-2 rounded-full  font-medium py-4 px-6 gap-2 mb-14 xl:text-lg xl:px-8 xl:py-5">
          Contack Us
          <img
            src={icArrowRight2}
            className="w-6 h-6 text-white xl:w-10 xl:h-10"
            alt="iconArrowRight"
          />
        </button>
        <Banner />
      </div>
    </div>
  );
};

export default Hero;
