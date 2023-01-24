const screenWidth = window.innerWidth;
const way = screenWidth - 85 - 20;
//let requestId = requestAnimationFrame(getCarMove);
const car = document.querySelector('.car');
    
function animate({timing, draw, duration}: {timing: (timeFraction : number) => number, draw: (progress : number) => void, duration: number}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // timeFraction goes from 0 to 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      // calculate the current animation state
      let progress = timing(timeFraction)
  
      draw(progress); // draw it
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }
  
  animate({
    duration: 1000,
    timing(timeFraction) {
      return timeFraction;
    },
    draw(progress) {
        if (car instanceof HTMLElement) {
            car.style.left = `${way}px`;
        }
    }
  });