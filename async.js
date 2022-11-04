async function calculate() {
    console.log('function calcualte');
    let resp = await test();
    console.log('function resp',resp);
    return resp;
}
function test(){
    console.log('function test');
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log('returning function');
            resolve("I am Resolved")},5000)
    })
}

calculate().then(val => console.log(val))