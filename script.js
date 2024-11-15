const slider = document.querySelector(".slider");

const slides = Array.from(slider.children);

const prevButton = document.querySelector(".button-prev");

const nextButton = document.querySelector(".button-next");

const dotsContainer = document.querySelector(".dots");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
  currentSlide = index;
  updateDots();
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
  clearInterval(intervalId); // сбросить предыдущий интервал
  intervalId = setInterval(nextSlide, 8000);
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
  clearInterval(intervalId); // сбросить предыдущий интервал
  intervalId = setInterval(nextSlide, 8000);
}

function createDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      showSlide(i);
      clearInterval(intervalId);
      intervalId = setInterval(nextSlide, 8000);
    });
    dotsContainer.appendChild(dot);
  }
}

function updateDots() {
  const dots = dotsContainer.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

prevButton.addEventListener("click", prevSlide);

nextButton.addEventListener("click", nextSlide);

createDots();

showSlide(currentSlide);

let intervalId = setInterval(nextSlide, 8000); //  Автоматическое переключение слайдов
