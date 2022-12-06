import storageRetriever from "../storage/storageRetriever.js";
import login from "../loginRegister/login.js";
let desktopProfile = document.querySelector("#profileRight");
let username = storageRetriever("username");
let avatar = storageRetriever("avatar");
let token = storageRetriever("token");
let isLoggedIn = storageRetriever("isLoggedIn");

if (isLoggedIn) {
  desktopProfile.innerHTML = `
  <div class="d-flex col-12  col-lg-6 col-xl-4 justify-content-center m-lg-auto profileImageRight ratio">
                    <!--use trick to make round all the time-->
                    <img src="${avatar}" alt="profile picture" class="img-fluid rounded-circle col-6">
                </div>
                <h4 class=" col-xl-12 text-center">${username}</h4>
                <div id="actions" class="d-flex flex-column col-xl-12 justify-content-center align-items-center rounded-1 py-2">
                    <div class="token border border-2 rounded-1 p-1 px-2 d-flex">${token}<img src="assets/token.svg" class="ms-1" alt="token"></div>
                    <a type="button" href="./createlisting.html" class="btn btn-primary col-lg-3 col-xl-3 col-xxl-4 my-1">New</a>
                    <div class="col-xl-6 col-xxl-8 d-flex">
                    <a href="profile.html" class="btn btn-primary col-xl-6 my-1 me-2">Profile</a>
                    <button type="button" class="btn btn-danger col-xl-6 my-1">Logout</button>
                </div>
                </div>`;
} else {
  desktopProfile.innerHTML = `
    <form id="sideLogin">
        <h2 class="fs-5 text-center">login to make a listing or bid</h2>
      </div>
      <div class="col-10 m-auto">
          <label for="loginEmail" class="form-label">email</label>
        <input type="email" id="loginEmail" class="form-control mb-2" placeholder="email">
          <label for="loginPassword" class="form-label">password</label>
          <input type="password" id="loginPassword"class="form-control mb-2" placeholder="password">
      </div>
      <div class="col-10 d-flex m-auto">
        <button type="submit" class="btn btn-primary col-3">Login</button>
        <button id="sideRegister" class="btn btn-link text-dark col-10 ps-0">dont have a user?</button>
      </div>
    </div>
  </div>
                </form>`;
  let sideLogin = document.querySelector("#sideLogin");
  sideLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    login(e);
  });
  let sideReg = document.querySelector("#sideRegister");
  let registerModal = bootstrap.Modal.getOrCreateInstance("#registerModal");
  sideReg.addEventListener("click", () => {
    registerModal.show();
  });
}
