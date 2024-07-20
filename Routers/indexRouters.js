const express = require('express');
const { homeComponent, StudentSignup, StudentLogin, StudentLogout, currentuser, StudentSendMail ,studentForgetPassword,studentAvatar, studentResetPassword,studentUpdate,studentinternship,studentjob} = require('../Controllers/homeController');
const { isAuthenticated } = require('../middlewares/auth');
const router = express.Router();

// GET /
router.get('/', homeComponent)

//POST /student
router.post('/student',isAuthenticated, currentuser)

//POST /student/register
router.post("/student/register", StudentSignup)


//POST /student/login
router.post("/student/login", StudentLogin)


//GET /student/logout
router.get("/student/logout",isAuthenticated, StudentLogout)


//POST /student/send-main
router.post("/student/send-mail", StudentSendMail)

//GET /forget-password/student
router.get('/student/forget-password/:id', studentForgetPassword)

//POST /reset-password/student_id
router.post('/student/reset-password/:id',isAuthenticated, studentResetPassword)


//POST /update/student_id
router.post('/student/update/:id',isAuthenticated, studentUpdate)


//POST /avatar/student_id
router.post('/student/avatar/:id',isAuthenticated, studentAvatar)



//POST /apply/internship/:internid
router.post('/student/apply/internship/:internid',isAuthenticated, studentinternship)


//POST /apply/job/:jobid
router.post('/student/apply/job/:jobid',isAuthenticated, studentjob)

module.exports = router;