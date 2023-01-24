import request from './request';
import { baseUrl } from '../..';
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import getCarsInGarage from './getCarsInGarage';
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import getWinners from './getWinners';

const deleteCar = async (id: string) => {
  try {
    await fetch(`${baseUrl}${request.deleteCarGarage.path}${id}`, { method: 'DELETE' });
    getCarsInGarage();
    await fetch(`${baseUrl}${request.deleteCarWinners.path}${id}`, { method: 'DELETE' });
    getWinners();
  } catch (err) {
    throw new Error('err');
  }
};

export default deleteCar;
