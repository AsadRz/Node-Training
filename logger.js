const EventEmitter = require("events");
const uuid = require("uuid"); //Universal Unique Identifier

class Logger extends EventEmitter {
  log(msg) {
    this.emit("Message", { id: uuid.v4(), msg: msg });
  }
}
//Object Instantiates
const logger = new Logger();

logger.on("Message", (data) => {
  console.log("Called Listener..", data);
});

logger.log("Hello");
// module.exports = Logger;
