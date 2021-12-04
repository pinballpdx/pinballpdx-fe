import React, { useState } from 'react';
import Login from './Login';
import Logout from './Logout';

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div className={div}>
      <header className={header}>
        <h1 className={h1}>
          <span className={span}>Pinball</span>PDX
        </h1>
        {loggedIn ? (
          <div className="flex items-center">
            <div className="mr-4">
              Welcome, <span className="font-semibold">{currentUser.email}</span>
            </div>
            <Logout setLoggedIn={setLoggedIn} />
          </div>
        ) : (
          <Login setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} />
        )}
      </header>
    </div>
  );
};

const div = `
  p-4
  w-full
  flex
  justify-center
  items-center
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
  flex
  justify-between
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
