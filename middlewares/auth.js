const jwt = require('jsonwebtoken')
const errorHandler = require('../utils/ErrorHandler')
const { CatchErrorHandler } = require('./CatchErrorHandler')


exports.isAuthenticated = CatchErrorHandler(async(req,res,next)=>{
    const {token} = req.cookies;

    if(!token){
        return next(new errorHandler('You are not logged in', 401))
    }
    const {id} = jwt.verify(token, process.env.JWT_SECRET)
    req.id = id
    next()
})