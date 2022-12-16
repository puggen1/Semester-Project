// does the same as localStorage.getItem(name) but made into function for easier use?
export default function storageRetriever(name) {
  return localStorage.getItem(name);
}
