const Logger = require("./logger");

//Object Instantiates
const logger = new Logger();

logger.on("Message", (data) => {
  console.log("Called Listener..", data);
});

logger.log("Hello");

// We will import FS here and will save all the logs to that file
