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
// middleware ==> is like a checkpoint in the request-response cycle, allowing you to execute code before sending a final response.
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
// here home api is called and after that fun function (middleware) is called and in fun function console is printed and next() is called.
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

// here we connect DB by mongoDB as
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

// @@ Session based authorisation:
// Session: ==> object which is collection of temporary data. we store session data on DB. ex: {key:value, key:value}
// Cookie: ==> temporary data stored on client side ex: (key:value)
