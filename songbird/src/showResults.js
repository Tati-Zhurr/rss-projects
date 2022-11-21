const blocLevels =document.querySelector('.categories-block');
const sectionGuess = document.querySelector('.guess');
const sectionSelect = document.querySelector('.select');
const button = document.querySelector('.play__button_next');
const wrapper = document.querySelector('.play__wrapper');
const textScore = document.querySelector('.score');
const main = document.querySelector('.play');

function showResults(score){
    textScore.style.display ='none'; 
    blocLevels.style.display ='none';
    sectionGuess.style.display ='none';
    sectionSelect.style.display ='none';
    wrapper.classList.add('results__wrapper');
    if (score === 30){
        button.style.display ='none';
    }
    const resultBlock = document.createElement('div');
    const resultText = document.createElement('p');
    const resultImg = document.createElement('span');
    if (score === 30){
        resultText.textContent = `Fantastic result! You guessed it all!`;
    } else {
        resultText.textContent = `Your score: ${score}`;
    }
    resultBlock.append(resultText);
    resultBlock.append(resultImg);
    resultBlock.classList.add('results-block');
    resultText.classList.add('text-results');
    resultImg.classList.add('img-results');
    main.prepend(resultBlock);
    button.textContent = 'Play again!';
    button.classList.add('play_again');
}

export default showResults;