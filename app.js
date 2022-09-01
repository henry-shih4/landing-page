let slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const nextSlideBtn = document.querySelector(".btn-next");
const prevSlideBtn = document.querySelector(".btn-prev");
let dots = document.querySelectorAll(".dot");
let maxSlide = slides.length - 1;
let headerText = document.getElementsByClassName("header");

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

window.addEventListener("DOMContentLoaded", (event) => {
  headerText[0].classList.add("header-active");
  console.log("hello");
});

nextSlideBtn.addEventListener("click", nextSlide);
prevSlideBtn.addEventListener("click", prevSlide);

function nextSlide() {
  if (currentSlide == maxSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
}

function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = maxSlide;
  } else {
    currentSlide--;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
}

// scroll animations

let ownerSection = document.getElementsByClassName("owner");
let header = document.getElementsByClassName("header");

function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  let headerHeight = header[0].offsetHeight;

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 300;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("reveal-active");
    } else {
      reveals[i].classList.remove("reveal-active");
    }
  }
}

window.addEventListener("scroll", reveal);
