function areEqual(numberMatrix,  matrixResult, a){
    for (let i=0; i<a; i++){
        for(let j=0; j<a; j++){
            if (numberMatrix[i][j]!==matrixResult[i][j]){
            return false;
            }
        }
    }
    return true;
}
export default areEqual;