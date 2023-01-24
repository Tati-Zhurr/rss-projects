/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import drawGarageView from '../view/drawGarageView';
import store from '../store';
import { ICar } from '../types/interfaces';

const getCarsInGarage = async () => {
  try {
    const response = await fetch(
      `${store.baseUrl}${'/garage'}?_page=${store.pageGarage}&_limit=${store.limitGarage}`,
      { method: 'GET' },
    );
    const data: ICar[] = await response.json();

    for (const pair of response.headers.entries()) {
      if (pair[0] === 'x-total-count') {
        store.totalCarsGarage = Number(pair[1]);
        store.totalPageGarage = Math.ceil(store.totalCarsGarage / store.limitGarage);
      }
    }
    drawGarageView(data);
    return data;
  } catch (err) {
    throw new Error('err');
  }
};

export default getCarsInGarage;
