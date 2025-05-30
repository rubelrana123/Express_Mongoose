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
/*
//async way read
//file read ==> sigle thread ==> event loop ==> thread pool => task complete
const fs = require('fs');
console.log('first');
//writefile 
// fs.writeFile('./node.txt', "helo write opration",{encoding :"utf8"},(err) =>{
//     if(err){
//         console.log('somethhing is wrong', err);
//         return
//     }
//     console.log('here writing data successfully')
// })
//readfile 
fs.readFile('./node.txt', {encoding : 'utf8'}, (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  //here using call back func beacuase we want se togerther read data and write data
 fs.writeFile('./hello.txt',data,{encoding :"utf8"},(err) =>{
    if(err){
        console.log('somethhing is wrong', err);
        return
    }
    console.log('here writing data successfully')
})
});
console.log('last')
*/


//readstream => make data someof slice and load slice wise
// Node.js program to demonstrate the 
// fs.createReadStream() method
 
// Include fs module
let fs = require('fs');

// Use fs.createReadStream() method
// to read the file
const readerStream = fs.createReadStream('./hello.txt', {encoding : "utf8"});
//to write the file
const writerStream = fs.createWriteStream('./node.txt', {encoding : "utf8"});


// Read and display the file data on console
readerStream.on('data', function (data) {
    console.log(data);
    writerStream.write(data, (err)=>{
       if(err){
        throw Error("Error", err)
       }
       
    })
});
//error catch of readstream
readerStream.on("error",(err) =>{
      if(err){
        throw Error("Error", err)
       }
});

//error catch of writestream
writerStream.on("error",(err) =>{
      if(err){
        throw Error("Error", err)
       }
});
//end catch of readstream
readerStream.on("end",() =>{
       console.log("reading ended");
       writerStream.end();
});
//finish catch of readstream
writerStream.on("finish",() =>{
     console.log('write successfully')
});