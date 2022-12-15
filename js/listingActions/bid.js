import apiCall from "../api/apiCall.mjs";
import storageRetriever from "../storage/storageRetriever.js";
import { storageSaver } from "../storage/storageSaver.js";
import createAlertResponse from "../responses/createAlertResponse.js";
/**
 *
 * @param {number} amount amount of token to bid
 * @param {string} id the id of the listing
 * @param {object} bids all the other bids on the listing to validate
 * @returns
 * @description this function will place a bid on a listing, or return an error if the bid is not valid / refresh if successful and show the bid
 */
export default async function bid(amount, id, bids) {
  let bidResponse = document.querySelector("#bidResponse");
  let lastBid = bids[bids.length - 1] ? bids[bids.length - 1] : 0;
  if (!amount || amount < lastBid) {
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
    console.log(response);
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
    } else {
      let error = createAlertResponse(response.message, "danger");
      bidResponse.insertAdjacentElement("beforeend", error);
    }
  }
}
