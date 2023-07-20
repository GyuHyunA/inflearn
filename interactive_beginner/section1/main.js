let target = document.querySelector(".target");
let mouseBox = document.querySelector(".box");

let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
let speed = 0.01;

window.addEventListener("click", (e) => {
  console.log(e.pageX, e.pageY);
  x = e.pageX;
  y = e.pageY;

  target.innerHtml = `x : ${e.pageX} <br> y : ${e.pageY}`;

  mouseBox.style.top = y + "px"
  mouseBox.style.left = x + "px"
});

// animation loop
// window.addEventListener("mousemove", (e) => {
//   //   console.log(e);

//   x = e.pageX;
//   y = e.pageY;

//   target.innerHTML = `x : ${e.pageX} <br> y : ${e.pageY}`;
// });

// const loop = () => {
//   targetX += (x - targetX) * speed;
//   targetY += (y - targetY) * speed;
//   console.log(x, targetX.toFixed(1), x - targetX.toFixed(1));

//   mouseBox.style.top = targetY.toFixed(2) + "px";
//   mouseBox.style.left = targetX.toFixed(2) + "px";
//   window.requestAnimationFrame(loop);
// };
// loop();
