//imports
import storageRetriever from "./storage/storageRetriever.js";
import apiCall from "./api/apiCall.mjs";
import buildCardListing from "./htmlTemplate/cardListing.js";
import back from "./buttonActivation/back.js";
import { imageRegex } from "./validation/image.js";
import createAlertResponse from "./responses/createAlertResponse.js";
import createTextResponse from "./responses/createTextResponse.js";
import createModal from "./htmlTemplate/modal.js";
import { storageRemover, storageSaver } from "./storage/storageSaver.js";
//multiple html elements that is needed
let username = document.querySelector("#username");
let token = document.querySelector("#tAmount");
let listingLocation = document.querySelector("#profileListings article");
let avatar = document.querySelector(".profileImageRight img");
let url = new URL(window.location.href);
let user = url.searchParams.get("username");
/**
 * @description displays the profile of the user, based on if it is your profile or another persons profile.
 */
async function showProfile() {
  //check if logged in (have access to this page)
  if (storageRetriever("isLoggedIn")) {
    //declare variable
    let profileData;
    //if user is logged in and is on their own profile. show relevant content
    if (!user || user === storageRetriever("username")) {
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
      profileListings(listings, profileData);

      //activate edit picture modal and create it
      avatarChanger(profileData);
    } else {
      //if user is logged in and is on another persons profile. show relevant content and remove edit picture button and tokens
      profileData = await apiCall(
        `profiles/${user}?_listings=true`,
        "GET",
        null,
        storageRetriever("loginToken")
      );
      document.querySelector("#userTokens").remove();
      document.querySelector("#editPicture").remove();
      document.querySelector("#profileNew").classList.add("invisible");
      let listings = await apiCall(
        `profiles/${user}/listings?_bids=true&_seller=true`,
        "GET",
        null,
        storageRetriever("loginToken")
      );
      profileListings(listings, profileData);
    }
    avatar.src = profileData.avatar
      ? profileData.avatar
      : "./assets/placeholder.png";
    username.innerText = profileData.name;
  }
}

showProfile();
/**
 *
 * @param {object} listings a list of listings on your profile, fetched separately from the profile data because of more data.
 * @description this function creates the cards for the listings on your profile, and adds them to the page
 */
function profileListings(listings) {
  let temp;
  for (let listing of listings) {
    temp = buildCardListing(
      listing,
      true,
      `./profile.html?username=${user ? user : storageRetriever("username")}`
    );
    listingLocation.insertAdjacentElement("beforeend", temp);
  }
}

//back button
let backButton = document.querySelector("#back");
backButton.addEventListener("click", back);
let backButtonPhone = document.querySelector("#backPhone");
backButtonPhone.addEventListener("click", back);
/**
 *
 * @param {object} profileData is the profile data of the user(yourself)
 * @description this function creates the modal for changing the avatar and adds the event listeners to it for it to work. it gives responses based on if input is okay or not
 *
 * example with testdata
 * @example
 * ```js
 *  avatarChanger({name: "test", avatar: "https://cdna.artstation.com/p/assets/images/images/038/652/346/4k/joe-parente-joji-pink-guy-comp-01.jpg?1623691200"})
 * //expected return
 * //modal with input field and submit button
 * ```
 */
function avatarChanger(profileData) {
  //targeting html elements
  let bodyContent = ` <div class="profileImageRight m-auto ratio col-12">
  <img src="${
    profileData.avatar ? profileData.avatar : "./assets/placeholder.png"
  }" alt="old avatar" id="avatarPreview" class="img-fluid mb-2 rounded-circle">
  </div>
  <label for="avatar" class="form-label">new avatar</label>
  <input type="text" id="avatar" class="form-control mb-2" placeholder="link" required>
  <div id="avatarResponse" ></div>
`;
  let footerContent = ` <div class="ms-auto">
<button type="button" class="btn btn-link text-dark" data-bs-dismiss="modal">Cancel</button>
<button id="avatarSubmit" type="submit" class="btn btn-primary">Change</button>
</div>`;
  let main = document.querySelector("main");
  let modal = createModal(
    "avatar",
    bodyContent,
    footerContent,
    false,
    "Change Avatar"
  );

  //inserting modal
  main.insertAdjacentElement("afterEnd", modal);

  // adding modal popup when clicking button
  document.querySelector("#editPicture").addEventListener("click", () => {
    bootstrap.Modal.getOrCreateInstance("#avatarModal").show();
    //adding event listener to the input field
    let imgInput = document.querySelector("#avatar");
    imgInput.addEventListener("input", () => {
      //place for error response
      let responsePLacement = document.querySelector("#avatarResponse");
      let preview = document.querySelector("#avatarPreview");
      if (imageRegex.test(imgInput.value)) {
        //if the input is a valid image link then show it in the preview and remove any error responses
        preview.src = imgInput.value;
        responsePLacement.innerHTML = "";
      } else {
        preview.src = profileData.avatar;
        //create an error response and display it
        let response = createTextResponse("Please enter a valid image link");
        responsePLacement.innerHTML = "";
        responsePLacement.insertAdjacentElement("beforeend", response);
      }
    });
    //adding event listener to the submit button
    let submitButton = document.querySelector("#avatarSubmit");
    submitButton.addEventListener("click", async () => {
      //waits for an response from the api call then give error or success response
      let response = await apiCall(
        `profiles/${profileData.name}/media`,
        "PUT",
        { avatar: imgInput.value },
        storageRetriever("loginToken")
      );
      //possitive response
      if(
        response.avatar === imgInput.value ||
        response.name === profileData.name
      ) {
        let alertResponse = createAlertResponse(
          "Avatar changed successfully",
          "success"
        );
        storageRemover("avatar");
        storageSaver("avatar", imgInput.value);
        document.querySelector("#avatarResponse").innerHTML = "";
        document
          .querySelector("#avatarResponse")
          .insertAdjacentElement("beforeend", alertResponse);
        avatar.src = imgInput.value;
        //hide modal after 2 seconds
        setTimeout(() => {
          bootstrap.Modal.getOrCreateInstance("#avatarModal").hide();
        }, 2000);
        //negative response   (will probably not happen ever?)
      } else {
        let alertResponse = createAlertResponse(
          "Avatar change failed",
          "danger"
        );
        document.querySelector("#avatarResponse").innerHTML = "";
        document
          .querySelector("#avatarResponse")
          .insertAdjacentElement("beforeend", alertResponse);
      }
      imgInput.value = "";
    });
  });
}
