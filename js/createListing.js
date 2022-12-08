import createListing from "./listingActions/create.js";
import previewListing from "./listingActions/listingPreview.js";
import storageRetriever from "./storage/storageRetriever.js";
let username = storageRetriever("username");
let avatar = storageRetriever("avatar");
let previewuser = document.querySelector("#previewUser");
let form = document.querySelector("#content form");
let listingPreviewSection = document.querySelector("#preview");

form.addEventListener("submit", (event) =>{
event.preventDefault();
console.log(event);
    createListing(event.target);
})


form.addEventListener("keyup", (event)=>{
    previewListing(event, form, listingPreviewSection);
});

previewuser.innerHTML = `${username} <div class="profileImageListing ratio"><img src="${avatar}" class="rounded-circle img-fluid "></div>`;