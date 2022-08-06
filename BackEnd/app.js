const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const cookie = require('cookie-parser')

app.use(express.json());
app.use(cookie());

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);

// Middle Ware for Error
app.use(errorMiddleware);

module.exports = app;
