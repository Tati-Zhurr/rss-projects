import { request } from "./request";
import { baseUrl } from "../..";
import drawWinnersView from "../view/drawWinnersView";
import { ICar, IWinner } from "../types/interfaces";

const getWinners = async () => {
    const method = request.getWinners.method;
    const response = await fetch(`${baseUrl}${request.getWinners.path}`, {method});
    const winners: IWinner[] = await response.json(); 
    const winnersId = winners.map((e) => e.id); 
    const cars = await Promise.all(winnersId.map(async (e) => {
    const method = request.getCar.method;
    const response2 = await fetch(`${baseUrl}${request.getCar.path}${e}`, {method});
    const car: ICar = await response2.json();
    return car;
    }));
    drawWinnersView(winners, cars);
}


export default getWinners;

