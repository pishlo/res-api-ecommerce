const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
    const arr_value = 4 * 7;

    console.log("Time:", Date.now());
    console.log(arr_value);

    res.locals.arr_value = arr_value;
    next();
});

app.get("/", (req, res) => {

    res.send(`Arr Value: ${res.locals.arr_value}`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
