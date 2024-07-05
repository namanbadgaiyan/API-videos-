const mongoose = require('mongoose')

exports.Connectdatabase = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DATABASE is Connected");
    } catch (error) {
        console.log(error.message);
    }
}