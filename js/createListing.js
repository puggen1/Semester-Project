import createListing from "./listingActions/create.js";
import previewListing from "./listingActions/listingPreview.js";
import storageRetriever from "./storage/storageRetriever.js";
import {
  addMedia,
  removeMedia,
  displayMedia,
  list as imgList,
} from "./htmlTemplate/mediaList.js";
import { imageRegex } from "./validation/image.js";
import {
  addTag,
  removeTag,
  displayTags,
  tags as tagList,
} from "./htmlTemplate/tagList.js";
import back from "./buttonActivation/back.js";
let username = storageRetriever("username");
let avatar = storageRetriever("avatar");
let previewuser = document.querySelector("#previewUser");
let form = document.querySelector("#content form");
let listingPreviewSection = document.querySelector("#preview");
let addImg = document.querySelector("#add");
let imageList = document.querySelector("#gallery");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  createListing(event.target);
});

form.addEventListener("keyup", (event) => {
  previewListing(event, form, listingPreviewSection);
});
//make the date on change?
form.addEventListener("change", (event) => {
  previewListing(event, form, listingPreviewSection);
});
addImg.addEventListener("click", (event) => {
  //test if input is valid image url
  let imgInput = document.querySelector("#tempImage");

  if (imageRegex.test(imgInput.value)) {
    addMedia(imgInput.value);
    imgInput.value = "";
    displayMedia(imageList);
    let linkButtons = document.querySelectorAll("#gallery button");
    for (let button of linkButtons) {
      button.addEventListener("click", (event) => {
        removeMedia(event.target.dataset.link);
        button.remove();
      });
    }
  }
});
let addTagBtn = document.querySelector("#addTag");
addTagBtn.addEventListener("click", (event) => {
  let tagField = document.querySelector("#listingTags");
  if (tagField.value) {
    addTag(tagField.value);
    tagField.value = "";
    displayTags(document.querySelector("#tags"));
    let tagButtons = document.querySelectorAll("#tags button");
    for (let button of tagButtons) {
      button.addEventListener("click", (event) => {
        removeTag(event.target.dataset.tagName);
        button.remove();
      });
    }
  }
});

previewuser.innerHTML = `${username} <div class="profileImageListing ratio"><img src="${avatar}" class="rounded-circle img-fluid " alt="${username}s profilePicture"></div>`;

let backBtn = document.querySelector("#backBtn");
backBtn.addEventListener("click", back);
let cancel = document.querySelector("#cancel");
cancel.addEventListener("click", back);
