const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes =require("./routes/userRoutes")
require("dotenv").config();

const app=express();

app.use(cors());
app.use(express.json());

app.use("/api/auth",userRoutes)

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Db connected successfully");
})
.catch((error) => {
    console.error("Db connection error:", error);
});

const server = app.listen(process.env.PORT,()=>{
    console.log(`server started on Port ${process.env.PORT}`)
})
