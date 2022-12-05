// login function
import apiCall from "../api/apiCall.mjs";
import { storeToken } from "../storage/token.js";
import { isLoggedIn } from "../storage/isLoggedIn.js";
export default async function logIn(e) {
    let email = e.target[0].value;
    let password = e.target[1].value;
    console.log(email, password)
    let body = {"email": email, "password": password};

    let response = await apiCall("auth/login", "POST", body);
    if(response.accessToken){
        storeToken(response.storeToken);
        isLoggedIn(true);
        location.reload();
    }
    console.log(response);
}
