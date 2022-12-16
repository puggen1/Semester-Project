import storageRetriever from "../storage/storageRetriever.js";
let dynamicNavLocation = document.querySelector("#navContent");
let avatar = storageRetriever("avatar");
let url = new URL(window.location.href);
let isLoggedIn = storageRetriever("isLoggedIn");
/**
 * @description if logged in, adds some navigation options in nav, if not logged in, the login button is in nav
 */
function dynamicNav() {
  if (!isLoggedIn) {
    dynamicNavLocation.innerHTML = `
    <ul class="navbar-nav justify-content-end">
                    <li class="nav-item">
                      <a class="nav-link active fs-3" aria-current="page" href="./index.html">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link  text-dark fs-4" href="./profile.html">Profile</a>
                    </li>
                    <li class="nav-item">
                        <button id="loginNav" type="button" class="btn btn-link text-dark text-decoration-none ms-0 ps-0 fs-4">Login</button>
                      </li>
                    
                  </ul>`;
  } else {
    dynamicNavLocation.innerHTML = `<ul class="navbar-nav justify-content-end">
   <li class="nav-item">
     <a class="nav-link active fs-3" aria-current="page" href="./index.html">Home</a>
   </li>
   <li class="nav-item">
     <a class="nav-link d-flex align-items-center text-dark fs-4" href="./profile.html?from=.${url.pathname}">Profile <div class="profileImage ratio"><img class="rounded-circle col-1"src="${avatar}"></div></a>
   </li>
   <li class="nav-item">
       <button id="navNewListing" type="button" class="btn btn-link text-decoration-none ms-0 ps-0 fs-4"><a href="./createlisting.html?from=.${url.pathname}" class="text-dark text-decoration-none">New Listing</a></button>
   </li>
   <li class="nav-item">
       <a class="nav-link text-dark fs-4" href="./profile.html#myCollection?from=.${url.pathname}">My collection</a>
     </li>
   <li class="nav-item">
       <button id="logoutNav" type="button"class="btn btn-link text-dark text-decoration-none ms-0 ps-0 fs-4">Logout</button>
     </li>
   
 </ul>`;
  }
}

dynamicNav();
