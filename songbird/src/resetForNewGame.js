const blocLevels =document.querySelector('.categories-block');
const sectionGuess = document.querySelector('.guess');
const sectionSelect = document.querySelector('.select');
const button = document.querySelector('.play__button_next');
const wrapper = document.querySelector('.play__wrapper');
const textScore = document.querySelector('.score');


function resetForNewGame (){
    textScore.style.display ='block'; 
    blocLevels.style.display ='flex';
    sectionGuess.style.display ='block';
    sectionSelect.style.display ='flex';
    wrapper.classList.remove('results__wrapper');
    const resultBlock = document.querySelector('.results-block');
    resultBlock.remove();
    button.textContent = 'Next question';
    button.classList.remove('play_again');
}

export default resetForNewGame;