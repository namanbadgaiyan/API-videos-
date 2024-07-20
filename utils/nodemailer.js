const nodemailer = require('nodemailer')
const ErrorHandler = require('./ErrorHandler')


exports.sendingMail = (req, res, next ,url) => {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user : process.env.MAIL_EMAIL,
            pass : process.env.MAIL_PASSWORD
        }
    })
    
    const MailOptions = {
        from: 'REST_API OF INTERNSHALLA',
        to: req.body.email,
        subject: "password reset link",
        // text: "Don't share this link to anyone",
        html: `<h1>Don't share this link to anyone</h1>
                <a href="${url}">click here</a>
        `
    }

    transport.sendMail(MailOptions, (err , info)=> {
        if(err){return next(new ErrorHandler(err, 500))};
        console.log(info);
        return res.status(200).json({
            message: 'mail sent successfully',
            url,
        })
    })
}