import getLastBid from "../sortAndFilters/getLastBid.js";
import timeDisplayer from "./timeDisplay.js";
import storageRetriever from "../storage/storageRetriever.js";
//if logged in show bid button, if not show view button
let isLoggedIn = storageRetriever("isLoggedIn");
/**
 *
 * @param {object} listingData the data from the listing
 * @param {boolean} profile for the size of the card
 * @param {string} from the page the card is being built on, for redirecting back
 * @description this will add the needed data to a card and return it
 * @returns html element of the listing
 */
export default function buildCardListing(
  listingData,
  profile = false,
  from = "index.html"
) {
  //gets the diffrent elements we need to build the card
  let { id, title, media, endsAt, bids, seller } = listingData;
  //for the big image on the card
  let bigMedia = "./assets/noImg.png";
  if (media.length > 0) {
    bigMedia = media[0];
  }
  let cta = "view";
  if (isLoggedIn) {
    cta = "Bid";
  }
  //for user avatar
  let avatar = "./assets/placeholder.png";
  if (seller.avatar) {
    avatar = seller.avatar;
  }
  //last bid
  let lastBid = getLastBid(bids);
  //create the parent div
  let cardListing = document.createElement("a");
  cardListing.href = `./listing.html?id=${id}&from=${from}`;
  //timeleft
  let nonFunctionCountDown = timeDisplayer(endsAt);
  //adds the class to the parent div
  if (profile) {
    //need to be bigger on profile page
    cardListing.classList.add("col-md-12", "col-xxl-10");
  } else {
    cardListing.classList.add("col-md-10", "col-xxl-8");
  }
  cardListing.classList.add(
    "text-decoration-none",
    "shadow",
    "card",
    "d-md-flex",
    "flex-md-row",
    "mx-3",
    "my-2",
    "text-dark"
  );
  //adds everything to the parent div
  cardListing.innerHTML = `
  <img  alt="first listing picture if any" class="bigImg col-md-4" src="${bigMedia}">
    <div class="card-body pt-1 px-2 pb-0 pt-md-1 px-md-3 d-md-flex flex-md-column justify-content-md-between">
        <div class="card-title d-flex mb-md-1 flex-wrap align-items-end justify-content-between align-items-center">
        <h3 class="col-12 mb-0 fs-5 text-break">${title}</h3>
        <div class="d-flex text-end fs-5 text-decoration-none text-dark d-md-flex align-items-center justify-content-start">
            ${seller.name}
            <div class="profileImageListing ratio col-2 ">
                <img src="${avatar}" class="rounded-circle img-fluid" alt="the avatar of the user that created this listing">
            </div></div>
        </div>
        <div class="d-flex flex pb-2 col-md-12 flex-md-row justify-content-between">
        <p class="border rounded-1 py-1 my-0 px-2 d-flex align-items-center">${nonFunctionCountDown}</p>
        <section class="d-flex align-items-center justify-content-md-end align-items-md-end">
        ${lastBid}
        <button href="./listing.html/?id=${id}"type="button" class="btn btn-primary ms-1 py-1 px-3 text-dark fs-md-5">${cta}</button>
        </section>
    </div>
</div>`;
  return cardListing;
}
