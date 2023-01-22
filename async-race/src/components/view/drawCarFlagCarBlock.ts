import { ICar } from "../types/interfaces";
function drawCarFlagCarBlock (car: ICar){
    const divCarFlag = document.createElement('div');
    divCarFlag.classList.add('car-flag');
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
export default drawCarFlagCarBlock;
