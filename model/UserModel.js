const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: Number,       //datatypes
        required: true,  //to ensure not null
        unique: true,    //unique values for all data
    },
    first_name: {
        type: String,       //datatypes
        required: [true,'First Name is required'],  //to ensure not null
    },
    last_name: {
        type: String,       //datatypes
        required: true,  //to ensure not null
    },
    address: {
        type: String,       //datatypes
        required: true,  //to ensure not null
    },
    phone: {
        type: String,       //datatypes
    },
    password: {
        type: String,       //datatypes
        required: true,  //to ensure not null
    },
    date_of_birth: {
        type: Date,       //datatypes
     //   required: true,  //to ensure not null
    },
    email: {
        type: String,       //datatypes
    },
    rating: {
        type: Number,
        default: 8
    }
})

// tarika 1
// exports.User = mongoose.model('User', userSchema);

// tarika 2
const User = mongoose.model('User', userSchema);

module.exports = User;