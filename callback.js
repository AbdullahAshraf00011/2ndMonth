function greet(nam,callback){
    console.log("This is callback function");
    setTimeout(()=>{callback(nam)},10000)
}
function print(n){
    console.log("Hey "+n);
}
greet("Taimour",print)