const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const employeModel = new mongoose.Schema({
    firstname:{
        type: String,
        required: [true,'Firstname is Required'],
        minlength: [2, 'Firstname must be at least 2 characters long'],
    },
    lastname:{
        type: String,
        required: [true,'Lastname is Required'],
        minlength: [2, 'Lastname must be at least 2 characters long'],
    },
    email: {
        type: String,
        required: [true,'Email is Required'],
        unique: true,
        match: [/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/, 'Please fill a valid email address'],
        //match is used to validate what user is typing and we can set up rule by using regex
    },
    password: {
        type: String,
        required: [true, 'Password is Required'],
        minLength: [6, 'Password must be at least 6 characters long'],
        maxLength: [15, 'Password must be at least 15 characters long'],
        select: false,
        // match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/,'Please fill a valid password'],
    },
    resetPasswordLink: {
        type: String,
        default: "0",
    },
    organizationname: String,
    organizationlogo: {
        type: Object,
        default: {
            fileId : '',
            url: "https://plus.unsplash.com/premium_photo-1687284884918-e230d35bb15a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVmYXVsdCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
        },
    },
    internships : [{type: mongoose.Schema.Types.ObjectId , ref:'internship'}],
    jobs : [{type: mongoose.Schema.Types.ObjectId , ref:'job'}],
},{timestamps: true})

employeModel.pre("save", function(){
    if(!this.isModified("password")){
        return; // if password not modified, return the function
    }
    let salt = bcrypt.genSaltSync(10)
    this.password = bcrypt.hashSync(this.password, salt)
})

employeModel.methods.comparepassword = function(password){
    return bcrypt.compareSync(password, this.password)  // if password is correct then it will return true otherwise false.
}
employeModel.methods.getjwttoken = function(){
    return  jwt.sign({id: this._id}, process.env.JWT_SECRET,{expiresIn : process.env.JWT_TOKEN})
    //jwt ke andar ka jo sign function hai vo 3 chessen leta hai (ID|SECRET|EXPIRE-TIME)
}

const employe = mongoose.model("employe", employeModel);
module.exports = employe;