export default function restrictedModal(from) {
  let modal = document.createElement("div");
  modal.id = "restrictedModal";
  modal.classList.add("modal", "fade");
  modal.tabIndex = "-1";
  modal.ariaLabel = "restricted";
  modal.ariaHidden = true;
  modal.dataset.bsBackdrop = "static";
  modal.dataset.bsKeyboard = "false";
  modal.innerHTML = `
    <div id="">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-center" id="restricted">you have to be logged in to create a listing</h1>
        </div>
        <div class="modal-body d-flex justify-content-between">
        <button type=buttton" id="goBack" class="btn btn-link text-dark text-decoration-none border" data-bs-dismiss="modal"><i class="bi bi-arrow-left"></i>Go back</button>
        <div class="d-flex justify-content-center">
        <button type="submit" id="loginRestricted" class=" mx-1 btn btn-primary">Login</button>
        <button type="submit" id="registerRestricted" class="mx-1 btn btn-secondary">Register</button>
        </div>
        </div>
          
      </div>
    </div>
    </div>
    `;

  return modal;
}
