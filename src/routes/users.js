const express = require("express");
const router = express.Router();
const {hashPassword} = require("../middleware/passencrypt");


const {userLogin} = require("../controllers/userController");
const {userSignUp} = require("../controllers/userController");

const { verifyToken } = require("../middleware/auth");
// router.get("/", getUserController);

router.post("/login", userLogin)

router.post("/signup", hashPassword, userSignUp);

router.post("/test", verifyToken, (req, res) => {
    res.send("test");
})

module.exports = router;