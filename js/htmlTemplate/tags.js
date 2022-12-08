export default function createTags(allTags) {
  let tags = ``;
  for (let tag of allTags) {
    tags += `<button type="button" class="btn btn-secondary py-1">${tag}</button>`;
  }
  return tags;
}
