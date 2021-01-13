// const Logger = require("./logger");

// We will import FS here and will save all the logs to that file

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // if (req.url === "/") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "index.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(content);
  //     }
  //   );
  // }
  // if (req.url === "/about") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "about.html"),
  //     (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(content);
  //     }
  //   );
  // }
  // //Handling Request/API in node only
  // if (req.url === "/api/users") {
  //   const users = [
  //     {
  //       name: "John",
  //       age: 30,
  //     },
  //     {
  //       name: "Bob",
  //       age: 20,
  //     },
  //   ];
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify(users));
  // }

  //Build File Path

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  //Extension of file
  let extName = path.extname(filePath);

  //Initialize ContentType
  let contentType = "text/html";

  //Switch Statement for different fileTypes to define their contentTypes
  switch (extName) {
    case ".js": {
      contentType = "text/javascript";
      break;
    }
    case ".css": {
      contentType = "text/css";
      break;
    }
    case ".json": {
      contentType = "application/json";
      break;
    }
    case ".png": {
      contentType = "image/png";
      break;
    }
    case ".jpg": {
      contentType = "image/jpg";
      break;
    }
  }

  //ReadFiles

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        //Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, "text/html");
            res.end(content, "utf-8");
          }
        );
      } else {
        //some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, contentType);
      res.end(content, "utf-8");
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server listening on ${PORT}`));
