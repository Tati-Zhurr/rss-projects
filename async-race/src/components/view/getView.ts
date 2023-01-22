
function getView(garageView: boolean) {
    const divGarage = document.querySelector('.garage');
    const divWinners = document.querySelector('.winners');
    
    if (garageView) {
        if ((divWinners instanceof HTMLDivElement)&&(divGarage instanceof HTMLDivElement)) {
            divWinners.classList.add('hidden');
            divGarage.classList.remove('hidden');
        }     
    } else {
        if ((divWinners instanceof HTMLDivElement)&&(divGarage instanceof HTMLDivElement)) {
            divGarage.classList.add('hidden');
            divWinners.classList.remove('hidden');
        }   
    };
};

export default getView;