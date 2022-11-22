function changeLanguagePlayPage(lang){
    const langImg = document.querySelector('.img_lang');
    const playButtonNext = document.querySelector('.play__button_next');
    const scoreText = document.querySelector('.score_text');
    const instructions = document.querySelector('.instructions');
    const categorigies = document.querySelector('.categories-block');
    const allCategorigiesEng = ['Warming-up', 'Passerines', 'Forest birds', 'Songbirds', 'Predator birds', 'Sea birds'];
    const allCategorigies = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
   
    if (lang){
        langImg.classList.remove('en');
        playButtonNext.textContent ='Next question';
        scoreText.textContent = 'Score: ';
        instructions.innerHTML = 'Listen to the player.' + '<br>' + 'Select a bird from the list.';
        for (let i=0; i< 6; i++){
            categorigies.childNodes[i].textContent = allCategorigiesEng[i];
        }
        

    } else {
       langImg.classList.add('en');
       playButtonNext.textContent ='Следующий вопрос';
       scoreText.textContent = 'Счет: ';
       instructions.innerHTML = 'Послушайте плеер.' + '<br>' + 'Выберите птицу из списка.';
       for (let i=0; i< 6; i++){
        categorigies.childNodes[i].textContent = allCategorigies[i];
    }
    }
}

export default changeLanguagePlayPage;