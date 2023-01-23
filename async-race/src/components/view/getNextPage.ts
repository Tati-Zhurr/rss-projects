import { store } from "../store";
import getCarsInGarage from "../requests/getCarsInGarage";
import getWinners from "../requests/getWinners";
import getPrevPage from "./getPrevPage";

function getNextPage () {
    const garage = document.querySelector('.garage');
    const winners = document.querySelector('.winners');
    if ((garage instanceof HTMLDivElement) && (!garage.classList.contains('hidden'))) {
        store.pageGarage += 1;
        //setButtons(garage, store.pageGarage, store.totalPageGarage);
        getCarsInGarage(); 
    } else if ((winners instanceof HTMLDivElement) && (!winners.classList.contains('hidden')))  {
        store.pageWinners += 1;
        getWinners();
    }
}

export default getNextPage;