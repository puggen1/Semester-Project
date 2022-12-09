import storageRetriever from "../storage/storageRetriever.js";
import restrictedModalTemp from "../htmlTemplate/restrictedModal.js";
if (!storageRetriever("isLoggedIn")) {
  let modal = restrictedModalTemp();
  document.body.insertAdjacentElement("beforeEnd", modal);
  let restrictedModal = bootstrap.Modal.getOrCreateInstance("#restrictedModal");
  restrictedModal.show();
  restrictedModal.innerHTML = "You need to be logged in to do that";
  document.querySelector("#loginRestricted").addEventListener("click", () => {
    let loginModal = bootstrap.Modal.getOrCreateInstance("#loginModal");
    restrictedModal.hide();
    loginModal.show();
  });
  document
    .querySelector("#registerRestricted")
    .addEventListener("click", () => {
      let registerModal = bootstrap.Modal.getOrCreateInstance("#registerModal");
      restrictedModal.hide();
      registerModal.show();
    });
  document.querySelector("#goBack").addEventListener("click", () => {
    window.location.href = "./index.html";
  });
  restrictedModal.show();
} else {
  console.log("logged in");
}
