const express = require("express");
const mongoose = require("mongoose");
const userModel2 = require("./userSchema2");

const app = express();
const MONGO_URL = `mongodb+srv://gangadhar:Ganga224@cluster0.oz1tc.mongodb.net/DBno2`;
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("mongodb connected fully"))
  .catch((err) => console.log(err));

app.use(express.json());
app.post("/create-user2", async (req, res) => {
  const { name, email, password } = req.body;

  const userobj2 = new userModel2({
    name: name,
    email: email,
    password: password,
  });
  console.log(userobj2);

  try {
    const userdb = await userobj2.save();
    return res.status(201).json(userdb);
  } catch (err) {
    return res.status(500).json(err);
  }
});

app.listen(8000, () => {
  console.log("server is up on PORT:8000");
});
