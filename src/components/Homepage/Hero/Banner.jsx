import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import {
  icBanner1,
  icBanner2,
  icBanner3,
  icBanner4,
  imgShapeBanner,
  imgShapeBanner2,
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
    <>
      <div
        className="relative bg-cover bg-no-repeat container px-4 mx-auto flex flex-col rounded-b-2xl items-center xl:mt-20 xl:px-0 max-md:hidden"
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
      <div
        className="relative bg-cover w-full bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${imgShapeBanner2})` }}
      >
        <h2 className=" font-semibold mx-auto pt-4 pb-10 text-lg w-[213px] text-center">
          Benefit of improving your business
        </h2>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className=" w-64 pb-20 "
        >
          {dataBanner.map((item) => (
            <SwiperSlide>
              <img src={item.icon} className="mx-auto w-28 h-28" />
              <p className="text-2xl">{item.title}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
