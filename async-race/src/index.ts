import './styles/main.scss';
import drawPage from './components/drawPage';
import drawMain from './components/drawMain';

drawPage();

let garageView = true;

export const baseUrl = 'http://127.0.0.1:3000';

const path = {
    getCars: '/garage',
    getCar: '/garage/:id',
    createCar: '/garage',
    deleteCar: '/garage/:id',


}

const request = {
    getCars: {
        path: '/garage',
        method: 'GET',
        headers: '',
        urlParams: '',
        queryParams: {
            optional: ['_page=[integer]', '_limit=[integer]']
        } ,
        dataParams: '',
    }

}

const carsInGarage = async (method: string) => {
    const response = await fetch(`${baseUrl}${path.getCars}`, {method});
    const data = await response.json();  
    console.log(data);
    drawMain(true, data);
    return data;
};



carsInGarage(request.getCars.method);



