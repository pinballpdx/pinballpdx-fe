import React from 'react';
import { thisWeekMatch } from '../../data/stubData.js';

const WeekResults = () => {
  const matches = thisWeekMatch.map((match) => {
    return (
      <>
        <tr className={match.team1.isWinner ? td + won : td}>
          <td className={td}>
            {match.team1.isHome ? (
              <span className={span}>{`@ ${match.team1.name}`}</span>
            ) : (
              <span className={span}>{match.team1.name}</span>
            )}
          </td>
          <td className={td + 'font-normal'}>{match.location}</td>
          <td className={td + score}>{match.team1.score}</td>
        </tr>
        <tr className={match.team2.isWinner ? td + won : td}>
          <td className={td}>
            {match.team2.isHome ? (
              <span className={span}>{`@ ${match.team2.name}`}</span>
            ) : (
              <span className={span}>{match.team2.name}</span>
            )}
          </td>
          <td className={td}></td>
          <td className={td + score}>{match.team2.score}</td>
        </tr>
      </>
    );
  });

  return (
    <section className={section + 'week-results'}>
      <h2 className={h2}>Recent Matches</h2> November 20, 2021
      <table className={table}>
        <thead>
          <tr>
            <th className={th + 'w-1/2 rounded-tl'}>Teams</th>
            <th className={th + 'w-1/2'}>Location</th>
            <th className={th + 'w-2/12 text-right rounded-tr'}>Score</th>
          </tr>
        </thead>
        <tbody>{matches}</tbody>
      </table>
    </section>
  );
};

const section = `
  my-8
  rounded-xl
`;

const h2 = `
  font-bold
`;

const table = `
  table-fixed
  my-4
  bg-gray-100
  w-full
  rounded
`;

const score = `
  text-right
`;

const td = `
  py-2
  px-4
  text-sm
`;

const th = `
  py-2
  px-4
  bg-gray-600
  text-white
  font-semibold
`;

const tr = `
  
`;

const stripe = `
  bg-gray-200
`;

const won = `
  font-bold
`;

const span = `
`;

export default WeekResults;
