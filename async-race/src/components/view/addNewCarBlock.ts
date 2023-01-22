import { ICar } from "../types/interfaces";
import drawOptionsCarBlock from "./drawOptionsCarBlock";
import drawStartBackCarBlock from "./drawStartBackCarBlock";
import drawCarFlagCarBlock from "./drawCarFlagCarBlock";

function addNewCarBlock (car: ICar){
    let fragment = new DocumentFragment();
    const carBlock = document.createElement('div');
    carBlock.classList.add('car-block');
    carBlock.setAttribute('id', `${car.id}`);

        const divOptions = drawOptionsCarBlock(car);
        const divStartBack = drawStartBackCarBlock();
        const divCarFlag = drawCarFlagCarBlock(car);
    
        carBlock.appendChild(divOptions);
        carBlock.appendChild(divStartBack);
        carBlock.appendChild(divCarFlag);
        
}

export default addNewCarBlock;