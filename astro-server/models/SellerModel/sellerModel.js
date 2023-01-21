const mongoose = require("mongoose"), Schema = mongoose.Schema;

const sellerSchema = Schema(
    {
        username : {type: String, trim: true, required: true, unique: true},
        email: {
            type: String,
            trim: true,
            unique: 'Email already exists',
            match: [/.+\@.+\..+/, 'Please fill a valid email address'],
            required: 'Email is required'
          },
        password: {type: String, required: true},
        CNIC:{type: String, unique: true},
        phone:{type: String, unique: true},
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("Seller", sellerSchema);