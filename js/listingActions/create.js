

export default function createListing(data){
    console.log(data);
    let title = data[0].value;
    let { desc = data[1].value, gallery = data[2].value, tags = data[4].value, ending = data[5].value} = data;


}