import request from './request';
import { baseUrl } from '../..';
import { ICar } from '../types/interfaces';

const getCar = async (id: number) => {
  try {
    const response = await fetch(`${baseUrl}${request.getCar.path}${id}`, { method: 'GET' });
    const car: ICar = await response.json();
    return car;
  } catch (err) {
    throw new Error('err');
  }
};

export default getCar;
