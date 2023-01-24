import request from './request';
import { baseUrl } from '../..';
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import drawWinnersView from '../view/drawWinnersView';
import { IWinner } from '../types/interfaces';
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import getCar from './getCar';
import store from '../store';

const getWinners = async () => {
  const { method } = request.getWinners;
  const response = await fetch(
    `${baseUrl}${request.getWinners.path}?_page=${store.pageWinners}&_limit=${store.limitWinners}`,
    { method },
  );

  for (const pair of response.headers.entries()) {
    if (pair[0] === 'x-total-count') {
      store.totalCarsWinners = Number(pair[1]);
      store.totalPageWinners = Math.ceil(store.totalCarsWinners / store.limitWinners);
    }
  }

  const winners: IWinner[] = await response.json();
  const winnersId = winners.map((e) => e.id);
  const cars = await Promise.all(winnersId.map(async (e) => getCar(e)));
  drawWinnersView(winners, cars);
};

export default getWinners;
