const express = require('express');
const { resume ,addEdu ,deleteEdu ,addJob,editJob,deleteJob,addintship,editintship,deleteintship} = require('../Controllers/resumeController');
const { isAuthenticated } = require('../middlewares/auth');
const { editEdu, addresp, editresp, deleteresp, addcours, editcours, deletecours, addproj, editproj, deleteproj, addskills, editskills, deleteskills, addachm, editachm, deleteachm } = require('../controllers/resumeController');
const router = express.Router();

// GET /
router.get('/', isAuthenticated, resume)

// ----------------------------education----------------------------------
//POST / set-edu
router.post('/set-edu', isAuthenticated, addEdu)


//POST / edit-edu
router.post('/edit-edu/:eduId', isAuthenticated, editEdu)


//POST / delete-edu
router.post('/delete-edu/:eduId', isAuthenticated, deleteEdu)

// ----------------------------jobs----------------------------------
//POST / set-jobs
router.post('/set-jobs', isAuthenticated, addJob)


//POST / edit-jobs
router.post('/edit-jobs/:jobId', isAuthenticated, editJob)


//POST / delete-jobs
router.post('/delete-jobs/:jobId', isAuthenticated, deleteJob)

// ----------------------------internships----------------------------------
//POST / set-intship
router.post('/set-intship', isAuthenticated, addintship)


//POST / edit-intship
router.post('/edit-intship/:intshipId', isAuthenticated, editintship)


//POST / delete-intship
router.post('/delete-intship/:intshipId', isAuthenticated, deleteintship)

// ----------------------------responsibilities----------------------------------

//POST / set-resp
router.post('/set-resp', isAuthenticated, addresp)


//POST / edit-resp
router.post('/edit-resp/:respId', isAuthenticated, editresp)


//POST / delete-resp
router.post('/delete-resp/:respId', isAuthenticated, deleteresp)

// ----------------------------courses----------------------------------

//POST / set-cours
router.post('/set-cours', isAuthenticated, addcours)


//POST / edit-cours
router.post('/edit-cours/:coursId', isAuthenticated, editcours)


//POST / delete-cours
router.post('/delete-cours/:coursId', isAuthenticated, deletecours)

// ----------------------------projects----------------------------------

//POST / set-proj
router.post('/set-proj', isAuthenticated, addproj)


//POST / edit-proj
router.post('/edit-proj/:projId', isAuthenticated, editproj)


//POST / delete-proj
router.post('/delete-proj/:projId', isAuthenticated, deleteproj)

// ----------------------------skills----------------------------------

//POST / set-skills
router.post('/set-skills', isAuthenticated, addskills)


//POST / edit-skills
router.post('/edit-skills/:skillsId', isAuthenticated, editskills)


//POST / delete-skills
router.post('/delete-skills/:skillsId', isAuthenticated, deleteskills)

// ----------------------------accomplishments----------------------------------

//POST / set-achm
router.post('/set-achm', isAuthenticated, addachm)


//POST / edit-achm
router.post('/edit-achm/:achmId', isAuthenticated, editachm)


//POST / delete-achm
router.post('/delete-achm/:achmId', isAuthenticated, deleteachm)


module.exports = router;