
function getNumbersMatrix(a){
    let  numberMatrix =[]
    let size = a*a;
    let numberTileArray = shuffle(size);
    for (let i=0; i<a; i++){
        let tilesRow =[];
        for ( let j=0; j<a; j++ ){
            let numberOfTile = numberTileArray.pop();
            tilesRow.push(numberOfTile);
        }
        numberMatrix.push(tilesRow);
    }
    return numberMatrix;
}

function shuffle(size){
    let randomNumber = Math.floor(Math.random()*size)+1;
    let shuffledArr =[];

    
    while (shuffledArr.length !== size){
        while (shuffledArr.includes(randomNumber)){
            randomNumber = Math.floor(Math.random()*size)+1;
        };
        
        shuffledArr.push (randomNumber);
    };

    return shuffledArr;

}

export default getNumbersMatrix;