const car = document.querySelector('.car');
let carPosition = 125;

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' && carPosition > 10) {
    carPosition -= 15;
  } else if (event.key === 'ArrowRight' && carPosition < 235) {
    carPosition += 15;
  }
  car.style.left = carPosition + 'px';
});
