function sortBids(allBids) {
  let lastBid = allBids[0];
  for (let bid of allBids) {
    if (bid.amount > lastBid.amount) {
      lastBid = bid;
    }
  }
  return lastBid;
}

export default function getLastBid(bids) {
  let bid = `<div class="amount d-flex  ms-1 mb-xl-0">`;
  if (!(bids.length > 0)) {
    bid += `
    <p class="m-auto me-xl-0 d-flex fs-5">No bids</p></div>
    `;
  } else {
    let lastBid = sortBids(bids);
    bid += `
        <p class="m-auto me-xl-0 d-flex fs-5">${lastBid.amount}<img class="ms-1 "src="./assets/token.svg" alt="token icon"></p></div>`;
  }
  return bid;
}

export { sortBids };
