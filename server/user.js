var express  = require('express');
var router = express.Router();
var User = require('../src/db-data/user.json')

router.get('/',(req,res,next)=>{
    console.log("adc")
    res.send('respond with a resource')
});

router.get('/user/test',(req,res,next)=>{
    console.log("test")
    res.send("test")
});

router.post('/user/login',(req,res,next)=>{
    console.log("login")
    var param = {
        username:req.body.username,
        userpassword:req.body.userpassword
    }
})

module.exports = router