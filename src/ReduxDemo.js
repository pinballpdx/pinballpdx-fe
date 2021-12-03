import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';

const ReduxDemo = () => {
  return (
    <header className="App-header">
      <h1 className={h1}>Pinball PDX</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <Counter />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <span>
        <span>Learn </span>
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <span>, </span>
        <a
          className="App-link"
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>
        <span>, </span>
        <a
          className="App-link"
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux Toolkit
        </a>
        ,<span> and </span>
        <a
          className="App-link"
          href="https://react-redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Redux
        </a>
      </span>
    </header>
  );
};

const h1 = `
  text-7xl 
  p-4 
  shadow-lg 
  text-white 
  bg-gradient-to-r 
  from-blue-500 
  to-pink-500
`;

export default ReduxDemo;
