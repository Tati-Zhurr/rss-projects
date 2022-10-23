function getMousePosition(canvas, event, a) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    let j;
    let i;
    let selectedTile = {};
    let tileSize;
    if (a=== 4){
        tileSize = 69;
      }   
      if (a ===3){
        tileSize = 92.5;
      }
      if (a===5){
        tileSize = 55.2;
      }
      if (a===6){
        tileSize = 45.8;
      }
      if (a===7){
        tileSize = 39.1;
      }
      if (a===8){
        tileSize = 34.125;
      }

      for (j=0; j<a; j++){
        if ((x > 10+j*tileSize)&&(x <= 10+(j+1)*tileSize)){
            selectedTile.j=j;
            break;
        }
      }
      for (i=0; i<a; i++){
        if ((y > 10+i*tileSize)&&(y <= 10+(i+1)*tileSize)){
            selectedTile.i=i;
            break;
        }
      }

    return selectedTile;
}




export default getMousePosition;