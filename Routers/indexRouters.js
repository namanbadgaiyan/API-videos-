const express = require('express');
const { homeComponent } = require('../Components/homeComponent');
const router = express.Router();

router.get('/', homeComponent)

module.exports = router;