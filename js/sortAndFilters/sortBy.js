import mostPopular from "./popular.js";
/**
 *
 * @param {object} list all listings to be sorted
 * @param {string} by the valuse gotten from the select element
 * @returns sorted list
 */
export default function sortBy(list, by) {
  if (by === "old") {
    list.sort((a, b) => {
      return new Date(a.created) - new Date(b.created);
    });
  } else if (by === "new") {
    list.sort((a, b) => {
      return new Date(b.created) - new Date(a.created);
    });
  } else if (by === "popular") {
    list = mostPopular(list);
  } else {
    list.sort((a, b) => {
      return new Date(a.endsAt) - new Date(b.endsAt);
    });
  }
  return list;
}
