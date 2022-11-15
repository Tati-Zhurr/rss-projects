import birdsData from "./birds";

function getAnswers(level){
    const answerList = document.querySelectorAll('.answer-text');
    answerList.forEach((e, i) =>{
        e.textContent = birdsData[level][i].name;
    });
}

export default getAnswers;