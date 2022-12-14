/**
 *
 * @param {obejct} allBids all the bids of an listing
 * @returns highes / last bid
 * @description made this because once it did not give me the highest bid as th elast bid, so i made this function to sort the bids and return the highest bid
 */
function sortBids(allBids) {
  let lastBid = allBids[0];
  for (let bid of allBids) {
    if (bid.amount > lastBid.amount) {
      lastBid = bid;
    }
  }
  return lastBid;
}
/**
 *
 * @param {object} bids all the bids of an listing
 * @description this function will return the highest bid as html or no bids if there is no bids
 * @returns highest bid as html
 */
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
