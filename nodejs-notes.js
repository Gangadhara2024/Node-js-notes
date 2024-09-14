// NODE JS ==> runs js code outside the browser.

// API: Application Programming Interface.
/**
 *  API consist of:
 *  1. URL         ==> localhost:8000/api/login ==> is called as URL.
 *  2. EndPoint    ==> api/login ==> is called as Endpoint.
 *  3. Parameters: consist of
 *  => query: after question mark it is called as query.
 *  => query is optional parameter in url (/login?name:"gangadhar") name:"gangadhar" is called as query.
 *
 *  => params => is dyanamic params.
 *     api/:id1
 *     api/:id1/id2
 *  => body
 */

// REST APIs (Representational State Transfer):
// A REST API is an architectural style for building web services that allow clients (like a web or mobile app) to communicate with a server using standard HTTP methods (GET, POST, PUT, DELETE, etc.).
// GET:    Retrieve data from a server (like fetching a list of users).
// POST:   Create new resources (like adding a new user).
// PUT:    Update existing resources.(to update all fields)
// PATCH:  (to update one or more fields)
// DELETE: Remove resources.

// Web APIs:
// A Web API is a set of tools that let websites or web applications interact with other programs, services, or hardware (like your computer or phone).
// They help websites enable things like getting data from a server, using your location, or showing notifications.
// Example:
// 1. A weather app fetching the current temperature from a weather service.
// 2. A map app showing your current position on the map.
// 3. A news website notifying you about breaking news, even when the website is not open.

// Difference Between NPM and NPX:
// NPM (Node Package Manager): is used to manage and install packages.
// NPX (Node Package Executor): is used to run or execute packages, without having to install them globally.

// we can export files in nodejs: module.exports = { fun, fun2 } and const { fun, fun2 } = require("./home");
// const fun = () => {
//     console.log("fun is working fine");
//   };
  
//   const fun2 = () => {
//     console.log("fun2 is working fine");
//   };
//   // module.exports = fun;
//   module.exports = { fun, fun2 };

// // const fun = require("./home");
// const { fun, fun2 } = require("./home");
// fun();
// fun2();