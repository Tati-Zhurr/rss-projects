import { store } from "../store";
import getCarsInGarage from "../requests/getCarsInGarage";
import getWinners from "../requests/getWinners";
import getNextPage from "./getNextPage";

function getPrevPage () {
    const garage = document.querySelector('.garage');
    const winners = document.querySelector('.winners');
    if ((garage instanceof HTMLDivElement) && (!garage.classList.contains('hidden'))) {
        store.pageGarage -= 1;
        getCarsInGarage(); 
    } else if ((winners instanceof HTMLDivElement) && (!winners.classList.contains('hidden')))  {
        store.pageWinners -= 1;
        getWinners();
    }
}

export default getPrevPage;