const mypromise = new Promise((resolve, reject) => {
    let marks =33;
    if(marks >33){
        resolve("You are passed");
    }    else{
        reject("You are failed");
    }           
});
mypromise.then((message) => {
    console.log(message);
}
).catch((error) => {
    console.log("some error  occured",error);
});
