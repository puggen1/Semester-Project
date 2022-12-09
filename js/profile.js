import storageRetriever from "./storage/storageRetriever.js";
import apiCall from "./api/apiCall.mjs";
import buildCardListing from "./htmlTemplate/cardListing.js";
let username = document.querySelector("#username");
let token = document.querySelector("#tAmount");
let listingLocation = document.querySelector("#profileListings article");
let url = new URL(window.location.href);
let user = url.searchParams.get("username");
async function showProfile(){
if(storageRetriever("isLoggedIn")){
    let profileData;
    if(!user){
        let userToGet = storageRetriever("username");
        profileData = await apiCall(`profiles/${userToGet}?_listings=true&_seller=true&_bids=true`, "GET", null,storageRetriever("loginToken"));
        let listings = await apiCall(`profiles/${userToGet}/listings?_bids=true&_seller=true`, "GET", null,storageRetriever("loginToken"));
        token.innerText = profileData.credits;
        console.log(profileData);
        console.log(listings);
        profileListings(listings);
    }
    else{
        profileData = await apiCall(`profiles/${user}?_listings=true`, "GET", null,storageRetriever("loginToken"));
        document.querySelector("#userTokens").remove();
        document.querySelector("#editPicture").remove();
        let listings = await apiCall(`profiles/${user}/listings?_bids=true&_seller=true`, "GET", null,storageRetriever("loginToken"));
        console.log(profileData);
        profileListings(listings);
      

    }
    username.innerText = profileData.name;
    
}

}



showProfile();


function profileListings(listings){
    let allListings = "";
    for(let listing of listings){
        let temp =  buildCardListing(listing);
        listingLocation.insertAdjacentElement("beforeend", temp);
    }

}