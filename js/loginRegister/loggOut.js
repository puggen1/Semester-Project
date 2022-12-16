import { storageRemover } from "../storage/storageSaver.js";
/**
 * @description logs out the user and removes all tokens that are saved in local storage
 */
export default function logOut() {
  storageRemover("loginToken");
  storageRemover("avatar");
  storageRemover("username");
  storageRemover("isLoggedIn");
  storageRemover("token");
  window.location.reload();
}
