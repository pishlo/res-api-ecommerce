const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
const {getInvoice} = require("../controllers/invoiceController");

router.get("/getInvoice", verifyToken, getInvoice);

module.exports = router;