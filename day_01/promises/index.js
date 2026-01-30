// const myPromise=new Promise((resolve,reject)=>{
//     let marks=34;
//     if(marks>33){
//         resolve("pass");
//     }else{
//         reject("Fail");
//     }
// }

// )

const f1 = async()=>{
    try{
        const res=await myPromise;
        console.log(msg);
    }catch(error){
        console.log("Some error occurred: ",error);
    }
}
// f1();


const getData=async()=>{
   
   try{
    const response=await fetch("https://fakestoreapi.com/products");
     const data=await response.json();
     return data;
   }catch(error){
    console.log("Some error occurred... ");
   }
}    
fetch("https://fakestoreapi.com/products")
.then((res)=>console.log(res.json())) 
// const output=getData();
// console.log(output);    
// myPromise.then((msg)=>console.log(msg))
// .catch((error)=>console.log("Some error occurred: ",error));