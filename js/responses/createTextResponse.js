/**
 *
 * @param {string} responseText  the text wanted to be displayed
 * @returns
 */
export default function createTextResponse(responseText) {
  let response = document.createElement("p");
  response.innerHTML = responseText;
  response.classList.add("text-danger", "mt-2");
  return response;
}
