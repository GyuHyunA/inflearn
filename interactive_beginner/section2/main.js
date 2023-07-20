let point = document.querySelector(".cursorBox");
let cursor = document.querySelector(".cursor");
let btn = document.querySelectorAll("a");
let x = 0;
let y = 0;
let targetX = 0,
  targetY = 0;
let speed = 0.05;

btn.forEach((v) => {
  console.log(v);
  v.addEventListener("mouseenter", (e) => {
    cursor.style.display = "none";
  });
  v.addEventListener("mouseleave", (e) => {
    cursor.style.display = "block"
  });
});

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  point.style.top = targetY + "px";
  point.style.left = targetX + "px";
  //   point.style.transform = `translate(${targetX}px, ${targetY}px)`;

  window.requestAnimationFrame(loop);
};
loop();
