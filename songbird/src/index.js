import './styles/main.scss';
import birdsData from "./birds";
import getButtonColorChanged from './getButtonColorChanged';
import getBirdToGuess from './getBirdToGuess';
import getAnswers from './getAnswers';
import playAudio from './playAudio';

//singin Hens
const buttonOn = document.querySelector('.start__button_sound');
const soundHens = new Audio('Hens_song.mp3');
if (buttonOn) {

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
}



if (document.querySelector('.play')){

  let level =0;
  let score =0;
  const birdHidden = getBirdToGuess(level);
  console.log(birdHidden);
  getAnswers(level);
  const audio = new Audio();

  
  const playButton = document.querySelector(".guess__playback-button");
  let isPlay = false;
  /*function playAudio(birdHidden, audio) {
    if (!isPlay) {
      let timePause=0;
      audio.src = birdHidden.audio;
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
  }*/

  playButton.addEventListener("click", () => {
    playAudio(birdHidden, audio, isPlay);
    isPlay=!isPlay;
  });

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













