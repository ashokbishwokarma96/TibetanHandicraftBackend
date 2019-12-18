const User = require('../model/UserModel');

exports.register = (req,res) =>{
    console.log(`${req.body.first_name}`)
    try {
        const user = new User({name: req.body.first_name});
        user.save()
        
        console.log(user)
        // const newUser = User.User.create({
            //     id: req.body.id,
            //     name: req.body.name,
            // }
            // );
            res.status(201).json({
                status: "Success",
                user
            })
        }
        catch(err){
            res.status(400).json({
                status: "Failure",
                message: `${err}`
            })
        }

}

exports.imageUpload = (req,res,next) =>{
    next()
}

exports.validation = (req,res,next) =>{
    next();
}