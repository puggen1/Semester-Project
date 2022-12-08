
import timeDisplayer from "../htmlTemplate/timeDisplay.js";
export default function previewListing(e, data, preview){
    let prevImg = document.querySelector("#previewImg");
    let prevTitle = document.querySelector("#previewTitle");
console.log(e.target.id);
    let previewEnd = document.querySelector("#previewEnd");
    if(e.target.id === "listingTitle"){
        prevTitle.innerText = e.target.value;
    }
    else if(e.target.id === "tempImage"){
        prevImg.src = e.target.value;
        console.log(prevImg);
    }
    else if( e.target.id === "listingEnd"){
        console.log(e.target.value);
        let test = timeDisplayer(e.target.value);
        console.log(test);
        console.log(previewEnd);
        previewEnd.innerHTML = test
    }
    let { desc = data[1].value, gallery = data[2].value, tags = data[4].value, ending = data[5].value} = data;
}