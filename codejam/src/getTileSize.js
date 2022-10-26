function getTileSize(screenWidth, a){
 let tileSize;
 let canvasWidthSmall =300;
 let canvasWidthMiddle =400;
 let canvasWidthBig = 500;
  if (screenWidth <= 500){
    tileSize = (canvasWidthSmall -20 -(a))/a;
  };
  if ((screenWidth > 500)&&(screenWidth < 1000)){
    tileSize = (canvasWidthMiddle -20 -(a))/a;
  }
  if ((screenWidth > 1000)){
    tileSize = (canvasWidthBig -20 -(a))/a;
  };

  return tileSize; 
}

export default getTileSize;