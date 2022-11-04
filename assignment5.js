// function rec(a,b,val){
//     val -= 1;
//     if(val>0)
//     {
//         temp = b
//         b = a + b;
//         a = temp
//         console.log(b);
//         rec(a,b,val)
//     }
//     return val;

//     //0 1 1 2 3 5 8
// }
// rec(0,1,8)

function rec(val){
    if(val>8){
        val = val+ 1;
        console.log(val);
        return val + rec(val);
    }
}

rec(0)