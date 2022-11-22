import birdsData from "./birds";
import getTimeFromNum from "./getTimeFromNum";

const playButton = document.querySelector(".card__playback-button");
const block = document.querySelector('.select');


function playAudioCard(level, cardId, isPlay, audio) {

  const currentTime = block.querySelector('.current-time');
  const thumb = block.querySelector('.timebar-circle');
  const progressBar = block.querySelector('.timebar-bar');
  const duration = block.querySelector('.duration');

    if (!isPlay) {
      
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

    } else if (isPlay) {
      audio.pause();
      audio.currentTime = 0;
      currentTime.textContent = '00:00';
      progressBar.style.background = `linear-gradient(to right, #1e797f 0%, rgb(61, 133, 140) 0%, #f0c592 2.90146%, #c93a3d 100%)`;
      thumb.style.left = '0%';
      duration.textContent ='00:00';
    

      if (audio.currentTime === audio.duration) {
        audio.currentTime = 0;
        currentTime.textContent = '00:00';
        progressBar.style.background = `linear-gradient(to right, #1e797f 0%, rgb(61, 133, 140) 0%, #f0c592 2.90146%, #c93a3d 100%)`;
        thumb.style.left = '0%';
      }

     
      playButton.classList.remove("pause");
    }
    
  }
  
  export default playAudioCard;
  
