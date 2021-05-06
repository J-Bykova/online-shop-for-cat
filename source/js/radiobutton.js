const radioButtons = document.querySelectorAll(".form__radiobutton-input");

for (let button of radioButtons) {
  // button.addEventListener("click", onRadiobuttonClick);
}

function onRadiobuttonClick(e) {
  console.log(e.target)
  // radiobuttonBox.classList.toggle("form__radiobutton-box--marked");
}
