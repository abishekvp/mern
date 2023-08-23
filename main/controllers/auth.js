
const { validationResult } = require("express-validator");
const User = require("../models/user");
const { use } = require("../routes/auth");
var jwt = require('jsonwebtoken');
var expressjwt = require('express-jwt');


exports.signup = (req, res) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg
        });
    }

    const user = new User(req.body);
    user.save((err, user) => { 
        if(err){
            return res.status(400).json({
                err:"Not able to save user in DB"
            });
        }
        res.json({
            username: user.username,
            email: user.email,
            password: user.password
        });
    });
};

exports.signin = (req, res) => {
    const {email, password} = req.body;

    if(!errors.isEmpty()){
        return res.status(422).json({
            error: errors.array()[0].msg
        });
    }

    User.findOne({email},(err, user) => {
        if(err){
            res.status(400).json({
                error:"User doesn't exist"
            })
        }

        if(!user.authenticate(password)){
            res.status(401).json({
                error: "Password do not match"
            })
        }

        const token = jwt.sign({_id:user._id},process.env.SECRET)
        res.cookie("token",token, {expire: new Date() + 9999});

        const {_id, name, email, role} = user;
        return res.json({token, user:{_id, name, email, role}});
    });
};

exports.signout = (req, res) => {
    res.json({
        message: "User signout"
    });
};
   