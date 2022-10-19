import './styles/main.scss';
import myComment  from "./myComment";
import getNumbersMatrix from './getNumberMatrix';
import getBody from "./getBody";
import getMousePosition from "./getMousePosition";
import getTilesAgain from "./getTilesAgain";
//import countTime from "./timer";

let a=4;
let maxNumber=a*a;
let numberMatrix = getNumbersMatrix(a);
getBody(a, numberMatrix);

//timer

let timer = window.setInterval(countTime, 1000);
let totalSeconds=0;
function countTime() {
           ++totalSeconds;
           let minute = Math.floor(totalSeconds/60);
           let seconds = totalSeconds - minute*60;
           if(minute < 10){
            minute = "0"+minute;
           };
           if(seconds < 10){
            seconds = "0"+seconds;
           }
           document.querySelector(".time").innerHTML = 'Timer: '+ minute + ":" + seconds;
 }




let canvas = document.querySelector("canvas");
let moves = document.querySelector('.moves');
let counter =0;
//let matrixResult = getMatrixResult();
let buttonShuffle = document.querySelector('#shuffle');
let body = document.querySelector('body');

//restart
buttonShuffle.addEventListener('click', ()=>{
    numberMatrix = getNumbersMatrix(a);
    getTilesAgain(canvas, a, numberMatrix);
    moves.innerHTML= `Moves: 0`;
    counter =0;
   // clearInterval(timer);
    totalSeconds=0;
});

canvas.addEventListener("mousedown", function(e)
{ /*if (counter ===1){
    totalSeconds=0;
    timer= window.setInterval(countTime, 1000);
}*/
  let position=getMousePosition(canvas, e);
  let iOfTileClicked = position.i;
  let jOfTileClicked = position.j;
  let ctx = canvas.getContext('2d');
  if (jOfTileClicked+1 < a){
    if (numberMatrix[iOfTileClicked][jOfTileClicked+1] === maxNumber ) {
       let numberOfClickedTile = numberMatrix[iOfTileClicked][jOfTileClicked];
       numberMatrix[iOfTileClicked][jOfTileClicked] = maxNumber;
       ctx.fillStyle = '#929699';
       ctx.fillRect(10+jOfTileClicked*70, 10+iOfTileClicked*70, 69, 69);
       numberMatrix[iOfTileClicked][jOfTileClicked+1]=numberOfClickedTile;
       ctx.fillStyle = '#fcda69';
       ctx.fillRect(10+(jOfTileClicked+1)*70, 10+iOfTileClicked*70, 69, 69);
       ctx.fillStyle = '#333B41';
       ctx.font = '48px san-serif';
       ctx.textAlign = 'center';
       ctx.fillText(`${numberOfClickedTile}`, 10+(jOfTileClicked+1)*70+69/2, 10+iOfTileClicked*70+69/2+16);

       counter+=1;
       moves.innerHTML= `Moves: ${counter}`;
    }
  }
  if (jOfTileClicked-1 >=0){
    if (numberMatrix[iOfTileClicked][jOfTileClicked-1] === maxNumber ) {
       let numberOfClickedTile = numberMatrix[iOfTileClicked][jOfTileClicked];
       numberMatrix[iOfTileClicked][jOfTileClicked] = maxNumber;
       ctx.fillStyle = '#929699';
       ctx.fillRect(10+jOfTileClicked*70, 10+iOfTileClicked*70, 69, 69);
       numberMatrix[iOfTileClicked][jOfTileClicked-1]=numberOfClickedTile;
       ctx.fillStyle = '#fcda69';
       ctx.fillRect(10+(jOfTileClicked-1)*70, 10+iOfTileClicked*70, 69, 69);
       ctx.fillStyle = '#333B41';
       ctx.font = '48px san-serif';
       ctx.textAlign = 'center';
       ctx.fillText(`${numberOfClickedTile}`, 10+(jOfTileClicked-1)*70+69/2, 10+iOfTileClicked*70+69/2+16);

       counter+=1;
       moves.innerHTML= `Moves: ${counter}`;
    }
  }
  if (iOfTileClicked+1 < a){
    if (numberMatrix[iOfTileClicked+1][jOfTileClicked] === maxNumber ) {
       let numberOfClickedTile = numberMatrix[iOfTileClicked][jOfTileClicked];
       numberMatrix[iOfTileClicked][jOfTileClicked] = maxNumber;
       ctx.fillStyle = '#929699';
       ctx.fillRect(10+jOfTileClicked*70, 10+iOfTileClicked*70, 69, 69);
       numberMatrix[iOfTileClicked+1][jOfTileClicked]=numberOfClickedTile;
       ctx.fillStyle = '#fcda69';
       ctx.fillRect(10+(jOfTileClicked)*70, 10+(iOfTileClicked+1)*70, 69, 69);
       ctx.fillStyle = '#333B41';
       ctx.font = '48px san-serif';
       ctx.textAlign = 'center';
       ctx.fillText(`${numberOfClickedTile}`, 10+jOfTileClicked*70+69/2, 10+(iOfTileClicked+1)*70+69/2+16);

       counter+=1;
       moves.innerHTML= `Moves: ${counter}`;
    }
  }
  if (iOfTileClicked-1 >=0){
    if (numberMatrix[iOfTileClicked-1][jOfTileClicked] === maxNumber ) {
       let numberOfClickedTile = numberMatrix[iOfTileClicked][jOfTileClicked];
       numberMatrix[iOfTileClicked][jOfTileClicked] = maxNumber;
       ctx.fillStyle = '#929699';
       ctx.fillRect(10+jOfTileClicked*70, 10+iOfTileClicked*70, 69, 69);
       numberMatrix[iOfTileClicked-1][jOfTileClicked]=numberOfClickedTile;
       ctx.fillStyle = '#fcda69';
       ctx.fillRect(10+(jOfTileClicked)*70, 10+(iOfTileClicked-1)*70, 69, 69);
       ctx.fillStyle = '#333B41';
       ctx.font = '48px san-serif';
       ctx.textAlign = 'center';
       ctx.fillText(`${numberOfClickedTile}`, 10+jOfTileClicked*70+69/2, 10+(iOfTileClicked-1)*70+69/2+16);

       counter+=1;
       moves.innerHTML= `Moves: ${counter}`;
    }
  }
  return numberMatrix;
});

/*function isItSpace(i,j){
    if (numberMatrix[i][j-1]){
        if (numberMatrix[i][j-1] === maxNumber){
            let numberOfClickedTile = numberMatrix[i][j];
            numberMatrix[i][j] = maxNumber;
            ctx.fillStyle = '#929699';
            ctx.fillRect(10+j*70, 10+i*70, 69, 69);
            numberMatrix[i][j+1]=numberOfClickedTile;
            ctx.fillStyle = '#fcda69';
            ctx.fillRect(10+(j+1)*70, 10+i*70, 69, 69);
            ctx.fillStyle = '#333B41';
            ctx.font = '3rem san-serif';
            ctx.textAlign = 'center';
            ctx.fillText(`${numberOfClickedTile}`, 10+(j+1)*70+69/2, 10+i*70+69/2+16);
        }
    }

}*/


