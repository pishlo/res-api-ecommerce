const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const invoiceRoutes = require("./routes/invoices");
const connectDB = require("./utils/db");
const path = require("path");

connectDB();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
