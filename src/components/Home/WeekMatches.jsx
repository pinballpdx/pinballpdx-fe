import React from 'react';
import { thisWeekMatch } from '../../data/stubData.js';

const WeekMatches = () => {
  const matches = thisWeekMatch.map((match) => {
    return (
      <div className={div}>
        <div className={teams}>
          <span>{match.team1.name}</span>
          <span className="mx-2">vs.</span>
          <span>{match.team2.name}</span>
        </div>
        <span className={location}>{`@ ${match.location}`}</span>
      </div>
    );
  });

  return (
    <section className={section}>
      <h2 className={h2}>Upcoming Schedule</h2> November 28, 2021
      <div className={outer}>{matches}</div>
    </section>
  );
};

const section = `
  my-4
  rounded-xl
`;

const h2 = `
  font-bold
`;

const outer = `
  my-4
  w-full
  rounded
  flex
  flex-col
  gap-2
`;

const div = `
  flex
  flex-col
  justify-between
  mb-1
  px-4
  py-2
  bg-gray-100
  rounded
`;

const teams = `
  
`;

const location = `
  font-semibold
`;

export default WeekMatches;
