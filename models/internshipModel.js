const mongoose = require('mongoose')

const internshipModel = new mongoose.Schema({
    employe:{type:mongoose.Schema.Types.ObjectId, ref:"employe"},
    student:[{type:mongoose.Schema.Types.ObjectId, ref:"student"}],

    profile:{
        type: String,
        // required: [true,'profile is Required'],
    },
    skills:{
        type: String,
        // required: [true,'skills is Required'],
    },
    internship_type:{
        type: String,
        enum: ["In office", "Remote"]
        // required: [true,'internship_type is Required'],
    },
    openings:{
        type: Number,
        // required: [true,'openings is Required'],
    },
    from:{
        type: String,
    },
    to:{
        type: String,
    },
    duration:{
        type: String,
    },
    responsibility:{
        type: String,
    },
    stipend:{
        status:{
            type: String,
            enum: ["Fixed", "Negotiable", "Performance based","Unpaid"],
        },
        amount: Number,
    },
    perks:{
        type: String,
    },
    assessments: {
        type: String,
    }

},{timestamps: true})


const internship = mongoose.model("internships", internshipModel);
module.exports = internship;