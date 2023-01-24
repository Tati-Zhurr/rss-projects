import request from './request';
import { baseUrl } from '../..';

const getStartStopCarEngine = async (id: string, status: string) => {
  try {
    const response = await fetch(`${baseUrl}${request.getEngineStart.path}?id =${id}&status=${status}`, {
      method: 'PATCH',
    });
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error('err');
  }
};

export default getStartStopCarEngine;
