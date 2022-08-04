const ErrorHandeler = require("../utils/errorHandeler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";


    // wrong MongoDb id Error
    if(err.name === "CastError"){
        const message = `Resources Not Found. Invalid: ${err.path}`;
        err = new ErrorHandeler(message, 400);
    }

    
    res.status(err.statusCode).json({
        success: false,
        maessage: err.message,
    })

}