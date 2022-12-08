export default function imgButtons(numberOfSlides, currentSlide) {
  let buttons = document.querySelectorAll("#lowerMedia button.btn-link");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      currentSlide = Number(button.getAttribute("data-bs-slide-to"));
      let left = currentSlide - 1;
      let right = currentSlide + 1;

      if (left < 0) {
        left = currentSlide + 2;
      }
      if (right > numberOfSlides - 1) {
        right = currentSlide - 1;
        left = currentSlide - 2;
      }

      buttons[left].classList.remove("d-none");
      buttons[right].classList.remove("d-none");
      buttons[currentSlide].classList.remove("d-none");
      for (let i = 0; i < buttons.length; i++) {
        if (i !== currentSlide && i !== left && i !== right) {
          buttons[i].classList.add("d-none");
        }
      }
    });
  });
}
