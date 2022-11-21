import birdHidden from "./index";
import progressAudio from "./progressAudio";
import getTimeFromNum from "./getTimeFromNum";

const playButton = document.querySelector(".guess__playback-button");
const block = document.querySelector('.block-guess');
const currentTime = block.querySelector('.current-time');
const thumb = block.querySelector('.timebar-circle');
const progressBar = block.querySelector('.timebar-bar');
const duration = block.querySelector('.duration');


 
async function playAudio(birdHidden, audio, isPlay) {
    if (!isPlay) {
      audio.src = await birdHidden.audio;
      audio.currentTime = 0;
      audio.play();
     // isPlay = true;
      playButton.classList.add("pause");

      audio.addEventListener(
        "loadeddata",
        () => {
          duration.textContent =`${getTimeFromNum(audio.duration)}`;
          audio.volume = 0.75;
        },
        false
      );

      duration.textContent =`${getTimeFromNum(audio.duration)}`;
      console.log(audio.duration);
    } else if (isPlay) {
      audio.pause();
      audio.currentTime = 0;
      currentTime.textContent = '00:00';
      progressBar.style.background = `linear-gradient(to right, #1e797f 0%, rgb(61, 133, 140) 0%, #f0c592 2.90146%, #c93a3d 100%)`;
      thumb.style.left = '0%';
      duration.textContent ='00:00';
      
     // isPlay = false;

      if (audio.currentTime === audio.duration) {
        audio.currentTime = 0;
        currentTime.textContent = '00:00';
        progressBar.style.background = `linear-gradient(to right, #1e797f 0%, rgb(61, 133, 140) 0%, #f0c592 2.90146%, #c93a3d 100%)`;
        thumb.style.left = '0%';
      }
      //timePause = audio.currentTime;
      //audio.currentTime = 0;
      playButton.classList.remove("pause");
    }

    
  }

  

 

  export default playAudio;

  