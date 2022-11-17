const soundFailed = new Audio('Rooster-Clucks.mp3');
const soundCorrect = new Audio('Rooster-sound.mp3');
function  isCorrectAnswer(birdHidden, el, cardId){
    const answerSelected =el;
    const indicator = answerSelected.firstChild;
    if (cardId == (birdHidden.id -1)){
      indicator.style.backgroundColor = '#1e797f';
      soundCorrect.play();
      return true;
    } 
      indicator.style.backgroundColor = '#c93a3d';
      soundFailed.play();
      return false;
}

export default isCorrectAnswer;


