let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(error)
            reject("I am rejected")
        else
            resolve("I am resolved")
    },5000)
});
promise.then((a)=>console.log(a)).catch((e)=>{console.log(e)})