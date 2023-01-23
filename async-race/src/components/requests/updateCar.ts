import { request } from "./request";
import { baseUrl } from "../..";
import getCarsInGarage from "./getCarsInGarage";


const updateCar = async (id: number, name: string, color: string ) => {
    const dataOfCar = {
        name: `${name}`,
        color: `${color}`
    };
    try{
        await fetch(`${baseUrl}${request.updateCar.path}${id}`, {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataOfCar),
            }
        ); 
       getCarsInGarage();
    } catch(err){
        throw new Error('err');
    }
};

export default updateCar;