const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("./routes/users");

app.use(express.json());
app.use("/api/users", userRoutes);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
