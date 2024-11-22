// const slider = document.querySelector(".slider");

// const slides = Array.from(slider.children);

// const slide_1 = document.querySelector("#slide-1");

// const slide_2 = document.querySelector("#slide-2");

// const slide_3 = document.querySelector("#slide-3");

const prevButton = document.querySelector(".button-prev");

const nextButton = document.querySelector(".button-next");

// let images = [
//   "media/dentistry-1.png",
//   "media/dentistry-2.png",
//   "media/dentistry-3.png",
//   "media/image.png",
// ];

// let previousSlide = 0;
// let currentSlide = 1;
// let followingSlide = 2;

// function showSlide(prevIndex, index, nextIndex) {
//   slide_1.src = images[prevIndex];
//   slide_2.src = images[index];
//   slide_3.src = images[nextIndex];
//   previousSlide = prevIndex;
//   currentSlide = index;
//   followingSlide = nextIndex;
//   console.log(
//     `active slides: ${previousSlide} ${currentSlide} ${followingSlide}`
//   );
// }

// function nextSlide() {
//   previousSlide = currentSlide;
//   currentSlide = followingSlide;
//   followingSlide++;
//   if (followingSlide >= images.length) {
//     followingSlide = 0;
//   }
//   showSlide(previousSlide, currentSlide, followingSlide);
// }

// function prevSlide() {
//   followingSlide = currentSlide;
//   currentSlide = previousSlide;
//   previousSlide--;
//   if (previousSlide < 0) {
//     previousSlide = images.length - 1;
//   }
//   showSlide(previousSlide, currentSlide, followingSlide);
// }

// showSlide(previousSlide, currentSlide, followingSlide);

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
