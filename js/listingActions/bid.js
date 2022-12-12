import apiCall from "../api/apiCall.mjs";
import storageRetriever from "../storage/storageRetriever.js";
import { storageSaver } from "../storage/storageSaver.js";
import createAlertResponse from "../responses/createAlertResponse.js";
export default async function bid(amount, id, bids) {
  let bidResponse = document.querySelector("#bidResponse");
  let lastBid = bids[bids.length - 1].amount;
  if (!amount || amount <= lastBid) {
    let response = createAlertResponse(
      `Please enter a valid bid over ${lastBid}`,
      "danger"
    );
    bidResponse.innerHTML = "";
    bidResponse.insertAdjacentElement("beforeend", response);
    return;
  } else {
    bidResponse.innerHTML = "";
    let url = `listings/${id}/bids`;
    let body = { amount: amount };
    let token = storageRetriever("loginToken");
    let response = await apiCall(url, "POST", body, token);
    if (response.id) {
      let response = createAlertResponse(
        "Bid placed, refreshing page.....",
        "success"
      );
      bidResponse.insertAdjacentElement("beforeend", response);
      setTimeout(() => {
        storageSaver("token", storageRetriever("token") - amount);
        window.location.reload();
      }, 2500);
    }
  }
}
