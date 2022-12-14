import { tags } from "../htmlTemplate/tagList.js";
import apiCall from "../api/apiCall.mjs";
import { list } from "../htmlTemplate/mediaList.js";
import validDate from "../validation/date.js";
import storageRetriever from "../storage/storageRetriever.js";
import createTextResponse from "../responses/createTextResponse.js";
import createAlertResponse from "../responses/createAlertResponse.js";
/**
 *
 * @param {event} data the information that is sent with the event
 * @description this function will create a listing if the data is valid, and give response if successful or not
 */
export default async function createListing(data) {
  let { desc = data[1].value, ending = new Date(data.listingEnd.value) } = data;
  let title = data[0].value;
  let okDate = validDate(ending);

  //placement of alerts
  let titleResponse = document.querySelector("#createListingTitleResponse");
  let dateResponse = document.querySelector("#createListingDateResponse");
  let lowerResponse = document.querySelector("#createListingResponse");
  if (!title) {
    let response = createTextResponse("Please enter a title");
    titleResponse.innerHTML = "";
    titleResponse.insertAdjacentElement("beforeend", response);
  } else {
    titleResponse.innerHTML = "";
  }
  if (!okDate) {
    dateResponse.innerHTML = "";
    let response = createAlertResponse(
      "Please enter a valid date in the future",
      "danger"
    );
    dateResponse.insertAdjacentElement("beforeend", response);
  } else {
    dateResponse.innerHTML = "";
  }
  if (title && okDate) {
    let listing = {
      title: title,
      description: desc,
      tags: tags,
      media: list,
      endsAt: ending,
    };
    let result = await apiCall(
      "listings",
      "POST",
      listing,
      storageRetriever("loginToken")
    );
    if (result.id) {
      lowerResponse.innerHTML = "";
      let response = createAlertResponse(
        `Listing created view it <a  class="text-dark" href="listing.html?id=${result.id}">here</a>`,
        "success"
      );
      lowerResponse.insertAdjacentElement("beforeend", response);
    }
  } else {
    lowerResponse.innerHTML = "";
    let response = createAlertResponse(
      "Please fill out required fields",
      "danger"
    );
    console.log("invalid data");
  }
}
