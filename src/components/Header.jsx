import React from 'react';

const Header = () => {
  return (
    <div className={div}>
      <header className={header}>
        <h1 className={h1}>
          <span className={span}>Pinball</span>PDX
        </h1>
      </header>
    </div>
  );
};

const div = `
  p-4
  w-full
  flex
  justify-center
  bg-gradient-to-r
  from-red-600
  to-red-800
  border-b-8
  border-black
  border-opacity-20
  `;

const header = `
  w-full
  max-w-screen-lg
`;

const h1 = `
  text-left
  text-white
  font-semibold
  tracking-wider
  text-2xl
`;

const span = `
  font-light
`;

export default Header;
