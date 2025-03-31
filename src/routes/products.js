const express = require("express");
const router = express.Router();
const {getProducts} = require("../controllers/productController");
const {addProduct} = require("../controllers/productController");
const { verifyToken } = require("../middleware/auth");

router.get("/getProducts", getProducts);

router.post("/addProduct", verifyToken, addProduct);

module.exports = router;