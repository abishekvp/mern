var express = require("express");
var router = express.Router()
const {check, validationResult} = require("express-validator")
const {signout, signup, signin} = require("../controllers/auth")

router.post("/signup",[
    check("name", "name atleast 3 chr").isLength({min:3}),
    check("email", "email required").isEmail(),
    check("password", "password atleast 3 char").isLength({min:3}),
], signup);  

router.post("/signin",[
    check("email", "required").isEmail(),
    check("password", " 3 char").isLength({min:3}),
], signin);  


router.get("/signout", signout);

module.exports = router;
