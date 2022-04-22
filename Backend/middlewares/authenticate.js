const jwt = require("jsonwebtoken");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");

const userAuth = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try{
            token = req.headers.authorization.split(" ")[1];
            const decode = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decode.id).select('-password');
            next();
        }
        catch(err){
            res.status(401).send({error: "Please authenticate."});
        }
    }
    if(!token){
        res.status(401).send({error: "Please authenticate."});
    }
});

module.exports = { userAuth };