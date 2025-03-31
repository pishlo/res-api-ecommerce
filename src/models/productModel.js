const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const productSchema = new Schema({
    brand: {
        type: String, 
        required: true
    },
    model: {
        type: String, 
        required: true
    },
    images: {
        type: Array, 
        required: true
    },
    stock: {
        type: Number, 
        required: true
    },
    price: {
        type: Number, 
        required: true
    },

}, {timestamps: true});

productSchema.plugin(uniqueValidator);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;