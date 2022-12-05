import apiCall from "../api/apiCall.mjs";

export default async function register(e) {
  //validating for minimal errors
  //here
  let user = {
    name: "testUsername1234",
    email: "ben.test2@noroff.no",
    password: "pass321123",
  };
  let response = await apiCall("auth/register", "POST", user);
  console.log(response);
}
