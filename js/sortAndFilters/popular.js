//most popular listings is filtered with this, also if it is for single listing page, only return 6 of them maybe?
//calculated based on number of bids and is still ongoing
import { sortBids } from "./getLastBid.js";
export default function mostPopular(listings, singleListing = false) {
  let onlyOngoing = listings.filter((listing) => {
    let timeNow = new Date();
    let endDate = new Date(listing.endsAt);
    let timeLeft = endDate - timeNow;
    if (timeLeft > 0 && listing.bids.length > 0) {
      return true;
    }
    return false;
  });
  onlyOngoing.sort((listingA, listingB) => {
    let lastBidA = sortBids(listingA.bids);
    let lastBidB = sortBids(listingB.bids);
    console.log(lastBidA, lastBidB);
    if (lastBidA.amount > lastBidB.amount) {
      return 1;
    }
    if (lastBidB.amount > lastBidA.amount) {
      return -1;
    } else {
      return 0;
    }
  });
  if (singleListing) {
    let smallList = onlyOngoing.slice(0, 5);
    return smallList;
  } else {
    return onlyOngoing;
  }
}
