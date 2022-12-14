// login function
import apiCall from "../api/apiCall.mjs";
import { storageSaver } from "../storage/storageSaver.js";
import createAlertResponse from "../responses/createAlertResponse.js";
import createTextResponse from "../responses/createTextResponse.js";
import { emailRegex, passwordRegex } from "../regex/regex.js";
/**
 *
 * @param {Event} e the event that is triggered when the form is submitted, sending values from inputs
 * @description this function will log in the user if the credentials are correct
 */
export default async function logIn(e) {
  //start status will be changed if not correct credentials
  let emailStatus = true;
  let passwordStatus = true;

  //target the fields
  let email = e.target[0].value;
  let password = e.target[1].value;

  // alertLocations
  let alertLocationPassword = document.querySelector("#loginPasswordResponse");
  let alertLocationEmail = document.querySelector("#loginEmailResponse");
  let alertLocationLower = document.querySelector("#loginResponse");

  //gives message if not correct credentials
  if (!emailRegex.test(email)) {
    let response = createTextResponse("Please enter a noroff email");
    alertLocationEmail.innerHTML = "";
    alertLocationEmail.insertAdjacentElement("beforeend", response);
    emailStatus = false;
  } else {
    alertLocationEmail.innerHTML = "";
  }
  //gives message if not correct credentials
  if (!passwordRegex.test(password)) {
    let response = createTextResponse("Please enter a valid password");
    alertLocationPassword.innerHTML = "";
    alertLocationPassword.insertAdjacentElement("beforeend", response);
    passwordStatus = false;
  } else {
    alertLocationPassword.innerHTML = "";
  }

  console.log(email, password);
  if (emailStatus && passwordStatus) {
    alertLocationLower.innerHTML = "";
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
    } else {
      let alert = createAlertResponse(response.message);
      alertLocationLower.innerHTML = "";
      alertLocationLower.insertAdjacentElement("beforeend", alert);
    }
    console.log(response);
  }
}
