function moveThumbAudio (event, block, isPlay, audioPlaying) {
    const thumb = block.querySelector('.timebar-circle');
    const timeBar= block.querySelector('.timebar');
    const progress = block.querySelector('.timebar-bar');
    

    if (isPlay){
      event.preventDefault(); // prevent selection start (browser action)

      let shiftX = event.clientX - thumb.getBoundingClientRect().left;
      // shiftY not needed, the thumb moves only horizontally

      timeBar.addEventListener('mousemove', onMouseMove);
      timeBar.addEventListener('mouseup', onMouseUp);

      function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - timeBar.getBoundingClientRect().left;
        

        // the pointer is out of slider => lock the thumb within the bounaries
        if (newLeft < 0) {
          newLeft = 0;
        }
        let rightEdge = timeBar.offsetWidth - thumb.offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }
        
        thumb.style.left = newLeft + 'px';
        let progressValue = newLeft/timeBar.offsetWidth;
        let newTimeAudio = progressValue* audioPlaying.duration;
        audioPlaying.currentTime = newTimeAudio;
        progress.style.background = `linear-gradient(to right, #1e797f 0%, rgb(61, 133, 140) ${progressValue*100}%, #f0c592 2.90146%, #c93a3d 100%)`;
      }

      function onMouseUp() {
        timeBar.removeEventListener('mouseup', onMouseUp);
        timeBar.removeEventListener('mousemove', onMouseMove);
      }

    };

    if (audioPlaying.currentTime === audioPlaying.duration) {
      thumb.style.left = '0px';
      progress.style.background = `linear-gradient(to right, #1e797f 0%, rgb(61, 133, 140) %, #f0c592 2.90146%, #c93a3d 100%)`  
    }

    thumb.ondragstart = function() {
      return false;
    };  
    }

    export default moveThumbAudio;