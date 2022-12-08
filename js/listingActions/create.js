

export default function createListing(data){
    console.log(data);
    let title = data[0].value;
    let gallery = document.querySelector("#gallery");
    console.log(gallery);
    let { desc = data[1].value, tags = data[4].value, ending = data[5].value} = data;
    //check if image is valid image url
    let imageRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
    for(let i = 0; i < gallery.length; i++){
        if(!imageRegex.test(gallery[i])){
            console.log("nope!", gallery[i]), "er ikke ";
            return;
        }

    }

}