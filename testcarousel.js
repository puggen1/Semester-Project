function createCarousel(media, placement) {
  let carouselouter = document.createElement("div");
  carouselouter.id = "mediaGallery";
  carouselouter.classList.add(
    "d-flex",
    "m-auto",
    "flex-column",
    "flex-md-row",
    "flex-lg-column",
    "align-items-center",
    "col-11",
    "col-md-10",
    "col-lg-5"
  );

  let bigPart = document.createElement("div");
  bigPart.classList.add("carousel", "carousel-dark", "slide");
  bigPart.id = "carouselBigImage";
  bigPart.setAttribute("data-bs-interval", "false");
  let smallPart = document.createElement("div");
  let html = "";
  if (media.length > 0) {
    html = `<div class="carousel-inner">`;
    for (let i = 0; i < media.length; i++) {
      let active = "";
      if (i === 0) {
        active = "active";
      }
      html += `<div class="carousel-item ${active}">
        <img src="${media[i]}" class="d-block w-100" alt="listing Image">
        </div>`;
    }
    html += `</div>`;
    bigPart.innerHTML = html;
    //lover part
    smallPart.id = "lowerMedia";
    smallPart.classList.add(
      "d-flex",
      "align-items-center",
      "flex-md-column",
      "col-md-2",
      "flex-lg-row"
    );
    let smallPartHtml = "";
    smallPartHtml = `<div class="carouselButtons d-flex justify-content-center col-1 col-md-12 col-lg-1">
    <button class="btn p-0" type="button" data-bs-target="#carouselBigImage" data-bs-slide="prev">
        <span class="bi bi-chevron-left d-md-none d-lg-block" aria-hidden="true"></span>
        <span class="bi bi-chevron-up d-none d-md-block d-lg-none" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
</div>`;
    smallPartHtml += `<div class="col-10 d-flex flex-md-column flex-lg-row justify-content-around">`;
    let x = 1;
    for (let i = 0; i < media.length; i++) {
      if (i > 2) {
        smallPartHtml += `
            <button type="button" data-bs-target="#carouselBigImage" data-bs-slide-to="${i}" class="active d-none btn btn-link col-3 col-md-12 p-0 my-md-3" aria-current="true" aria-label="Slide ${x}">
            <img src="${media[i]}" class="d-block w-100" alt="listing Image">
            </button>`;
      } else {
        smallPartHtml += `
        <button type="button" data-bs-target="#carouselBigImage" data-bs-slide-to="${i}" class="active btn btn-link col-3 col-md-12 p-0 my-md-3" aria-current="true" aria-label="Slide ${x}">
        <img src="${media[i]}" class="d-block w-100" alt="listing Image">
        </button>`;
      }
      x++;
    }
    smallPartHtml += `</div>
    <div class="carouselButtons d-flex justify-content-center col-1 col-md-12 col-lg-1">
    <button class="btn p-0" type="button" data-bs-target="#carouselBigImage " data-bs-slide="next">
        <span class="bi bi-chevron-right d-md-none d-lg-block" aria-hidden="true"></span>
        <span class="bi bi-chevron-down d-none d-md-block d-lg-none" aria-hidden="true"></span>
        <span class="visually-hidden">next</span>
      </button>
</div>
    `;
    smallPart.innerHTML = smallPartHtml;
  } else {
    bigPart.innerHTML = `<img src="./assets/noImage.jpg" class="d-block w-100" alt="listing has no image">`;
  }
  carouselouter.insertAdjacentElement("beforeend", bigPart);
  carouselouter.insertAdjacentElement("beforeend", smallPart);
  placement.insertAdjacentElement("beforeend", carouselouter);
  imgButtons();
  arrowButtons();
}
let carouselPlacement = document.getElementById("carouselPlacement");
let mediaList = [
  "https://picsum.photos/500/300?random=1",
  "https://picsum.photos/500/300?random=2",
  "https://picsum.photos/500/300?random=3",
  "https://picsum.photos/500/300?random=4",
  "https://picsum.photos/500/300?random=5",
  "https://picsum.photos/500/300?random=6",
];
let numberOfSlides = mediaList.length;
let currentSlide = 0;
createCarousel(mediaList, carouselPlacement);

function imgButtons() {
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

function arrowButtons() {
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
