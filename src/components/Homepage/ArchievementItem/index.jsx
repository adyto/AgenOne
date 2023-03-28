import React from 'react';
import { imgArchievement } from '../../../assets';

const ArchievenmentItem = () => {
  const dataItem = [
    {
      total: '10+',
      title: 'Years of Experiences',
    },
    {
      total: '666+',
      title: 'Project Completed',
    },
    {
      total: '555+',
      title: 'Satisfied Client',
    },
    {
      total: '10+',
      title: 'Awards Achieved',
    },
  ];
  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${imgArchievement})` }}
    >
      <div className="flex flex-col container mx-auto gap-y-16 xl:py-20">
        <h1 className="font-medium xl:text-[44px] ">
          We are passionate about helping businesses grow and succeed in the
          digital age. We take pride in our work and strive to exceed your
          expectations every time.
        </h1>
        <div className="flex flex-row justify-center  bg-gradient-to-br from-text-color-palette-1 to-text-color-palette-2 rounded-[20px] xl:p-8">
          {dataItem.map((item) => (
            <div className="flex flex-col max-w-xs w-full text-center gap-y-3">
              <p className="font-bold text-white xl:text-7xl">{item.total}</p>
              <p className="font-medium text-white xl:text-2xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArchievenmentItem;
