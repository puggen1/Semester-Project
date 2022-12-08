import addModals from "./addModals.js";
import register from "./register.js";
import logIn from "./login.js";
import logOut from "./loggOut.js";
import storageRetriever from "../storage/storageRetriever.js";
let isLoggedIn = storageRetriever("isLoggedIn");
//to activate login and register buttons


//if logged in, change login to  logout, target both on front? class?
function activateButtons() {
  if(isLoggedIn){
    let logoutNavButton = document.querySelector("#logoutNav");
    logoutNavButton.addEventListener("click", logOut);
  }
  else{
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
  }

activateButtons();
