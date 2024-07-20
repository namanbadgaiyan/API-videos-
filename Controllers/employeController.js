const { CatchErrorHandler } = require("../middlewares/CatchErrorHandler")
const employeModel = require('../models/employeModel')
const jobModel = require('../models/jobModel')
const internshipModel = require("../models/internshipModel")
const ErrorHandler = require("../utils/ErrorHandler")
const { sendtoken } = require("../utils/SendToken")
const { sendingMail } = require("../utils/nodemailer")
const imagekit = require('../utils/imagekit').InitImageKit()
const path = require('path')

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

exports.employeComponent = CatchErrorHandler(async(req,res,next)=>{
    res.json({message: "Secure employe page"})
})

exports.currentuser =  CatchErrorHandler(async(req,res,next)=>{
    const employe = await employeModel.findById(req.id).exec();
    res.json({employe})
})

exports.employeSignup = CatchErrorHandler(async(req,res,next)=>{
    const NewemployeVarialbe = await new employeModel(req.body).save()
    sendtoken(NewemployeVarialbe, 201 , res)
})

exports.employeLogin = CatchErrorHandler(async(req,res,next)=>{
    const employe = await employeModel.findOne({email : req.body.email}).select('+password').exec();

    if(!employe){
        return next(
            new ErrorHandler('employe not found with this email', 404)
        )
    }
    
    const isMatch = await employe.comparepassword(req.body.password);

    if(!isMatch){
        return next(
            new ErrorHandler('incorrect password', 401)
        )
    }
    sendtoken(employe, 200 , res)
})

exports.employeLogout = CatchErrorHandler(async(req,res,next)=>{
    res.clearCookie("token");
    res.json({message: 'loged out successful'})
})

exports.employeSendMail = CatchErrorHandler(async(req, res, next)=>{
    const employe = await employeModel.findOne({email : req.body.email}).exec()

    if(!employe){
        return next(
            new ErrorHandler('employe not found with this email', 404)
        )
    }

    const url = `${req.protocol}://${req.get('host')}/employe/forget-password/${employe._id}`

    sendingMail(req, res, next, url)
    employe.resetPasswordLink = "1"
    employe.save()
})

exports.employeForgetPassword = CatchErrorHandler(async(req, res, next)=>{
    const employe = await employeModel.findById({_id : req.params.id}).exec()

    if(!employe){
        return next(
            new ErrorHandler('employe not found with this email', 404)
        )
    }

    if(employe.resetPasswordLink === "1"){
        employe.resetPasswordLink = "0"
        employe.password = req.body.password;
    }else{
        return next(
            new ErrorHandler('link expired , Please try again', 500)
        )
    }
    await employe.save()
    res.status(200).json({
        message: 'password changed'
    })
})

exports.employeResetPassword = CatchErrorHandler(async(req, res, next)=>{
    const employe = await employeModel.findById({_id : req.params.id}).exec()
    employe.password = req.body.password
    await employe.save()
    sendtoken(employe, 201, res)
})


exports.employeUpdate = CatchErrorHandler(async(req,res,next)=>{
    await employeModel.findByIdAndUpdate(req.params.id ,req.body).exec()
    res.status(200).json({
        success: true,
        message : 'updated successfully',
    })

})


exports.employeAvatar = CatchErrorHandler(async(req,res,next)=>{
    const employe = await employeModel.findById(req.params.id).exec()
    const file = req.files.organizationlogo
    const NewFileName = `uploads-${Date.now()}${path.extname(file.name)}`

    if(employe.organizationlogo.fileId !== ''){
        await imagekit.deleteFile(employe.organizationlogo.fileId)
    }

    const {fileId,url} = await imagekit.upload({
        file : file.data,
        fileName : NewFileName,
    })
    employe.organizationlogo = {fileId , url};
    await employe.save()
    
    res.status(200).json({
        success: true,
        message : 'profile updated successfully',
    })
})

exports.internshipcreate = CatchErrorHandler(async(req,res,next)=>{
    const employe = await employeModel.findById(req.id);
    const internship = new internshipModel(req.body)
    internship.employe = employe._id
    employe.internships.push(internship._id)
    await internship.save()
    await employe.save()
    res.status(200).json({
        success: true,
        internship,
    })
})

exports.internshipread = CatchErrorHandler(async(req,res,next)=>{
    const {internships} = await employeModel.findById(req.id).populate('internships').exec();
    res.status(200).json({
        success: true,
        internships,
    })
})


exports.internshipreadsingle = CatchErrorHandler(async(req,res,next)=>{
    const internship = await internshipModel.findById(req.params.id).exec()
    res.status(200).json({
        success: true,
        internship,
    })
})

// --------------------------job--------------------

exports.jobcreate = CatchErrorHandler(async(req,res,next)=>{
    const employe = await employeModel.findById(req.id);
    const job = new jobModel(req.body)
    job.employe = employe._id
    employe.jobs.push(job._id)
    await job.save()
    await employe.save()
    res.status(200).json({
        success: true,
        job,
    })
})

exports.jobread = CatchErrorHandler(async(req,res,next)=>{
    const {jobs} = await employeModel.findById(req.id).populate('jobs').exec();
    res.status(200).json({
        success: true,
        jobs,
    })
})


exports.jobreadsingle = CatchErrorHandler(async(req,res,next)=>{
    const job = await jobModel.findById(req.params.id).exec()
    res.status(200).json({
        success: true,
        job,
    })
})
