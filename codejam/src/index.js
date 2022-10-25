import './styles/main.scss';
import myComment  from "./myComment";
import getNumbersMatrix from './getNumberMatrix';
import getMatrixResult from './getMatrixResult';
import getBody from "./getBody";
import getMousePosition from "./getMousePosition";
import getTilesAgain from "./getTilesAgain";
import getResults from "./getResults";
import getTileSize from './getTileSize';
import getMessage from './getMessage';
import areEqual from './areEqual';
//import countTime from "./timer";
let a=4;
let maxNumber=a*a;
let numberMatrix = getNumbersMatrix(a);
let matrixResult = getMatrixResult(a);
getBody(a, numberMatrix);


//size of frame
let otherSize = document.querySelector('.other_size');
let currentSize = document.querySelector('.current_size');

otherSize.addEventListener('click', (e)=>{
  if (e.target.classList.contains('a_3')){
   a=3;
  };
  if (e.target.classList.contains('a_4')){
   a=4;
  }
  if (e.target.classList.contains('a_5')){
    a=5;
   }
   if (e.target.classList.contains('a_6')){
    a=6;
   }
   if (e.target.classList.contains('a_7')){
     a=7;
   }
   if (e.target.classList.contains('a_8')){
    a=8;
   }
   maxNumber=a*a;
   numberMatrix = getNumbersMatrix(a);
   matrixResult = getMatrixResult(a);
   getTilesAgain(canvas, a, numberMatrix);
   currentSize.innerHTML = `Frame size: ${a}x${a}`;
   moves.innerHTML= `Moves: 0`;
   counter =0;
   clearInterval(timer);
   totalSeconds=0;
   if (!buttonPause.classList.contains('on_pause')){
     timer = setInterval(countTime, 1000);
   } else{
     time.innerHTML = 'Timer: '+ '00' + ":" + '00';
   }
   return numberMatrix;
})




//timer

let time =  document.querySelector(".time");
let timer = setInterval(countTime, 1000);
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
          time.innerHTML = 'Timer: '+ minute + ":" + seconds;
 }

 let buttonPause = document.querySelector('#pause');

 buttonPause.addEventListener('click', ()=>{
  buttonPause.classList.toggle('on_pause');
  if (buttonPause.classList.contains('on_pause')){
    buttonPause.innerHTML = 'Play';
    buttonPause.style.background ='#ab2f35'; 
    clearInterval(timer);
  } else{
    buttonPause.innerHTML = 'Pause';
    buttonPause.style.background ='';
    timer = setInterval(countTime, 1000);
  }
  
 })
 

 //sound
 const sound = new Audio('sound_tile.mp3');
 let soundButton = document.querySelector('#sound');
 
 soundButton.addEventListener('click', ()=>{
  soundButton.classList.toggle('sound_off');
 })



let canvas = document.querySelector("canvas");
//let ctx = canvas.getContext('2d');
let moves = document.querySelector('.moves');
let counter =0;
//let matrixResult = getMatrixResult();



//restart
let buttonShuffle = document.querySelector('#shuffle');

buttonShuffle.addEventListener('click', restart);

function restart(){
  numberMatrix = getNumbersMatrix(a);
    getTilesAgain(canvas, a, numberMatrix);
    moves.innerHTML= `Moves: 0`;
    counter =0;
    clearInterval(timer);
    totalSeconds=0;
    if (!buttonPause.classList.contains('on_pause')){
      timer = setInterval(countTime, 1000);
    } else{
      time.innerHTML = 'Timer: '+ '00' + ":" + '00';
    }

}


//canvas onclick

let bestResults=[100, 101, 102, 103, 104, 105, 106, 107, 108, 109];

canvas.addEventListener("click", function(e){ 
  if (!buttonPause.classList.contains('on_pause')&&(numberMatrix !== matrixResult)){
  let position=getMousePosition(canvas, e, a);
  let iOfTileClicked = position.i;
  let jOfTileClicked = position.j;
  //let ctx = canvas.getContext('2d');
  

  if (jOfTileClicked+1 < a){
    if (numberMatrix[iOfTileClicked][jOfTileClicked+1] === maxNumber ) {
      getTileMoved(iOfTileClicked, jOfTileClicked, iOfTileClicked, jOfTileClicked+1);
    
    }
  }
  if (jOfTileClicked-1 >=0){
    if (numberMatrix[iOfTileClicked][jOfTileClicked-1] === maxNumber ) {
      getTileMoved(iOfTileClicked, jOfTileClicked, iOfTileClicked, jOfTileClicked-1);
    
    }
  }
  if (iOfTileClicked+1 < a){
    if (numberMatrix[iOfTileClicked+1][jOfTileClicked] === maxNumber ) {
      getTileMoved(iOfTileClicked, jOfTileClicked, iOfTileClicked+1, jOfTileClicked);
     
    }
  }
  if (iOfTileClicked-1 >=0){
    if (numberMatrix[iOfTileClicked-1][jOfTileClicked] === maxNumber ) {
      getTileMoved(iOfTileClicked, jOfTileClicked, iOfTileClicked-1, jOfTileClicked);
      
    }
  }
  
  if ( areEqual(numberMatrix,  matrixResult, a)){
    clearInterval(timer);
    console.log('yes');
    bestResults.push(counter);
    bestResults.sort((a,b) => a-b);
    if (bestResults.length >10){
      bestResults.pop();
    }
    getMessage(counter, totalSeconds);
    let messageWrapper = document.querySelector('.message__wrapper');
   if (messageWrapper){
   let cross = document.querySelector('.cross');
   let buttonRestart = document.querySelector('.restart');
   let wrapperMessage = document.querySelector('.message__wrapper');
   wrapperMessage.addEventListener('click', (e)=>{
   if (e.target === wrapperMessage){
     wrapperMessage.remove();

   }
 })
 cross.addEventListener('click', ()=>{
   wrapperMessage.remove();
 });
 buttonRestart.addEventListener('click', ()=>{
  wrapperMessage.remove();
  restart();
});
}

  }
  return numberMatrix;
}});

//close message block

function getTileMoved(iOfTileClicked, jOfTileClicked, iOfSpace, jOfSpace){
  
  let screenWidth=window.screen.width;
  let tileSize = getTileSize(screenWidth, a);
  let fontSize;
  if (a=== 4){
      fontSize = 48;
    }   
    if (a ===3){
      fontSize = 48;
    }
    if (a===5){
      fontSize = 36;
    }
    if (a===6){
      fontSize = 32;
    }
    if (a===7){
      fontSize = 30;
    }
    if (a===8){
      fontSize = 24;
    }
  let ctx = canvas.getContext('2d');
  let numberOfClickedTile = numberMatrix[iOfTileClicked][jOfTileClicked];
       numberMatrix[iOfTileClicked][jOfTileClicked] = maxNumber;
     //  ctx.fillStyle = '#929699';
      // ctx.fillRect(10+jOfTileClicked*(tileSize+1), 10+iOfTileClicked*(tileSize+1), tileSize, tileSize);
       numberMatrix[iOfSpace][jOfSpace]=numberOfClickedTile;
     /* ctx.fillStyle = '#fcda69';
       ctx.fillRect(10+jOfSpace*(tileSize+1), 10+iOfSpace*(tileSize+1), tileSize, tileSize);
       ctx.fillStyle = '#333B41';
       ctx.font = `${fontSize}px san-serif `;
       ctx.textAlign = 'center';
       ctx.fillText(`${numberOfClickedTile}`, 10+jOfSpace*(tileSize+1)+tileSize/2, 10+iOfSpace*(tileSize+1)+tileSize/2+fontSize/3);
      */

       //animation
       let position =0;
       ctx.clearRect(10+jOfSpace*(tileSize+1), 10+iOfSpace*(tileSize+1), tileSize, tileSize);
       ctx.clearRect(10+jOfTileClicked*(tileSize+1), 10+iOfTileClicked*(tileSize+1), tileSize, tileSize);
       setInterval(function () {
        //clear the empty space
        if (position !== tileSize+1){
          ctx.fillStyle = '#929699';
          ctx.fillRect(10+jOfTileClicked*(tileSize+1)-(position-1)*(jOfTileClicked-jOfSpace), 10+iOfTileClicked*(tileSize+1)-(position-1)*(iOfTileClicked-iOfSpace), tileSize, tileSize);
          position++;
          ctx.fillStyle = '#fcda69';
          ctx.fillRect(10+jOfTileClicked*(tileSize+1)-position*(jOfTileClicked-jOfSpace), 10+iOfTileClicked*(tileSize+1)-position*(iOfTileClicked-iOfSpace), tileSize, tileSize);
          ctx.fillStyle = '#333B41';
          ctx.font = `${fontSize}px san-serif `;
          ctx.textAlign = 'center';
          ctx.fillText(`${numberOfClickedTile}`, 10+jOfTileClicked*(tileSize+1) +tileSize/2-position*(jOfTileClicked-jOfSpace), 10+iOfTileClicked*(tileSize+1)+tileSize/2+fontSize/3-position*(iOfTileClicked-iOfSpace));
        }
    }, 0.5);
    ctx.fillStyle = '#929699';
    ctx.fillRect(10+jOfTileClicked*(tileSize+1), 10+iOfTileClicked*(tileSize+1), tileSize, tileSize);
       counter+=1;
       moves.innerHTML= `Moves: ${counter}`;
       if (!soundButton.classList.contains('sound_off')){
        sound.play();
       }

}

/*let drag = false;
let xInit;
let yInit;
let iOfTileClicked;
let jOfTileClicked;
let screenWidth=window.screen.width;
     let tileSize = getTileSize(screenWidth, a);
     let fontSize;
     if (a=== 4){
        fontSize = 48;
      }   
      if (a ===3){
        fontSize = 48;
      }
      if (a===5){
        fontSize = 36;
      }
      if (a===6){
        fontSize = 32;
      }
      if (a===7){
        fontSize = 30;
      }
      if (a===8){
        fontSize = 24;
      }
canvas.onmousedown = function(e){
  if (!buttonPause.classList.contains('on_pause')&&(numberMatrix !== matrixResult)){
    drag = true;
    let position=getMousePosition(canvas, e, a);
    iOfTileClicked = position.i;
    jOfTileClicked = position.j;
    //get initial x and y
    let rect = canvas.getBoundingClientRect();
     xInit = e.clientX - rect.left;
     yInit = e.clientY - rect.top;
  }
}

let displaceX;
let displaceY;
let x;
let y;
canvas.onmousemove = function(e){
  if (drag){
      if (jOfTileClicked+1 < a){
        if ((numberMatrix[iOfTileClicked][jOfTileClicked+1] === maxNumber )) {
              x = e.pageX - canvas.offsetLeft;
              displaceX = x -xInit;
              console.log(displaceX);
              if (displaceX > 0){
                dragTileRight(); 
              }
            
          };
        
        }

        if (jOfTileClicked-1 >=0){
          if (numberMatrix[iOfTileClicked][jOfTileClicked-1] === maxNumber ) {
              x = e.pageX - canvas.offsetLeft;
              displaceX = x -xInit;
              console.log(x);
              if (displaceX < 0){
                dragTileLeft(displaceX, tileSize, fontSize, iOfTileClicked, jOfTileClicked, iOfTileClicked, jOfTileClicked+1); 
              }
          }
        }

        if (iOfTileClicked+1 < a){
          if (numberMatrix[iOfTileClicked+1][jOfTileClicked] === maxNumber ) {
            y = e.pageY - canvas.offsetTop;
            displaceY = y -yInit;
            console.log(y);
            if (displaceY > 0){
              dragTileDown(displaceX, tileSize, fontSize, iOfTileClicked, jOfTileClicked, iOfTileClicked, jOfTileClicked+1); 
            }
           
          }
        }

        if (iOfTileClicked-1 >=0){
          if (numberMatrix[iOfTileClicked-1][jOfTileClicked] === maxNumber ) {
            y = e.pageY - canvas.offsetTop;
            displaceY = yInit-y;
            console.log(y);
            if (displaceY > 0){
              dragTileUp(displaceX, tileSize, fontSize, iOfTileClicked, jOfTileClicked, iOfTileClicked, jOfTileClicked+1); 
            }
            
          }
        }
  }
}

canvas.onmouseup =function(e){
  if (drag){
    getTileMovedQuick();
  }
  drag = false;
  if ( areEqual(numberMatrix,  matrixResult, a)){
    clearInterval(timer);
    bestResults.push(counter);
    bestResults.sort((a,b) => a-b);
    if (bestResults.length >10){
      bestResults.pop();
    }
    getMessage(counter, totalSeconds);
    let messageWrapper = document.querySelector('.message__wrapper');
   if (messageWrapper){
   let cross = document.querySelector('.cross');
   let buttonRestart = document.querySelector('.restart');
   let wrapperMessage = document.querySelector('.message__wrapper');
   wrapperMessage.addEventListener('click', (e)=>{
   if (e.target === wrapperMessage){
     wrapperMessage.remove();

   }
 })
 cross.addEventListener('click', ()=>{
   wrapperMessage.remove();
 });
 buttonRestart.addEventListener('click', ()=>{
  wrapperMessage.remove();
  restart();
});
}

  }
 

}
   

   
canvas.onmouseup = function (){
  getTileMovedQuick(tileSize, fontSize, iOfTileClicked, jOfTileClicked, iOfTileClicked, jOfTileClicked+1);
}



function getTileMovedQuick(tileSize, fontSize, iOfTileClicked, jOfTileClicked, iOfSpace, jOfSpace){
  let ctx = canvas.getContext('2d');
  let numberOfClickedTile = numberMatrix[iOfTileClicked][jOfTileClicked];
       numberMatrix[iOfTileClicked][jOfTileClicked] = maxNumber;
       ctx.fillStyle = '#929699';
       ctx.fillRect(10+jOfTileClicked*(tileSize+1), 10+iOfTileClicked*(tileSize+1), tileSize, tileSize);
       numberMatrix[iOfSpace][jOfSpace]=numberOfClickedTile;
       ctx.fillStyle = '#fcda69';
       ctx.fillRect(10+jOfSpace*(tileSize+1), 10+iOfSpace*(tileSize+1), tileSize, tileSize);
       ctx.fillStyle = '#333B41';
       ctx.font = `${fontSize}px san-serif `;
       ctx.textAlign = 'center';
       ctx.fillText(`${numberOfClickedTile}`, 10+jOfSpace*(tileSize+1)+tileSize/2, 10+iOfSpace*(tileSize+1)+tileSize/2+fontSize/3);
}

function dragTileRight(){
  let ctx = canvas.getContext('2d');
  let numberOfClickedTile = numberMatrix[iOfTileClicked][jOfTileClicked];
  if ((displaceX <= (tileSize+1))){
    ctx.clearRect(10+jOfTileClicked*(tileSize+1), 10+jOfTileClicked*(tileSize+1), 2*tileSize+1, tileSize);
    ctx.fillStyle = '#929699';
    ctx.fillRect(10+jOfTileClicked*(tileSize+1)+displaceX, 10+iOfTileClicked*(tileSize+1), tileSize, tileSize);
    ctx.fillStyle = '#fcda69';
    ctx.fillRect(10+jOfTileClicked*(tileSize+1)+displaceX, 10+iOfTileClicked*(tileSize+1), tileSize, tileSize);
    ctx.fillStyle = '#333B41';
    ctx.font = `${fontSize}px san-serif `;
    ctx.textAlign = 'center';
    ctx.fillText(`${numberOfClickedTile}`, 10+jOfTileClicked*(tileSize+1) +tileSize/2+displaceX, 10+iOfTileClicked*(tileSize+1)+tileSize/2+fontSize/3);
  };
}
function dragTileY(e){
  if (drag){
   // x = e.pageX - canvas.offsetLeft;
     y = e.pageY - canvas.offsetTop;
   }
}*/


//save
let buttonSave = document.querySelector('#save');
buttonSave.addEventListener('click', ()=>{
  buttonSave.classList.toggle('active');
})

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);

function setLocalStorage() {
  localStorage.setItem('bestResults', bestResults);
  if (buttonSave.classList.contains('active')){
    localStorage.setItem('numberMatrix', numberMatrix);
    localStorage.setItem('a', a);
    localStorage.setItem('moves', counter);
    localStorage.setItem('time', totalSeconds);
    clearInterval(timer);
  } else if  (localStorage.getItem('numberMatrix')){
    localStorage.removeItem('numberMatrix');
    localStorage.removeItem('a');
  }
};

function getLocalStorage() {
   bestResults =  localStorage.getItem('bestResults').split(',').map((e)=>{return Number(e)}); 
  if(localStorage.getItem('numberMatrix')) {
    a =  Number(localStorage.getItem('a')); 
    let arrOfNumberMatrix = localStorage.getItem('numberMatrix').split(',');
    let matrix =[];
    for (let i=0; i<a; i++){
      let rowOfMatrix=[];
      for (let j=0; j<a; j++){
        rowOfMatrix.push(Number(arrOfNumberMatrix.shift()));
      }
      matrix.push(rowOfMatrix);
    }
    numberMatrix=matrix;
    console.log(numberMatrix);
    counter = Number(localStorage.getItem('moves'));
    totalSeconds =Number(localStorage.getItem('time'));
    getTilesAgain(canvas, a, numberMatrix);
    moves.innerHTML= `Moves: ${counter}`;
    countTime();
    //timer = setInterval(countTime, 1000);
  } 
  
}

//results
let buttonResults = document.querySelector('#results');
buttonResults.addEventListener('click', ()=>{
  buttonResults.classList.toggle('active');
  if (buttonResults.classList.contains('active')){
    getResults(bestResults);
    let cross = document.querySelector('.cross');
   let wrapperResults = document.querySelector('.results__wrapper');
   wrapperResults.addEventListener('click', (e)=>{
    if (e.target === wrapperResults){
      wrapperResults.remove();
      buttonResults.classList.toggle('active');
    }
  })
  cross.addEventListener('click', ()=>{
    wrapperResults.remove();
    buttonResults.classList.toggle('active');
  });
    
  } 

})





