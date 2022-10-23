
function getResults(bestResults){
    let main = document.querySelector('main');
    let wrapperresults =document.createElement('div');
    wrapperresults.classList.add('results__wrapper');
    let divResults = document.createElement('div');
    divResults.classList.add('results_block');
    let cross =document.createElement('span');
    cross.classList.add('cross');
    divResults.append(cross);
    let h1 = document.createElement('h1');
    h1.append('TOP 10');
    divResults.append(h1);
    let ol = document.createElement('ol');
    ol.append(getResultList(bestResults));
    divResults.append(ol);
    wrapperresults.append(divResults);
    main.append(wrapperresults);
}


function getResultList(bestResults){
    if (bestResults){
        bestResults;
        let fragment = new DocumentFragment;
        for (let i=0; i<10; i++){
         let li = document.createElement('li');
         li.classList.add('result__item');
         li.append(`${bestResults[i]} moves`);
         fragment.append(li);
    }
    return fragment;
};
    return '';

}

export default getResults;