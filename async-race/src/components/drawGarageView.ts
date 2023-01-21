import { ICar } from "./types/interfaces";

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
        buttonSettings.textContent = blockName.toUpperCase();
        divSettings.append(inputName);
        divSettings.append(inputColor);
        divSettings.append(buttonSettings);
        return divSettings;
}


function drawButton(buttonName: string){
  const button = document.createElement('button');
  button.classList.add('button');
  button.classList.add(`button_${buttonName.split(' ')[0]}`);
  button.textContent = buttonName.toUpperCase();
  return button;
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

function drawStartBackCarBlock(){
    const divStartBack = document.createElement('div');
    divStartBack.classList.add('start-back');
    divStartBack.classList.add('buttons-wrapper');
    const spanStart = document.createElement('span');
    spanStart.classList.add('start');
    spanStart.setAttribute('title', 'Get start');
    spanStart.textContent = 'A';
    const spanBack = document.createElement('span');
    spanBack.classList.add('back');
    spanBack.setAttribute('title', 'Get back');
    spanBack.classList.add('disabled');
    spanBack.textContent = 'B';
    divStartBack.append(spanStart);
    divStartBack.append(spanBack);
    return divStartBack;
}

function drawCarFlagCarBlock (car: ICar){
    const divCarFlag = document.createElement('div');
    divCarFlag.classList.add('car-flag');
    const svg = document.createElement('svg');
    svg.innerHTML =''
    const svgCar = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const useElem = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    useElem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', './sprite.svg#car');
    svgCar.appendChild(useElem);
    svgCar.setAttributeNS(null, 'fill', `${car.color}`)
    svgCar.classList.add('car');
    const flagImg = document.createElement('img');
    flagImg.classList.add('flag');
    flagImg.setAttribute('src', './flag.svg');
    flagImg.setAttribute('alt', 'Finish flag');
    divCarFlag.append(svgCar);
    divCarFlag.append(flagImg);
    return divCarFlag;
}

export default drawGarageView;


