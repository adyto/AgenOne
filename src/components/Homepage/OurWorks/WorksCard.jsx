import React from 'react';
import { urlFor } from '../../../client';
import { icArrowWorks } from '../../../assets';
import { Link } from 'react-router-dom';

const WorksCard = ({ workItem }) => {
  console.log(workItem);
  return (
    <div className="flex flex-wrap container mx-auto justify-center px-4 z-10 xl:px-0 xl:gap-5">
      {workItem.map((item) => (
        <div className="flex flex-col bg-[#181D2A] rounded-3xl p-4 xl:gap-6 xl:w-[630px] xl:h-auto">
          <div className="group relative w-full justify-center flex">
            <img
              src={urlFor(item.imgUrl)}
              className="rounded-2xl"
              alt="itemImgURL"
            />
            <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-black/50 rounded-xl opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
              <Link className="border-none bg-gradient-to-r from-white to-white/0 rounded-full p-5">
                <img src={icArrowWorks} />
              </Link>
            </div>
          </div>
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
