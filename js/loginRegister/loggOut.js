import { storageRemover } from "../storage/storageSaver.js";
export default function logOut(){
    storageRemover("loginToken");
    storageRemover("avatar");
    storageRemover("username");
    storageRemover("isLoggedIn");
    window.location.reload();
}