/**
 *
 * @param {string} type the type of modal, e.g. "login" or "register"
 * @param {string} bodyContent the content for the modal body, for example form inputs
 * @param {string} footerContent the content for the modal footer, for example submit and close buttons
 * @param {boolean} form whether the modal is a form or not
 * @param {string} header the modal header
 * @param {boolean} restricted decides if the modal is restricted or not
 * @returns a modal with the given parameters
 */
export default function createModal(
  type,
  bodyContent,
  footerContent,
  form = false,
  header,
  restricted = false
) {
  let outerDiv = form ? "form" : "div";
  let modal = document.createElement("div");
  modal.classList.add("modal", "fade");
  modal.id = type + "Modal";
  modal.tabIndex = "-1";
  modal.ariaLabel = `${type}Label`;
  modal.ariaHidden = true;
  modal.innerHTML = `
  <${outerDiv} id="${type}${form ? "Form" : "inner"}">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="${type}Label">${header}</h1>
      </div>
      <div class="modal-body">
        ${bodyContent}
      </div>
      <div class="modal-footer d-flex flex-column">
        ${footerContent}
    </div>
  </div>
  </${outerDiv}>`;
  if(restricted) {
    modal.dataset.bsBackdrop = "static";
    modal.dataset.bsKeyboard = "false";
  }

  return modal;
}
