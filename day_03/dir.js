import fs from 'fs/promises';
const readmkdir = async (path) => {    try{
        const data = await fs.readdir(path);
        console.log(data)
console.log("dir has been removed successfully");
    }
    catch(err){
        console.log("Some error occurred while reading directory: ");
    }   
}
removedir("./day_03");    
const makedir = async (path) => {
    try{
        await fs.promises.mkdir(path)=>{
            try{
                await fs.mkdir(path);
                console.log("Directory created successfully");
            }
            catch(err){
                console.log("Some error occurred while creating directory: ");
            }
        }