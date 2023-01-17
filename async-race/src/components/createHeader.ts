function createHeader () {
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const headerWrapper = document.createElement('div');
    headerWrapper.classList.add('header__wrapper');
    const buttonGarage = document.createElement('button');
    buttonGarage.classList.add('button');
    buttonGarage.classList.add('button_to-garage');
    buttonGarage.innerHTML = 'TO GARAGE'
    headerWrapper.appendChild(buttonGarage);
    const buttonWinners = document.createElement('button');
    buttonWinners.classList.add('button');
    buttonWinners.classList.add('button_to-winners');
    buttonWinners.innerHTML = 'TO WINNERS'
    headerWrapper.appendChild(buttonWinners);
    header.appendChild(headerWrapper);

    if (body instanceof HTMLElement){
        body.prepend(header);
    }
    
}

export default createHeader;