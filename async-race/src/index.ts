import './styles/main.scss';
import drawPage from './components/view/drawPage';
import getView from './components/view/getView';
import getCarsInGarage from './components/requests/getCarsInGarage';
import getWinners from './components/requests/getWinners';
import { store } from './components/store';
import getNextPage from './components/view/getNextPage';


export let pageGarage = store.pageGarage;
export let pageWinners = store.pageWinners;
export const baseUrl = 'http://127.0.0.1:3000';

drawPage();
getCarsInGarage();
getWinners();


const buttonGarage = document.querySelector('.button_to-garage');
const buttonWinners = document.querySelector('.button_to-winners');
if (buttonWinners instanceof HTMLButtonElement){
    buttonWinners.addEventListener('click', () => {
        if (store.isGarageView){
            store.isGarageView = false;
            getView(store.isGarageView);
        };
    });
};
if (buttonGarage instanceof HTMLButtonElement){
    buttonGarage.addEventListener('click', () => {
        if (!store.isGarageView){
            store.isGarageView = true;
            getView(store.isGarageView);
        };
    });
}

const buttonNext = document.querySelector('.button_next');
if (buttonNext instanceof HTMLButtonElement) {
    buttonNext.addEventListener('click', getNextPage)
}


if (store.pageGarage === store. totalPageGarage) {
    const buttonNext = document.querySelector('.button_next');
    if (buttonNext instanceof HTMLButtonElement) {
        buttonNext.classList.add('disabled');
        buttonNext.removeEventListener('click', getNextPage);
    }
}

if (store.pageGarage > 1) {

}







//getWinners();



