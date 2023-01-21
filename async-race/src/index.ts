import './styles/main.scss';
import drawPage from './components/drawPage';
import getCarsInGarage from './components/getCarsInGarage';
import getWinners from './components/getWinners';

let garageView = true;
export const baseUrl = 'http://127.0.0.1:3000';

drawPage();
if (garageView) {
    getCarsInGarage();
}

getWinners();



