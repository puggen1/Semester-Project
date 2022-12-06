function createCarousel(media, placement) {
  let carouselouter = document.createElement("div");
  carouselouter.id = "mediaGallery";
  carouselouter.classList.add(
    "d-flex",
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
    smallPart.innerHTML = `<div class="carouselButtons d-md-flex justify-content-md-center col-1 col-md-12 col-lg-1">
    <button class="btn" type="button" data-bs-target="#carouselBigImage" data-bs-slide="prev">
        <span class="bi bi-chevron-left d-md-none d-lg-block" aria-hidden="true"></span>
        <span class="bi bi-chevron-up d-none d-md-block d-lg-none" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
</div>`;
    smallPart.innerHTML += `<div class="col-10 d-flex flex-md-column flex-lg-row justify-content-around">`;
    let x = 1;
    for (let i = 0; i < media.length; i++) {
      if (i > 2) {
        smallPart.innerHTML += `
            <button type="button" data-bs-target="#carouselBigImage" data-bs-slide-to="${i}" class="active d-none btn btn-link col-3 col-md-12 p-md-0 my-md-3" aria-current="true" aria-label="Slide ${x}">
            <img src="${media[i]}" class="d-block w-100" alt="listing Image">
            </button>`;
      } else {
        smallPart.innerHTML += `
        <button type="button" data-bs-target="#carouselBigImage" data-bs-slide-to="${i}" class="active btn btn-link col-3 col-md-12 p-md-0 my-md-3" aria-current="true" aria-label="Slide ${x}">
        <img src="${media[i]}" class="d-block w-100" alt="listing Image">
        </button>`;
      }
      x++;
    }
    smallPart.innerHTML += `</div>
    <div class="carouselButtons d-md-flex justify-content-md-center col-1 col-md-12 col-lg-1">
    <button class="btn" type="button" data-bs-target="#carouselBigImage" data-bs-slide="next">
        <span class="bi bi-chevron-right d-md-none d-lg-block" aria-hidden="true"></span>
        <span class="bi bi-chevron-down d-none d-md-block d-lg-none" aria-hidden="true"></span>
        <span class="visually-hidden">next</span>
      </button>
</div>
    `;
  } else {
    bigPart.innerHTML = `<img src="./assets/noImage.jpg" class="d-block w-100" alt="listing has no image">`;
  }
  carouselouter.insertAdjacentElement("beforeend", bigPart);
  carouselouter.insertAdjacentElement("beforeend", smallPart);
  placement.insertAdjacentElement("beforeend", carouselouter);
  testButtons();
}
let carouselPlacement = document.getElementById("carouselPlacement");
let mediaList = [
  "https://picsum.photos/500/300?random=1",
  "https://picsum.photos/500/300?random=2",
  "https://picsum.photos/500/300?random=3",
  "https://picsum.photos/500/300?random=4",
];
let numberOfSlides = mediaList.length;
let currentSlide = 0;
createCarousel(mediaList, carouselPlacement);
function testButtons() {
  let buttons = document.querySelectorAll("#lowerMedia button.btn-link");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      currentSlide = button.getAttribute("data-bs-slide-to");
      buttons.forEach((button) => {
        if (
          button.getAttribute("data-bs-slide-to") == currentSlide ||
          button.getAttribute("data-bs-slide-to") == currentSlide - 1 ||
          button.getAttribute("data-bs-slide-to") == currentSlide + 1
        ) {
          console.log(button.getAttribute("data-bs-slide-to"), currentSlide);
          button.classList.remove("d-none");
        } else if (
          button.getAttribute("data-bs-slide-to") == 0 &&
          currentSlide == 0
        ) {
          console.log(
            button.getAttribute("data-bs-slide-to"),
            currentSlide,
            numberOfSlides
          );
          buttons[numberOfSlides - 1].classList.remove("d-none");
        } else {
          console.log(button.getAttribute("data-bs-slide-to"), currentSlide);
          button.classList.add("d-none");
        }
      });
    });
  });
}
