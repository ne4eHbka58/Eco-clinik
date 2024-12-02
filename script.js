// Form
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Отменяем стандартное поведение формы
});
// Slider

const prevButton = document.querySelector(".button-prev");

const nextButton = document.querySelector(".button-next");

const sliderContainer = document.getElementById("sliderContainer");
let slideWidth = document.querySelector(".slide").offsetWidth;
let currentTranslate = 0;
let numSlides = document.querySelectorAll(".slide").length;

const slides = Array.from(sliderContainer.children);

let currentSlide;

let SliderInterval;
const IntervalTimer = 4000;

function showSlide() {
  currentSlide = Math.floor(currentTranslate / -440) + 1;
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[currentSlide].classList.add("active");
  console.log(`текущая ширина: ${currentTranslate}`);
  console.log(`текущий слайд: ${currentSlide}`);
}

function nextSlide() {
  clearInterval(SliderInterval);
  currentTranslate -= slideWidth;
  if (currentTranslate < -slideWidth * (numSlides - 2)) {
    currentTranslate = 440;
  }
  sliderContainer.style.transform = `translateX(${currentTranslate}px)`;
  showSlide();
  SliderInterval = setInterval(nextSlide, IntervalTimer);
}

function prevSlide() {
  clearInterval(SliderInterval);
  currentTranslate += slideWidth;
  if (currentTranslate > slideWidth) {
    currentTranslate = -slideWidth * (numSlides - 2);
  }
  sliderContainer.style.transform = `translateX(${currentTranslate}px)`;
  showSlide();
  SliderInterval = setInterval(nextSlide, IntervalTimer);
}

SliderInterval = setInterval(nextSlide, IntervalTimer);
showSlide();

prevButton.addEventListener("click", prevSlide);

nextButton.addEventListener("click", nextSlide);

// window.addEventListener("blur", stopSlider); // Пауза при потере фокуса
// window.addEventListener("focus", startSlider); // Возобновление при получении фокуса

// function startSlider() {
//   SliderInterval = setInterval(nextSlide, IntervalTimer);
// }

// function stopSlider() {
//   SliderInterval && clearInterval(SliderInterval);
// }

// Modal

const Bg = document.querySelector(".dark-bg");
const Modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector("#close-modal-button");
function openModal() {
  console.log("open");
  Bg.style.display = "block";
  Modal.classList.add("show");
}

modalCloseButton.addEventListener("click", closeModal);

function closeModal() {
  console.log("close");
  Bg.style.display = "none";
  Modal.classList.remove("show");
}
// Validation

// Инпуты и поля предупреждений,а также кнопка и чекбокс
const validationNameInput = document.querySelector("#inputName");
const validationNameWarn = document.querySelector(".name-validation");
const validationPhoneInput = document.querySelector("#inputPhone");
const validationPhoneWarn = document.querySelector(".phone-validation");
const validationCheckBox = document.querySelector("#privacy");
const validationSubmitButton = document.querySelector(".submit-button");
const validationfullWarn = document.querySelector(".full-validation");

// Статусы
let ValidName = false;
let ValidPhone = false;

// Добавление событий проверок
validationNameInput.addEventListener("blur", checkName);

validationNameInput.addEventListener("focus", inputtingName);

validationPhoneInput.addEventListener("blur", checkPhone);

validationPhoneInput.addEventListener("focus", inputtingPhone);

validationSubmitButton.addEventListener("click", checkValidate);

function checkName() {
  console.log("checkName");
  if (validationNameInput.value === "") {
    if (validationNameWarn.style.display === "block") {
      validationNameWarn.style.display = "none";
    } // Если поле пустое, то предупреждение убирается
    ValidName = false;
  } else if (/^[А-ЯЁа-яё]+$/.test(validationNameInput.value) != true) {
    validationNameWarn.style.display = "block";
    ValidName = false;
  } // Проверка регулярного выражения
  else {
    ValidName = true;
  } // Прохождение проверки
}

function inputtingName() {
  console.log("inputtingName");
  if (validationNameWarn.style.display === "block") {
    validationNameWarn.style.display = "none";
  }
} // Во время ввода значения предупреждение убирается

function checkPhone() {
  console.log("checkPhone");
  if (validationPhoneInput.value === "") {
    if (validationPhoneWarn.style.display === "block") {
      validationPhoneWarn.style.display = "none";
    } // Если поле пустое, то предупреждение убирается
    ValidPhone = false;
  }
  if (/^(89)\d{9}$/.test(validationPhoneInput.value) != true) {
    validationPhoneWarn.style.display = "block";
    ValidPhone = false;
  } // Проверка регулярного выражения
  else {
    ValidPhone = true;
  } // Прохождение проверки
}

function inputtingPhone() {
  console.log("inputtingPhone");
  if (validationPhoneWarn.style.display === "block") {
    validationPhoneWarn.style.display = "none";
  }
} // Во время ввода значения предупреждение убирается

function checkValidate() {
  if (ValidName === true && ValidPhone === true && validationCheckBox.checked) {
    //
    //  Здесь форма должна отправить данные
    //
    closeModal();
  } else {
    validationfullWarn.style.display = "block";
  }
}
