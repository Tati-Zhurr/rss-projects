import birdsData from "./birds";

function getBirdToGuess (level){
   const randomNumber = Math.floor(Math.random()*6);
   const birdHidden = birdsData[level][randomNumber];
   return birdHidden;
}

export default getBirdToGuess;
