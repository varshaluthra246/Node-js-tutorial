console.log("we are learning about modules in Node JS");
//modules -> functions - node js
//hooks -> functions - react
//methods -> javascript
// const { sum, sub, mul, div } = import("./utils");
import {sum, sub, mul, div} from './utils.js'
console.log("Adding two number:", sum(10,20));
console.log("subtracting two number:", sub(10,20));
console.log("multiplying two number:", mul(10,20));
console.log("division two number:", div(10,20));