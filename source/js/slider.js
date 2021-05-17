const afterButton = document.querySelector(".example-section__after-button");
const beforeButton = document.querySelector(".example-section__before-button");
const frontContainer = document.querySelector(".example-section__image-container--front");
const backContainer = document.querySelector(".example-section__image-container--back");
const sliderBar = document.querySelector(".example-section__slider-bar");
const sliderHandle = document.querySelector(".example-section__slider-handle");

afterButton.addEventListener("click", showAfter)
beforeButton.addEventListener("click", showBefore)

function showAfter() {
  backContainer.style.width = "100%";
  frontContainer.style.width = "0%";

  sliderHandle.style.left = "auto";
  sliderHandle.style.right = "0%";
}

function showBefore() {
  backContainer.style.width = "0%";
  frontContainer.style.width = "100%";

  sliderHandle.style.left = "0%";
  sliderHandle.style.right = "auto";
}
// showBefore();


sliderHandle.addEventListener("mousedown", onSideBarCatch);
window.addEventListener("mouseup", onSideBarRelease);

const sliderRange = calculateSliderRange();
let initialPosition;
function onSideBarCatch(e) {
  initialPosition = e.clientX;
  window.addEventListener("mousemove", onMouseMove);
}

function onSideBarRelease() {
  window.removeEventListener("mousemove", onMouseMove);
}

function onMouseMove(e) {
  const offset = Math.round(e.clientX - initialPosition);
  const currentLeft = parseInt(window.getComputedStyle(sliderHandle).left)

  sliderHandle.style.left = currentLeft + offset + "px";
  // console.log(currentLeft)
}


function calculateSliderRange() {
  return parseInt(window.getComputedStyle(sliderBar).width);
}
