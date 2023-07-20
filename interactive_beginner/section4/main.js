const test = document.querySelector(".test");
const proBar = document.querySelector(".bar");
let scrollNum = 0;
let per = 0;

window.addEventListener("scroll", () => {
  let scrollNum = window.scrollY;
  let bodyscroll = document.body.scrollHeight;
  let windowHeight = window.innerHeight;
  let inScroll = bodyscroll - windowHeight;
  per = percent(scrollNum, inScroll);
  test.innerText = scrollNum + "m";
  //   console.log(window.scrollY + window.innerHeight);
  proBar.style.width = per + "%";
});

const percent = (num, totalNum) => {
  return ((num / totalNum) * 100).toFixed(0);
};