import apiCall from "./api/apiCall.mjs";
import getLastBid from "./sortAndFilters/getLastBid.js";
import timeDisplay from "./htmlTemplate/timeDisplay.js";
import cardListing from "./htmlTemplate/cardListing.js";
import createTags from "./htmlTemplate/tags.js";
import popular from "./sortAndFilters/popular.js";
import storageRetriever from "./storage/storageRetriever.js";
import bid from "./postActions/bid.js";
let singleListingLocation = document.querySelector("#listingPage");
let popularListings = document.querySelector("#listings");
let url = window.location.search;
let params = new URLSearchParams(url);
let id = params.get("id");

async function displaySingle(id) {
  let listing = await apiCall(`listings/${id}?_bids=true&_seller=true`, "GET");
  let { title, tags, bids, endsAt, created, description, seller } = listing;
  //seller avatar
  let avatar = "../assets/avatar.jpg";
  if (seller.avatar) {
    avatar = seller.avatar;
  }
  //last bid
  let lastBid = getLastBid(bids);
  //countdown
  let countdown = timeDisplay(endsAt);
  //tags
  let allTags = "";
  if (tags.lenth > 0) {
    allTags = createTags(tags);
  }
  //description
  if (description === null || description === "") {
    description = "no description";
  }
  //if own
  let self = storageRetriever("username");
  let bidSection;
  if (seller === self) {
    bidSection = ``;
  } else if (!storageRetriever("isLoggedIn")) {
    bidSection = `<div id="loggedInContent" class="col-xl-6">
    <div class="top d-flex justify-content-end mt-2 mt-xl-0">
        <button id="bidButtonPhone" type="button" class="btn btn-primary py-1 px-4 d-md-none">Bid</button>
    </div>
    <div id="bidSection" class="d-none d-md-block col-lg-8 col-xl-12">
        <div class="d-md-flex flex-md-column flex-lg-row  col-md-8 col-xl-12 ms-auto justify-content-md-end justify-content-lg-end ms-lg-0 align-items-md-end">
            <button type="button" class="btn btn-primary col-5 mt-md-2 mt-xl-0 ms-lg-1" id="loginButtonBidSection">log in to bid</button>
        </div>
    </div>
</div>`;
  } else {
    bidSection = `<div id="loggedInContent" class="col-xl-6">
    <div class="top d-flex justify-content-end mt-2 mt-xl-0">
        <button id="bidButtonPhone" type="button" class="btn btn-primary py-1 px-4 d-md-none">Bid</button>
    </div>
    <div id="bidSection" class="d-none d-md-block col-lg-8 col-xl-12">
        <form id="bidForm" class="d-md-flex flex-md-column flex-lg-row  col-md-8 col-xl-12 ms-auto justify-content-md-end justify-content-lg-start ms-lg-0 align-items-md-end">
            <input type="number" class="form-control" id="bidAmount" placeholder="Bid amount">   
            <button type="submit" class="btn btn-primary col-5 mt-md-2 mt-xl-0 ms-lg-1" id="bidButton">Bid</button>
        </form>
    </div>
</div>`;
  }
  let singleListing = document.createElement("div");
  singleListing.classList.add(
    "col-12",
    "d-flex",
    "justify-content-center",
    "flex-column",
    "flex-lg-row",
    "align-items-center",
    "align-items-lg-start"
  );
  singleListing.innerHTML = `
  <section id="mediaGallery" class="d-flex flex-column flex-md-row flex-lg-column align-items-center  col-11 col-md-10 col-lg-5 ">
      <img class="bigImage col-12 col-md-10 rounded-1" src="assets/sell.jpg" alt="placeholder">
      <div id="subContent" class="col-12 col-md-2 col-lg-10 d-flex flex-md-column flex-lg-row align-items-center">
          <i id="leftButton" class="bi bi-chevron-left d-md-none d-lg-block">
          </i>
          <i id="upButton" class="bi bi-chevron-up d-none d-md-block d-lg-none">
          </i>
          <div id="thumbnails" class="d-flex flex-md-column flex-lg-row justify-content-center">
              <img class="thumbnail col-3 col-md-12 col-lg-3 m-2 rounded-1" src="assets/buy.jpg" alt="placeholder">
              <img class="thumbnail col-3 col-md-12 col-lg-3 m-2 rounded-1" src="assets/buy.jpg" alt="placeholder">
              <img class="thumbnail col-3 col-md-12 col-lg-3 m-2 rounded-1" src="assets/buy.jpg" alt="placeholder">
          </div>
          <i id="rightButton" class="bi bi-chevron-right d-md-none d-lg-block">
          </i>
          <i id="downButton" class="bi bi-chevron-down d-none d-md-block d-lg-none">
          </i>
  </div>
  </section>
  <section class="col-11 col-md-10 col-lg-5 d-md-flex flex-lg-wrap mt-md-2">
      <div class="bigLeft col-md-8 col-lg-12 flex-lg-wrap d-lg-flex me-md-1 ">
      <h1 id="listingTitle"class="col-lg-6 fs-3">${title}</h1>
      <div class="d-flex col-lg-6 justify-content-lg-end">
      <p class=" me-1 fs-5 d-flex mb-0 align-items-center align-items-xl-start">Listed by </p>
      <a href="profile.html?username=${seller.name}" class="col-6 col-sm-5 col-md-4 col-lg-7 col-xl-6 col-xxl-5 fs-5 text-end text-dark text-decoration-none d-flex align-items-center align-items-xl-start">
          ${seller.name}
          <div class="profileImageListing ratio">
              <img src="${avatar}" class="rounded-circle img-fluid ">
          </div>
      </a>
      </div>
      <p class="mb-lg-1">${description}</p>
      <section class="d-sm-flex flex-wrap align-items-center  mb-sm-1 col-lg-10 col-xl-12 justify-content-between  justify-content-md-start">
      <div id="singlePageTags" class=" mb-2 mb-sm-1 mb-md-0">
        ${allTags}
      </div>

      <div class="countdown border rounded-1 px-2 py-1 ms-md-2 ms-lg-0">
         ${countdown}
      </div>
      <article id="lowerPart" class="d-flex flex-column flex-md-wrap flex-md-row justify-content-center col-12 col-lg-8">

      <!--debatable
      <p>Listed: 29.11.2022 at 14:48</p>
      -->
      </div>
      <section class="bigRight d-md-flex flex-md-column col-md-4 col-lg-12 col-xl-12 justify-content-md-between justify-content-xl-start flex-xl-row">
          <div id="currentBid" class="d-flex flex-wrap justify-content-between justify-content-lg-start align-items-md-end align-items-xl-start col-12 col-xl-6">
              <p class="d-flex mb-0 fs-5 ">Current bid: </p>
              ${lastBid}
          </div>
          ${bidSection}`;
  singleListingLocation.insertAdjacentElement("afterbegin", singleListing);
  //add bid function to button
  if (storageRetriever("isLoggedIn")) {
    let bidForm = document.querySelector("#bidForm");
    bidForm.addEventListener("submit", (event) => {
      event.preventDefault();
      bid(event.target[0].valueAsNumber, id);
    });
  } else {
    let loginBidButton = document.querySelector("#loginButtonBidSection");
    loginBidButton.addEventListener("click", () => {
      let loginModal = bootstrap.Modal.getOrCreateInstance("#loginModal");
      loginModal.show();
    });
  }
}
async function showPopular() {
  let result = await apiCall("listings?_bids=true&_seller=true", "GET");
  let mostPopular = popular(result, true);
  popularListings.innerHTML = "";
  for (let listing of mostPopular) {
    popularListings.insertAdjacentElement("beforeend", cardListing(listing));
  }
}
displaySingle(id);
showPopular();
//todo:
//create function to check if logged in, change lower part based on that...
// filter listings under to show most popular, exclude the one that is already showing here?
//modal for login/ register if click the login btn,
//link another script to all pages so header and footer change based on logged in or not...
//media carousel? and what if no images or many??