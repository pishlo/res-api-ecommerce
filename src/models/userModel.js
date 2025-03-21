const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    imageUrl: {
        type: Buffer, 
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
       },
    password: {
        type: String, 
        required: true
    },
    role: {
        type: String, 
        required: true
    },
    inventory: {
        type: Array, 
        required: true
    },

}, {timestamps: true});

userSchema.plugin(uniqueValidator)

const User = mongoose.model("User", userSchema);
module.exports = User;