import birdHidden from "./index";
const playButton = document.querySelector(".guess__playback-button");
 
async function playAudio(birdHidden, audio, isPlay) {
    const playButton = document.querySelector(".guess__playback-button");
    if (!isPlay) {
      audio.src = await birdHidden.audio;
      audio.currentTime = 0;
      audio.play();
     // isPlay = true;
      playButton.classList.add("pause");
    } else if (isPlay) {
      audio.pause();
     // isPlay = false;

      if (audio.currentTime === audio.duration) {
        audio.currentTime = 0;
      }
      //timePause = audio.currentTime;
      //audio.currentTime = 0;
      playButton.classList.remove("pause");
    }
    
  }

 

  export default playAudio;

  