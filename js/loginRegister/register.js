import apiCall from "../api/apiCall.mjs";
import { emailRegex, passwordRegex, usernameRegex } from "../regex/regex.js";
import createAlertResponse from "../responses/createAlertResponse.js";
import createTextResponse from "../responses/createTextResponse.js";
/**
 *
 * @param {event} e the event that triggers when the form is submitted, sending values from inputs
 * @description this function will register the user if the credentials are correct, and redirects to login modal
 */
export default async function register(e) {
  //validating for minimal errors
  let username = e.target[0].value;
  let avatar = e.target[1].value;
  let email = e.target[2].value;
  let password = e.target[3].value;

  // alertLocations
  let alertLocationPassword = document.querySelector(
    "#registerPasswordResponse"
  );
  let alertLocationEmail = document.querySelector("#registerEmailResponse");
  let alertLocationUsername = document.querySelector(
    "#registerUsernameResponse"
  );
  let alertLocationLower = document.querySelector("#registerResponse");

  if (!usernameRegex.test(username)) {
    let response = createTextResponse(
      "Please do not use special characters except _"
    );
    alertLocationUsername.innerHTML = "";
    alertLocationUsername.insertAdjacentElement("beforeend", response);
  } else {
    alertLocationUsername.innerHTML = "";
  }
  if (!emailRegex.test(email)) {
    let response = createTextResponse("Please enter a noroff email");
    alertLocationEmail.innerHTML = "";
    alertLocationEmail.insertAdjacentElement("beforeend", response);
  } else {
    alertLocationEmail.innerHTML = "";
  }
  if (!passwordRegex.test(password)) {
    let response = createTextResponse(
      "Please enter a valid password (8-30 characters)"
    );
    alertLocationPassword.innerHTML = "";
    alertLocationPassword.insertAdjacentElement("beforeend", response);
  } else {
    alertLocationPassword.innerHTML = "";
  }
  if (
    usernameRegex.test(username) &&
    emailRegex.test(email) &&
    passwordRegex.test(password)
  ) {
    //reseting alert field
    alertLocationLower.innerHTML = "";
    let data = {
      name: username,
      avatar: avatar,
      email: email,
      password: password,
    };
    let response = await apiCall("auth/register", "POST", data);
    if (!response.id) {
      let alertResponse = createAlertResponse(response.message, "danger",);
      alertLocationLower.innerHTML = "";
      alertLocationLower.insertAdjacentElement("beforeend", alertResponse);
    } else {
      //give success message
      console.log(response);
      let alertResponse = createAlertResponse(
        "You have successfully registered, you will be redirected to login",
        "success"
      );
      alertLocationLower.innerHTML = "";
      alertLocationLower.insertAdjacentElement("beforeend", alertResponse);
      //after delay go to login modal?
      setTimeout(() => {
        let registerModal =
          bootstrap.Modal.getOrCreateInstance("#registerModal");
        registerModal.hide();
        let loginModal = bootstrap.Modal.getOrCreateInstance("#loginModal");
        loginModal.show();
      }, 3000);
    }
  }
}
