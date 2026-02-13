import fs from "fs/promises";

const status = async(path)=>{
    try {
        const data = await fs.stat(path);
        console.log(status);       
    }
    catch (error) {        console.log("unable to get status");       
    }   
}
status("../day_02");
