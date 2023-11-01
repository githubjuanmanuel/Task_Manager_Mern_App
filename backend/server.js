const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/connectDB')
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoute')
const cors = require('cors')


//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use("/api/tasks",taskRoutes);


//Routes
app.get("/", (req,res) => {
    res.send("Home page")
})


const PORT = process.env.PORT || 5000

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
    app.listen(PORT,() => {
        console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((err)=>{console.log(err)})