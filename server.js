const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const mongodbSession = require("connect-mongodb-session")(session);

const userModel = require("./userSchema");
const isAuth = require("./isAuthMiddleware");

const app = express();
const MONGO_URI = `mongodb+srv://gangadhar:Ganga224@cluster0.oz1tc.mongodb.net/sepNewDB`;

const Mongostore = new mongodbSession({
  uri: MONGO_URI,
  collection: "sessions",
});

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secret login key",
    store: Mongostore,
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/register-form", (req, res) => {
  return res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Registration form:</h1>

    <form action="/register" method="POST">
      <label for="name">Name :</label>
      <input type="text" id="name" name="name" /><br />
      <label for="email">Email :</label>
      <input type="text" id="email" name="email" /><br />
      <label for="password">Password :</label>
      <input type="text" id="password" name="password" /><br />

      <button type="submit">Submit</button>
    </form>
  </body>
</html>`);
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  const userObj = new userModel({
    name: name,
    email: email,
    password: password,
  });
  console.log(userObj);
  console.log(req.body);

  try {
    const userDB = await userObj.save();

    return res.status(201).json({
      message: "user created succesfully",
      data: userDB,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
});
app.get("/login-form", (req, res) => {
  return res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Login form:</h1>

    <form action="/login" method="POST">
      <label for="email">Email :</label>
      <input type="text" id="email" name="email" /><br />
      <label for="password">Password :</label>
      <input type="text" id="password" name="password" /><br />

      <button type="submit">Submit</button>
    </form>
  </body>
</html>`);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // find the user with email.
  try {
    const userDB = await userModel.findOne({ email: email });

    if (!userDB) {
      return res.status(400).json("user not found register now!");
    }
    // compare the password.
    if (password !== userDB.password) {
      return res.status(400).json("password incorrect!");
    }

    console.log(req.session);
    req.session.isAuth = true;

    if (password === userDB.password) {
      return res.status(200).json("login successful.");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

app.get("/test", isAuth, (req, res) => {
  return res.send("Private data..... ");
});

app.listen(8000, () => {
  console.log("server running on PORT:8000");
});
// when, we login with user data same as in DB, it gets login succesful and session is storing user data.
// session sends response to client side as a cookie as (Session {cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true }}).
// and when (req.session.isAuth: true), then client know that, user is logged-in user.
// if we delete sessionID in browser or DB, authorisation will be dummy(i.e user is not logged-in)
