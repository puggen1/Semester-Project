export default function avatarModal(oldImage) {
  let modal = document.createElement("div");
  modal.id = "avatarModal";
  modal.classList.add("modal", "fade");
  modal.tabIndex = "-1";
  modal.ariaLabel = "AvatarModalLabel";
  modal.ariaHidden = true;
  modal.innerHTML = `
    <div id="editAvatar">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="loginModalLabel">Change avatar</h1>
        </div>
        <div class="modal-body">
        <div class="profileImageRight m-auto ratio col-12">
          <img src="${oldImage}" alt="old avatar" class="img-fluid mb-2 rounded-circle">
          </div>
          <label for="avatar" class="form-label">new avatar</label>
          <input type="text" id="avatar" class="form-control mb-2" placeholder="link" required>
          <div id="avatarResponse" ></div>
        </div>
        <div class="modal-footer d-flex flex-column">
          <div class="ms-auto">
          <button type="button" class="btn btn-link text-dark" data-bs-dismiss="modal">Cancel</button>
          <button type="submit" class="btn btn-primary">Change</button>
          </div>
        </div>
      </div>
    </div>
    </div>`;

  return modal;
}
