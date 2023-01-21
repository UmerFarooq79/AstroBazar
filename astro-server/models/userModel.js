const mongoose = require ('mongoose');


// UserSchema Model for Database
const UserSchema = new mongoose.Schema(
    {
        username: {type: String, required: true, unique: true},
        email:{
            type: String,
            trim: true,
            unique: 'Email already exists',
            match: [/.+\@.+\..+/, 'Please fill a valid email address'],
            required: 'Email is required'},
        password: {type: String, required: true}
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("User", UserSchema) ;