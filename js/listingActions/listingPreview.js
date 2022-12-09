
import timeDisplayer from "../htmlTemplate/timeDisplay.js";
export default function previewListing(e, data, preview){
    let prevImg = document.querySelector("#previewImg");
    let prevTitle = document.querySelector("#previewTitle");
    let previewEnd = document.querySelector("#previewEnd");
    let gallery = document.querySelector("#gallery");
    if(e.target.id === "listingTitle"){
        prevTitle.innerText = e.target.value;
    }
    else if(e.target.id === "tempImage" && !gallery.firstElementChild){
        let imageRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
        if(!imageRegex.test(e.target.value)){
            prevImg.src = "https://picsum.photos/500/500";
            return;
        }
        else{
            prevImg.src = e.target.value;
            console.log(prevImg);
        }
       
    }
    else if(gallery.firstElementChild && e.target.id === "tempImage"){
        prevImg.src = gallery.firstElementChild.dataset.link;
    }
    else if( e.target.id === "listingEnd"){
        console.log(e.target.value);
        let test = timeDisplayer(e.target.value);
        console.log(test);
        console.log(previewEnd);
        previewEnd.innerHTML = test
    }
    let { desc = data[1].value, tags = data[4].value, ending = data[5].value} = data;
}