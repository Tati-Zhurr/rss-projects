function getTilesAgain(canvas, a, numberMatrix){
 let screenWidth=window.screen.width;
  if (screenWidth <= 500){
    canvas.width  = 300;
    canvas.height = 300;
  };
  if ((screenWidth > 500)&&(screenWidth < 1000)){
    canvas.width  = 400;
    canvas.height = 400;
  }
  if ((screenWidth > 1000)){
    canvas.width  = 500;
    canvas.height = 500;
  };

  let tileSize = (canvas.width -20 -a*1)/a;
  //let tileSize;
  let fontSize;
   
    if (a=== 4){
       // tileSize = 69;
        fontSize = 48;
      }   
      if (a ===3){
       //tileSize = 92.66;
        fontSize = 48;
      }
      if (a===5){
       // tileSize = 55.2;
        fontSize = 36;
      }
      if (a===6){
       // tileSize = 45.8;
        fontSize = 32;
      }
      if (a===7){
        //tileSize = 39.1;
        fontSize = 30;
      }
      if (a===8){
       // tileSize = 34.125;
        fontSize = 24;
      }
    let size = a*a;
    let ctx = canvas.getContext('2d');
   // canvas.width  = 300;
   // canvas.height = 300;
     for (let i=0; i<a; i++){
     for (let j=0; j<a; j++){
     let numberOfTile = numberMatrix[i][j];
     if (numberOfTile === size){
       // let tile = new Tile(`${numberOfTile}`, 10+j*70, 10+i*70, 69, 69, '#929699');
       // tile.draw();
           ctx.fillStyle = '#929699';
           ctx.fillRect(10+j*(tileSize+1), 10+i*(tileSize+1), tileSize, tileSize);
         
     } else {
         ctx.fillStyle = '#fcda69';
         ctx.fillRect(10+j*(tileSize+1), 10+i*(tileSize+1), tileSize, tileSize);
         ctx.fillStyle = '#333B41';
         ctx.font = `${fontSize}px san-serif `;
         ctx.textAlign = 'center';
         ctx.fillText(`${numberOfTile}`, 10+j*(tileSize+1)+tileSize/2, 10+i*(tileSize+1)+tileSize/2+fontSize/3);
     }
    
    }
 }

    return canvas;
 }

 export default getTilesAgain;