const imgBird = document.querySelector('.img-guess');
const nameBird = document.querySelector('.name-guess');
function getHiddenBirdCard(birdHidden){
    imgBird.src = birdHidden.image;
    nameBird.textContent = birdHidden.name;
    console.log('correct');
}
export default getHiddenBirdCard;