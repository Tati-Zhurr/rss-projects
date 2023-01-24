const request = {
  getCars: {
    path: '/garage',
    method: 'GET',
    headers: '',
    urlParams: '',
    queryParams: {
      optional: ['_page=[integer]', '_limit=[integer]'],
    },
    dataParams: '',
  },
  getWinners: {
    path: '/winners',
    method: 'GET',
    headers: '',
    urlParams: '',
    queryParams: {
      optional: ['_page=[integer]', '_limit=[integer]', '_sort=["id"|"wins"|"time"]', '_order=["ASC"|"DESC"]'],
    },
    dataParams: '',
  },
  getCar: {
    path: '/garage/',
    method: 'GET',
    headers: '',
    urlParams: 'id=[integer]',
    queryParams: '',
    dataParams: '',
  },
  createCar: {
    path: '/garage/',
    method: 'POST',
    headers: '"Content-Type": "application/json"',
    urlParams: '',
    queryParams: '',
    dataParams: {
      name: 'string',
      color: 'string',
    },
  },
  deleteCarGarage: {
    path: '/garage/',
    method: 'DELETE',
    headers: '',
    urlParams: '',
    queryParams: 'id=[integer]',
    dataParams: '',
  },
  deleteCarWinners: {
    path: '/winners/',
    method: 'DELETE',
    headers: '',
    urlParams: '',
    queryParams: 'id=[integer]',
    dataParams: '',
  },
  updateCar: {
    path: '/garage/',
    method: 'PUT',
    headers: '',
    urlParams: '',
    queryParams: 'id=[integer]',
    dataParams: '',
  },
  getEngineStart: {
    path: '/engine',
    method: 'PATCH',
    headers: '',
    urlParams: '',
    queryParams: [
      'id=[integer]',
      'status=started',
    ],
    dataParams: '',
  },
};

export default request;
