const Invoice = require("../models/invoiceModel")
const Product = require("../models/productModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");


exports.getInvoice = async (req, res) => {
    //hardcoded values
    let provided_product_id = '67e51f8fd5ff43d30ca5f2ad';
    let seller = "User_123";
    let foundUser = null;
    
    token_key = process.env.SECRET_TOKEN_KEY;

    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
        return res.status(401).send("No token provided");
    };

    const decodedToken = jwt.verify(token, token_key);
    userId = decodedToken.userId;

    try {
        foundUser = await User.findById(userId);
    }
    catch{
        return res.status(404).send("User not found");
    }


    const foundProduct = await Product.findById(provided_product_id)
    try {
        const newInvoice = new Invoice({
        participants: [foundUser.firstName, seller],
        date: new Date(),
        images: foundProduct.images,
        stock: foundProduct.stock,
        totalAmount: foundProduct.price - 3/100 * foundProduct.price, //purchase tax
        items: [foundProduct.model]
        });
        res.status(200).json(newInvoice);
    } catch (error) {
        return res.status(404).send("Product not found");
    };

        // .then((product) => {
        //     const newInvoice = new Invoice({
        //         participants: [foundUser.firstName, seller],
        //         date: new Date(),
        //         images: product.images,
        //         stock: product.stock,
        //         totalAmount: product.price - 3/100 * product.price, //purchase tax
        //         items: [product.model]
        //     });
        //     newInvoice.save()
        //         .then((invoice) => res.status(200).json(invoice))
        //         .catch((err) => res.status(500).send("Database error: " + err.message));
        // })
        // .catch((err) => {
        //     return res.status(404).send("Product not found");
        // });
};