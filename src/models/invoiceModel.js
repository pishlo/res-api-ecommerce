const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");

const invoiceSchema = new Schema({
    participants: {
        type: String, 
        required: true
    },
    date: {
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
    totalAmount: {
        type: Number, 
        required: true
    },
    items: {
        type: Array, 
        required: true
    },

}, {timestamps: true});

invoiceSchema.plugin(uniqueValidator);

const Invoice = mongoose.model("Invoice", invoiceSchema);
module.exports = Invoice;