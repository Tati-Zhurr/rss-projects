import deleteCar from "../requests/deleteCar";
function drawButton(buttonName: string){
    const button = document.createElement('button');
    button.classList.add('button');
    button.classList.add(`button_${buttonName.split(' ')[0]}`);
    button.textContent = buttonName.toUpperCase();
    if (button.classList.contains('button_remove')) {
        button.addEventListener('click', () => {
            console.log('yes');
           const carBlock = button.closest('.car-block');
           if (carBlock instanceof HTMLElement) {
            const carId = carBlock.getAttribute('id');
            if (carId) {
                deleteCar(carId);
            }    
           }
        })
    } 
    return button;
}

export default drawButton;
