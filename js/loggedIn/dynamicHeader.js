import storageRetriever from "../storage/storageRetriever.js";
//targets information needed
let isLoggedIn = storageRetriever("isLoggedIn");
let headerProfileImg = document.querySelector("#profileHeader div");
/**
 * @description if logged in, adds the profile image to the header
 */
function dynamicHeaderImg() {
  if (isLoggedIn) {
    let avatar = storageRetriever("avatar");
    headerProfileImg.innerHTML = `<a aria-label="go to profile" class="col-12 d-flex justify-content-end profileImage ratio" href="./profile.html"><img class="rounded-circle col-6 col-md-4 col-lg-6" src="${avatar}" alt="your avatar"></a>`;
  }
}

dynamicHeaderImg();
