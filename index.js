const express =require('express')
const bodyParser =require('body-parser')
const cors =require('cors')
const env = require("dotenv").config()
const mongoose =require('mongoose')
const noteRouter = require('./routes/noteRoutes.js')
mongoose.set('strictQuery', false)


const app =express();

//Input file types...
app.use(express.json())
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

//Routes
app.use("/api/v1/notes",noteRouter )

//Defie PORT and Database
const PORT = process.env.PORT || 5000;
const CONNECTION_URL = process.env.MONGO_URL || "mongodb://localhost:27017"



//Connect to the PORT and Database
app.listen(PORT,()=>console.log(`Server running on Port :${PORT}`))
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>console.log('Database connected Succesfully'))
.catch((error)=> console.log(error.message));