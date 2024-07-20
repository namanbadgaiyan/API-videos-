const express = require('express');
const { employeSignup, employeLogin, employeLogout, currentuser, employeSendMail ,employeForgetPassword,employeAvatar, employeResetPassword,employeUpdate, employeComponent} = require('../controllers/employeController');
const { isAuthenticated } = require('../middlewares/auth');
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


module.exports = router;