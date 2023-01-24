import request from './request';
import { baseUrl } from '../..';
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import getCarsInGarage from './getCarsInGarage';

const createCar = async (name: string, color: string) => {
  const dataOfCar = {
    name: `${name}`,
    color: `${color}`,
  };
  try {
    await fetch(`${baseUrl}${request.getCars.path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataOfCar),
    });
    getCarsInGarage();
  } catch (err) {
    throw new Error('err');
  }
};

export default createCar;
