import apiCall from "./api/apiCall.mjs";
import buildCardListing from "./htmlTemplate/cardListing.js";
let listings = document.querySelector("#listings");
let listingListTitle = document.querySelector("#numberOfListings");

async function showListings() {
  listings.innerHTML = "";
  let result = await apiCall("listings?_bids=true&_seller=true", "GET");
  for (let listing of result) {
    let card = buildCardListing(listing);
    listings.insertAdjacentElement("afterbegin", card);
  }
  listingListTitle.innerHTML = `showing ${result.length} listings`;
}
showListings();
