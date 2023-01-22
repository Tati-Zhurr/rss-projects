import { request } from "./request";
import drawGarageView from "../view/drawGarageView";
import { baseUrl } from "../..";

const getCarsInGarage = async () => {
    const method = request.getCars.method;
    const response = await fetch(`${baseUrl}${request.getCars.path}`, {method});
    const data = await response.json();  
    console.log(data);
    drawGarageView(data);
    return data;
};

export default getCarsInGarage;