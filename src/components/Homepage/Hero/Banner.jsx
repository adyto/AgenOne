import React from 'react';
import {
  icBanner1,
  icBanner2,
  icBanner3,
  icBanner4,
  imgShapeBanner,
} from '../../../assets';

const Banner = () => {
  const dataBanner = [
    {
      title: 'Expanding the Market',
      icon: icBanner1,
    },
    {
      title: 'Cost-Effective',
      icon: icBanner2,
    },
    {
      title: 'More Professional',
      icon: icBanner3,
    },
    {
      title: 'Attact Client',
      icon: icBanner4,
    },
  ];
  return (
    <div
      className="relative bg-cover bg-no-repeat container px-4 mx-auto flex flex-col rounded-b-2xl items-center xl:mt-20 xl:px-0"
      style={{ backgroundImage: `url(${imgShapeBanner})` }}
    >
      <h1 className="font-semibold xl:text-[32px] xl:mt-6 xl:mb-[42px]">
        Benefit of improving your business
      </h1>
      <div className="flex flex-row w-full xl:px-[60px] xl:mb-14">
        {dataBanner.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center mx-auto w-[290px] gap-y-2"
          >
            <img
              src={item.icon}
              className=" relative border-none rounded-full p-2 bg-gradient-to-r from-white to-white/0"
            />
            <p className="font-medium xl:text-2xl">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
