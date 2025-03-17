
exports.getUserController = (req, res) => {
    res.send("Users page");
};

exports.postUserController = (req, res) => {
    const { firstName, email} = req.body;
    const hashedPassword = req.hashedPassword;
    res.json({
        firstName,
        email,
        hashedPassword,
        _id: "randomId4567",
        });

};
