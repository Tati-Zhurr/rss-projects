function getAudioReset(audio, button, isPlay){
    audio.pause();
    button.classList.remove('pause');
    isPlay =!isPlay;
}

export default getAudioReset;