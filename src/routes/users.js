const express = require("express");
const router = express.Router();
const {hashPassword} = require("../middleware/passencrypt");


const { getUserController } = require("../controllers/userController");
const {userSignUp} = require("../controllers/userController");

router.get("/", getUserController);

router.post("/", hashPassword, userSignUp);

module.exports = router;