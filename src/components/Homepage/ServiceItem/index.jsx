import React from 'react';
import { useState } from 'react';
import CardBanner from './CardBanner';

const ServiceItem = () => {
  const [active, setActive] = useState('ui/ux');

  const dataServiceCard = [
    {
      id: 'ui/ux',
      no: '01',
      title: 'UI/UX Design',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, quisquam obcaecati repudiandae pariatur et corporis, molestias aliquam enim beatae, delectus explicabo veniam adipisci non accusantium. Placeat at fugiat natus optio.',
    },
    {
      id: 'digital-marketing',
      no: '02',
      title: 'Digital Marketing',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, quisquam obcaecati repudiandae pariatur et corporis, molestias aliquam enim beatae, delectus explicabo veniam adipisci non accusantium. Placeat at fugiat natus optio.',
    },
    {
      id: 'social-management',
      no: '03',
      title: 'Social Media Management',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, quisquam obcaecati repudiandae pariatur et corporis, molestias aliquam enim beatae, delectus explicabo veniam adipisci non accusantium. Placeat at fugiat natus optio.',
    },
    {
      id: 'development',
      no: '04',
      title: 'Development',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, quisquam obcaecati repudiandae pariatur et corporis, molestias aliquam enim beatae, delectus explicabo veniam adipisci non accusantium. Placeat at fugiat natus optio.',
    },
  ];
  return (
    <div className="container mx-auto px-4 xl:py-24 xl:px-0">
      <h1 className="text-center font-bold xl:text-7xl xl:mb-16">
        The Services We Offer
        <span className="ml-4 bg-gradient-to-br from-text-color-palette-1 to-text-color-palette-2 text-transparent bg-clip-text">
          For You
        </span>
      </h1>
      <div className="flex flex-col gap-6">
        {dataServiceCard.map((value, index) => (
          <CardBanner
            key={value.id}
            {...value}
            index={index}
            active={active}
            handleClick={setActive}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceItem;
