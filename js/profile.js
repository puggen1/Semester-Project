import storageRetriever from "./storage/storageRetriever.js";
import apiCall from "./api/apiCall.mjs";
import buildCardListing from "./htmlTemplate/cardListing.js";
import back from "./buttonActivation/back.js";
import avatarModal from "./htmlTemplate/editAvatarModal.js";
let username = document.querySelector("#username");
let token = document.querySelector("#tAmount");
let listingLocation = document.querySelector("#profileListings article");
let avatar = document.querySelector(".profileImageRight img");
let url = new URL(window.location.href);
let user = url.searchParams.get("username");
async function showProfile() {
  if (storageRetriever("isLoggedIn")) {
    let profileData;
    if (!user) {
      let userToGet = storageRetriever("username");
      profileData = await apiCall(
        `profiles/${userToGet}?_listings=true&_seller=true&_bids=true`,
        "GET",
        null,
        storageRetriever("loginToken")
      );
      let listings = await apiCall(
        `profiles/${userToGet}/listings?_bids=true&_seller=true`,
        "GET",
        null,
        storageRetriever("loginToken")
      );
      token.innerText = profileData.credits;
      console.log(profileData);
      console.log(listings);
      profileListings(listings, profileData);
      //activate edit picture modal and create it
      let main = document.querySelector("main");
      let modal = avatarModal(profileData.avatar);
      main.insertAdjacentElement("afterEnd", modal);

      document.querySelector("#editPicture").addEventListener("click", () => {
        bootstrap.Modal.getOrCreateInstance("#avatarModal").show();
      });
    } else {
      profileData = await apiCall(
        `profiles/${user}?_listings=true`,
        "GET",
        null,
        storageRetriever("loginToken")
      );
      document.querySelector("#userTokens").remove();
      document.querySelector("#editPicture").remove();
      let listings = await apiCall(
        `profiles/${user}/listings?_bids=true&_seller=true`,
        "GET",
        null,
        storageRetriever("loginToken")
      );
      console.log(profileData);
      profileListings(listings, profileData);
    }
    avatar.src = profileData.avatar;
    username.innerText = profileData.name;
  }
}

showProfile();

function profileListings(listings) {
  let temp;
  for (let listing of listings) {
    temp = buildCardListing(listing);
    listingLocation.insertAdjacentElement("beforeend", temp);
  }
}

//back button
let backButton = document.querySelector("#back");
backButton.addEventListener("click", back);
