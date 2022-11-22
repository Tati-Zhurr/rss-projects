import birdsData from "./birds";
import birdsDataEnglish from "./birdsEnglish";

function getAnswers(level, lang){
    const answerList = document.querySelectorAll('.answer-text');
    if (lang){
        answerList.forEach((e, i) =>{
            e.textContent = birdsDataEnglish[level][i].name;
        });
    } else {
        answerList.forEach((e, i) =>{
            e.textContent = birdsData[level][i].name;
        });
    }
    
}

export default getAnswers;