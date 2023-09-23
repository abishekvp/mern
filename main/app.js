require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

//DB Connection
mongoose.connect(process.env.DATABASE,{
  useNewUrlsParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true
}).then(()=>{
  console.log("connected");
}).catch(
  console.log("Error on DB Connecton")
).catch(console.log("DB got oops"));

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(cors());

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");


//PORTS
const port = process.env.PORT;

//ROUTES
app.use("/api",authRoutes);
app.use("/api",userRoutes);

//Server Starts
app.listen(port, ()=> {
    console.log(`app is running ${port}`);
});



