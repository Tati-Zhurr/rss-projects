import { ICar } from "../types/interfaces";
import drawButton from "./drawButton";
import drawPrevNext from "./drawPrevNext";
import drawOptionsCarBlock from "./drawOptionsCarBlock";
import drawStartBackCarBlock from "./drawStartBackCarBlock";
import drawCarFlagCarBlock from "./drawCarFlagCarBlock";
import createCar from "../requests/createCar";

function drawGarageView (garage: ICar[], pageNumber: number = 1){
    const main = document.querySelector('.main');
    if (main){
        const divGarage = document.createElement('div');
    divGarage.classList.add('garage');

    const block = {
        create: 'create',
        update: 'update'
    }

    const divSettingsBlock = document.createElement('div');
    divSettingsBlock.classList.add('settings-block');
    const divSettingsCreate = drawSettingsBlock(block.create);
    const divSettingsUpdatte = drawSettingsBlock(block.update);
    divSettingsBlock.append(divSettingsCreate);
    divSettingsBlock.append(divSettingsUpdatte);

    const buttonsSettings = ['race', 'reset', 'generate cars']
    const divOptions = document.createElement('div');
    divOptions.classList.add('settings');
    divOptions.classList.add('settings_more-options');
    const buttons = buttonsSettings.map((e) => drawButton(e));
    buttons.forEach((e) => {
    e.classList.add('settings__button');
    divOptions.append(e);
    })
    divSettingsBlock.append(divOptions);
    const mainBlock = drawMainBlock(garage, pageNumber);
    divGarage.append(divSettingsBlock);
    divGarage.append(mainBlock);
    const divPrevNext = drawPrevNext();
    divGarage.append(divPrevNext);
    main.append(divGarage);
    }   
}

function drawSettingsBlock (blockName: string){
        const divSettings = document.createElement('div');
        divSettings.classList.add('settings');
        divSettings.classList.add(`settings_${blockName}`);
        const inputName = document.createElement('input');
        inputName.setAttribute('type', 'text');
        inputName.classList.add(`input-text_${blockName}`);
        const inputColor = document.createElement('input');
        inputColor.setAttribute('type', 'color');
        inputColor.classList.add(`input-color_${blockName}`)
        const buttonSettings = document.createElement('button');
        buttonSettings.classList.add('button');
        buttonSettings.classList.add('settings__button');
        buttonSettings.classList.add(`button_${blockName}`);
        buttonSettings.classList.add('disabled');
        buttonSettings.textContent = blockName.toUpperCase();
        divSettings.append(inputName);
        divSettings.append(inputColor);
        divSettings.append(buttonSettings);
        inputName.addEventListener('oninput',  () =>{
            buttonSettings.classList.remove('disabled');
                buttonSettings.addEventListener('click', () => {
                    if (blockName === 'create') {
                        createCar(inputName.value, inputColor.value);
                    } else {
                       // updateCar(inputName.value, inputColor.value);
                    }       
                })
        })
        return divSettings;
}


function drawMainBlock(garage: ICar[], pageNumber: number = 1) {
    const mainBlock = document.createElement('div');
    mainBlock.classList.add ('main-block');
    const title = document.createElement('h1');
    title.textContent = `Garage(${garage.length})`;
    const subTitle = document.createElement('h2');
    subTitle.textContent = `Page #${pageNumber}`;
    const allCarBlocks = drawCarBlocks(garage);

    mainBlock.appendChild(title);
    mainBlock.appendChild(subTitle);
    if (allCarBlocks){
        mainBlock.appendChild(allCarBlocks);
    }
    return mainBlock;
}

function drawCarBlocks (garage: ICar[]){
    let fragment = new DocumentFragment();

    for(let car of garage){
        const carBlock = document.createElement('div');
        carBlock.classList.add('car-block');
        carBlock.setAttribute('id', `${car.id}`);

        const divOptions = drawOptionsCarBlock(car);
        const divStartBack = drawStartBackCarBlock();
        const divCarFlag = drawCarFlagCarBlock(car);
    
        carBlock.appendChild(divOptions);
        carBlock.appendChild(divStartBack);
        carBlock.appendChild(divCarFlag);
        fragment.appendChild(carBlock);
    }
    return fragment;
}


export default drawGarageView;


