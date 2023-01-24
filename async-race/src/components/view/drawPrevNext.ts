/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import drawButton from './drawButton';

function drawPrevNext() {
  const divPrevNext = document.createElement('div');
  divPrevNext.classList.add('buttons-wrapper');
  const buttonsOptions = ['prev', 'next'];
  const buttons = buttonsOptions.map((e) => drawButton(e));
  buttons.forEach((e) => {
    divPrevNext.append(e);
  });
  return divPrevNext;
}

export default drawPrevNext;
