// require("dotenv").config();

// const bodyParser = require("body-parser");
// const express = require("express");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");

// const mongoose = require("mongoose");
// const app = express();

// app.use(bodyParser.json());
// app.use(cookieParser());
// app.use(express.json());
// app.use(cors());

// const port = process.env.PORT || 8000;

// const authRoutes = require("./routes/auth");

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mern_user";

// mongoose.connect(process.env.DATABASE,{
//     useNewUrlsParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true
// }).then(()=>{
//     console.log("connected");
// }).catch(
//     console.log("Error on DB Connecton")
// ).catch(console.log("DB got oops"));


// app.use("/api",authRoutes);

// app.listen(process.env.PORT, ()=> {
//     console.log(`app is running ${port}`);
// });

// app.get("/profile", (req, res) => {
//   res.json({ message: {name:"Gayathripriya A",email:"psgayathripriya@gmail.com",contact:"+91 63808 50481",location:"Thiruvannamalai"} });
// });

// app.get("/signup", (req,res) => {
//     res.json({message:"this is signup da mairu"});
// });

// app.get("/signin", (req,res) => {
//     res.json({message:"this is signin da mairu"});
// });

// app.get("/signout", (req,res) => {
//     res.json({message:"this is signout da mairu"});
// });

const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
 
const app = express();
 
app.use(cors());
// parse application/json
app.use(bodyParser.json());
  
//create database connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mern_user'
});
 
//connect to database
conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected...');
});
 
 
//add new user
app.post('/signup',(req, res) => {
    let data = {name: req.body.name, email: req.body.email, password:req.body.password};
    let sql = "INSERT INTO users SET ???";
    let query = conn.query(sql, data,(err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
});
 
app.listen(3000, () => {
    console.log("Server running successfully on 3000");
});