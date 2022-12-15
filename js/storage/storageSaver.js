/**
 *
 * @param {string} name the name of token to be saved
 * @param {string} value the value that the token will be saved as
 */
function storageSaver(name, value) {
  localStorage.setItem(name, value);
}

/**
 *
 * @param {string} name the name of the token to be removed
 */
function storageRemover(name) {
  localStorage.removeItem(name);
}

export { storageSaver, storageRemover };
