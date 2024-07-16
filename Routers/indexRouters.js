const express = require('express');
const { homeComponent, StudentSignup, StudentLogin, StudentLogout, currentuser} = require('../Controllers/homeController');
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


module.exports = router;