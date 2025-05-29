((require,module,__dirname, __filename,) => {
   let a = 20;

((name) => {
  let a = 20;//block scope
  console.log(`learning ${name}`);
})("node");

console.log(a);
console.log(module);
console.log(__dirname)

})(require,module, "./utils/add");