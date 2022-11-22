function changeLanguageMainPage(lang){
    const buttonNavPlay = document.querySelector('.button__nav');
    const langImg = document.querySelector('.img_lang');
    if (lang){
        buttonNavPlay.textContent = "LET'S PLAY?";
        langImg.classList.remove('en');

    } else {
        buttonNavPlay.textContent = "Поиграем?";
        langImg.classList.add('en');
    }
    
}

export default changeLanguageMainPage;