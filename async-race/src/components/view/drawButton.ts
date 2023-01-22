function drawButton(buttonName: string){
    const button = document.createElement('button');
    button.classList.add('button');
    button.classList.add(`button_${buttonName.split(' ')[0]}`);
    button.textContent = buttonName.toUpperCase();
    return button;
}

export default drawButton;
