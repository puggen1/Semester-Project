/**
 *
 * @param {object} allTags all tags of an listing
 * @description this function will create the tags in form of html buttons
 * @returns tags in form of html buttons
 */
export default function createTags(allTags) {
  let tags = ``;
  for (let tag of allTags) {
    if (tag) {
      tags += `<button type="button" class="btn btn-secondary py-1 m-1">${tag}</button>`;
    }
  }
  return tags;
}
