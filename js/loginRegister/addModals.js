import createModal from "../htmlTemplate/modal.js";
/**
 * @description adds the modals to the dom
 */
export default function addModals() {
  let registerContent = `<label for="registerUsername" class="form-label">username</label>
  <input type="text" id="registerUsername" class="form-control mb-2" placeholder="username">
  <div id="registerUsernameResponse" ></div>
  <label for="registerAvatar" class="form-label">avatar</label>
  <input type="url" id="registerAvatar" class="form-control mb-2" placeholder="avatar url">
  <label for="registerEmail" class="form-label">email</label>
  <input type="email" id="registerEmail" class="form-control mb-2" placeholder="email">
  <div id="registerEmailResponse" ></div>
  <label for="registerPassword" class="form-label">password</label>
  <input type="password" id="registerPassword"class="form-control mb-2" placeholder="password">
  <div id="registerPasswordResponse"></div>`;
  let registerFooter = `<div class="d-flex col-12"><div id="registerResponse" class="ms-auto"></div>
  <button type="button" class="btn btn-link text-dark" data-bs-dismiss="modal">Cancel</button>
  <button type="submit" id="createUser" class="btn btn-secondary">Register</button>
</div></div>`;
  let loginContent = `  <label for="loginEmail" class="form-label">email</label>
  <input type="email" id="loginEmail" class="form-control mb-2" placeholder="email" required>
  <div id="loginEmailResponse" ></div>
    <label for="loginPassword" class="form-label">password</label>
    <input type="password" id="loginPassword"class="form-control mb-2" placeholder="password" required>
    <div id="loginPasswordResponse"></div>`;
  let loginFooter = ` <div id="loginResponse" class="ms-auto"></div>
  <div class="ms-auto">
  <button type="button" class="btn btn-link text-dark" data-bs-dismiss="modal">Cancel</button>
  <button type="submit" class="btn btn-primary">Login</button>
  <button type="button" id="register" class="btn btn-secondary">Register</button>
  </div>
</div>`;
  let register = createModal(
    "register",
    registerContent,
    registerFooter,
    true,
    "Create account"
  );
  let login = createModal("login", loginContent, loginFooter, true, "Login");
  let body = document.querySelector("body");
  body.insertAdjacentElement("beforeend", login);
  body.insertAdjacentElement("beforeend", register);
}
