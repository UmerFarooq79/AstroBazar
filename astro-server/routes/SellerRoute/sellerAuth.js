const router = require("express").Router();
const CryptoJs = require("crypto-js")
const jwt = require("jsonwebtoken");
const Seller = require('../../models/SellerModel/sellerModel');

// auth

// Register
router.post("/register", async(req,res)=>{
    const newSeller = new Seller({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        username: req.body.username,
        email: req.body.email,
        password: CryptoJs.AES.encrypt(
            req.body.password, process.env.PASS_SEC
        ).toString(),
        CNIC: req.body.CNIC,
        phone: req.body.phone,
        city: req.body.city,
        address: req.body.address,
        img: req.body.img

    });

    try{
        const savedSeller = await newSeller.save();
        res.status(201).json(savedSeller);
    }
    catch(err){
        res.status(500).json(err)
    }
});


router.post("/login", async(req,res)=>{
    try{
        const seller = await Seller.findOne(
            {
            username: req.body.username
            });


            const hashedPassword = CryptoJs.AES.decrypt(
                seller.password,
                process.env.PASS_SEC
            );    

            const decryptedPassword = hashedPassword.toString(CryptoJs.enc.Utf8);
            console.log(decryptedPassword);

            const accessToken = jwt.sign({
                id: seller.id
            }, process.env.seller_jwt_key, 
               {expiresIn: "2d"}
            );
            
            const { password, ...others } = seller._doc;

            if (!seller) {
                res.json("User not found");
            }
            if (decryptedPassword !== req.body.password) {
                res.status(401).json("Wrong Username or Password")
            }else {
                res.status(200).json({ ...others, accessToken, });
            }
    }
    catch(err){
        res.status(500).json(err)
    }
})




module.exports= router;