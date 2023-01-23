import deleteCar from "../requests/deleteCar";
import getCar from "../requests/getCar";
import updateCar from "../requests/updateCar";
import generateCars from "./generateCars";


function drawButton(buttonName: string){
    const button = document.createElement('button');
    button.classList.add('button');
    button.classList.add(`button_${buttonName.split(' ')[0]}`);
    button.textContent = buttonName.toUpperCase();
    if (button.classList.contains('button_remove')) {
        addListenerToRemoveBtn(button); 
    } else if (button.classList.contains('button_select')) {
        addListenerToSelectBtn(button); 
    } else if (button.classList.contains('button_generate')) {
        addListenerToGenerateBtn(button);
    }
    return button;
}

function addListenerToRemoveBtn (button: HTMLElement) {
    button.addEventListener('click', () => {
       const carBlock = button.closest('.car-block');
       if (carBlock instanceof HTMLElement) {
        const carId = carBlock.getAttribute('id');
        if (carId) {
            deleteCar(carId);
        }    
       }
    })
}

function addListenerToSelectBtn (button: HTMLElement) {
    button.addEventListener('click', () => {
       const carBlock = button.closest('.car-block');
       if (carBlock instanceof HTMLElement) {
        const carId = Number(carBlock.getAttribute('id'));
        if (carId) {
           getInputsUpdateReadyToCgange(carId);
        }    
       }
    })
}

const  getInputsUpdateReadyToCgange = async (id: number) => {
    const car = await getCar(id);
    const carPrevColor = car.color;
    const carPrevName = car.name;
    const inputNameUpdate = document.querySelector('.input-text_update');
    const inputColorUpdate = document.querySelector('.input-color_update');
    if ((inputColorUpdate instanceof HTMLInputElement) && (inputNameUpdate instanceof HTMLInputElement)) {
        inputNameUpdate.value = carPrevName;
        inputColorUpdate.value = carPrevColor;
        const buttonUpdate = document.querySelector('.button_update');
        if (buttonUpdate instanceof HTMLButtonElement) {
            inputNameUpdate.addEventListener('change', () => {
                updateHandler(id, inputNameUpdate.value, inputColorUpdate.value, buttonUpdate)
            })
            inputColorUpdate.addEventListener('change', () => {
                updateHandler(id, inputNameUpdate.value, inputColorUpdate.value, buttonUpdate)
            })
        }
    }
}

function updateHandler (id: number, name: string, color: string, button: HTMLButtonElement) {
    button.classList.remove('disabled');
    button.addEventListener('click', () =>{
        updateCar(id, name, color);
        })
}

function addListenerToGenerateBtn (button: HTMLElement) {
    button.addEventListener('click', () =>{
        generateCars();
        })
}

export default drawButton;
