import React from 'react';
import { imgService1, icArrowDown, icArrowRight } from '../../../assets';

const CardBanner = ({ handleClick, active, id, no, title, desc }) => {
  return (
    <div
      className="relative cursor-pointer bg-[#F8F8F8] tansition-[flex] duration-300 ease-out-flex px-[60px] py-[54px] rounded-3xl"
      onClick={() => handleClick(id)}
    >
      {active !== id ? (
        <div className="flex flex-row justify-between items-center ">
          <div className="flex flex-row gap-10 font-semibold xl:text-[32px]">
            <span>{no}</span>
            <span>{title}</span>
          </div>
          <img src={icArrowRight} alt="iconArrowRight" />
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-10 bg-gradient-to-br from-text-color-palette-1 to-text-color-palette-2 text-transparent bg-clip-text font-semibold xl:text-[32px]">
              <span>{no}</span>
              <span>{title}</span>
            </div>
            <img src={icArrowDown} alt="iconArrowDown" />
          </div>
          <div className="flex flex-col xl:ml-20">
            <p className="w-[70%] xl:text-lg xl:mt-6 xl:mb-10">{desc}</p>
            <img src={imgService1} className="rounded-xl" alt="imgService1" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CardBanner;
