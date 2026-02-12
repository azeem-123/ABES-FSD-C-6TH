import fs from 'fs';
// const writefilesync = (path) => {
//     try{
//         fs.writeFileSync(path,utf-a);
//         console.log("File read successfully");
//     }
//     catch(err){
//         console.log("Some error occurred while read file: ");
//     }
    
// }
// writefilesync("./example.txt","This is an example file created using writeFileSync method.");
const appendfilesync = (path,data) => {
    try{
    fs.appendFileSync(file,data);
    console.log("Data appended successfully");
    }
    catch(err){
        console.log("Some error occurred while appending data to file: ");
    }
}
appendfilesync("./example.txt"," This is an example file created using appendFileSync method.");