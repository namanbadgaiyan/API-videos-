const { json } = require("express")
const { CatchErrorHandler } = require("../middlewares/CatchErrorHandler")
const studentModel = require('../models/studentModel')
const ErrorHandler = require("../utils/ErrorHandler")
const { sendtoken } = require("../utils/SendToken")

//this is only use for syncronous code

// exports.homeComponent = (req,res,next)=>{
//     res.json({message: "Welcome to the component"})
// }

// for async code we use try catch

// exports.homeComponentAsync = async (req,res,next)=>{
//     try {
//         res.json({message: "Welcome to the component"})
//     } catch (error) {
//         res.json(error)
//     }
// }

// because of very much routes and use of try catch multiple times we use another middleware to prevent writing the code multiple times

exports.homeComponent = CatchErrorHandler(async(req,res,next)=>{
    res.json({message: "Secure HOMEpage"})
})

exports.currentuser =  CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec();
    res.json({student})
})

exports.StudentSignup = CatchErrorHandler(async(req,res,next)=>{
    const NewStudentVarialbe = await new studentModel(req.body).save()
    sendtoken(NewStudentVarialbe, 201 , res)
})

exports.StudentLogin = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findOne({email : req.body.email}).select('+password').exec();

    if(!student){
        return next(
            new ErrorHandler('student not found with this email', 404)
        )
    }
    
    const isMatch = await student.comparepassword(req.body.password);

    if(!isMatch){
        return next(
            new ErrorHandler('incorrect password', 401)
        )
    }
    sendtoken(student, 200 , res)
})

exports.StudentLogout = CatchErrorHandler(async(req,res,next)=>{
    res.clearCookie("token");
    res.json({message: 'loged out successful'})
})