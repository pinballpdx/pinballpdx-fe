import React from 'react';
import Home from './Home';

const Main = () => {
  return (
    <main className={main}>
      <div className={inner}>
        <h1 className={h1}>
          <span className={span}>Pinball</span>PDX
        </h1>
        <Home />
      </div>
    </main>
  );
};

const main = `
  w-full
  p-4
`;

const inner = `
  bg-white
  p-12
  rounded-xl
`;

const h1 = `
  text-5xl
  font-bold
  text-left
  text-gray-800
`;

const span = `
  font-light
`;

export default Main;
