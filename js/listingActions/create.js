import { tags } from "../htmlTemplate/tagList.js";
import apiCall from "../api/apiCall.mjs";
import { list } from "../htmlTemplate/mediaList.js";
import validDate from "../validation/date.js";
import storageRetriever from "../storage/storageRetriever.js";
export default async function createListing(data) {
  let { desc = data[1].value, ending = new Date(data.listingEnd.value) } = data;
  let title = data[0].value;
  let okDate = validDate(ending);
  //validate data
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
    console.log(result);
  } else {
    console.log("invalid data");
  }
}
