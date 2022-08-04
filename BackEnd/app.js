const express = require('express');
const product = require('./routes/productRoute');
const errorMiddleware = require('./middleware/error');
const app = express();

app.use(express.json())

// Route Imports
app.use("/api/v1", product);

// Middle Ware for Error
app.use(errorMiddleware);


module.exports = app;