import React from 'react';
import { Link } from 'react-router-dom';
import {
  imgFooterUnion,
  icArrowRight2,
  imgDivider,
  imgLogo,
  imgCircleFooter1,
  imgCircleFooter2,
} from '../assets';

const Footer = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center  pt-10 lg:pt-10 lg:pb-6 xl:pt-14 2xl:pt-48   relative   bg-white"
      style={{ backgroundImage: `url(${imgFooterUnion})` }}
    >
      <div className="container mx-auto flex flex-col px-4 2xl:px-0">
        <div className="flex flex-row justify-between items-center text-white lg:px-20 xl:px-24 ">
          <h1 className="max-w-xl font-semibold lg:text-4xl xl:text-[44px] 2xl:text-6xl 2xl:max-w-2xl">
            Let’s discuss and bring your vision to life.
          </h1>
          <Link className="flex flex-row bg-gradient-to-br from-text-color-palette-1 to-text-color-palette-2 rounded-full gap-2 lg:py-4 lg:px-6 xl:py-5 xl:px-8 2xl:py-7 2xl:px-10 2xl:text-xl">
            Lets Talk
            <img src={icArrowRight2} />
          </Link>
        </div>
        <img
          src={imgDivider}
          className="lg:mt-8 lg:mb-20 xl:mt-10 xl:mb-[100px] 2xl:mt-12 2xl:mb-28"
        />
        <div className="flex flex-row justify-between">
          <div className="flex flex-col text-[#B6B8BC] lg:w-96 xl:w-[413px] 2xl:w-[500px]">
            <Link className="flex flex-row items-center text-white gap-2 xl:gap-3">
              <img src={imgLogo} className="2xl:w-16" />
              <p className="font-bold xl:text-2xl 2xl:text-3xl">Agenone</p>
            </Link>
            <p className=" lg:mt-5 lg:mb-8 xl:text-lg xl:mt-6 xl:mb-10 2xl:mt-8 2xl:mb-12 2xl:text-xl">
              We're a team of experienced designers, developers, and marketers,
              passionate about delivering exceptional digital solutions.
            </p>
            <p className="font-medium xl:text-lg 2xl:text-xl">
              hello@agenone.com
            </p>
          </div>
          <div className="flex flex-row z-10 lg:gap-24 xl:gap-[120px] 2xl:gap-36 2xl:text-lg ">
            <div className="flex flex-col">
              <p className="mb-6 text-white">Menu</p>
              <div className="flex flex-col gap-2 xl:gap-4">
                {['home', 'service', 'about-us', 'project', 'contact'].map(
                  (item) => (
                    <Link
                      to={`/${item}` === '/home' ? '/' : `/${item}`}
                      className="text-[#B6B8BC] capitalize"
                    >
                      {item === 'about-us' ? 'About Us' : item}
                    </Link>
                  ),
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <p className="mb-6 text-white">Support</p>
              <div className="flex flex-col gap-2 xl:gap-4">
                {['faq', 'privacy-policy', 'terms-of-service'].map((item) => (
                  <Link to={`/${item}`} className="text-[#B6B8BC] capitalize">
                    {item === 'terms-of-service'
                      ? 'Terms of Services'
                      : item === 'privacy-policy'
                      ? 'Privacy Policy'
                      : 'FAQ'}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <p className="mb-6 text-white">Social Media</p>
              <div className="flex flex-col gap-2 xl:gap-4">
                {[
                  'linkedin',
                  'twitter',
                  'instagram',
                  'dribbble',
                  'behance',
                ].map((item) => (
                  <a
                    href={
                      item === 'linkedin'
                        ? 'https://www.linkedin.com/in/adi-yulianto-300486163/'
                        : item === 'twitter'
                        ? 'https://twitter.com/adiyulianto61'
                        : item === 'instagram'
                        ? 'https://www.instagram.com/ady.to/'
                        : item === 'dribbble'
                        ? 'https://dribbble.com/adyto'
                        : 'https://www.behance.net/'
                    }
                    target="_blank"
                    className="text-[#B6B8BC] capitalize"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <img src={imgDivider} className="lg:my-8 xl:my-10 2xl:my-12" />
        <p className="text-[#B6B8BC] text-center xl:py-10 xl:text-lg">
          Copyright © 2023 by Agenone. All rights reserved.
        </p>
        <a
          href="https://www.figma.com/community/file/1220307995673140735"
          target={'_blank'}
          className="text-[#B6B9BC] mx-auto max-w-xs"
        >
          Figma File Documentation
        </a>
      </div>
      <img src={imgCircleFooter1} className="absolute bottom-24 left-0" />
      <img src={imgCircleFooter2} className="absolute bottom-0 right-0" />
    </div>
  );
};

export default Footer;
