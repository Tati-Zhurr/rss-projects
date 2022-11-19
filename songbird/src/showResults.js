const blocLevels =document.querySelector('.categories-block');
const sectionGuess = document.querySelector('.guess');
const sectionSelect = document.querySelector('.select');
const button = document.querySelector('.play__button_next');
const textScore = document.querySelector('.score');

function showResults(score){
    blocLevels.style.display ='none';
    sectionGuess.style.display ='none';
    sectionSelect.style.display ='none';
    if (score === 30){
        button.style.display ='none';
    }
    button.textContent = 'Play again!';

}

export default showResults;