const router = require("express").Router();
const User = require("../models/userModel");
const errorHandler = require("../routes/dbErrorHandler/dbErrorhandler")
const CryptoJs = require('crypto-js')
const jwt = require("jsonwebtoken");


// Register
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJs.AES.encrypt(
            req.body.password, process.env.PASS_SEC
        ).toString(),

    });
    
        const savedUser = await newUser.save();
       if(savedUser){
        res.status(201).json(201,savedUser);
       }
     else{
        return res.status(400).json("something went wrong")
     }
    
});

// Login

router.post("/login", async (req, res) => {

    try {
        // Get User from DB
        const user = await User.findOne(
            {
                username: req.body.username
            });

        // Condition to match username


        const hashedPassword = CryptoJs.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );

        const decryptedPassword = hashedPassword.toString(CryptoJs.enc.Utf8);

        const accessToken = jwt.sign({
            id: user.id,
            isSeller: user.isSeller
        }, process.env.jwt_key,
            { expiresIn: "5d" }
        )

        const { password, ...others } = user._doc;

        if (!user) {
            res.json("User not found");
        }
        if (decryptedPassword !== req.body.password) {
            res.status(401).json("Wrong password")
        } else {
            res.status(200).json({ ...others, accessToken });
        }



    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }


})




module.exports = router;