require("dotenv").config();

const mongoose = require('mongoose');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth");

mongoose.connect(process.env.DATABASE,{
    useNewUrlsParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("DB Connected")
}).catch(
    console.log("Error on DB Connectonx")
)   .catch(console.log("DB got oops"));

//Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//routes
app.use("/api",authRoutes);

//port
const port = process.env.PORT || 8000;

//Starting a server
app.listen(port, ()=> {
    console.log(`app is running ${port}`);
});
