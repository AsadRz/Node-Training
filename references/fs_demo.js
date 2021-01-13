const fs = require("fs");
const path = require("path");

//Create Folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folders created...");
// });

//Create and write to file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World",
//   (err) => {
//     if (err) throw err;
//     console.log("File created...");
//   }
// );

//Read File
// fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//Renaming a File
fs.rename(
  path.join(__dirname, "/test", "test.txt"),
  path.join(__dirname, "/test", "hello.txt"),
  (err) => {
    if (err) throw err;
    console.log("File Renamed Successfully");
  }
);
