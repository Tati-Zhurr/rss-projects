import birdHidden from "./index";
import progressAudio from "./progressAudio";
import getTimeFromNum from "./getTimeFromNum";




async function playAudioGallery(audioSource, audio, isPlay, blockBird) {

  const currentTime = blockBird.querySelector('.current-time');
  const thumb = blockBird.querySelector('.timebar-circle');
  const progressBar = blockBird.querySelector('.timebar-bar');
  const duration = blockBird.querySelector('.duration');
  const playButton = blockBird.querySelector('.card__playback-button');

    if (!isPlay) {
      audio.src = await audioSource;
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
      audio.volume =0.75;
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
      
      playButton.classList.remove("pause");
    }

    
  }

  

 

  export default playAudioGallery;

  