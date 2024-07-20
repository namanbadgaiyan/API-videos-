const { CatchErrorHandler } = require("../middlewares/CatchErrorHandler")
const studentModel = require('../models/studentModel')
const ErrorHandler = require("../utils/ErrorHandler")
const { v4 : uuidv4} = require('uuid')

exports.resume = CatchErrorHandler(async(req,res,next)=>{
    const {resume} = await studentModel.findById(req.id).exec()
    res.json({message: "Secure resume page", resume})
})

// ----------------------------education----------------------------------

exports.addEdu = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    student.resume.education.push({...req.body , id: uuidv4() })
    await student.save()
    res.json({message: "eduction added"})
})

exports.editEdu = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    const eduIndex = student.resume.education.findIndex(i => i.id === req.params.eduId)
    student.resume.education[eduIndex] = {...student.resume.education[eduIndex], ...req.body}
    await student.save()
    res.json({message: "eduction updated!"})
})

exports.deleteEdu = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    const filterEdu = student.resume.education.filter(i => i.id !== req.params.eduId)
    student.resume.education = filterEdu
    await student.save()
    res.json({message: "eduction delete!"})
})


// ----------------------------jobs----------------------------------

exports.addJob = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    student.resume.jobs.push({...req.body , id: uuidv4() })
    await student.save()
    res.json({message: "eduction added"})
})

exports.editJob = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    const jobIndex = student.resume.jobs.findIndex(i => i.id === req.params.jobId)
    student.resume.jobs[jobIndex] = {...student.resume.jobs[jobIndex], ...req.body}
    await student.save()
    res.json({message: "eduction updated!"})
})

exports.deleteJob = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    const filterEdu = student.resume.jobs.filter(i => i.id !== req.params.jobId)
    student.resume.jobs = filterEdu
    await student.save()
    res.json({message: "eduction delete!"})
})

// ----------------------------internships----------------------------------


exports.addintship = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    student.resume.internships.push({...req.body , id: uuidv4() })
    await student.save()
    res.json({message: "eduction added"})
})

exports.editintship = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    const intshipIndex = student.resume.internships.findIndex(i => i.id === req.params.intshipId)
    student.resume.internships[intshipIndex] = {...student.resume.internships[intshipIndex], ...req.body}
    await student.save()
    res.json({message: "eduction updated!"})
})

exports.deleteintship = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    const filterEdu = student.resume.internships.filter(i => i.id !== req.params.intshipId)
    student.resume.internships = filterEdu
    await student.save()
    res.json({message: "eduction delete!"})
})

// ----------------------------responsibilities----------------------------------

exports.addresp = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    student.resume.responsibilities.push({...req.body , id: uuidv4() })
    await student.save()
    res.json({message: "eduction added"})
})

exports.editresp = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    const respIndex = student.resume.responsibilities.findIndex(i => i.id === req.params.respId)
    student.resume.responsibilities[respIndex] = {...student.resume.responsibilities[respIndex], ...req.body}
    await student.save()
    res.json({message: "eduction updated!"})
})

exports.deleteresp = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    const filterEdu = student.resume.responsibilities.filter(i => i.id !== req.params.respId)
    student.resume.responsibilities = filterEdu
    await student.save()
    res.json({message: "eduction delete!"})
})

// ----------------------------courses----------------------------------

exports.addcours = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    student.resume.courses.push({...req.body , id: uuidv4() })
    await student.save()
    res.json({message: "eduction added"})
})

exports.editcours = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    const coursIndex = student.resume.courses.findIndex(i => i.id === req.params.coursId)
    student.resume.courses[coursIndex] = {...student.resume.courses[coursIndex], ...req.body}
    await student.save()
    res.json({message: "eduction updated!"})
})

exports.deletecours = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    const filterEdu = student.resume.courses.filter(i => i.id !== req.params.coursId)
    student.resume.courses = filterEdu
    await student.save()
    res.json({message: "eduction delete!"})
})


// ----------------------------projects----------------------------------

exports.addproj = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    student.resume.projects.push({...req.body , id: uuidv4() })
    await student.save()
    res.json({message: "eduction added"})
})

exports.editproj = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    const projIndex = student.resume.projects.findIndex(i => i.id === req.params.projId)
    student.resume.projects[projIndex] = {...student.resume.projects[projIndex], ...req.body}
    await student.save()
    res.json({message: "eduction updated!"})
})

exports.deleteproj = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    const filterEdu = student.resume.projects.filter(i => i.id !== req.params.projId)
    student.resume.projects = filterEdu
    await student.save()
    res.json({message: "eduction delete!"})
})


// ----------------------------skills----------------------------------

exports.addskills = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    student.resume.skills.push({...req.body , id: uuidv4() })
    await student.save()
    res.json({message: "eduction added"})
})

exports.editskills = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    const skillsIndex = student.resume.skills.findIndex(i => i.id === req.params.skillsId)
    student.resume.skills[skillsIndex] = {...student.resume.skills[skillsIndex], ...req.body}
    await student.save()
    res.json({message: "eduction updated!"})
})

exports.deleteskills = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    const filterEdu = student.resume.skills.filter(i => i.id !== req.params.skillsId)
    student.resume.skills = filterEdu
    await student.save()
    res.json({message: "eduction delete!"})
})


// ----------------------------accomplishments----------------------------------


exports.addachm = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    student.resume.accomplishments.push({...req.body , id: uuidv4() })
    await student.save()
    res.json({message: "eduction added"})
})

exports.editachm = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    const achmIndex = student.resume.accomplishments.findIndex(i => i.id === req.params.achmId)
    student.resume.accomplishments[achmIndex] = {...student.resume.accomplishments[achmIndex], ...req.body}
    await student.save()
    res.json({message: "eduction updated!"})
})

exports.deleteachm = CatchErrorHandler(async(req,res,next)=>{
    const student = await studentModel.findById(req.id).exec()
    const filterEdu = student.resume.accomplishments.filter(i => i.id !== req.params.achmId)
    student.resume.accomplishments = filterEdu
    await student.save()
    res.json({message: "eduction delete!"})
})