const { Schema, model } = require("../connection");

const schema = new Schema({
  username: String,
  email: String,
  password: String,
});
module.exports = model("users", schema);
