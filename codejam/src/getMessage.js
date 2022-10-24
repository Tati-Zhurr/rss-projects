function getMessage(counter, totalSeconds){
    let main = document.querySelector('main');
    let wrapperMessage =document.createElement('div');
    wrapperMessage.classList.add('message__wrapper');
    let divMessage = document.createElement('div');
    divMessage.classList.add('message_block');
    let cross =document.createElement('span');
    cross.classList.add('cross');
    divMessage.append(cross);
    let h1 = document.createElement('h1');
    let minute = Math.floor(totalSeconds/60);
    let seconds = totalSeconds - minute*60;
    if(minute < 10){
        minute = "0"+minute;
           };
           if(seconds < 10){
            seconds = "0"+seconds;
           }
    h1.append(`Hooray! You solved the puzzle in ${minute}:${seconds} and ${counter} moves!`);
    divMessage.append(h1);
   let buttonRestart = document.querySelector('#shuffle');
   let clonedButtonRestart = buttonRestart.cloneNode();
   clonedButtonRestart.append('Play again');
   clonedButtonRestart.classList.add('restart');
   divMessage.appendChild(clonedButtonRestart);
    wrapperMessage.append(divMessage);
    main.append(wrapperMessage);
}
export default getMessage;