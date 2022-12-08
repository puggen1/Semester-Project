//most popular listings is filtered with this, also if it is for single listing page, only return 6 of them maybe?
//calculated based on number of bids and is still ongoing
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
    if (listingA._count.bids > listingB._count.bids) {
      return -1;
    }
    if (listingA._count.bids < listingB._count.bids) {
      return 1;
    } else {
      return 0;
    }
  });
  if (singleListing) {
    let smallList = onlyOngoing.slice(0, 6);
    return smallList;
  } else {
    return onlyOngoing;
  }
}
