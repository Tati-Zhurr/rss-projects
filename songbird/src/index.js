import './styles/main.scss';
import birdsData from "./birds";
import getButtonColorChanged from './getButtonColorChanged';
import getBirdToGuess from './getBirdToGuess';
import getAnswers from './getAnswers';
import playAudio from './playAudio';
import getBirdCard from './getBirdCard';
import isCorrectAnswer from './isCorrectAnswer';
import playAudioCard from './playAudioCard';
import getAudioReset from './getAudioReset';
import getHiddenBirdCard from './getHiddenBirdCard';
import showResults from './showResults';
import hideNewBird from './hideNewBird';
import resetForNewGame from './resetForNewGame';
import progressAudio from './progressAudio';
import myComment from './myComment';
import changeLanguageMainPage from './changeLanguageMainPage';
import changeLanguagePlayPage from './changeLanguageplayPage';
import changeVolume from './changeVolume';
import moveThumbAudio from './moveThumbAudio';


//singin Hens
const buttonOn = document.querySelector('.start__button_sound');
const soundHens = new Audio('Hens_song.mp3');
const langButton = document.querySelector('.img_lang');
let lang = true; //English

if (buttonOn) {
  
    langButton.addEventListener('click', ()=>{
      lang = !lang;
      changeLanguageMainPage(lang);
    });

    buttonOn.addEventListener('click', async ()=>{
        if (buttonOn.classList.contains('sound_off')){
            soundHens.pause();   
        } else {
          await soundHens.play();
        }
        buttonOn.classList.toggle('sound_off');
    })

    soundHens.addEventListener('ended', function(){
        buttonOn.classList.toggle('sound_off');
      });
    
      //button chenge color
      getButtonColorChanged();

      //lang
      function setLocalStorage() {
        localStorage.setItem('lang', lang);
      };

      function getLocalStorage() {
        if(localStorage.getItem('lang')) {
          if (localStorage.getItem('lang') === 'true'){
          lang = true;
          } else {
          lang = false;
          } 
          changeLanguageMainPage(lang);
        }
      };

      window.addEventListener('beforeunload', setLocalStorage);
      window.addEventListener('load', getLocalStorage);
}



if (document.querySelector('.play')){

  let level = 0;
  let score = 0;
  let scoreLevel = 5;
  

  let birdHidden = getBirdToGuess(level, lang);
  getAnswers(level, lang);

  const audio = new Audio();
  const playButton = document.querySelector(".guess__playback-button");
  let isPlay = false;

  langButton.addEventListener('click',()=>{
    lang = !lang;
    changeLanguagePlayPage(lang);
    birdHidden = getBirdToGuess(level, lang);
    getAnswers(level, lang);
    if (cardId){
      getBirdCard(cardId, level, lang);
    }
    
  });


  playButton.addEventListener("click", () => {
    playAudio(birdHidden, audio, isPlay);
    isPlay=!isPlay;
  });
   
  const cardBird = document.querySelector('.card-body');
  const instructions =document.querySelector('.instructions');
  const answerList = document.querySelector('.answer-list');
  const nextLevelButton = document.querySelector('.play__button_next');
  const actualScore = document.querySelector('.score_actual');
  const levelNameList = document.querySelector('.categories-block');
  

  let cardId;
  let answerCorrect;
  let audioCard = new Audio();

  answerList.addEventListener('click', (el) =>{
    cardBird.classList.remove('hidden');
    instructions.classList.add('hidden');
    let answerItem;
    if (el.target.id){
      answerItem = el.target;
    } else {
      answerItem = el.target.parentNode;
    };
    cardId = answerItem.id;

    if ((!answerCorrect)&&( !nextLevelButton.classList.contains('active'))){
        answerCorrect = isCorrectAnswer(birdHidden, answerItem, cardId);
    }
    
    audioCard.src = birdsData[level][cardId].audio;
    getBirdCard(cardId, level, lang);

    if (answerCorrect){
      score = score + scoreLevel;
      actualScore.textContent = `${score}`;
      getAudioReset(audio, playButton, isPlay);
      getAudioReset(audioCard, playButtonCard, isPlay2);
      getHiddenBirdCard(birdHidden);
      answerCorrect = false;
      if (level ===5){
        showResults(score, lang);
      } else{
        nextLevelButton.classList.add('active');
      } 
    } else {
      scoreLevel--;
    }
    
    });
    
   
    nextLevelButton.addEventListener('click', ()=>{
      if (nextLevelButton.classList.contains('active')){
        level++;
        resetForNextLevel(level);
      } else if (nextLevelButton.classList.contains('play_again')){
        score =0;
        level =0;
        scoreLevel =5;
        birdHidden = getBirdToGuess(level, lang);
        resetForNewGame();
        getAnswers(level, lang);
        hideNewBird();  
        resetForNextLevel (level);
        actualScore.textContent = `${score}`   
      }
      
    })
    
    
    //bird from card singing
    const playButtonCard = document.querySelector(".card__playback-button");
    let isPlay2 = false;
    if (playButtonCard){
      playButtonCard.addEventListener('click', () =>{
        playAudioCard(level, cardId, isPlay2, audioCard);
        isPlay2=!isPlay2; 
      })
    }
   
   audioCard.addEventListener('ended', ()=>{
      playButtonCard.classList.remove('pause');
      isPlay2=!isPlay2;
    } )

    audio.addEventListener('ended', ()=>{
      playButton.classList.remove('pause');
      isPlay=!isPlay;
    } )

    function resetForNextLevel (level){
      if (level === 0){
        levelNameList.childNodes[level].classList.add('category_selected');
        levelNameList.childNodes[level+5].classList.remove('category_selected');
      } else {
        levelNameList.childNodes[level-1].classList.remove('category_selected');
        levelNameList.childNodes[level].classList.add('category_selected');
      }
      const indicators = document.querySelectorAll('.answer-indicator');
      scoreLevel = 5;
      birdHidden = getBirdToGuess(level, lang);
      getAnswers(level, lang);
      hideNewBird();
      cardBird.classList.add('hidden');
      instructions.classList.remove('hidden');
      nextLevelButton.classList.remove('active');
      for (let indicator of indicators){
        indicator.style.backgroundColor = '';
      }
    }



    const timeBar = document.querySelector('.timebar');
    const block = document.querySelector('.block-guess');
    const buttonVolume = block.querySelector('.button__img_volume');
   
    const blockSelect = document.querySelector('.select');
    const timeBarSelect = blockSelect.querySelector('.timebar');
    const buttonVolumeSelect = blockSelect.querySelector('.button__img_volume');
   
    
    timeBar.onmousedown = function(event) {
      moveThumbAudio (event, block, isPlay, audio);
    }

    if (timeBarSelect){
      timeBarSelect.onmousedown = function(event) {
        moveThumbAudio (event, blockSelect, isPlay2, audioCard);
      }
    };

    buttonVolume.addEventListener('click', (event) =>{
      changeVolume(buttonVolume, audio)
    }); 

    buttonVolumeSelect.addEventListener('click', (event) =>{
      changeVolume(buttonVolumeSelect, audioCard)
    });

    setInterval(() => {
      progressAudio(audio, block)
    }, 300);

    setInterval(() => {
      progressAudio(audioCard, blockSelect)
    }, 300);

    //language
    window.addEventListener('beforeunload', setLocalStorage);
    window.addEventListener('load', getLocalStorage);

    function setLocalStorage() {
      localStorage.setItem('lang', lang);
    };

    function getLocalStorage() {
      if(localStorage.getItem('lang')) {
        if (localStorage.getItem('lang') === 'true'){
          lang = true;
        } else {
          lang = false;
        } 
        changeLanguagePlayPage(lang);
        getAnswers(level, lang);
      }
    };
    
}


















