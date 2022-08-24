const burger = document.querySelector(".burger-menu");
const navigation = document.querySelector(".navigation");
const back = document.querySelector(".background");
const features = document.querySelector("li.feat");
const comp = document.querySelector("li.comp");
const nav = document.querySelectorAll(".navigation > ul > li ul");
burger.addEventListener("click", function (e) {
  this.classList.toggle("clicked");
  navigation.classList.toggle("block");
  back.classList.toggle("back");
});
features.addEventListener("click", () => {
  nav[0].classList.toggle("bl");
  features.classList.toggle("rot");
});
comp.addEventListener("click", () => {
  nav[1].classList.toggle("bl");
  comp.classList.toggle("rot");
});
