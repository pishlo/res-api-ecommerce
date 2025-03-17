const express = require("express");
const router = express.Router();
const {hashPassword} = require("../middleware/passencrypt");


const { getUserController } = require("../controllers/userController");
const {postUserController} = require("../controllers/userController");

router.get("/", getUserController);

router.post("/", hashPassword, postUserController);

module.exports = router;