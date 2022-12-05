function storeToken(token){
    localStorage.setItem("token", `Bearer ${token}`);
}

function deleteToken(){
    localStorage.removeItem("token");
}


export {storeToken, deleteToken};