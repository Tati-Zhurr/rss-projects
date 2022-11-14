function getButtonColorChanged (){
  const buttonPlay = document.querySelector('.button__nav_play');
  buttonPlay.classList.toggle('press');
  setTimeout(getButtonColorChanged, 1000);
}

export default getButtonColorChanged;