import birdsData from "./birds";
const playButton = document.querySelector(".card__playback-button");


function playAudioCard(level, cardId, isPlay, audio) {
    if (!isPlay) {
      
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
  
  export default playAudioCard;
  
