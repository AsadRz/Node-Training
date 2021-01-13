const EventEmitter = require("events");

// Class Creation that extends EventEmitter
class MyEmitter extends EventEmitter {}

//Object Initialization
const myEmitter = new MyEmitter();

//Event Listeners
myEmitter.on("event", () => console.log("Event Fired..."));

//Emitting the events
myEmitter.emit("event");
// myEmitter.emit("event");
// myEmitter.emit("event");
// myEmitter.emit("event");
