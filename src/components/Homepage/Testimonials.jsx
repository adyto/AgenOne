import React from 'react';
import { VerticalTicker, HorizontalTicker } from 'react-infinite-ticker';
import NewsTicker from 'react-advanced-news-ticker';
import Marquee from 'react-fast-marquee';
import { Ticker } from 'framer-motion-ticker';
import {
  icAvatar1,
  icAvatar2,
  icAvatar3,
  icAvatar4,
  icAvatar5,
  icAvatar6,
} from '../../assets';
const Testimonials = () => {
  const testimonyItems = [
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut mollitia quidem nemo quisquam corrupti accusamus possimus, veritatis, deserunt molestiae itaque nostrum quos ad esse quae blanditiis non explicabo quia id.',
      img: icAvatar1,
      name: 'Clara Insomnia',
      job: 'Occupation',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur inventore quia error, consequatur corrupti voluptates. Natus iusto, voluptatum quisquam laborum voluptates consectetur cupiditate ex voluptas ducimus sint minus molestiae sed.',
      img: icAvatar2,
      name: 'John Doe',
      job: 'Earth Founder',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse a iste blanditiis sapiente rerum nostrum, possimus atque distinctio ullam ab iure, quisquam tenetur debitis labore reprehenderit? Temporibus pariatur nihil illum.',
      img: icAvatar3,
      name: 'Sabrina Car Panther',
      job: 'Occupation',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, molestiae laudantium excepturi aut vero adipisci consectetur neque iste, sunt sapiente illum repudiandae vel ratione qui doloribus fuga tempora, nam aliquam?',
      img: icAvatar4,
      name: 'Lil Nas',
      job: 'Moon Founder',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem porro aperiam sint assumenda. Magni, iusto suscipit fugit aspernatur consequuntur quidem nihil ab officiis amet dolorum dicta voluptate quis omnis similique.',
      img: icAvatar5,
      name: 'Alan Runner',
      job: 'Sun Founder',
    },
    {
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque necessitatibus ratione soluta laborum sapiente adipisci, reprehenderit modi distinctio sequi? Consequatur magni nihil laborum itaque voluptatum atque exercitationem aliquid minus.',
      img: icAvatar6,
      name: 'Sean Frost',
      job: 'Sea Founder',
    },
  ];
  return (
    <div className="flex flex-col gap-6 py-14">
      <Marquee pauseOnHover={true} speed={40} gradient={false}>
        {testimonyItems.slice(0, 3).map((item) => (
          <div className="flex flex-col w-[500px] p-6 rounded-xl bg-[#F8F8F8] mx-auto hover:bg-gradient-to-br from-text-color-palette-1 to-text-color-palette-2">
            <p>{item.message}</p>
            <div className="flex flex-row">
              <img src={item.img} />
              <div className="flex flex-col">
                <p>{item.name}</p>
                <p>{item.job}</p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
      <Marquee
        pauseOnHover={true}
        speed={40}
        gradient={false}
        direction={false}
        className=""
      >
        {testimonyItems.slice(3, 6).map((item) => (
          <div className="flex flex-col w-[500px] p-6 rounded-xl bg-[#F8F8F8] mx-auto hover:bg-gradient-to-br from-text-color-palette-1 to-text-color-palette-2">
            <p>{item.message}</p>
            <div className="flex flex-row">
              <img src={item.img} />
              <div className="flex flex-col">
                <p>{item.name}</p>
                <p>{item.job}</p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;
