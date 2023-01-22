import { ICar } from "../types/interfaces";
import drawButton from "./drawButton";

function drawOptionsCarBlock(car: ICar){
    const divOptions = document.createElement('div');
    divOptions.classList.add('options');
    const divButtonsWrapper = document.createElement('div');
    divButtonsWrapper.classList.add('buttons-wrapper');
    const buttonsOptions = ['select', 'remove'];
    const buttons = buttonsOptions.map((e) => drawButton(e));
    buttons.forEach((e) => {
        divButtonsWrapper.append(e);
    });
    const spanCarName = document.createElement('span');
    spanCarName.classList.add('options__name');
    spanCarName.textContent = car.name;
    divOptions.append(divButtonsWrapper);
    divOptions.append(spanCarName);
    return divOptions;
}

export default drawOptionsCarBlock;