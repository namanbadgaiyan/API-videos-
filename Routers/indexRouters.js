const express = require('express');
const { homeComponent, StudentSignup, StudentLogin, StudentLogout} = require('../Controllers/homeController');
const router = express.Router();

// GET /
router.get('/', homeComponent)

//POST /student/register
router.post("/student/register", StudentSignup)


//POST /student/login
router.post("/student/login", StudentLogin)


//GET /student/logout
router.get("/student/logout", StudentLogout)


module.exports = router;