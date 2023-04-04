import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { imgLogo, icMenu } from '../assets';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  return (
    <div className="bg-[#0C111F] text-white">
      <div className="flex flex-row justify-between container mx-auto px-4 max-md:hidden md:py-5 xl:px-0">
        <Link className="flex flex-row items-center md:gap-x-2 xl:gap-x-3">
          <img
            src={imgLogo}
            alt="logoNavbar"
            className="md:h-7 lg:h-8 xl:h-[34px]"
          />
          <h1 className="capitalize font-bold text-white md:text-lg lg:text-xl xl:text-2xl">
            Agenone
          </h1>
        </Link>
        <div className="flex flex-row text-white  capitalize items-center font-medium md:gap-6 lg:gap-8 xl:text-lg xl:gap-10">
          {['home', 'service', 'project', 'about-us'].map((item) => (
            <NavLink
              to={`/${item}` === '/home' ? '/' : `/${item}`}
              key={item}
              className={({ isActive }) =>
                isActive
                  ? 'relative after:absolute after:bg-red-200 after:w-3/5 after:mx-auto after:inset-x-0 after:-bottom-1 after:h-[2px] after:rounded-full after:bg-gradient-to-br after:from-text-color-palette-1 after:to-text-color-palette-2'
                  : ''
              }
            >
              {item === 'about-us' ? 'About Us' : item}
            </NavLink>
          ))}
        </div>
        <button className="capitalize text-white bg-gradient-to-br from-text-color-palette-1 to-text-color-palette-2 rounded-full md:py-2 md:px-4 lg:py-3 lg:px-5 xl:py-4 xl:px-6">
          contack us
        </button>
      </div>
      <div className="flex flex-row fixed bg-bg-color-palette-2/50 shadow-2xl backdrop-blur-sm border-b-2 border-bg-color-palette-2/60 w-full justify-between p-6 md:hidden">
        <Link className="flex flex-row items-center gap-x-2">
          <img src={imgLogo} alt="logoNavbar" className="h-6" />
          <h1 className="capitalize font-bold text-white text-xl">Agenone</h1>
        </Link>
        <img src={icMenu} onClick={() => setToggle(true)} />
      </div>
      {toggle && (
        <div className="fixed top-0 right-0 w-3/4 h-full bg-bg-color-palette-2 p-6 md:hidden">
          <div className="flex flex-col w-full items-end">
            <AiOutlineClose
              onClick={() => setToggle(false)}
              className="w-8 h-8"
            />
            <div className="flex flex-col items-start w-full uppercase gap-8 pt-8 font-semibold">
              {['home', 'service', 'project', 'about-us'].map((item) => (
                <NavLink
                  to={`/${item}` === '/home' ? '/' : `/${item}`}
                  key={item}
                  className={({ isActive }) =>
                    isActive ? ' text-text-color-palette-1' : ''
                  }
                >
                  {item === 'about-us' ? 'About Us' : item}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
