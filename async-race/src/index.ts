import './styles/main.scss';
import drawPage from './components/view/drawPage';
import getView from './components/view/getView';
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import getCarsInGarage from './components/requests/getCarsInGarage';
import getWinners from './components/requests/getWinners';
import store from './components/store';

export const { pageGarage } = store;
export const { pageWinners } = store;
export const baseUrl = 'http://127.0.0.1:3000';

drawPage();
getCarsInGarage();
getWinners();

const buttonGarage = document.querySelector('.button_to-garage');
const buttonWinners = document.querySelector('.button_to-winners');
if (buttonWinners instanceof HTMLButtonElement) {
  buttonWinners.addEventListener('click', () => {
    if (store.isGarageView) {
      store.isGarageView = false;
      getView(store.isGarageView);
    }
  });
}
if (buttonGarage instanceof HTMLButtonElement) {
  buttonGarage.addEventListener('click', () => {
    if (!store.isGarageView) {
      store.isGarageView = true;
      getView(store.isGarageView);
    }
  });
}
