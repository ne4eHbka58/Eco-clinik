const prevButton = document.querySelector(".button-prev");

const nextButton = document.querySelector(".button-next");

const sliderContainer = document.getElementById("sliderContainer");
let slideWidth = document.querySelector(".slide").offsetWidth;
let currentTranslate = 0;
let numSlides = document.querySelectorAll(".slide").length;

const slides = Array.from(sliderContainer.children);

let currentSlide;

function showSlide() {
  currentSlide = Math.floor(currentTranslate / -440) + 1;
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[currentSlide].classList.add("active");
  console.log(`текущая ширина: ${currentTranslate}`);
  console.log(`текущий слайд: ${currentSlide}`);
}

function nextSlide() {
  currentTranslate -= slideWidth;
  if (currentTranslate < -slideWidth * (numSlides - 2)) {
    currentTranslate = 440;
  }
  sliderContainer.style.transform = `translateX(${currentTranslate}px)`;
  showSlide();
}

function prevSlide() {
  currentTranslate += slideWidth;
  if (currentTranslate > slideWidth) {
    currentTranslate = -slideWidth * (numSlides - 2);
  }
  sliderContainer.style.transform = `translateX(${currentTranslate}px)`;
  showSlide();
}

showSlide();

prevButton.addEventListener("click", prevSlide);

nextButton.addEventListener("click", nextSlide);

setInterval(nextSlide, 10000);
