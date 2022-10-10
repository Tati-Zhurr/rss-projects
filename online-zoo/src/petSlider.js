export default getNewCards;
const cardsWrapper = document.querySelector('.pets__cards');
const arrOfCards = [...document.querySelectorAll('.pet')];
let arrGridArea = ['1/1', '1/2', '1/3', '2/1', '2/2', '2/3'];


function getNewCards() {
    const shuffledGridAreas = shuffle(arrGridArea);
    arrOfCards.forEach(card => {
    card.style.gridArea = shuffledGridAreas.pop();
});
};

function shuffle(array){
    let randomNumber = Math.floor(Math.random()*array.length);
    let shuffledArr =[];
    let arrOfIndex =[];
    
    while (shuffledArr.length !== array.length){
        while (arrOfIndex.includes(randomNumber)){
            randomNumber = Math.floor(Math.random()*array.length);
        };
        
        arrOfIndex.push (randomNumber);
        shuffledArr.push(array[randomNumber]);
    };

    return shuffledArr;

}