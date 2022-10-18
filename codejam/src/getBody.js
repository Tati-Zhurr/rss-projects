function getBody (){
    const body = document.querySelector('body');
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
    let main = document.createElement('main');
    main.append(getTiles(4));
    body.append(main);
}

function getList(){
    let buttonTextArr = ['Shuffle and start', 'Stop', 'Save', 'Results' ];
    let buttonIdArr = ['shuffle', 'stop', 'save', 'results'];
    let fragment = new DocumentFragment;
    for (let i=0; i<4; i++){
        let li = document.createElement('li');
        li.classList.add('navigation__item');
        let button = document.createElement('button');
        button.classList.add('button__navigation');
        button.setAttribute('id', `${buttonIdArr[i]}`);
        button.append(`${buttonTextArr[i]}`);
        li.append(button);
        fragment.append(li);
    };
    return fragment;
}

function getTiles(a){
   let size =a*a;
  // let numberTileArray = shuffle(size);
   let fragment = new DocumentFragment;
   let canvas = document.createElement('canvas');
   canvas.classList.add('canvas');
   let ctx = canvas.getContext('2d');
   canvas.width  = 300;
   canvas.height = 300;
    for (let i=0; i<a; i++){
    for (let j=0; j<a; j++){
    // let numberOfTile = numberTileArray.push();
    // if (numberOfTile === size){
         //   ctx.fillStyle = '#929699';
          //  let xOfSpace =`${i}`;
           // let yOfSpace =`${j}`;
 //   };
    ctx.fillStyle = '#fcda69';
    ctx.fillRect(20+j*64, 20+i*64, 63, 63);
    ctx.fillStyle = '#333B41';
    ctx.fillText('1', 20+j*64+28, 20+i*64+32);
   }
}
  fragment.append(canvas);
  
   return fragment;
}

function shuffle(size){
    let randomNumber = Math.floor(Math.random()*size)+1;
    let shuffledArr =[];

    
    while (shuffledArr.length !== size){
        while (shuffledArr.includes(randomNumber)){
            randomNumber = Math.floor(Math.random()*size)+1;
        };
        
        shuffledArr.push (randomNumber);
    };

    return shuffledArr;

}


export default getBody;