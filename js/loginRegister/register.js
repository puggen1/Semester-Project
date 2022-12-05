import apiCall from "../api/apiCall.mjs";

export default async function register(e) {
  console.log(e);
  //validating for minimal errors
  let username = e.target[0].value;
  let avatar = e.target[1].value;
  let email = e.target[2].value;
  let password = e.target[3].value;

  //using sam eregex as last time
  let usernameRegex = /^[a-zA-Z0-9_æøåÆØÅ]{3,15}$/;
  let emailRegex = /^[a-z0-9.æøå]{0,}[a-z0-9]{1,}@(stud.)?noroff.no$/i;
  let passwordRegex = /^[a-zA-Z0-9æøåÆØÅ]{8,30}$/;

  if(usernameRegex.test(username) && emailRegex.test(email) && passwordRegex.test(password)){
    let data = {
      username: username,
      avatar: avatar,
      email: email,
      password: password,
    };
    let response = await apiCall("users", "POST", data);
    if(response.error){
      alert(response.message);
    } else {
      //give success message
      
      
      //after delay go to login modal?
      setTimeout(()=>{
        let registerModal = bootstrap.Modal.getOrCreateInstance("#registerModal");
        registerModal.hide();
        let loginModal = bootstrap.Modal.getOrCreateInstance("#loginModal");
        loginModal.show();
      }, 2000)
     
    }
  }

}
