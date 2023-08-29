const express = require("express")
const app = express()

const { UserModel } = require("../models/userModel")


module.exports = function(app){
    app.get("/users", async (req, res) => {
        const allUsers = await UserModel.find();
        return res.status(200).json(allUsers);
    });

    app.get("/users/:id", async (req, res) => {
        const { id } = req.params;
        const user = await UserModel.findById(id);
        return res.status(200).json(user);
    });

    app.post("/users", async (req, res) => {
        const newUser = new UserModel({ ...req.body });
        const insertedUser = await newUser.save();
        return res.status(201).json(insertedUser);
    });

    app.put("/users/:id", async (req, res) => {
        const { id } = req.params;
        await UserModel.updateOne({ _id: id }, req.body);
        const updatedUser = await UserModel.findById(id);
        return res.status(200).json(updatedUser);
    });

    app.delete("/users/:id", async (req, res) => {
        const { id } = req.params;
        const deletedUser = await UserModel.findByIdAndDelete(id);
        return res.status(200).json(deletedUser);
    });

    app.get("/", async (req, res) => {
        return res.json({ message: "Hello, World ✌️. Magic happens at /users" });
    });
}
