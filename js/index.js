import apiCall from "./api/apiCall.mjs";
import buildCardListing from "./htmlTemplate/cardListing.js";
import searchFilter from "./sortAndFilters/searchFilter.js";
import sortBy from "./sortAndFilters/sortBy.js";
let listings = document.querySelector("#listings");
let listingListTitle = document.querySelector("#numberOfListings");
let allListings = "";
let filteredListings = "";
/**
 * @description when you come to this page, it will display all the listings it can find. (up tp 100)
 */
async function showListings() {
  listings.innerHTML = "";
  let result = await apiCall(
    "listings?_bids=true&_seller=true&_active=true",
    "GET"
  );
  allListings = result;
  displayListings(allListings, listings);
  listingListTitle.innerHTML = `showing ${result.length} listings`;
  //showTags();
  filterSearch(allListings);
}
showListings();

//need for reseting search
let searchButtons;
//search filtering
function filterSearch(allListings) {
  let search = document.querySelector("#search");
  let phoneSearch = document.querySelector("#phoneSearch");
  searchButtons = [search, phoneSearch];
  searchButtons.forEach((button) => {
    button.addEventListener("keyup", async (e) => {
      let keyword = e.target.value.toLowerCase();
      filteredListings = await searchFilter(keyword, allListings);
      displayListings(filteredListings, listings);
      listingListTitle.innerHTML = `showing ${filteredListings.length} listings`;
      // for if no listings
      noListings();
    });
  });
}

function noListings() {
  if (filteredListings.length === 0) {
    listings.innerHTML = `<div class="no-listings text-danger text-center mt-2">No listings found</div>`;
    listingListTitle.innerHTML = `no listings found`;
  }
}

//sort filters

let sortSelect = document.querySelector("#sort");
let sortSelectPhone = document.querySelector("#phoneSort");
let sortButtons = [sortSelect, sortSelectPhone];
console.log(sortButtons);
sortButtons.forEach((button) => {
  button.addEventListener("change", async (e) => {
    let listToBeSorted;
    let sortByValue = e.target.value;
    if (filteredListings.length > 0) {
      listToBeSorted = filteredListings;
      //so original list is not sorted
      sortBy(listToBeSorted, sortByValue);
    } else {
      listToBeSorted = allListings;
      //so original list is not sorted
      listToBeSorted = sortBy(listToBeSorted, sortByValue);
    }
    displayListings(listToBeSorted, listings);
  });
});
//reset

let reset = document.querySelector("#reset");
let phoneReset = document.querySelector("#phoneReset");
let resetButtons = [reset, phoneReset];

resetButtons.forEach((button) => {
  button.addEventListener("click", async (e) => {
    displayListings(allListings, listings);
    listingListTitle.innerHTML = `showing ${allListings.length} listings`;
    searchButtons.forEach((button) => {
      button.value = "";
    });
    sortButtons.forEach((button) => {
      button.value = "new";
    });
  });
});
//make global
/**
 *
 * @param {object} listings all listings that should be shown
 * @param {*} location the location where the listings should be shown
 * @description this function will display the listings in the location given
 * @example
 * ```js
 * displayListings(listings, location)
 * //expected output is html of listings in wanted location
 * ```
 */
function displayListings(listings, location) {
  location.innerHTML = "";
  for (let listing of listings) {
    let card = buildCardListing(listing);
    location.insertAdjacentElement("beforeEnd", card);
  }
}
