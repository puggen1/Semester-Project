function sortBids(allBids) {
  let lastBid = allBids[0];
  for (let bid of allBids) {
    if (bid.amount > lastBid.amount) {
      lastBid = bid;
    }
    return lastBid;
  }
}

export default function getLastBid(bids) {
  let bid = `<div class="amount d-flex my-1 my-0">`;
  if (!(bids.length > 0)) {
    bid += `
    <p class="m-0 fs-md-5">No bids</p></div>
    `;
  } else {
    let lastBid = sortBids(bids);
    bid += `
        <p class="m-0 fs-md-5">${lastBid.amount}<img class="ms-1 "src="./assets/token.svg" alt="token icon"></p></div>`;
  }
  return bid;
}

export { sortBids };
