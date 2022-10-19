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

 export default countTime;

    
