import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { imgLogo } from '../assets';

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between container mx-auto px-4 xl:px-0 xl:py-5">
      <Link className="flex flex-row items-center xl:gap-x-3">
        <img src={imgLogo} alt="logoNavbar" />
        <h1 className="capitalize font-bold text-white xl:text-2xl">Agenone</h1>
      </Link>
      <div className="flex flex-row text-white gap-10 capitalize items-center font-medium xl:text-lg">
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
      <button className="capitalize text-white bg-gradient-to-br from-text-color-palette-1 to-text-color-palette-2 rounded-full xl:py-4 xl:px-6">
        contack us
      </button>
    </div>
  );
};

export default Navbar;
