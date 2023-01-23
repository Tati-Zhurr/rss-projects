import { request } from "./request";
import { baseUrl } from "../..";
import drawWinnersView from "../view/drawWinnersView";
import { IWinner } from "../types/interfaces";
import getCar from "./getCar";
import { store } from "../store";

const getWinners = async () => {
    const method = request.getWinners.method;
    const response = await fetch(`${baseUrl}${request.getWinners.path}?_page=${store.pageWinners}&_limit=${store.limitWinners}`, {method});

    for (var pair of response.headers.entries()) {
        if (pair[0] === 'x-total-count') {
            store.totalCarsWinners = Number(pair[1]);
            store.totalPageWinners = Math.ceil (store.totalCarsWinners / store.limitWinners);
        }
    }

    const winners: IWinner[] = await response.json(); 
    const winnersId = winners.map((e) => e.id); 
    const cars = await Promise.all(winnersId.map(async (e) => {
        return getCar(e);
    }));
    drawWinnersView(winners, cars);
}


export default getWinners;

