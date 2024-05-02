// CJS Module System
//const moduledata = require("./math"); // => math.js에서 가져옮
//console.log("덧셈:"+moduledata.add(100,200));
//console.log("뻴셈:"+moduledata.sub(100,200));

//const {add,sub} = require("./math"); // => math.js에서 가져옮
//console.log("덧셈:"+add(100,200));
//console.log("뻴셈:"+sub(100,200));

// ES System
import {add,sub}  from "./math.js";
console.log("덧셈:"+add(100,200));
console.log("뻴셈:"+sub(100,200));

