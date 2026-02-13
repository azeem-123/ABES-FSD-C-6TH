import os from 'os';

const getOSdetails = () => {
    try {
        const arch = os.arch();
        consolre.log(arch);
        const totalmem = os.totalmem();
        console.log(totalmem/1024*1024);
        const freemem = os.freemem();
        console.log(freemem/1024*1024);
    } catch (error) {
        console.log("unable to get details");
    }
}
getdetails();
