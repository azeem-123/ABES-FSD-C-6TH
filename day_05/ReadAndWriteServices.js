import fs from "fs/promises";

const readJsonFile = async(path)=>{
    try {
        const data = await fs.readFile(path,);
        return data;
    } catch (error) {
        console.log("unable to read file");
    }       
}
readJsonFile()
