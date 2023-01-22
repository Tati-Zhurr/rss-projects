import './styles/main.scss';
import drawPage from './components/view/drawPage';
import getCarsInGarage from './components/requests/getCarsInGarage';
import getWinners from './components/requests/getWinners';

let garageView = true;
export const baseUrl = 'http://127.0.0.1:3000';

drawPage();
if (garageView) {
    getCarsInGarage();
}

getWinners();



