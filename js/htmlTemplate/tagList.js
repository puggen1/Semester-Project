let tags = [];
//add
function addTag(value){
    tags.push(value);
}

//remove
function removeTag(value){
    console.log(tags);
    tags.splice(tags.indexOf(value), 1);
    console.log(tags);
}

//display

function displayTags(location){
    location.innerHTML = "";
    for(let i = 0; i < tags.length; i++){
        location.innerHTML += `<button type="button" data-tag-name="${tags[i]}" class="d-flex justify-content-between btn btn-secondary">${tags[i]}<i class="bi bi-trash"></i></button>`;
    }
    console.log(location)
    console.log(tags);
}

export {addTag, removeTag, displayTags, tags};