import { request } from "./request";
import { baseUrl } from "../..";
import getCarsInGarage from "./getCarsInGarage";
import getWinners from "./getWinners";

const deleteCar = async (id: string ) => {
    try{
        const response = await fetch(`${baseUrl}${request.deleteCarGarage.path}${id}`, {method:'DELETE'}); 
        getCarsInGarage();
        const response2 = await fetch(`${baseUrl}${request.deleteCarWinners.path}${id}`, {method:'DELETE'}); 
        getWinners();
    } catch(err){
        throw new Error('err');
    }
};

export default deleteCar;