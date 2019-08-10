var express = require('express');
var index = require('')
var user = require('./user');
const apiRouter = express.Router()
var app = express();

app.use("/",apiRouter);

app.use('/user',user)