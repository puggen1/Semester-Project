export default function arrowButtons(numberOfSlides, currentSlide) {
  let buttons = document.querySelectorAll(".carouselButtons button");
  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      let imageSlides = document.querySelectorAll(
        "#lowerMedia button.btn-link"
      );
      if (button.getAttribute("data-bs-slide") === "next") {
        currentSlide++;
        if (currentSlide > numberOfSlides - 1) {
          currentSlide = 0;
        }
      } else {
        currentSlide--;
        if (currentSlide < 0) {
          currentSlide = numberOfSlides - 1;
        }
      }
      let left = currentSlide - 1;
      let right = currentSlide + 1;
      if (left < 0) {
        left = currentSlide + 2;
      }
      if (right > numberOfSlides - 1) {
        right = currentSlide - 1;
        left = currentSlide - 2;
      }
      imageSlides[left].classList.remove("d-none");
      imageSlides[right].classList.remove("d-none");
      imageSlides[currentSlide].classList.remove("d-none");
      for (let i = 0; i < numberOfSlides; i++) {
        if (i !== currentSlide && i !== left && i !== right) {
          imageSlides[i].classList.add("d-none");
        }
      }
    });
  });
}
