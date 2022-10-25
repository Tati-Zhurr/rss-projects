import getTileSize from './getTileSize';
function getMousePosition(canvas, event, a) {
   let screenWidth=window.screen.width;
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    let j;
    let i;
    let selectedTile = {};
  /*  let screenWidth=window.screen.width;
    if (screenWidth <= 500){
    canvas.width  = 300;
    canvas.height = 300;
   };
  if ((screenWidth > 500)&&(screenWidth < 1000)){
    canvas.width  = 400;
    canvas.height = 400;
   }
  if ((screenWidth > 1000)){
    canvas.width  = 600;
    canvas.height = 600;
   };

  let tileSize = (canvas.width -20 -a*1)/a;*/
  let tileSize = getTileSize(screenWidth, a);
    
   
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