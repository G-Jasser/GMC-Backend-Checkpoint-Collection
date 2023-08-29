require('dotenv').config()
const mongoose = require('mongoose')

const connection = async() => {
    try {
        await mongoose.connect(
          process.env.MONGO_URI
        ).then(console.log("Connected to Atlas DB"))
      } catch (error) {
        console.error(error)
      }
}

module.exports = connection