import { request } from "./request";
import drawGarageView from "../view/drawGarageView";
import { baseUrl } from "../..";
import { ICar } from "../types/interfaces";

const getCarsInGarage = async () => {
    const method = request.getCars.method;
    const response = await fetch(`${baseUrl}${request.getCars.path}`, {method});
    const data: ICar[] = await response.json();  
    drawGarageView(data);
    return data;
};

export default getCarsInGarage;