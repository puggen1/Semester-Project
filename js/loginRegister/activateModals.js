import addModals from "./addModals.js";
import register from "./register.js";
//to activate login and register buttons
function activateButtons() {
  addModals();
  let loggedInstatus = localStorage.getItem("loggedIn");
  let nav = bootstrap.Offcanvas.getOrCreateInstance("#navbar");
  let loginModal = bootstrap.Modal.getOrCreateInstance("#loginModal");
  let registerModal = bootstrap.Modal.getOrCreateInstance("#registerModal");
  let loginButton = document.querySelector("#loginNav");
  let registerButton = document.querySelector("#register");
  let createUserButton = document.querySelector("#createUser");
  if (!loggedInstatus) {
    loginButton.addEventListener("click", () => {
      nav.hide();
      loginModal.show();
    });
    registerButton.addEventListener("click", () => {
      loginModal.hide();
      registerModal.show();
    });
    createUserButton.addEventListener("click", (event) => {
      register(event);
    });
  }
}

activateButtons();
