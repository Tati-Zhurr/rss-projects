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



    let thumb = document.querySelector('.timebar-circle');
    const timeBar = document.querySelector('.timebar');
    const progress = document.querySelector('.timebar-bar');
    const block = document.querySelector('.block-guess');
    let progressValue;
    let newTimeAudio;
    let newLeft;
    

    timeBar.onmousedown = function(event) {
      if (isPlay){
        event.preventDefault(); // prevent selection start (browser action)

        let shiftX = event.clientX - thumb.getBoundingClientRect().left;
        // shiftY not needed, the thumb moves only horizontally
  
        timeBar.addEventListener('mousemove', onMouseMove);
        timeBar.addEventListener('mouseup', onMouseUp);
  
        function onMouseMove(event) {
          newLeft = event.clientX - shiftX - timeBar.getBoundingClientRect().left;
          
  
          // the pointer is out of slider => lock the thumb within the bounaries
          if (newLeft < 0) {
            newLeft = 0;
          }
          let rightEdge = timeBar.offsetWidth - thumb.offsetWidth;
          if (newLeft > rightEdge) {
            newLeft = rightEdge;
          }
          
          thumb.style.left = newLeft + 'px';
          progressValue = newLeft/timeBar.offsetWidth;
          newTimeAudio = progressValue* audio.duration;
          audio.currentTime = newTimeAudio;
          progress.style.background = `linear-gradient(to right, #1e797f 0%, rgb(61, 133, 140) ${progressValue*100}%, #f0c592 2.90146%, #c93a3d 100%)`;
        }
  
        function onMouseUp() {
          timeBar.removeEventListener('mouseup', onMouseUp);
          timeBar.removeEventListener('mousemove', onMouseMove);
        }
  
      };
  
      thumb.ondragstart = function() {
        return false;
      };
  
        
      }

     setInterval(() => {
      progressAudio(audio, block)
    }, 300);

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
    
      /*function getTimeCodeFromNum(num) {
        let seconds = parseInt(num);
        let minutes = parseInt(seconds / 60);
        seconds -= minutes * 60;
        const hours = parseInt(minutes / 60);
        minutes -= hours * 60;
        if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
        return `${String(hours).padStart(2, 0)}:${minutes}:${String(
          seconds % 60
        ).padStart(2, 0)}`;
      }
    
      audio.addEventListener(
        "loadeddata",
        () => {
          block.querySelector(".length").textContent = getTimeCodeFromNum(
            audio.duration
          );
          audio.volume = 0.75;
        },
        false
      );
    };*/
     
  
  
}










//audio-player
/*const player1 = document.querySelector(".guess__controls");
const player2 = document.querySelector(".card__controls");
let isPlay = false;
const audio1 = new Audio();
const audio2 = new Audio();

const audioPlayer = (player, song, audio) => {
  const playButton = player.querySelector(".playback-button");
  let timePause = 0;

  function playAudio() {
    if (!isPlay) {
      audio.src = song;
      audio.currentTime = timePause;
      audio.play();
      isPlay = true;
      playButton.classList.add("pause");
    } else if (isPlay) {
      audio.pause();
      isPlay = false;

      if (audio.currentTime === audio.duration) {
        audio.currentTime = 0;
      }
      timePause = audio.currentTime;
      //audio.currentTime = 0;
      playn.classList.remove("pause");
    }
  }

  playButton.addEventListener("click", () => {
    playAudio();
  });

  //click on timeline
  const timeline = block.querySelector(".timeline");
  timeline.addEventListener(
    "click",
    (e) => {
      const timelineWidth = window.getComputedStyle(timeline).width;
      const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
      audio.currentTime = timeToSeek;
    },
    false
  );

  //click volume slider to change volume
  block.querySelector(".volume-button").addEventListener("click", () => {
    const volumeEl = block.querySelector(".volume");
    audio.muted = !audio.muted;
    if (audio.muted) {
      volumeEl.classList.remove("icono-volumeMedium");
      volumeEl.classList.add("icono-volumeMute");

      block.querySelector(".volume-percentage").style.width = 0 + "%";
    } else {
      volumeEl.classList.add("icono-volumeMedium");
      volumeEl.classList.remove("icono-volumeMute");
      block.querySelector(".volume-percentage").style.width = 75 + "%";
    }
  });

  //click volume slider to change volume
  const volumeSlider = block.querySelector(".volume-slider");

  volumeSlider.addEventListener(
    "click",
    (e) => {
      const sliderWidth = window.getComputedStyle(volumeSlider).width;
      const newVolume = e.offsetX / parseInt(sliderWidth);
      audio.volume = newVolume;
      block.querySelector(".volume-percentage").style.width =
        newVolume * 100 + "%";
    },
    false
  );
  block.querySelector(".volume_container").addEventListener("mouseover", () => {
    volumeSlider.classList.add("hover_volume");
  });
  block.querySelector(".volume_container").addEventListener("mouseout", () => {
    volumeSlider.classList.remove("hover_volume");
  });

  //advanced player

  setInterval(() => {
    const progressBar = block.querySelector(".progress");
    progressBar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
    block.querySelector(".current").textContent = getTimeCodeFromNum(
      audio.currentTime
    );
  }, 300);

  function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;
    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
      seconds % 60
    ).padStart(2, 0)}`;
  }

  audio.addEventListener(
    "loadeddata",
    () => {
      block.querySelector(".length").textContent = getTimeCodeFromNum(
        audio.duration
      );
      audio.volume = 0.75;
    },
    false
  );
};
audioPlayer(blockPlayer1, birdsData[level][solution].audio, audio1);
*/













