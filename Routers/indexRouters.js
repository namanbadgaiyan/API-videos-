const express = require('express');
const { homeComponent } = require('../Controllers/homeController');
const router = express.Router();

router.get('/', homeComponent)

module.exports = router;