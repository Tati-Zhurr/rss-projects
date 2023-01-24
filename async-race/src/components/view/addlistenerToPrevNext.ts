import getNextPage from './getNextPage';
import getPrevPage from './getPrevPage';

function addListenerToPrevNext(block: HTMLElement, page: number, totalPage: number) {
  const buttonPrev = block.firstChild;
  const buttonNext = block.lastChild;
  if ((buttonPrev instanceof HTMLElement) && (buttonNext instanceof HTMLElement)) {
    if (totalPage === 1) {
      buttonPrev.classList.add('disabled');
      buttonNext.classList.add('disabled');
    }
    if (page === 1) {
      buttonPrev.classList.add('disabled');
      buttonNext.addEventListener('click', getNextPage);
    } else if ((page > 1) && (page < totalPage)) {
      buttonNext.addEventListener('click', getNextPage);
      buttonPrev.addEventListener('click', getPrevPage);
    } else if (page === totalPage) {
      buttonNext.classList.add('disabled');
      buttonPrev.addEventListener('click', getPrevPage);
    }
  }
}

export default addListenerToPrevNext;
