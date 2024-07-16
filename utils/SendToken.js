const { Cookie } = require("express-session");

exports.sendtoken = (student, statusCode, res) => {
    const token = student.getjwttoken();

    const options = {
        exipres: new Date(
            Date.now() + process.env.COOKIE_EXPIRATION_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        // secure: true,
    }
    res.status(statusCode).cookie("token", token, options).json({success: true, id: student._id, token});
}