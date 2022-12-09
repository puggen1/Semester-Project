import storageRetriever from "../storage/storageRetriever.js";
let dynamicNavLocation = document.querySelector("#navContent");
let avatar = storageRetriever("avatar");

let isLoggedIn = storageRetriever("isLoggedIn");
function dynamicNav(){
if(!isLoggedIn){
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
                    
                  </ul>`
}
else{
   dynamicNavLocation.innerHTML = `<ul class="navbar-nav justify-content-end">
   <li class="nav-item">
     <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
   </li>
   <li class="nav-item">
     <a class="nav-link" href="./profile.html">Profile <img class="rounded-circle col-1"src="${avatar}"></a>
   </li>
   <li class="nav-item">
       <button id="navNewListing" type="button"class="btn btn-link text-decoration-none ms-0 ps-0"><a href="./createlisting.html" class="text-dark text-decoration-none">New Listing</a></button>
   </li>
   <li class="nav-item">
       <a class="nav-link" href="./profile.html#myCollection">My collection</a>
     </li>
   <li class="nav-item">
       <button id="logoutNav" type="button"class="btn btn-link text-dark text-decoration-none ms-0 ps-0">Logout</button>
     </li>
   
 </ul>`
}
}


dynamicNav();