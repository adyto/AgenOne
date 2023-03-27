import React from 'react';
import { urlFor } from '../../../client';

const WorksCard = ({ workItem }) => {
  console.log(workItem);
  return (
    <div className="flex flex-wrap container mx-auto justify-center px-4 z-10 xl:px-0 xl:gap-5">
      {workItem.map((item) => (
        <div className="flex flex-col bg-[#181D2A] rounded-3xl p-4 xl:gap-6 xl:w-[630px] xl:h-auto">
          <img
            src={urlFor(item.imgUrl)}
            className="rounded-2xl"
            alt="itemImgURL"
          />
          <div className="flex flex-col text-white xl:gap-3">
            <p className="text-white font-bold xl:text-[32px]">{item.title}</p>
            <p className="text-[#B6B8BC] xl:text-xl">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorksCard;
