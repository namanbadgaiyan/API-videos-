require('dotenv').config({path: "./.env"})
const express = require('express');
const app = express();

//mongoDB connection
require('./models/database').Connectdatabase()

// for logger
const logger = require('morgan');
app.use(logger("tiny"))

// bodyParser
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// session and cookie
const session = require('express-session')
const cookieParser = require('cookie-parser')

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
}))

app.use(cookieParser());

//file upload
const fileupload = require('express-fileupload')
app.use(fileupload())

//routes
app.use('/', require('./Routers/indexRouters'))


//error handler
const ErrorHandler = require('./utils/ErrorHandler');
const { generatedErrors } = require('./middlewares/errors');
app.all("*", (req,res,next)=>{
    next(new ErrorHandler(`Requested ULR is Missing or Not Found ${req.url}`, 404));
})
app.use(generatedErrors)

app.listen(process.env.PORT , console.log(`running on port ${process.env.PORT}`));