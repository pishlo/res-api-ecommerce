const Product = require("../models/productModel");

exports.getProducts = (req, res) => {
    Product.find()
        .then((products) => {
            res.status(200).json({ products: products});
        })
        .catch((err) => {
            res.status(500).send("Error:" + err.message);
        });
};

exports.addProduct = async (req, res) => {
    const {brand, model, images, stock, price} = req.body;
    
    const newProduct = new Product ({
        brand, 
        model, 
        images, 
        stock, 
        price
    });
    await newProduct.save()
        .then((result) => res.status(200).send("product added!"))
        .catch((err) => res.status(500).send("Database error: " + err.message));
};