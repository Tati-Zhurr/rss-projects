const imgBird = document.querySelector('.img-guess');
const nameBird = document.querySelector('.name-guess');

function getHiddenBirdCard(birdHidden){
    imgBird.style.backgroundImage = `url(${birdHidden.image})`;
    nameBird.textContent = birdHidden.name;
}
export default getHiddenBirdCard;