const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

token_key = process.env.SECRET_TOKEN_KEY;

exports.verifyToken = async (req, res, next) => {
    if (!req.headers.authorization){
        return res.status(403).send({ message: "No token provided"});
    };

    try {
        console.log("inside");

        const token = req.headers.authorization.split(" ")[1];

        console.log(token);

        const decodedToken = jwt.verify(token, token_key);
        console.log(decodedToken);
        console.log(decodedToken.userId);

        req.userId = decodedToken.userId;

        const user = await User.findById(req.userId);
        
        if (!user) {
        return res.status(404).json({ message: "User not found" });
        };

        next();
    } catch (err) {
        return res.status(401).send({ message: "Unauthorized!"});
    };
};