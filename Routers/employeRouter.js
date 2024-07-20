const express = require('express');
const { employeSignup, employeLogin, employeLogout, currentuser, employeSendMail ,employeForgetPassword,employeAvatar, employeResetPassword,employeUpdate, employeComponent ,internshipcreate,internshipread,internshipreadsingle,jobcreate,jobread,jobreadsingle} = require('../controllers/employeController');
const { isAuthenticated } = require('../middlewares/auth');
const internship = require('../models/internshipModel');
const router = express.Router();

// GET /
router.get('/', employeComponent)

//POST /current
router.post('/current',isAuthenticated, currentuser)

//POST /register
router.post("/register", employeSignup)


//POST /login
router.post("/login", employeLogin)


//GET /logout
router.get("/logout",isAuthenticated, employeLogout)


//POST /send-main
router.post("/send-mail", employeSendMail)

//GET /forget-password/employe
router.get('/forget-password/:id', employeForgetPassword)

//POST /reset-password/employe_id
router.post('/reset-password/:id',isAuthenticated, employeResetPassword)


//POST /update/employe_id
router.post('/update/:id',isAuthenticated, employeUpdate)


//POST /avatar/employe_id
router.post('/avatar/:id',isAuthenticated, employeAvatar)


// ---------------------------internship-----------------------

//GET /internship/
router.get('/internship/create',isAuthenticated, internshipcreate)

router.post('/internship/read',isAuthenticated, internshipread)

router.post('/internship/read/:id', isAuthenticated,internshipreadsingle)



// ---------------------------job-----------------------

//GET /job/
router.get('/job/create',isAuthenticated, jobcreate)

router.post('/job/read',isAuthenticated, jobread)

router.post('/job/read/:id', isAuthenticated,jobreadsingle)


module.exports = router;