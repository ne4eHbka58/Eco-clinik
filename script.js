const slider = document.querySelector(".slider");

const slides = Array.from(slider.children);

const slide_1 = document.querySelector("#slide-1");

const slide_2 = document.querySelector("#slide-2");

const slide_3 = document.querySelector("#slide-3");

const prevButton = document.querySelector(".button-prev");

const nextButton = document.querySelector(".button-next");

let images = [
  "media/dentistry-1.png",
  "media/dentistry-2.png",
  "media/dentistry-3.png",
  "media/image.png",
];

let previousSlide = 0;
let currentSlide = 1;
let followingSlide = 2;

function showSlide(prevIndex, index, nextIndex) {
  slide_1.src = images[prevIndex];
  slide_2.src = images[index];
  slide_3.src = images[nextIndex];
  previousSlide = prevIndex;
  currentSlide = index;
  followingSlide = nextIndex;
  console.log(
    `active slides: ${previousSlide} ${currentSlide} ${followingSlide}`
  );
}

function nextSlide() {
  previousSlide = currentSlide;
  currentSlide = followingSlide;
  followingSlide++;
  if (followingSlide >= images.length) {
    followingSlide = 0;
  }
  showSlide(previousSlide, currentSlide, followingSlide);
}

function prevSlide() {
  followingSlide = currentSlide;
  currentSlide = previousSlide;
  previousSlide--;
  if (previousSlide < 0) {
    previousSlide = images.length - 1;
  }
  showSlide(previousSlide, currentSlide, followingSlide);
}

prevButton.addEventListener("click", prevSlide);

nextButton.addEventListener("click", nextSlide);

showSlide(previousSlide, currentSlide, followingSlide);
