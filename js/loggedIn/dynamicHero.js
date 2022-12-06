import storageRetriever from "../storage/storageRetriever.js";

let heroLocation = document.querySelector("#mainSection");
let isLoggedIn = storageRetriever("isLoggedIn");
let username = storageRetriever("username");
let avatar = storageRetriever("avatar");
function dynamicHero() {
  if (isLoggedIn) {
    heroLocation.innerHTML = `
        <!--Here the buy sell buttons will be when you are not logged in, and the profile picture and some buttons when you are logged in-->
        <div class="d-flex col-12  col-lg-6 col-xl-4 justify-content-center profileImage ratio">
            <!--use trick to make round all the time-->
            <img src="${avatar}" alt="profile picture" class="img-fluid rounded-circle col-6">
        </div>
        <h1 class=" col-lg-6 col-xl-4 col-xxl-3 text-center">Hello ${username}</h1>
        <h2 class="col-lg-6 col-xl-4 col-xxl-3 text-center"> what do you seek?</h2>
        <div id="actions" class="d-flex flex-column col-11 col-lg-6 col-xl-4 col-xxl-3 justify-content-center align-items-center rounded-1 py-2">
            <a href="profile.html#yourListings" class="btn btn-primary col-10 col-sm-3 col-lg-4 col-xl-5 col-xxl-4 my-2">Your Listings</a>
            <a href="createListing.html" class="btn btn-primary col-10 col-sm-3 col-lg-4 col-xl-5 col-xxl-4 my-2">New Listing</a>
            <p>or</p>
            <h3>something to buy</h3>
            <a href="#mainContent"><i class="bi bi-chevron-down"></i></a>
    
                </div>
        `;
  } else {
    heroLocation.innerHTML = ` <!--Here the buy sell buttons will be when you are not logged in, and the profile picture and some buttons when you are logged in-->
        <h1 class="">Welcome!</h1>
        <h2> what do you seek?</h2>
        <div id="actions" class="d-flex flex-column flex-lg-row col-11 justify-content-center  align-items-center bg-light rounded-1 py-2">
        <div class="position-relative col-8 col-lg-4 mx-2 my-1">
            <img class="opacity-25 rounded-1 col-12"src="./assets/buy.jpg" alt="buy image">
            <div id="buyOverlay" class="position-absolute top-50 start-50 translate-middle">
            <a href="#mainContent" class="btn btn-link border-dark text-dark text-decoration-none">Buy</a>
        </div>
            <!--hover effect-->
        </div>
        <div class="position-relative col-8 col-lg-4 mx-2 my-1">
            <img class="rounded-1 col-12 opacity-25" src="./assets/sell.jpg" alt="sell image">
            <div id="sellOverlay " class="position-absolute top-50 start-50 translate-middle">
            <a href="./createlisting.html" class="btn border-dark text-dark text-decoration-none">Sell</a>
        </div>
            <!--hover effect-->
        </div>
      </div>`;
  }
}

dynamicHero();