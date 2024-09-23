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

//                                     @@@@ REST APIs (Representational State Transfer):
// A REST API is an architectural style for building web services that allow clients (like a web or mobile app) to communicate with a server using standard HTTP methods (GET, POST, PUT, DELETE, etc.).
// GET:    Retrieve data from a server (like fetching a list of users).
// POST:   Send data to the server (like adding a new user).
// PUT:    Update existing resources.(to update all fields).
// PATCH:  (to update one or more fields).
// DELETE: Remove resources.

//                                     @@@@ Web APIs:
// A Web API is a set of tools that let websites or web applications interact with other programs, services, or hardware (like your computer or phone).
// They help websites enable things like getting data from a server, using your location, or showing notifications.
// Example:
// 1. A weather app fetching the current temperature from a weather service.
// 2. A map app showing your current position on the map.
// 3. A news website notifying you about breaking news, even when the website is not open.

//                                     @@@@ Difference Between NPM and NPX:
// NPM (Node Package Manager): is used to manage and install packages.
// NPX (Node Package Executor): is used to run or execute packages, without having to install them globally.

// we can export files in nodejs: module.exports = { fun, fun2 } and const { fun, fun2 } = require("./home").
//   const fun = () => {
//     console.log("fun is working fine");
//   };

//   const fun2 = () => {
//     console.log("fun2 is working fine");
//   };
//   module.exports = fun;
//   module.exports = { fun, fun2 };

// const fun = require("./home");
// const { fun, fun2 } = require("./home");
// fun();
// fun2();

//          @@@@ running node-js server on express framework.
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   console.log("api is working");
//   return res.send("API is in server");
// });

// app.get("/home", (req, res) => {
//   console.log("home is running");
//   return res.send("home is in server");
// });

// app.listen(8000, () => {
//   console.log("server is running");
// });
// Express is a web framework for Node.js used to create web servers and APIs.
// The app variable will be used to define routes and set up the server.

// here on port 8000, server is running
// When someone accesses the root URL (ex: localhost:8000), the server logs "api is working" to the console.
// and sends the text "API is in server" as a response to the browser or client.
// By (localhost:8000/home) we can see server sends "home is in server" as response to browser.
// app.listen(8000,()=>{ console.log("server is running")}) This starts the server and listens for incoming requests on port 8000.

// This Express server listens on port 8000 and defines two routes:-
// The root route (/), which responds with "API is in server".
// The (/home route), which responds with "home is in server".

//                                     @@@@  middleware:-
// middleware ==> refers to functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
// Middleware functions can perform a variety of tasks, such as executing code, making changes to the request and response objects, ending the request-response cycle, or calling the next middleware in the stack.
// Middleware is heavily used in frameworks like Express to manage the flow of requests and responses.

// SPECIFIC MIDDLEWARE ==> is where fun() function is called for specific api and not all apis.
// const fun = (req, res, next) => {
//   console.log("middleware is working");
//   next();
// };

// app.get("/", (req, res) => {
//   console.log("api is working");
//   return res.send("API is in server");
// });

// app.get("/home", fun, (req, res) => {
//   console.log("home is running");
//   return res.send("home is in server");
// });

// app.get("/home11", (req, res) => {
//   console.log("home11 is running");
//   return res.send("home11 is in server");
// });

// app.listen(8000, () => {
//   console.log("server running on PORT:8000");
// });
// here server is running with port 8000, and (localhost:8000/home) we get ist api called.
// here home api is called and after that fun function (middleware) is called and in fun function console is printed and next() callback is called.
// after that controller(i.e req, res) => {} ==> is called and console is printed.

// In 2nd (localhost:8000/home11) we get 2nd home11 called.
// and in that middleware is not called because we are not calling middleware fun function in home11.

//                                  @@@@ Global middleware:-
// Global middleware ==> is where we can run for multiple api's and we don't know which api it will hit.
// app.use(fun) is Global middleware and it is called for every api call.

// const fun = (req, res, next) => {
//   console.log("middleware is working");
//   next();
// };

// app.use(fun);

// app.get("/", (req, res) => {
//   console.log("api is working");
//   return res.send("API is in server");
// });

// app.get("/home", fun, (req, res) => {
//   console.log("home is running");
//   return res.send("home is in server");
// });

// app.get("/home11", (req, res) => {
//   console.log("home11 is running");
//   return res.send("home11 is in server");
// });

// app.listen(8000, () => {
//   console.log("server running on PORT:8000");
// });
// 1st step => when app.use(fun) is called middleware fun function is called, console is printed and next() callback will hit root api.
// 2nd => app.use(fun) is called middleware fun function is called, and console is printed after that next() is called.
// and home api gets called and again fun function is called and middleware is excuted and after that controller of home is called and console is printed.( here middleware is called 2 times)
// 3rd middleware is called and next() callback will hit home11 api and console is printed. and so on...

//                                    @@@@ query:-
// query: with only 1 key ==> ?key=val
// app.get("/add", (req, res) => {
//     console.log(req.query);
//     const val = req.query.key;
//     return res.send(`value is ${val}`);
//   });

//   app.listen(8000, () => {
//     console.log("server is running on PORT:8000");
//   });
// we can pass query as (key=100) and that value we get as response(value is ${val}) in server.
// we get query object as {key=100}.

// query: with multiple keys ==> ?key1=val1&key2=val2
// app.get("/add", (req, res) => {
//   console.log(req.query);
//   const val1 = req.query.key1;
//   const val2 = req.query.key2;
//   return res.send(`value of key1 ==> ${val1} & value of key2 ==> ${val2}`);
// });

// app.listen(8000, () => {
//   console.log("server is running on PORT:8000");
// });
// we get query object as { key1: '500', key2: '600' }

//                                     @@@@ params:-
// app.get("/route/:id", (req, res) => {
//   console.log(req.params);
//   const name = req.params.id;
//   return res.send(`params is ${name}`);
// });

// app.listen(8000, () => {
//   console.log("server is running on PORT:8000");
// });
// (localhost:8000/route/hello) ==> we get param object as { id: 'hello' }.

// app.get("/profile/:first/:last", (req, res) => {
//   console.log(req.params);
//   const { first, last } = req.params;
//   return res.send(`nam1 as ${first} => nam2 as ${last} `);
// });

// app.listen(8000, () => {
//   console.log("server running on PORT:8000");
// });
// we get multiple params as first and last.

//                                @@@@ Status codes:-
/**
 * 1. 100-199 => tells about information of api (informational range)
 * 2. 200-299 => success responses.
 * 3. 300-399 => redirectional changes(shifting api1 to api2) and response we will get from api2).
 * 4. 400-499 => client side error.
 * 5. 500-599 => server side error.
 */

//                                 @@@@ Data base:-
// where raw information(data) is stored called as data base (DB).
// DBMS => is software or tool which is used to manipulate(control) the raw information.

// ==> Types of databases:
/**
 * 1. Relational DB: (ex: SQL)
 *   => Data is stored in structured tables format. Structured (Tables, Rows, Columns).
 *   => Examples: MySQL, PostgreSQL, Oracle, SQL Server.

 * 2. Non-relational DB: (ex: NoSQL)
 *   => Data is stored in JSON format. Unstructured or Semi-structured (JSON, Key-Value, etc.)
 *   => Designed to handle unstructured, distributed data.
 *   => Examples: MongoDB (document-based), Cassandra (column-based), Redis (key-value), Neo4j (graph-based).
*/

// ==> ORM (Object Relation Mapping):
// An ORM in Node.js is a tool that allows developers to interact with a relational database using JavaScript or TypeScript objects, rather than writing raw SQL queries. It simplifies database management by abstracting complex SQL operations into simpler, object-oriented code.
// It is a technique used in programming to interact with a database using Javascript or Typescript objects instead of writing complex SQL queries directly.

//                                      @@@@ MongoDB:
// MongoDB is a database that stores information, like how you write things in a notebook. Instead of organizing data into tables and rows, it stores data in documents that look like simple JSON objects.

// In MongoDB, (schema, collection, and model) are important concepts used to manage and organize data.
// Schema: ==> schema is like a blueprint for your documents.
// Schema defines what fields your documents should have, what type of data those fields can store (ex: strings, numbers).
/**
  {
    name: String,
    age: Number,
    email: String,
  }
 */

// Collection: ==> collection in MongoDB is like a container where all related documents are stored.
// Model: ==>  model is the object, that connects your schema and your collection. have access to both schema and collection.

/**
 * ==> setting up database.
 * Mongoose is a popular Object Data Modeling (ODM) library for MongoDB and Node.js
 * npm i mongoose
 * mongodb+srv://gangadhar:<db_password>@cluster0.oz1tc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 (DB link from ATLAS MongoDb)
 */
// express.json(): This is a built-in middleware function in Express.js that parses incoming requests with JSON payloads. It extracts the JSON data from the request body and makes it available on req.body.

// here we connect server with mongoDB(data base) as
// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// const MONGO_URL = `mongodb+srv://gangadhar:Ganga224@cluster0.oz1tc.mongodb.net/sepNewDB`;

// mongoose
//   .connect(MONGO_URL)
//   .then(() => console.log("mongodb connected"))
//   .catch((err) => console.log(err));

// app.use(express.json());

// app.get("/", (req, res) => {
//   console.log("api is working");
//   return res.send("API is in server");
// });

// app.post("/create-user", (req, res) => {
//   console.log(req.body);
//   return res.send("All ok");
// });

// app.listen(8000, () => {
//   console.log("server running on PORT:8000");
// });
// MONGO_URL: Contains the connection string to your MongoDB instance hosted on MongoDB Atlas (cloud MongoDB service). This includes the username gangadhar and password Ganga224, and connects to the database sepNewDB in the cluster0.
// mongoose.connect(): Establishes a connection to the MongoDB database using Mongoose. If successful, it logs "mongodb connected", otherwise, it logs the error.
// when we hit (http://localhost:8000/create-user) (POST api) URL in postman, then we get response as "All Ok" as we are returning in post api.
// we get undefined as body data, so we use app.use(express.json()), to parse data to json.
// in body we give data as (name,email,password) and that data in body we get in server as console {name,email,password}.

//                          @@@@ Mongoose Schema and Model for managing users data in MongoDB.
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  country: { type: String, default: "India" },
});
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;

// this is Mongoose schema and model for managing user data in a MongoDB database.
// mongoose: is popular Node.js package used to interact with MongoDB. It provides an easy way to model and validate data using schemas and models.

// new mongoose.Schema(): Defines a schema for the User, specifying the structure and rules for how user data will be stored in the database.
// mongoose.model(): Creates a model using the schema. Models are used to create, read, update, and delete documents in the MongoDB collection.
// "user": The name of the MongoDB collection where the documents will be stored (usually pluralized to "users" in the database).
// userSchema: The schema that defines the structure of the documents.

const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./userSchema");

const app = express();
const MONGO_URL = `mongodb+srv://gangadhar:Ganga224@cluster0.oz1tc.mongodb.net/sepNewDB`;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

app.use(express.json());

app.post("/create-user", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  const userObj = new userModel({
    name: name,
    email: email,
    password: password,
  });
  console.log(userObj);

  try {
    const userDB = await userObj.save();
    return res.status(201).json(userDB);
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.listen(8000, () => {
  console.log("server running on PORT:8000");
});
// The code connects a Node.js server to a MongoDB database.

// It extracts the name, email, and password fields from the request body (req.body), which would be sent in the client’s request.
// A new instance of userModel (which should be defined in the userSchema.js file) is created with the values provided.
// The userObj.save() method asynchronously saves the user to MongoDB.

// app.use(express.urlencoded({ extended: true })) ==> covert form data into readable format.

//                                    @@ Session based authorisation:
// Session: ==> object which is collection of temporary data. we store session data on DB. ex: {key:value, key:value} format.
// Cookie: ==> temporary data stored on client side(browser). ex: (key:value)

// session:- is like way for website to remember who you are while you're browsing it. Since websites (using HTTP) normally forget everything after each click or page load, a session helps them "remember" things about you, like if you're logged in or what's in your shopping cart.

/**
 * ==> session process:-
 *  1. Client request: The user makes a request (ex: login) to the server.
 *  2. Session creation: If the login is successful, the server creates a session and stores user information on the server.
 *  3. Session ID: The server generates a unique session ID and sends it to the user's browser as a cookie.
 *  4. Client stores session ID: The browser stores this session ID and sends it with every request to the server.
 *  5. Server retrieves session: The server uses the session ID to look up the stored session data and maintain user information.
 */

// npm i express-session connect-mongodb-session => install packages.
// express-session:- is middleware for Express.js that allows you to manage sessions for your users.
// connect-mongodb-session:- is a MongoDB session store for express-session. It stores the session data in a MongoDB database, making it persistent across server restarts.

// const session = require("express-session"):-
// session is a way to store information about a user between their requests.
// For example, if a user logs into a website, the session can store their login state so they don't have to log in again for each page.

// const mongodbSession = require("connect-mongodb-session")(session)
// connect-mongodb-session is a package that works with MongoDB and express-session.
// When you run require("connect-mongodb-session")(session), you're calling the connect-mongodb-session function and passing the session module from express-session to it. The result is stored in the variable mongodbSession.

/**
app.use(
  session({
    secret: "secret login key",
    store: Mongostore,
    resave: false,
    saveUninitialized: false,
  })
);
  app.use(session({...})) ==> using express-session middleware to manage user sessions. Sessions allow data to be stored server-side and  a particular user by a unique session ID, which is stored in a cookie on the client side.
  secret:- is a key used to sign and encrypt the session ID cookie, that gets sent to the client.
  Mongostore:- is the session store instance that connects your sessions to your MongoDB database.
  resave: false ==> if data of user is new then it stores the new user data, otherwise it is set to false.
  saveUninitialized: false ==> this prevents a session from being created until something is stored in the session.
*/

/**
  const Mongostore = mongodbSession({
   url: MONGO_URL,
   collection: "MySessions",
});
   It creates an instance of a session store that will be used by express-session to store and manage session data.
   session data will be stored in the "MySessions" collection of the MongoDB database.
 */
//                                   @@@@ FILE-SYSTEM.
// File System(fs) in Node.js provides functions to interact with the file system, allowing you to work with files and directories.
// server creation using HTTP method.(instead of using 'express' framwork).

// const http = require("http");
// const server = http.createServer();

// server.on("request", (req, res) => {
//   console.log(req.url + " " + req.method);

//   if (req.method === "GET" && req.url === "/home") {
//     return res.end("server in up and running");
//   } else {
//     return res.end(`Api not found : ${req.method} ${req.url} `);
//   }
// });
// server.listen(8000, () => {
//   console.log("http server on... PORT:8000");
// });
// in HTTP method server, we create apis as in above code.
// we should create our own api by if condition as method and url.

// @@@@ CRUD(create, read, update, delete) are performed using file system.
const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log(req.url + " " + req.method);
  const data = "nodejs11 backend module";

  if (req.method === "GET" && req.url === "/writefile") {
    fs.writeFile("demo.txt", data, (err) => {
      if (err) throw err;
      return res.end("write successful");
    });
  } else if (req.method === "GET" && req.url === "/appendfile") {
    fs.appendFile("demo.txt", data, (err) => {
      if (err) throw err;
      return res.end("append successful");
    });
  } else if (req.method === "GET" && req.url === "/readfile") {
    fs.readFile("form.html", (err, data) => {
      if (err) throw err;
      console.log(data);
      return res.end(data);
    });
  } else if (req.method === "GET" && req.url === "/deletefile") {
    fs.unlink("demo.txt", (err) => {
      if (err) throw err;
      return res.end("deleted file successfully");
    });
  } else if (req.method === "GET" && req.url === "/renamefile") {
    fs.rename("demo.txt", "newDemo.txt", (err) => {
      if (err) throw err;
      return res.end("rename successfull");
    });
  } else {
    return res.end(`Api not found : ${req.method} ${req.url} `);
  }
});
server.listen(8000, () => {
  console.log("http server on... PORT:8000");
});
// this is how, we can write data into demo.txt file using server.
// fs.writeFile ==> takes 'file we want to add data', 'data' that we want to add data into file, and callback error.

// writeFile ==> overwrites the existing data and it will automatically create demo.txt file.
// appendfile ==> adds data with existing old data.
// readFile ==> read that file data and in browser it shows in format of <buffer>.
// unlink ==> will delete the file.
// rename ==> will delete old file and create new file, and old file data is copied to new file.
