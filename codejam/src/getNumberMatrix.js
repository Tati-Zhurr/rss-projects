
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
    if(isMatrixSolvable(a, numberMatrix)){
        return numberMatrix;
    } else {
       return getNumbersMatrix(a);
    }
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

    function isMatrixSolvable(a, numberMatrix){
        let space = a*a;
        let arrFromMatrix =[];
        let rowOfSpaceFromBottom;
        //getting arr from matrix
        for (let i=0; i<a; i++){
            for (let j=0; j<a; j++){
               if (numberMatrix[i][j] === space){
                //number of space row from the bottom
                rowOfSpaceFromBottom = a-i;
               } else{
                arrFromMatrix.push(numberMatrix[i][j]);
               }
               
            }
        };
       //getting inversions
        let invers = arrFromMatrix.reduce((invers, e, i, arrFromMatrix) =>{ 
            for (let n=i; n<arrFromMatrix.length; n++){
                if (arrFromMatrix[n-1]< arrFromMatrix[n]){
                    invers++
                }
            }
            return invers;
        } );
        if (a%2 === 0){
            if (((rowOfSpaceFromBottom % 2 ===0)&&(invers %2 !==0))||((rowOfSpaceFromBottom % 2 !==0)&&(invers %2 ===0))){
                return true;
            } else{
                return false;
            }
        } else{
            if (invers %2 ===0){
                return true
            } else{
                return false;
            }
        }

    }

   

export default getNumbersMatrix;