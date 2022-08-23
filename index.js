const burger = document.querySelector(".burger-menu");
const navigation = document.querySelector(".navigation");
const container = document.querySelector("body");

burger.addEventListener("click", function (e) {
  this.classList.toggle("clicked");
  navigation.classList.toggle("block");
  container.classList.toggle("op");
});
