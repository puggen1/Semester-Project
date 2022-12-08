export default function registerModal() {
  let modal = document.createElement("div");
  modal.id = "registerModal";
  modal.classList.add("modal", "fade");
  modal.tabIndex = "-1";
  modal.ariaLabel = "registerModalLabel";
  modal.ariaHidden = true;
  modal.innerHTML = `
  <form id="registerForm">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="registerModalLabel">Register</h1>
      </div>
      <div class="modal-body">
          <label for="registerUsername" class="form-label">username</label>
          <input type="text" id="registerUsername" class="form-control mb-2" placeholder="username">
          <label for="registerAvatar" class="form-label">avatar</label>
          <input type="url" id="registerAvatar" class="form-control mb-2" placeholder="avatar url">
          <label for="registerEmail" class="form-label">email</label>
          <input type="email" id="registerEmail" class="form-control mb-2" placeholder="email">
          <label for="registerPassword" class="form-label">password</label>
          <input type="password" id="registerPassword"class="form-control mb-2" placeholder="password">
          </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-link text-dark" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" id="createUser" class="btn btn-secondary">Register</button>
      </div>
    </div>
  </div>
  </form>
  `;

  return modal;
}
