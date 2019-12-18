const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'});

mongoose.connect(`mongodb://${process.env.dbHost}/${process.env.dbName}`,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log(`DB CONNECTED ${process.env.dbHost}/${process.env.dbName}`)
}).catch((err)=>{console.log(`DB FAILURE ${err}`)})