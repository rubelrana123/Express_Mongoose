/*//sync way read
//file read /I/O intensive task  ==>single thread ===> go to 
// Include the fs module
const fs = require('fs');
console.log("hey 1")
const text =  "Learning File System"
fs.writeFileSync('./node.txt', text, {encoding : "utf-8"});
console.log("hey 2")
// Read the file synchronously
const data = fs.readFileSync('./node.txt', {encoding : 'utf-8'});
console.log("hey3")
// Display the file content
console.log(data);

*/

//async way read
//file read ==> sigle thread ==> event loop ==> thread pool => task complete
const fs = require('fs');
console.log('first');
//writefile 
fs.writeFile('./node.txt', "helo write opration",{encoding :"utf8"},(err) =>{
    if(err){
        console.log('somethhing is wrong', err);
        return
    }
    console.log('here writing data successfully')
})
//readfile 
fs.readFile('node.txt', {encoding : 'utf8'}, (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(data)
});
console.log('last')
