let tags = [];
//add
/**
 *
 * @param {string} value the value of the tag you want to add
 */
function addTag(value) {
  tags.push(value);
}

//remove
/**
 *
 * @param {string} value the value of the tag you want to remove
 */
function removeTag(value) {
  tags.splice(tags.indexOf(value), 1);
}

//display
/**
 *
 * @param {htmlDOm} location  the location to display the preview
 * @description displays the tag preview in the location given
 */
function displayTags(location) {
  location.innerHTML = "";
  for (let i = 0; i < tags.length; i++) {
    location.innerHTML += `<button type="button" data-tag-name="${tags[i]}" class="d-flex justify-content-between btn m-1 btn-secondary">${tags[i]}<i class="bi bi-trash"></i></button>`;
  }
}

export { addTag, removeTag, displayTags, tags };
