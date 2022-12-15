/**
 *
 * @param {string} responseText the text to be displayed, examle: api response text
 * @param {string} responseType the type, example: success or error
 * @returns a response element
 */
export default function createAlertResponse(responseText, responseType) {
  let response = document.createElement("div");
  response.classList.add("alert", "alert-dismissible", "fade", "show", "my-0");
  if (responseType === "success") {
    response.classList.add("alert-success");
  } else {
    response.classList.add("alert-danger");
  }
  response.innerHTML = `${responseText}  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;

  return response;
}
