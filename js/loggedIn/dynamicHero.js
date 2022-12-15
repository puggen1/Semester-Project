import storageRetriever from "../storage/storageRetriever.js";
//targeting needed information
let heroLocation = document.querySelector("#mainSection");
let isLoggedIn = storageRetriever("isLoggedIn");
let username = storageRetriever("username");
let avatar = storageRetriever("avatar");

/**
 * @description if logged in, the profile picture and some actions will be added to the hero section, if not logged in, the buy and sell buttons will be added
 */
function dynamicHero() {
  if (isLoggedIn) {
    heroLocation.innerHTML = `
    <div id="inner" class="d-flex flex-column col-md-5 col-lg-4 col-xxl-3 rounded-2 py-4">
        <!--Here the buy sell buttons will be when you are not logged in, and the profile picture and some buttons when you are logged in-->
        <div class="d-flex justify-content-center profileImageRight ratio m-auto">
            <!--use trick to make round all the time-->
            <img src="${avatar}" alt="profile picture" class="img-fluid rounded-circle">
        </div>
        <h1 class="  text-center">Hello ${username}</h1>
        <h2 class=" text-center"> what do you seek?</h2>
        <div id="actions" class="d-flex flex-column justify-content-center align-items-center rounded-1 py-2">
            <a href="./profile.html#yourListings" class="btn btn-primary col-10 col-sm-6 col-lg-5 col-xl-5 col-xxl-4 my-2">Your Listings</a>
            <a href="./createlisting.html" class="btn btn-primary col-10 col-sm-6 col-lg-5 col-xl-5 col-xxl-4 my-2">New Listing</a>
    </div>
                </div>
        `;
  } else {
    heroLocation.innerHTML = ` <!--Here the buy sell buttons will be when you are not logged in, and the profile picture and some buttons when you are logged in-->
        <h1 class="">Welcome!</h1>
        <h2> what do you seek?</h2>
        <div id="actions" class="notLoggedIn d-flex flex-column flex-lg-row col-11 justify-content-center  align-items-center rounded-1 py-2">
        <div id="buy" class="position-relative col-8 col-lg-4 mx-2 my-1">
            <img class="rounded-1 col-12"src="./assets/buy.jpg" alt="buy image">
            <div id="buyOverlay" class="position-absolute col-12 h-100 rounded-1  d-flex top-50 start-50 justify-content-center align-items-center translate-middle">
            <a href="#mainContent" class="btn btn-link border-white  text-white ">Buy</a>
        </div>
            <!--hover effect-->
        </div>
        <div id="sell" class="position-relative col-8 col-lg-4 mx-2 my-1">
            <img class="rounded-1 col-12" src="./assets/sell.jpg" alt="sell image">
            <div id="sellOverlay" class="position-absolute col-12 h-100 rounded-1 d-flex top-50 start-50 justify-content-center align-items-center translate-middle">
            <a href="./createlisting.html" class="btn btn-link border-white text-white">Sell</a>
        </div>
            <!--hover effect-->
        </div>
      </div>`;
  }
}

dynamicHero();
