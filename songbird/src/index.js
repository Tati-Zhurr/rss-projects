import './styles/main.scss';
import myComment  from "./myComment";
import getButtonColorChanged from './getButtonColorChanged';

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











