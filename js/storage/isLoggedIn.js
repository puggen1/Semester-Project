function isLoggedIn(bool){
    if(bool){
        localStorage.setItem("isLoggedIn", bool);
    }
    else{
        localStorage.removeItem("isLoggedIn");
    }
}




export {isLoggedIn};