function getTimeFromNum(currentTimeStr){
    let  currentTimeNum = parseInt(currentTimeStr);
    let minutes = parseInt(currentTimeNum/60);
    let seconds = currentTimeNum % 60;
    return `${String(minutes).padStart(2,0)}:${String(seconds).padStart(2,0)}`;
}

export default getTimeFromNum;