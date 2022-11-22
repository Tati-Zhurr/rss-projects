const imgBird = document.querySelector('.img-guess');
const nameBird = document.querySelector('.name-guess');

function hideNewBird(){
    imgBird.style.backgroundImage = '';
    nameBird.textContent = '******';
}
export default hideNewBird;
