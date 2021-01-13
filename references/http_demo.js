const http = require("http");

const PORT = process.env.PORT || 5000;

//create Server Object
http
  .createServer((req, res) => {
    //Write Response
    res.write("Hello");
    res.end();
  })
  .listen(PORT, () => console.log("Server listening on port", PORT));
