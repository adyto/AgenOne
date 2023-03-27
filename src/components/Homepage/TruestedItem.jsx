import React from 'react';
import {
  imgDivider,
  icCompany1,
  icCompany2,
  icCompany3,
  icCompany4,
  icCompany5,
  icCompany6,
} from '../../assets';

const TruestedItem = () => {
  const dataImg = [
    {
      img: icCompany1,
    },
    {
      img: icCompany2,
    },
    {
      img: icCompany3,
    },
    {
      img: icCompany4,
    },
    {
      img: icCompany5,
    },
    {
      img: icCompany6,
    },
  ];
  return (
    <div className="bg-[#0C111F] relative">
      <img src={imgDivider} className="w-full" />
      <div className="container mx-auto flex flex-row py-8 gap-16 justify-center">
        {dataImg.map((item) => (
          <img src={item.img} alt="imgCompany" />
        ))}
      </div>
    </div>
  );
};

export default TruestedItem;
