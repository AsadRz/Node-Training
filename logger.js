const EventEmitter = require("events");
const uuid = require("uuid"); //Universal Unique Identifier

class Logger extends EventEmitter {
  log(msg) {
    this.emit("Message", { id: uuid.v4(), msg: msg });
  }
}

module.exports = Logger;
