var a = {
    ans : 0,
    add(a,b){this.ans = a + b; return this},
    mult(x){this.ans *= x; return this}
}
a.add(10,5).mult(2)
// console.log(a.ans);

let b=[1,2,3,4,1]
console.log(b);
let c = [...new Set(b)];
console.log(c);
