//sync way read
//file read /I/O intensive task  ==>single thread ===> go to 
// Include the fs module
const fs = require('fs');
console.log("hey 1")
const text =  "Learning File System"
fs.writeFileSync('./node.txt', text, {encoding : "utf-8"});
console.log("hey 2")
// Read the file synchronously
const data = fs.readFileSync('./node.txt', {encoding : 'utf-8'});
console.log("hey 3")
// Display the file content
console.log(data);



//async way read
//file read ==> sigle thread ==> event loop ==> thread pool => task complete
