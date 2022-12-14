let list = [];
/**
 *
 * @param {string} value url of the media
 * @description adds media to the list
 */
function addMedia(value) {
  list.push(value);
}
/**
 *
 * @param {string} value url of the media
 * @description removes media from the list
 */
function removeMedia(value) {
  list.splice(list.indexOf(value), 1);
}
/**
 *
 * @param {htmlDOM} location the location to display the media preiew
 * @description displays the media preview in the location given
 */
function displayMedia(location) {
  location.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    location.innerHTML += `<button type="button" data-link="${list[i]}" class="d-flex  btn imgPreview"><img class="rounded-1"src="${list[i]}"><i class="bi bi-trash"></i></button>`;
  }
}

export { addMedia, removeMedia, displayMedia, list };
