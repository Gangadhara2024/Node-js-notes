const mongoose = require("mongoose");

const userSchema2 = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  country: { type: String, default: "India" },
});
const userModel2 = mongoose.model("userDB2", userSchema2);
module.exports = userModel2;
