import getTimeFromNum from "./getTimeFromNum";

function progressAudio(audio, audioBlock){
    const progressBar = audioBlock.querySelector('.timebar-bar');
    const thumb = audioBlock.querySelector('.timebar-circle');
    const currentTime = audioBlock.querySelector('.current-time');
    const duration = audioBlock.querySelector('.duration');
    let progressAudio = audio.currentTime/audio.duration;
        progressBar.style.background = `linear-gradient(to right, #1e797f 0%, rgb(61, 133, 140) ${progressAudio*100}%, #f0c592 2.90146%, #c93a3d 100%)`;
        thumb.style.left = `${progressAudio*100}` + '%';
        currentTime.textContent = getTimeFromNum(audio.currentTime);

        if (audio.currentTime === audio.duration) {
            audio.currentTime = 0;
            currentTime.textContent = '00:00';
            progressBar.style.background = `linear-gradient(to right, #1e797f 0%, rgb(61, 133, 140) 0%, #f0c592 2.90146%, #c93a3d 100%)`;
            thumb.style.left = '0%';
            duration.textContent ='00:00';
          }
    
}



export default progressAudio;