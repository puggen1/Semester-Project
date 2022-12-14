/**
 *
 * @param {string} keyword the keyword / value to search for
 * @param {object} listings all listing to be search trough
 * @returns list of listings that match the keyword
 */
export default function searchFilter(keyword, listings) {
  let toReturn = listings.filter((listing) => {
    let { title, seller, description } = listing;
    let key = keyword.toLowerCase();
    if (title.toLowerCase().indexOf(key) > -1) {
      return true;
    }
    if (seller.name.toLowerCase().indexOf(key) > -1) {
      return true;
    }
    if (description && description.toLowerCase().indexOf(key) > -1) {
      return true;
    }
  });
  console.log(toReturn);
  return toReturn;
}
