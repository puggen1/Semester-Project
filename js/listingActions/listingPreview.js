import timeDisplayer from "../htmlTemplate/timeDisplay.js";
/**
 *
 * @param {event} e keyup event that gives needed information, also used as change event
 * @description this function will preview the listing as you type in the form.
 */
export default function previewListing(e) {
  let prevImg = document.querySelector("#previewImg");
  let prevTitle = document.querySelector("#previewTitle");
  let previewEnd = document.querySelector("#previewEnd");
  let gallery = document.querySelector("#gallery");

  if (e.target.id === "listingTitle") {
    prevTitle.innerText = e.target.value;
  } else if (e.target.id === "tempImage" && !gallery.firstElementChild) {
    let imageRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
    if (!imageRegex.test(e.target.value)) {
      prevImg.src = "../../assets/noImg.png";
      return;
    } else {
      prevImg.src = e.target.value;
        }
  } else if (gallery.firstElementChild && e.target.id === "tempImage") {
    prevImg.src = gallery.firstElementChild.dataset.link;
  } else if (e.target.id === "listingEnd") {
    let test = timeDisplayer(e.target.value);
    previewEnd.innerHTML = test;
  }
}
