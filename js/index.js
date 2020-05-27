import {add} from "./a.js";
import {sub} from "./b.js";
import "../styles/index.css";

add(1,2);
sub(2,1);
var obj = {
    name:"test"
}
var obj1 = {
    age: 30
}
var obj3 = {
    ...obj,...obj1
}

let sy = Symbol("KK");
console.log(sy);   // Symbol(KK)
typeof(sy);        // "symbol"

// 相同参数 Symbol() 返回的值不相等
let sy1 = Symbol("kk");
console.log(sy === sy1);       // false

console.log(['a', 'b', 'c'].includes('a'));

let prom = new Promise(()=>{});
let map = new Map();
map.set("1","a");
