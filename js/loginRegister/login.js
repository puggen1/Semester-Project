// login function
import apiCall from "../api/apiCall.mjs";
import { storageSaver } from "../storage/storageSaver.js";
export default async function logIn(e) {
  let email = e.target[0].value;
  let password = e.target[1].value;
  console.log(email, password);
  let body = { email: email, password: password };
  let response = await apiCall("auth/login", "POST", body);
  if (response.accessToken) {
    let avatar = response.avatar;
    if (!response.avatar) {
      avatar = "./assets/placeholder.png";
    }
    storageSaver("loginToken", `Bearer ${response.accessToken}`);
    storageSaver("username", response.name);
    storageSaver("avatar", avatar);
    storageSaver("token", response.credits);
    storageSaver("isLoggedIn", true);
    window.location.reload();
  }
  console.log(response);
}
