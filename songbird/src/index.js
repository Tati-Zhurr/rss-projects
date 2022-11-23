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
import playAudioGallery from './playAudioGallery';
import stopPrevAudio from './stopPrevAudio';
import getBirdCardGallery from './getBirdCardGallery';
import birdsDataGalleryEnglish from "./birdsGalleryEnglish";
import birdsDataGallery from './birdsGallery';
import changeLanguageGalleryPage from './changeLanguageGalleryPage';


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



const gallery = document.querySelector('.gallery');
if (gallery){
  let lang = true;
  const langButton= document.querySelector('.img_lang');
  langButton.addEventListener('click', ()=>{
  changeLanguageGalleryPage(lang);
  lang=!lang;
})

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
    changeLanguageGalleryPage(lang);
  }
};

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
  let isPlay = false;
  let audioBird = new Audio();
  let buttonPlay;
  let blockBird;

  const bird = gallery.querySelector('.bird');
  if (lang){
    getBirdCardGallery(bird, birdsDataGalleryEnglish[0]);
  } else {
    getBirdCardGallery(bird, birdsDataGallery[0]);
  };

  /*const birdImg =gallery.querySelector('.img-bird');
  const birdName = gallery.querySelector('.bird-name');
  const latinName = gallery.querySelector('.species');
  const birdDescription = gallery.querySelector('.bird-description');

  birdImg.src = birdsDataGalleryEnglish[0].image;
  birdName.textContent = birdsDataGalleryEnglish[0].name;
  latinName.textContent = birdsDataGalleryEnglish[0].species;
  birdDescription.textContent = birdsDataGalleryEnglish[0].description;*/

  for (let i=2; i < birdsDataGalleryEnglish.length+1; i++){
   let nextBird = bird.cloneNode(true);
   if (lang){
    getBirdCardGallery(nextBird, birdsDataGalleryEnglish[i-1]);
  } else {
    getBirdCardGallery(nextBird, birdsDataGallery[i-1]);
  }

   /*const nextBirdImg =nextBird.querySelector('.img-bird');
   const nextBirdName = nextBird.querySelector('.bird-name');
   const nextBirdLatinName = nextBird.querySelector('.species');
   const nextBirdDescription = nextBird.querySelector('.bird-description');
   
   nextBirdImg.src = birdsDataGalleryEnglish[i-1].image;
   nextBirdName.textContent = birdsDataGalleryEnglish[i-1].name;
   nextBirdLatinName.textContent = birdsDataGalleryEnglish[i-1].species;
   nextBirdDescription.textContent = birdsDataGalleryEnglish[i-1].description;*/

   gallery.append(nextBird);
   nextBird.id = `${i}`;
  }

  audioBird.addEventListener('ended', ()=>{
    buttonPlay.classList.remove('pause');
    isPlay=!isPlay;
  } );

 

  
  gallery.addEventListener('click', (event)=>{
    if (event.target.classList.contains('button__img_volume')){
      let button = event.target;
      changeVolume(button, audioBird);

    } else if (event.target.classList.contains('button__img_sound')){
      if (event.target !== buttonPlay ){
        setInterval(() => {
          progressAudio(audioBird, blockBird)
        }, 300);
        stopPrevAudio(buttonPlay, blockBird, audioBird);
      };

    buttonPlay = event.target;
    blockBird  =buttonPlay.closest('.bird');
    let idBird =  blockBird.id;
    let audioBirdSource = birdsDataGalleryEnglish[idBird-1].audio;
    playAudioGallery(audioBirdSource, audioBird, isPlay, blockBird );
    isPlay =!isPlay;
  }

}
)
}



















