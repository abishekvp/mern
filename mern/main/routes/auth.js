var express = require("express");
var router = express.Router()
const {check, validationResult} = require("express-validator")
const {signout, signup} = require("../controllers/auth")

router.post("/signup",[
    check("name", "atleast 3 chr").isLength({min:3}),
    check("email", "required").isEmail(),
    check("password", "atleast 3 char").isLength({min:3}),
], signup);  
router.get("/signout", signout);

module.exports = router;
