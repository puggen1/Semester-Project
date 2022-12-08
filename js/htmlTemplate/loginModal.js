export default function loginModal() {
  let modal = document.createElement("div");
  modal.id = "loginModal";
  modal.classList.add("modal", "fade");
  modal.tabIndex = "-1";
  modal.ariaLabel = "loginModalLabel";
  modal.ariaHidden = true;
  modal.innerHTML = `
  <form id="loginForm">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="loginModalLabel">Login</h1>
      </div>
      <div class="modal-body">
          <label for="loginEmail" class="form-label">email</label>
        <input type="email" id="loginEmail" class="form-control mb-2" placeholder="email">
          <label for="loginPassword" class="form-label">password</label>
          <input type="password" id="loginPassword"class="form-control mb-2" placeholder="password">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-link text-dark" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" class="btn btn-primary">Login</button>
        <button type="button" id="register" class="btn btn-secondary">Register</button>
      </div>
    </div>
  </div>
  </form>`;

  return modal;
}
