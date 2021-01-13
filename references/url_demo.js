const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

//Serialized URL

/**
 * Both are the ways to display whole URL's
 * */
console.log(myUrl.href);
console.log(myUrl.toString());

//host or domain
console.log(myUrl.host);

//hostname
console.log(myUrl.hostname); //hostname doesn't get the port name

//pathname
console.log(myUrl.pathname);

//Serialize queryParams
console.log(myUrl.search);

//Params object
console.log(myUrl.searchParams);

//Add Params Dynamically
myUrl.searchParams.append("abc", "123");
// console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value, key) => console.log(`${key}: ${value}`));
