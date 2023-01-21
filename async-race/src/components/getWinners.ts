import { request } from "./request";
import { baseUrl } from "..";
import drawWinnersView from "./drawWinnersView";
import { ICar, IWinner } from "./types/interfaces";

const getWinners = async () => {
    let method = request.getWinners.method;
    const response = await fetch(`${baseUrl}${request.getWinners.path}`, {method});
    const winners: IWinner[] = await response.json(); 
    const winnersId = winners.map((e) => e.id); 
    const cars: ICar[] =  [];

   winnersId.forEach(async (e) => {
            method = request.getCar.method;
            const response2 = await fetch(`${baseUrl}${request.getCar.path}${e}`, {method});
            const car: ICar = await response2.json();
            cars.push(car);
        });
    console.log(cars);
    drawWinnersView(winners);
    return winners;
}



export default getWinners;

