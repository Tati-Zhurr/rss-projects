import getTiles from "./getTiles";

function getBody (a, numberMatrix){
    const body = document.querySelector('body');
    //buttons block
    const header = document.createElement('header');
    body.append(header);
    let navigation = document.createElement('nav');
    navigation.classList.add('navigation__header');
    let ul = document.createElement('ul');
    ul.classList.add('navigation');
    ul.append(getList());
    navigation.append(ul);
    header.append(navigation);
    body.append(header);
    //time and moves
    let main = document.createElement('main');
    let divProgress = document.createElement('div');
    divProgress.classList.add('progress');
    let spanMoves = document.createElement('span');
    spanMoves.classList.add ('moves');
    spanMoves.append('Moves: 0');
    divProgress.append(spanMoves);
    let spanTime = document.createElement('span');
    spanTime.classList.add('time');
    spanTime.append('Time: 00:00');
    divProgress.append(spanTime);
    main.append(divProgress);
    //tiles
    main.append(getTiles(a, numberMatrix));
    body.append(main);
    //size-block
    let divSize= document.createElement('div');
    divSize.classList.add ('size_block');
    let spanSize = document.createElement('span');
    spanSize.classList.add('current_size');
    spanSize.append(`Frame size: ${a}x${a}`);
    divSize.append(spanSize);
    let otherSizeSpan = document.createElement('span');
    otherSizeSpan.classList.add('other_size');
    otherSizeSpan.append('Other sizes: ')
    let a3 = document.createElement('a');
    a3.classList.add('a_size');
    a3.classList.add('a_3');;
    a3.setAttribute('href', '#');
    a3.append('3x3');
    otherSizeSpan.append(a3);
    otherSizeSpan.append(' ');
    let a4 = document.createElement('a');
    a4.classList.add('a_size');
    a4.classList.add('a_4');
    a4.setAttribute('href', '#');
    a4.append('4x4');
    otherSizeSpan.append(a4);
    otherSizeSpan.append(' ');
    let a5 = document.createElement('a');
    a5.classList.add('a_size');
    a5.classList.add('a_5');
    a5.setAttribute('href', '#');
    a5.append('5x5');
    otherSizeSpan.append(a5);
    otherSizeSpan.append(' ');
    let a6 = document.createElement('a');
    a6.classList.add('a_size');
    a6.classList.add('a_6');
    a6.setAttribute('href', '#');
    a6.append('6x6');
    otherSizeSpan.append(a6);
    otherSizeSpan.append(' ');
    let a7 = document.createElement('a');
    a7.classList.add('a_size');
    a7.classList.add('a_7');
    a7.setAttribute('href', '#');
    a7.append('7x7');
    otherSizeSpan.append(a7);
    otherSizeSpan.append(' ');
    let a8 = document.createElement('a');
    a8.classList.add('a_size');
    a8.classList.add('a_8');
    a8.setAttribute('href', '#');
    a8.append('8x8');
    otherSizeSpan.append(a8);
    divSize.append(otherSizeSpan);
    main.append(divSize);
}

function getList(){
    let buttonTextArr = ['Shuffle and start', 'Pause', 'Save', 'Results' ];
    let buttonIdArr = ['shuffle', 'pause', 'save', 'results'];
    let fragment = new DocumentFragment;
    for (let i=0; i<5; i++){
        let li = document.createElement('li');
        li.classList.add('navigation__item');
        let button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.classList.add('button__navigation');
        if (i===4){
            button.classList.add('sound_on');
            button.setAttribute('id', 'sound');
            let span = document.createElement('span');
            button.append(span);
        } else{
            button.setAttribute('id', `${buttonIdArr[i]}`);
            button.append(`${buttonTextArr[i]}`);
        }
        li.append(button);
        fragment.append(li);
    };

    return fragment;
}


export default getBody;