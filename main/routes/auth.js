var express = require("express");
var router = express.Router()
const {check, validationResult} = require("express-validator")
const {signup, signin, signout, isSignedIn} = require("../controllers/auth")

router.post("/signup",[
    check("username","atleast 3 letter type pandra puluthi").isLength({min:3}),
    check("email","mairandi idhu email illa da punda").isEmail(),
    check("contact","idhu phone no ehy illayeaa").isMobilePhone(),
    check("password","weak password ra mairu").isStrongPassword(),
], signup);

router.post("/signin",[
    check("email","atleast 3 letter type pandra puluthi").isEmail(),
    check("password","password olunga podura mairu").isLength({min:6}),
], signin);

router.post("/signout", signout);


module.exports = router;
