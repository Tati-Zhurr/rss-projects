function getTilesAgain(canvas, a, numberMatrix){
    let size = a*a;
    let ctx = canvas.getContext('2d');
    canvas.width  = 300;
    canvas.height = 300;
     for (let i=0; i<a; i++){
     for (let j=0; j<a; j++){
     let numberOfTile = numberMatrix[i][j];
     if (numberOfTile === size){
       // let tile = new Tile(`${numberOfTile}`, 10+j*70, 10+i*70, 69, 69, '#929699');
       // tile.draw();
           ctx.fillStyle = '#929699';
           ctx.fillRect(10+j*70, 10+i*70, 69, 69);
         
     } else {
         ctx.fillStyle = '#fcda69';
         ctx.fillRect(10+j*70, 10+i*70, 69, 69);
         ctx.fillStyle = '#333B41';
         ctx.font = '48px san-serif';
         ctx.textAlign = 'center';
         ctx.fillText(`${numberOfTile}`, 10+j*70+69/2, 10+i*70+69/2+16);
     }
    
    }
 }

    return canvas;
 }

 export default getTilesAgain;