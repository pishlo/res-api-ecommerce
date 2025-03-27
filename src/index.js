const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("./routes/users");
const connectDB = require("./utils/db");
const path = require("path");

connectDB();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
