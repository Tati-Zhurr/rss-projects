import birdsData from "./birds";
import birdsDataEnglish from "./birdsEnglish";


function getBirdCard(cardId, level, lang){
   
    const imgBird = document.querySelector('.img-bird');
    const birdName = document.querySelector('.bird-name');
    const latinName = document.querySelector('.species');
    
    if (lang){
        imgBird.src = birdsDataEnglish[level][cardId].image;
        birdName.textContent = birdsDataEnglish[level][cardId].name;
        latinName.textContent = birdsDataEnglish[level][cardId].species;
    } else {
        imgBird.src = birdsData[level][cardId].image;
        birdName.textContent = birdsData[level][cardId].name;
        latinName.textContent = birdsData[level][cardId].species;
    }
    
}

export default getBirdCard;

