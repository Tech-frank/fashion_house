"use strict";

// Navbar Scrolling Effect
const navbar = document.querySelector("nav");

document.addEventListener("scroll", function () {
  if (window.scrollY > 60) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// Header Slider functionality
const sliders = document.querySelectorAll(".slider");
const btnRightSlider = document.querySelector(".slider_btn--right");
const btnLeftSlider = document.querySelector(".slider_btn--left");

let init = 0;

function goTo(slide) {
  sliders.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
}

// initial execution
goTo(init);

btnRightSlider.addEventListener("click", function () {
  if (init < sliders.length - 1) {
    init = init + 1;

    goTo(init);
  } else {
    init = 0;

    goTo(init);
  }
});
btnLeftSlider.addEventListener("click", function () {
  if (init > 0) {
    init = init - 1;

    goTo(init);
  } else {
    init = sliders.length - 1;

    goTo(init);
  }
});

// aside Slider
const btnGridSlider = document.querySelector(".mobile_grid");
const sliderComponent = document.querySelector(".aside_slider");

btnGridSlider.addEventListener("click", () => {
  if (innerWidth < 630) {
    sliderComponent.classList.toggle("active");
    document.body.classList.toggle("active");
  }
});
