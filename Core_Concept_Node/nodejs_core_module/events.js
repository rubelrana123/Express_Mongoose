const EventEmitter = require('node:events');

class schoolBell extends EventEmitter {}

const schoolbell = new schoolBell();

schoolbell.on("ring", () => {
    console.log(`Yeahoo class ses`)
});
schoolbell.on("ring", () => {
    console.log(`Lets go another class room`)
});
schoolbell.on("broken", () => {
    console.log(`what the time ? and when finish our  class`)
});
// schoolbell.emit("ring");
schoolbell.emit("broken");
