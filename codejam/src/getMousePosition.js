function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    let j;
    let i;
    let selectedTile = {};
    if ((x >=10)&&(x<=79)){
    j=0;
    };
    if ((x >=80)&&(x<=149)){
    j=1;
    };
    if ((x >=150)&&(x<=219)){
    j=2;
    };
    if ((x >=220)&&(x<=289)){
    j=3;
    };
    if ((y >=10)&&(y<=79)){
        i=0;
    };
    if ((y >=80)&&(y<=149)){
    i=1;
    };
    if ((y >=150)&&(y<=219)){
     i=2;
    };
    if ((y >=220)&&(y<=289)){
     i=3;
    };
    selectedTile.i=i;
    selectedTile.j=j;
    return selectedTile;
}




export default getMousePosition;