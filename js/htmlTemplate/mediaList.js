let list = [];
function addMedia(value) {
  list.push(value);
  console.log(list);
}
function removeMedia(value) {
  list.splice(list.indexOf(value), 1);
  console.log(list);
}
function displayMedia(location) {
  location.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    location.innerHTML += `<button type="button" data-link="${list[i]}" class="d-flex  btn imgPreview"><img class="rounded-1"src="${list[i]}"><i class="bi bi-trash"></i></button>`;
  }
  console.log(list);
}

export { addMedia, removeMedia, displayMedia, list };
