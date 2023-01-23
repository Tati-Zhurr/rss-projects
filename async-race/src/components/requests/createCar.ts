import { request } from "./request";
import { baseUrl } from "../..";
import { ICar } from "../types/interfaces";
import addNewCarBlock from "../view/addNewCarBlock";
import getCarsInGarage from "./getCarsInGarage";

const createCar = async (name: string, color: string) => {
    const dataOfCar = {
        name: `${name}`,
        color: `${color}`
    };
    try{
        const response = await fetch(`${baseUrl}${request.getCars.path}`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataOfCar),
            }
        );
        const data: ICar = await response.json();  
       getCarsInGarage();
    } catch(err){
        throw new Error('err');
    }
};

export default createCar;
