const button = document.querySelector(".form__submit-button");
const inputs = document.querySelectorAll(".form__field-input[required]");

button.addEventListener("click", onButtonClick);

function onButtonClick(e) {
  for (let input of inputs) {
    if (input.value.length === 0) {
      e.preventDefault();
      input.classList.add("form__field-input--error");
    } else {
      input.classList.remove("form__field-input--error");
    }
  }
}
