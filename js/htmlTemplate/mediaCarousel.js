export default function createCarousel(media, placement) {
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
          <img src="${media[i]}" class="d-block w-100 " alt="listing Image">
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
  placement.insertAdjacentElement("beforeend", bigPart);
  placement.insertAdjacentElement("beforeend", smallPart);
}
