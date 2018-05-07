const mongoose = require("mongoose");
const { Schema } = mongoose; // equal to - const Schema = mongoose.Schema;
const userSchema = new Schema({
  googleId: String,
  userName: String
});
mongoose.model('users', userSchema);