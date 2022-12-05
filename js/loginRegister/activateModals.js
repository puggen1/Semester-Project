import addModals from "./addModals.js";
import register from "./register.js";
import logIn from "./login.js";
//to activate login and register buttons
function activateButtons() {
  addModals();
  let loggedInstatus = localStorage.getItem("loggedIn");
  let nav = bootstrap.Offcanvas.getOrCreateInstance("#navbar");
  let loginModal = bootstrap.Modal.getOrCreateInstance("#loginModal");
  let registerModal = bootstrap.Modal.getOrCreateInstance("#registerModal");
  let loginButton = document.querySelector("#loginNav");
  let loginForm = document.querySelector("#loginForm");
  let registerButton = document.querySelector("#register");
  let registerForm = document.querySelector("#registerForm");
  //let createUserButton = document.querySelector("#createUser");
  if (!loggedInstatus) {
    loginButton.addEventListener("click", () => {
      nav.hide();
      loginModal.show();
    });
    loginForm.addEventListener("submit", (event)=>{
      event.preventDefault();
      logIn(event);
    })
    registerButton.addEventListener("click", () => {
      loginModal.hide();
      registerModal.show();
    });
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault(); 
      register(event);
    });
  }
}

activateButtons();
