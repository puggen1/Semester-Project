function storageSaver(name, value){
    localStorage.setItem(name, value);
}

function storageRemover(name){
    localStorage.removeItem(name);
}


export {storageSaver, storageRemover};