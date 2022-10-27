// Run this in the "Functions 2" Test your skills sandbox for a circle/triangle generation animation.
document.addEventListener('DOMContentLoaded', () => {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
})

function random(number) {
  return Math.floor(Math.random()*number);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(255,0,0,0.5)';
  ctx.arc(random(canvas.width), random(canvas.height), random(50), 0, 2 * Math.PI);
  ctx.fill();
}

draw();