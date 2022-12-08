import storageRetriever from "./storage/storageRetriever.js";
let username = document.querySelector("#username");
let token = document.querySelector("#tAmount");
username.innerText = storageRetriever("username");
token.innerText = storageRetriever("token");
