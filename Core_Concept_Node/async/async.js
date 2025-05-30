const takeOrder = (customer, callback) => {
    console.log(`take order for customer ${customer}`);
    callback(customer)

};
const processOrder = (customer , callback) => {
 console.log(`processing order csutomer ${customer}`)

 setTimeout(() => {
    console.log(`cooking complete`)
    console.log(`order process for customer ${customer}`);
    callback(customer)
 },3000)
};

const completeOrder = (customer) => {
    
    console.log(`complete order for customer ${customer}`);
}
takeOrder('Rubel', (customer) => {
   processOrder(customer, (customer) => {
    completeOrder(customer)
   });
});

console.log("hello test")