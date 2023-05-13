const express = require("express");

const app = express();

const port = 8000;

const index = (req, res) => {
    return res.send("index page");
};

const admin = (req, res) => {
    return res.send("admin page");
};
const isAdmin = (req, res, next) => {
    console.log("legitimate admin");
    next();
};
const isloggedin = (req, res, next) => {
    console.log("admin loggedin");
    next();
};

app.get("/", index);
app.get("/admin", isloggedin, isAdmin, admin);

app.listen(port, () => {
    console.log("Server is on");
});