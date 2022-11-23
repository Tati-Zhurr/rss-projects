
function changeVolume(button, audio){
    let barVolume = button.nextElementSibling;
    barVolume.classList.toggle('active');

    barVolume.onmousedown = function (event){
    event.preventDefault();
    barVolume.addEventListener('mousemove', onMouseMove);
    barVolume.addEventListener('mouseup', onMouseUp);

      function onMouseMove(event) {
        let newLeft = event.clientX - barVolume.getBoundingClientRect().left;

         // the pointer is out of slider => lock the thumb within the bounaries
         if (newLeft < 0) {
           newLeft = 0;
         }
         let rightEdge = barVolume.offsetWidth;
         if (newLeft > rightEdge) {
           newLeft = rightEdge;
         }
         
         let progressVolume = newLeft/barVolume.offsetWidth;
         let newVolumeAudio = progressVolume;
         audio.volume = newVolumeAudio;
         barVolume.style.background = `linear-gradient(to right, #1e797f 0%, rgb(61, 133, 140) ${progressVolume*100}%, #f0c592 2.90146%, #c93a3d 100%)`;
       }

       function onMouseUp() {
        barVolume.classList.remove('active');
        barVolume.removeEventListener('mouseup', onMouseUp);
        barVolume.removeEventListener('mousemove', onMouseMove); 
      }

    };

    button.ondragstart = function() {
      return false;
    };

  }

  export default changeVolume;