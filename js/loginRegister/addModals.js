import loginModal from "../htmlTemplate/loginModal.js";
import registerModal from "../htmlTemplate/registerModal.js";
export default function addModals() {
  let register = registerModal();
  let login = loginModal();
  let body = document.querySelector("body");
  body.insertAdjacentElement("beforeend", login);
  body.insertAdjacentElement("beforeend", register);
}
