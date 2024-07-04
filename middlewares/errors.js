exports.generatedErrors = (err, req, res, next) => {
    const statusCode = err.statusCode || 500
    // 500 is internal server error
    res.status(statusCode).json({
        message : err.message,
        errName: err.name,
        // stack : err.stack,
        // gives a lot of information in an messy way 
    })
}