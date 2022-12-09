import storageRetriever from "../storage/storageRetriever.js";

let isLoggedIn = storageRetriever("isLoggedIn");
let headerProfileImg = document.querySelector("#profileHeader div");

function dynamicHeaderImg(){
    if(isLoggedIn){
        let avatar = storageRetriever("avatar");
        headerProfileImg.innerHTML = `<a class="col-12 d-flex justify-content-end profileImage ratio" href="./profile.html"><img class="rounded-circle col-6 col-md-4 col-lg-6" src="${avatar}"></a>`;
    }
}

dynamicHeaderImg();