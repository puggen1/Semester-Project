import apiCall from "../api/apiCall.mjs";
import storageRetriever from "../storage/storageRetriever.js";
export default async function bid(amount, id){
    let url = `listings/${id}/bids`;
    let body = {"amount" : amount};
    let token = storageRetriever("loginToken");
    let response = await apiCall(url,"POST", body, token);
    console.log(response);
}