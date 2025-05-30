const hello = (callback) => {
    //setTimeout(function, milliseconds, arg1, arg2, ...);
    // setTimeout(()=>{
    //      console.log(`HEllo`)
    // }, 3000)
    console.log(`Hello`);
    callback()
};

const bye = () =>{
    console.log(`bye`)
}
const leave = () =>{
    console.log(`leave`)
};
const wait = () =>{
    console.log(`wait`)
}
hello(wait);


const sum = (callback, x, y) => {
    let result = x +y;
    callback(result)
};

const displayConsole = (result) =>{
    console.log(result)
}

sum (displayConsole, 1,32)