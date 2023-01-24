function drawStartBackCarBlock() {
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

export default drawStartBackCarBlock;
