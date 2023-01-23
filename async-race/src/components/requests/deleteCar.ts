import { request } from "./request";
import { baseUrl } from "../..";
import { ICar } from "../types/interfaces";
import getCarsInGarage from "./getCarsInGarage";

const deleteCar = async (id: string ) => {
    try{
        const response = await fetch(`${baseUrl}${request.deleteCar.path}${id}`, {method:'DELETE'}); 
        getCarsInGarage();
    } catch(err){
        throw new Error('err');
    }
};

export default deleteCar;