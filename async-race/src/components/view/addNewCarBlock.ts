import { ICar } from '../types/interfaces';
import drawOptionsCarBlock from './drawOptionsCarBlock';
import drawStartBackCarBlock from './drawStartBackCarBlock';
import drawCarFlagCarBlock from './drawCarFlagCarBlock';

function addNewCarBlock(car: ICar) {
  const carBlock = document.createElement('div');
  carBlock.classList.add('car-block');
  carBlock.setAttribute('id', `${car.id}`);

  const divOptions = drawOptionsCarBlock(car);
  const divStartBack = drawStartBackCarBlock();
  const divCarFlag = drawCarFlagCarBlock(car);

  carBlock.appendChild(divOptions);
  carBlock.appendChild(divStartBack);
  carBlock.appendChild(divCarFlag);
  const mainBlock = document.querySelector('.main-block');
  if (mainBlock instanceof HTMLDivElement) {
    mainBlock.append(carBlock);
  }
}

export default addNewCarBlock;
