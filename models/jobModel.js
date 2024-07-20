const mongoose = require('mongoose')

const jobModel = new mongoose.Schema({
    employe:{type:mongoose.Schema.Types.ObjectId, ref:"employe"},
    student:[{type:mongoose.Schema.Types.ObjectId, ref:"student"}],
    title:{
        type: String,
        // required: [true,'profile is Required'],
    },
    skills:{
        type: String,
        // required: [true,'skills is Required'],
    },
    job_type:{
        type: String,
        enum: ["In office", "Remote"]
        // required: [true,'internship_type is Required'],
    },
    openings:{
        type: Number,
        // required: [true,'openings is Required'],
    },
    description:{
        type: String,
    },
    preferences:{
        type: String,
    },
    responsibility:{
        type: String,
    },
    salary: {
        type: Number,
    },
    perks:{
        type: String,
    },
    assessments: {
        type: String,
    }

},{timestamps: true})


const job = mongoose.model("jobs", jobModel);
module.exports = job;