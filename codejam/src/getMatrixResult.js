function getMatrixResult(a){
    let matrixResult = [];
    let number =1;
    for (let i=0; i< a;i++){
        let rowMatrix = [];
        for (let j=0; j<a; j++){
            rowMatrix.push(number);
            number++;
        }
        matrixResult.push(rowMatrix);
    }
    return matrixResult;
    
}
export default getMatrixResult;