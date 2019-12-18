const express = require('express')
const router = express.Router();

const users = require('../controller/UserController')

router.route('/register')
.get((req,res)=>{
    res.send("ASHO DAI")
})
.post(users.register,(req,res)=>{
    res.write('asd')
});

module.exports = router;