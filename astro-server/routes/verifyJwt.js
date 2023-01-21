const jwt = require("jsonwebtoken");

const VerifyJwt = (req,res,next)=>{
    const authHeader = req.headers.token;

    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.jwt_key, (err,user)=>{
            if(err) res.status(403).json("Invalid request");
            req.user = user; 
            next();
        });

    }else{
        return res.status(401).json("You are not authenticated to performt this action!");
    }
}

const VerifyJwtandAuthorization = (req,res,next)=>{
    VerifyJwt(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isSeller){
         next();
        }
        else{
            res.status(403).json("You are not authorized to perform this action")
        }
    })
}

const verifyTokenAndAdmin = (req, res, next) => {
    VerifyJwt(req, res, () => {
      if (req.user.isSeller) {
        next();
      } else {
        res.status(403).json("You are unauthorized to perform this action!");
      }
    });
  };

module.exports = { VerifyJwt, VerifyJwtandAuthorization, verifyTokenAndAdmin };