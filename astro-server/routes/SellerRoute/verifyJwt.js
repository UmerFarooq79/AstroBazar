const jwt = require("jsonwebtoken");


const verifySellerJwt = (req,res,next)=>{
    const authHeader = req.headers.token;

    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.seller_jwt_key, (err,seller)=>{
            if(err) res.status(403).json("Invalid request");
            req.seller = seller; 
            next();
        });

    }else{
        return res.status(401).json("You are not authenticated to performt this action!");
    }
};


module.exports = verifySellerJwt;