const express = require('express');
const app = express();
const dotenv = require('dotenv');
const userRouter = require('./routes/userRoute');
const body_parser = require("body-parser");
// const productRouter = require('./routes/productRoute');

dotenv.config({path: './config.env'});

require('./dbconfig');

app.use(body_parser.urlencoded({extended:true}))
app.use('/user',userRouter);

app.listen(process.env.PORT,()=>{
    console.log('Server is working.')
})