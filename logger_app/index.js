const path = require("path");
const fs = require("fs");
 
console.log("hello logger");
// console.log(process);
// console.log(process.argv);

const inputArguments = process.argv.slice(2);
const timestamp = new Date().toISOString();
 const message = inputArguments.join(" ");
 const  text = `time :  ${timestamp} message : ${message} \n`

 if(!text){
    console.log("Please provide a meeage in log");
    console.log("Example : node index.js Hello World");
    process.exit(1);

 }
// const filePath = __dirname + "/log.txt";
const filePath = path.join(__dirname , "/log.txt");

fs.appendFile(filePath, text, {encoding : "utf-8"},() =>{

    console.log("your log added successfully")

})
 console.log(filePath);
