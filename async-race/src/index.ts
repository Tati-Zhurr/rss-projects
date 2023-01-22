import './styles/main.scss';
import drawPage from './components/view/drawPage';
import getView from './components/view/getView';
import getCarsInGarage from './components/requests/getCarsInGarage';
import getWinners from './components/requests/getWinners';

let isGarageView = true;
export const baseUrl = 'http://127.0.0.1:3000';

drawPage();
getCarsInGarage();
getWinners();


const buttonGarage = document.querySelector('.button_to-garage');
const buttonWinners = document.querySelector('.button_to-winners');
if (buttonWinners instanceof HTMLButtonElement){
    buttonWinners.addEventListener('click', () => {
        if (isGarageView){
            isGarageView = false;
            getView(isGarageView);
        };
    });
};
if (buttonGarage instanceof HTMLButtonElement){
    buttonGarage.addEventListener('click', () => {
        if (!isGarageView){
            isGarageView = true;
            getView(isGarageView);
        };
    });
}





//getWinners();



