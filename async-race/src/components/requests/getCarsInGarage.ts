import { request } from "./request";
import drawGarageView from "../view/drawGarageView";
import { store } from "../store";
import { ICar } from "../types/interfaces";

const getCarsInGarage = async () => {
    try{
        const method = request.getCars.method;
        const response = await fetch(`${store.baseUrl}${request.getCars.path}?_page=${store.pageGarage}&_limit=${store.limitGarage}`, {method});
        const data: ICar[] = await response.json();  

        for (var pair of response.headers.entries()) {
            if (pair[0] === 'x-total-count') {
                store.totalCarsGarage = Number(pair[1]);
                store.totalPageGarage = Math.ceil (store.totalCarsGarage / store.limitGarage);
            }
        }
        drawGarageView(data);
        return data;
    }
    catch (err) {
        console.log(err);
    }
    
};

export default getCarsInGarage;