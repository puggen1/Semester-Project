import storageRetriever from "../storage/storageRetriever.js";
import createModal from "../htmlTemplate/modal.js";
if (!storageRetriever("isLoggedIn")) {
  let bodyContent = ` <div class="col-12 d-flex justify-content-between"><button type=button" id="goBack" class="btn btn-link text-dark text-decoration-none border" data-bs-dismiss="modal"><i class="bi bi-arrow-left"></i>Go back</button>
  <div class="d-flex justify-content-center">
  <button type="submit" id="loginRestricted" class=" mx-1 btn btn-primary">Login</button>
  <button type="submit" id="registerRestricted" class="mx-1 btn btn-secondary">Register</button>
  </div></div>`;
  let modal = createModal(
    "restricted",
    bodyContent,
    "",
    false,
    "You have to be Logged in to be here"
  );
  document.body.insertAdjacentElement("beforeEnd", modal);
  let restrictedModal = bootstrap.Modal.getOrCreateInstance("#restrictedModal");
  restrictedModal.show();
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
