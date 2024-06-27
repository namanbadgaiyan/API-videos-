require('dotenv').config({path: "./.env"})
const express = require('express');
const app = express();

// for logger
const logger = require('morgan')
app.use(logger("tiny"))

app.get('/', require('./Routers/indexRouters'))

app.listen(process.env.PORT , console.log(`running on port ${process.env.PORT}`));