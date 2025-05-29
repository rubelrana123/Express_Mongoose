const var1 = require('./file1');
const {a : first, b : second , add : sum} = require('./file3');
console.log(var1.a,var1.b, var1.add(2,3));
console.log(first,second, sum(2,3,5));
