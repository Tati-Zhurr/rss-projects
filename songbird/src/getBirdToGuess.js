import birdsData from "./birds";
import birdsDataEnglish from "./birdsEnglish";

function getBirdToGuess (level, lang){
   const randomNumber = Math.floor(Math.random()*6);
   let birdHidden;
   if (lang){
      birdHidden = birdsDataEnglish[level][randomNumber];
   } else {
      birdHidden = birdsData[level][randomNumber];
   }
   
   return birdHidden;
}

export default getBirdToGuess;
