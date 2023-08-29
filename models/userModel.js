const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female']
  },
  age: {
    type: Number,
    required: true,
  }
})


const UserModel = mongoose.model("User", UserSchema)
module.exports = {UserModel}