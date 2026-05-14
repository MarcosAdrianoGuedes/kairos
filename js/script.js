const carouselTrack = document.getElementById("carouselTrack");
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll("#carouselDots button");
const prevButton = document.getElementById("prevSlide");
const nextButton = document.getElementById("nextSlide");

let currentSlide = 0;

function updateCarousel() {
  if (!carouselTrack || slides.length === 0) return;

  carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach((dot) => dot.classList.remove("active"));

  if (dots[currentSlide]) {
    dots[currentSlide].classList.add("active");
  }
}

function goToNextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

function goToPrevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
}

if (nextButton && prevButton) {
  nextButton.addEventListener("click", goToNextSlide);
  prevButton.addEventListener("click", goToPrevSlide);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    updateCarousel();
  });
});

if (slides.length > 0) {
  setInterval(goToNextSlide, 5000);
}