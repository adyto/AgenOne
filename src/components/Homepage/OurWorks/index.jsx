import React, { useEffect, useState } from 'react';
import { imgOrnamentWorks, imgCircle1, imgCircle2 } from '../../../assets';
import { client } from '../../../client';
import WorksCard from './WorksCard';

const OurWorks = () => {
  const [activeFilter, setActiveFilter] = useState('ui-ux');
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  const sortedDates = filterWork
    .map((obj) => {
      return { ...obj, date: new Date(obj._createdAt) };
    })
    .sort((a, b) => b.date - a.date);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    if (item === 'ui-ux') {
      setFilterWork(works.filter((work) => work.tags.includes('ui-ux')));
    } else {
      setFilterWork(works.filter((work) => work.tags.includes(item)));
    }
  };

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data.filter((work) => work.tags.includes('ui-ux')));
    });
  }, []);
  return (
    <div
      className="bg-no-repeat bg-cover bg-center relative bg-[#0C111F]"
      style={{ backgroundImage: `url(${imgOrnamentWorks})` }}
    >
      <img src={imgCircle1} className="absolute left-0 top-0 " />
      <img src={imgCircle2} className="absolute right-0 bottom-0" />
      <div className="container mx-auto justify-center items-center px-4 flex flex-col xl:px-0 xl:py-24">
        <h1 className=" font-bold text-white text-center xl:text-7xl">
          Our Project Have Been{' '}
          <span className="bg-gradient-to-br from-text-color-palette-1 to-text-color-palette-2 bg-clip-text text-transparent">
            Done
          </span>
        </h1>
        <h2 className="font-medium text-center w-full mx-auto text-white max-w-4xl xl:text-xl xl:mt-6">
          Take a look at some of our recent projects and see how we've helped
          other businesses elevate their brand and drive business growth.
        </h2>
        <div className="flex flex-row p-2 rounded-full bg-[#F3F3F3]  xl:mt-14 xl:mb-16">
          {['ui-ux', 'digital-marketing', 'sosmed', 'development'].map(
            (item, index) => (
              <div
                key={item + index}
                onClick={() => handleWorkFilter(item)}
                className={`${
                  activeFilter === item
                    ? 'text-white rounded-full bg-gradient-to-br from-text-color-palette-1 to-text-color-palette-2 py-4 px-6'
                    : 'text-black py-4 px-6'
                } capitalize cursor-pointer `}
              >
                {item === 'ui-ux'
                  ? 'UI/UX Design'
                  : item === 'digital-marketing'
                  ? 'Digital Marketing'
                  : item === 'sosmed'
                  ? 'Sosmed Management'
                  : item}
              </div>
            ),
          )}
        </div>
        <WorksCard workItem={sortedDates} />
      </div>
    </div>
  );
};

export default OurWorks;
