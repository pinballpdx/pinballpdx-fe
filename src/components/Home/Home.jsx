import React from 'react';
import WeekMatches from './WeekMatches';
import WeekResults from './WeekResults';

const Home = () => {
  return (
    <div className={div}>
      <WeekMatches />
      <WeekResults />
      <div>Standings (Current Season)</div>
      <div>News Item1</div>
      <div>News Item2</div>
      <div>News Item3</div>
    </div>
  );
};

const div = `
  text-gray-800
  text-left
  py-4
`;

export default Home;
