import React from 'react';
import { icArrowRight } from '../../../assets';

const Content = () => {
  return (
    <div className="flex flex-col items-center text-center mx-auto container px-4 xl:px-0">
      <h1 className="font-bold xl:text-7xl">
        <span className=" bg-gradient-to-br from-text-color-palette-1 to-text-color-palette-2 text-transparent bg-clip-text">
          Smart Choices
        </span>{' '}
        <span className="block text-white">For Your Business Growth</span>
      </h1>
      <h2 className="text-gray-400 xl:mt-6 xl:mb-14">
        We're a team of experienced designers, developers,
        <span className="block">
          and marketers, passionate about delivering exceptional digital
          solutions.
        </span>
      </h2>
      <button className="flex flex-row items-center bg-gradient-to-br from-text-color-palette-1 to-text-color-palette-2 rounded-full text-lg font-medium xl:px-8 xl:py-5">
        Contack Us
        <img src={icArrowRight} className="ml-2" alt="iconArrowRight" />
      </button>
    </div>
  );
};

export default Content;
