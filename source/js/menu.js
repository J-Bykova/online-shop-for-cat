const burger = document.querySelector(".header__burger");
const navigation = document.querySelector(".header__navigation");

burger.addEventListener("click", onBurgerClick);

function onBurgerClick(e) {
  burger.classList.toggle("header__burger--closed-on-mobile");
  burger.classList.toggle("header__burger--open-on-mobile");
  navigation.classList.toggle("header__navigation--closed-on-mobile");
  navigation.classList.toggle("header__navigation--open-on-mobile");
}

function initMenu() {
  burger.classList.add("header__burger--closed-on-mobile");
  navigation.classList.add("header__navigation--closed-on-mobile");
}

initMenu();
