require('dotenv').config()
const mongoose = require('mongoose')

const PersonModel = require('./src/schemas/personSchema')

main().catch((err) => console.log(err))

async function main() {
    
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log("Connected to MongoDB Atlas!");
    }).catch((err) => {
        console.log(err)
    })
    const Person1 = new PersonModel({
        name: "Mark",
        age: 200,
        favoriteFoods: "pizza"
    })
    console.log(Person1);
    Person1.save()

}