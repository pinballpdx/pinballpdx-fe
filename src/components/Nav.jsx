import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const links = ['Standings', 'Schedule', 'Teams', 'Rules', 'News', 'About'];

  const navItems = links.map((link) => (
    <li className={li}>{<NavLink to={link.toLowerCase()}>{link}</NavLink>}</li>
  ));

  return (
    <nav className="lg:w-72">
      <ul className={ul}>
        <li className={li}>
          <NavLink to="/">Home</NavLink>
        </li>
        {navItems}
      </ul>
    </nav>
  );
};

const li = `
  w-full 
  text-center 
  lg:text-left 
  hover:bg-black 
  hover:bg-opacity-60 
  hover:text-white
  py-3 
  px-4 
  text-gray-300
  font-semibold
  tracking-wide
`;

const ul = `
  flex 
  justify-between 
  bg-gray-900
  lg:flex-col 
  lg:my-4 lg:ml-4
  overflow-x-auto
  lg:rounded-xl
`;

export default Nav;
