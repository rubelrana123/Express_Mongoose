// const var1 = require('./file1');
// const {a : first, b : second , add : sum} = require('./file3');
import {a, b, add} from './file1.mjs'
import {a as first, b as second } from "./file3.mjs"
import ADD from "./file3.mjs"
console.log(a,b, add(2,3));
console.log(first,second, ADD(2,3,5));
