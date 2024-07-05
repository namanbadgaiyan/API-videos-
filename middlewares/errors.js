exports.generatedErrors = (err, req, res, next) => {
    const statusCode = err.statusCode || 500
    // 500 is internal server error


    //catching specific errors to show different error.message
    if(err.name === "MongoServerError" && err.message.includes("E11000 duplicate key")){
        err.message = "student already exists with this email address"
    }
    //here we are catching duplicate key error inside MongoServerError
    //E11000 duplicate key error collection: intertialAPI.students index: email_1 dup key: 

    res.status(statusCode).json({
        message : err.message,
        errName: err.name,
        // stack : err.stack,
        // gives a lot of information in an messy way 
    })
}