import birdsData from "./birds";


function getBirdCard(cardId, level){
   
    const imgBird = document.querySelector('.img-bird');
    const birdName = document.querySelector('.bird-name');
    const latinName = document.querySelector('.species');
    
    imgBird.src = birdsData[level][cardId].image;
    birdName.textContent = birdsData[level][cardId].name;
    latinName.textContent = birdsData[level][cardId].species;
}

export default getBirdCard;

