function stopPrevAudio(buttonPlay, block, audio){
    if (buttonPlay){
    const currentTime = block.querySelector('.current-time');
    const thumb = block.querySelector('.timebar-circle');
    const progressBar = block.querySelector('.timebar-bar');
    const duration = block.querySelector('.duration');
    const playButton = block.querySelector('.card__playback-button');
  
    audio.pause();
    audio.currentTime = 0;
    audio.volume =0.75;
    currentTime.textContent = '00:00';
    progressBar.style.background = `linear-gradient(to right, #1e797f 0%, rgb(61, 133, 140) 0%, #f0c592 2.90146%, #c93a3d 100%)`;
    thumb.style.left = '0%';
    duration.textContent ='00:00';
    playButton.classList.remove("pause");
    }
    
}

export default stopPrevAudio;